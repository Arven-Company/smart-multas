# Documentação do smartmultas.com.br (levantamento de 10/09/2026)

Base para reconstruir o site no modelo do trivoxia (site estático, design system inspirado em elevenlabs.io, fundação GEO).

| Arquivo | Conteúdo |
|---|---|
| [01-visao-geral.md](01-visao-geral.md) | O que é, empresa, contatos, produtos e preços (B2C e B2B), números de prova, stack, hosting, backend |
| [02-arquitetura-e-rotas.md](02-arquitetura-e-rotas.md) | Mapa completo de rotas (públicas, fluxo, portais, admin), chunks, endpoints da API, terceiros, robots/sitemap/llms.txt |
| [03-design-system.md](03-design-system.md) | Paleta (tema MUI), tipografia, raios, sombras, componentes recorrentes, layout, motion |
| [04-conteudo-paginas.md](04-conteudo-paginas.md) | Copy real, seção por seção, de todas as páginas públicas (home, catálogo, guia de multa, ranking, blog, FAQ, sobre, fluxo, 4 landings B2B, legais) |
| [05-seo-geo.md](05-seo-geo.md) | Title/description por página, JSON-LD, OG/canonical reais, headings, descoberta, renderização, o que a reconstrução precisa cobrir |
| [06-dados-infracoes.md](06-dados-infracoes.md) | Esquema e estatísticas do dataset de 234 infrações; 14 páginas curadas; lookup; DETRANs |
| [07-achados-e-oportunidades.md](07-achados-e-oportunidades.md) | F1–F18 (problemas), o que preservar, O1–O8 (oportunidades no modelo trivoxia) |

## Material bruto

- `data/fines.json`: 234 infrações (slug, código, artigo, gravidade, pontos, valor, categoria, descrições, teses, FAQs).
- `raw/pages/<slug>.txt`: texto renderizado de 41 URLs. `raw/pages/<slug>.json`: title, meta, JSON-LD, headings, links, botões, imagens, estilos computados.
- `raw/screenshots/`: 25 páginas em desktop (1440px, página inteira) e mobile (390px) + 11 viewports da home (`home-vp-00..10`).
- `raw/llms.txt`, `raw/sitemap.xml`, `raw/index-shell.html`, `raw/logomultas.webp`, `raw/favicon.ico`.

## Modelo de referência

`C:\Users\Renato\Documents\Claude\trivoxia`: `index.html` (721 linhas), `css/style.css` (1.281 linhas, tokens em `:root`), `js/main.js` (header, tabs, chat demo, FAQ, reveal, contadores, form → n8n), `js/effects.js` (text reveal, marcador, beams), `privacidade.html`, `termos.html`, `sitemap.xml`, `robots.txt`, `llms.txt`, `site.webmanifest`, JSON-LD @graph completo no head.
