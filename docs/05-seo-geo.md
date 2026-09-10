# 05. SEO, dados estruturados e GEO (estado atual)

## Meta tags por página

O shell HTML tem apenas `viewport`, `theme-color: #1E293B` e a `description` padrão. Title, description, canonical e OG são injetados por JS (helmet) e só existem após renderização.

Cobertura real (lida nos chunks):

| Página | canonical | og:title/description/url | og:image | twitter:card |
|---|---|---|---|---|
| `/` | sim | não | não | não |
| `/multas`, `/multas/:slug`, `/faq` | sim | não | não | não |
| `/ranking-multas` | sim | sim | não | não |
| `/blog` | sim | sim | foto do post em destaque ou `logomultas.webp` (192×192) | summary_large_image |
| `/blog/:slug` | sim | sim (type article) | imagem assinada (expira em 5 min) | summary_large_image + title/description/image |
| `/sobre`, landings B2B, legais, `/define-violation` | não | não | não | não |

Nenhuma página tem imagem OG 1200×630 própria. Compartilhar a home ou um guia de multa no WhatsApp produz preview sem imagem e, para geradores que não executam JS, com título genérico.

| Página | Title | Description |
|---|---|---|
| `/` | Recurso de Multa Online com IA \| Smart Multas | Cancele sua multa de trânsito em minutos com a Smart Multas. Petição com IA, opção de documentos ou protocolo com advogado. Pagamento 100% seguro via Mercado Pago (PIX e Cartão). |
| `/multas` | Guia Completo de Recursos de Multas de Trânsito (234 Infrações CTB) \| Smart Multas | (própria) |
| `/multas/:slug` | Recurso de Multa por <nome curto> (Cód. N) \| Smart Multas | "Recorra da multa de … (Art. …). Petição jurídica pronta por R$ 39,90 gerada por IA. Economize R$ X e proteja seus N pontos na CNH." |
| `/ranking-multas` | Ranking Nacional de Multas de Trânsito: Marcas e Carros Mais Multados \| Smart Multas | Confira o ranking anônimo… |
| `/blog` | Blog Smart Multas \| Guia Definitivo de Trânsito, Recursos e Legislação do CTB | Artigos práticos e atualizados… |
| `/blog/:slug` | <título> \| Blog Smart Multas | resumo do post |
| `/faq` | Perguntas Frequentes e Informações de Pagamento \| Smart Multas | Tire todas as suas dúvidas sobre preços (R$ 39,90, R$ 69,90 …) |
| `/sobre`, `/despachantes`, `/advogados`, `/associacoes`, `/api-b2b`, `/define-violation`, `/privacy-policy`, `/terms-of-use` | **Smart Multas** | description padrão do shell: "Smart Multas - Recurso de Multa de Trânsito Online com Inteligência Artificial…" |

## JSON-LD por página

| Página | Tipos | Observação |
|---|---|---|
| `/` | `WebApplication` (name, url, applicationCategory LegalService, description) | Sem Organization, sem FAQPage apesar de haver 6 FAQs |
| `/multas/:slug` | `Product` com `offers.price: "19.90"` | Preço errado (real R$ 39,90). Sem FAQPage apesar de 2 FAQs |
| `/ranking-multas` | `BreadcrumbList` + `Dataset` + `FAQPage` (3–4 perguntas) | Melhor página em schema |
| `/blog/:slug` | `BlogPosting` (author Organization, publisher com logo, image assinada que expira em 5 min) | image quebra após expirar |
| `/faq` | `FAQPage` com 2 perguntas | Página tem 15 perguntas |
| demais | nenhum | |

## Headings

- Home: H1 "Cancele sua multa em minutos." (sem a marca); H2s de marketing; H5/H6 usados como rótulos de UI (logo, hero sub, footer). FAQ duplica cada H3 (pergunta aparece duas vezes na árvore).
- Catálogo: H1 correto; cada card usa H3 (24 por página).
- Página de multa: H1 "Recurso para Multa de …"; H2 por seção; H3 nas teses.

## Descoberta

- `robots.txt` OK (permite tudo exceto `/admin/`), sem regras específicas para GPTBot/ClaudeBot/PerplexityBot (herdam `Allow: /`).
- `sitemap.xml`: 26 URLs, sem `lastmod`; faltam 220 páginas de multa, 9 posts, `/sobre`, landings B2B e legais.
- `llms.txt` presente, mas com preços e plano anual desatualizados e sem link para ranking, advogados, associações e API.

## Renderização

- HTML bruto: 1.736 bytes, `<div id="root">` vazio, `<noscript>Precisa habilitar o JavaScript para usar esse sistema.</noscript>`.
- Google renderiza JS; a maioria dos crawlers de IA (GPTBot, ClaudeBot, PerplexityBot) e os geradores de preview (WhatsApp, Slack) não. Na prática, para eles todas as páginas são "Smart Multas" + description padrão, sem imagem.

## Performance (observação estática)

- Shell leve, mas o catálogo carrega 580 KB de `finesData` + 635 KB de `vendor-ui` (MUI) + 126 KB de `vendor-motion`.
- Logo preloaded (`logomultas.webp`, 5 KB) — bom.
- Fonte Inter declarada e não carregada: sem custo de fonte, mas tipografia inconsistente entre dispositivos.
- Imagens do blog: JPG assinado, sem `width/height` declarados.

## O que a reconstrução precisa cobrir (mínimo)

1. HTML estático por página (SSR/SSG) com title, description, canonical, OG (1200×630) e Twitter Card.
2. JSON-LD: Organization + WebSite + WebPage na home; Service/Offer com preços corretos; FAQPage completo em home, FAQ e páginas de multa; BreadcrumbList nas internas; BlogPosting nos posts com imagem estável.
3. Sitemap completo (234 multas + posts + institucionais) com `lastmod`.
4. llms.txt atualizado; robots explícito para crawlers de IA.
5. H1 com a marca e a categoria ("Smart Multas: recurso de multa de trânsito com IA").
