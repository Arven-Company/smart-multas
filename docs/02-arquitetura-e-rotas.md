# 02. Arquitetura e mapa de rotas

## Rotas (extraídas de `path:"…"` no bundle `index-Cue0YIhC.js`)

### Públicas (marketing / conteúdo)

| Rota | Chunk | Title real | No sitemap |
|---|---|---|---|
| `/` | Home | Recurso de Multa Online com IA \| Smart Multas | sim |
| `/multas` | FinesDirectory | Guia Completo de Recursos de Multas de Trânsito (234 Infrações CTB) \| Smart Multas | sim |
| `/multas/:slug` | FineLandingPage | Recurso de Multa por … (Cód. N) \| Smart Multas | 14 de 234 |
| `/recurso-multa/:slug` | FineLandingPage (alias) | idem | não |
| `/ranking-multas` | FinesRankingPage | Ranking Nacional de Multas de Trânsito… | sim |
| `/ranking`, `/estatisticas-multas` | alias do ranking | idem | não |
| `/blog` | Blog | Blog Smart Multas \| Guia Definitivo… | sim |
| `/blog/:slug` | BlogPost | `<título> \| Blog Smart Multas` | 6 de 15 |
| `/faq` | FAQ | Perguntas Frequentes e Informações de Pagamento \| Smart Multas | sim |
| `/plano-anual`, `/anual` | FAQ (alias) | idem | `/plano-anual` sim |
| `/sobre` | About | **Smart Multas** (genérico) | não |
| `/despachantes` | DispatcherLandingPage | genérico | não |
| `/advogados` | LawyerLandingPage | genérico | não |
| `/associacoes`, `/protecao-veicular` | ProtectionAssociationLandingPage | genérico | não |
| `/api-b2b`, `/desenvolvedores`, `/b2b` | B2bLandingPage | genérico | não |
| `/indique` | Referrals (redireciona para `/` sem login) | = Home | não |
| `/privacy-policy` | Privacy | genérico | não |
| `/terms-of-use` | Terms | genérico | não |
| `/define-violation` | DefineViolation | genérico | não |

### Fluxo de recurso (usuário)

`/define-violation` → `/answer-violation-questions/:identifier` → `/analyze-defense-arguments/:identifier` → `/fill-personal-vehicle-info/:identifier` → pagamento (Mercado Pago) → `/download-petition/:identifier`. Também: `/user-petitions` (Minhas Petições), `/status/:publicToken` (rastreio público), `/forgot-password`, `/reset-password`.

### Portais B2B (logados)

- Despachante: `/despachante`, `/despachante/casos`, `/clientes`, `/veiculos`, `/kanban`, `/equipe`, `/configuracoes`; intake público white-label `/d/:slug` e `/d/:slug/recurso/:intakeToken`.
- Advogado: `/advogado` + mesmas sub-rotas; intake `/adv/:slug`, `/adv/:slug/recurso/:intakeToken`.
- Associação: `/associacao`, `/associacao/onboarding`; clube `/clube/:slug`.
- API B2B: `/b2b/login`, `/b2b/register`, `/b2b/keys`, `/b2b/docs`, `/b2b/history`, `/b2b/billing`; `/api`.
- Admin: `/admin`, `/admin/users`, `/payments`, `/payouts`, `/coupons`, `/posts`, `/partners`, `/managed`, `/inbox`, `/knowledge`, `/flows`, `/funnel`, `/events`, `/ai-chats` (bloqueado em robots.txt via `Disallow: /admin/`).

## Componentes compartilhados (chunks utilitários)

- `StickyMobileCTA`: barra fixa inferior no mobile (aparece após 80px de scroll) com "Petição com IA / Liberação imediata" + botão verde "Recorrer Agora".
- `DetransWithLinks`: modal com 27 links de DETRANs.
- `MutonildoModal`: chat com assistente IA "Mutonildo" (desativado).
- `tracker`: cria sessão (`POST /tracking/session`) e envia eventos (`POST /events`, `/tracking/step`).
- `googleAds`: dispara conversões do Google Ads (ex.: evento `conversion` em `/define-violation`, label `R3BdCOCggO0cEI7YiJI-`, value 1 BRL).
- `finesData`: dataset das 234 infrações (580 KB) importado por FinesDirectory e FineLandingPage.

## Backend e dados

- Base: `https://smartmultas-c40c81aa45ec.herokuapp.com/api/v1`.
- Chamadas feitas por páginas públicas: `POST tracking/session` (toda página), `GET flows` (home), `GET rankings` (ranking), `GET posts` e `GET posts/:slug` (blog), `POST events`.
- Dados estáticos no bundle: infrações (finesData), FAQs, textos de todas as landings, links de DETRANs.
- Dados dinâmicos: posts do blog, ranking, fluxos de perguntas, carteira/indicações, pagamentos.

## Terceiros

- Google Tag (gtag.js): AW-16680889358 e G-WN5QR9W7WE. Chamadas para `googleads.g.doubleclick.net` falham com `ERR_NAME_NOT_RESOLVED` no ambiente de teste (2 erros de console por página; provavelmente bloqueio de DNS local, não bug do site).
- Mercado Pago (checkout).
- DigitalOcean Spaces (imagens do blog).
- Google AdSense (mencionado nos legais; nenhum slot observado nas páginas capturadas).

## Arquivos de descoberta

- `robots.txt`: `User-agent: * / Allow: / / Disallow: /admin/ / Sitemap: https://smartmultas.com.br/sitemap.xml`.
- `sitemap.xml`: 26 URLs (home, multas, ranking, plano-anual, 14 multas, blog, 6 posts, faq). Sem `lastmod`.
- `llms.txt`: existe (cópia em `raw/llms.txt`). Lista Início, Tipos de Multas, Blog, FAQ, Despachantes, Sobre, Privacidade, Termos; preços desatualizados (R$ 19,90 avulsa e R$ 99/ano).
- `manifest.json`: name "Smart Multas App", theme `#000000`, ícones favicon.ico + logo192.png.
- `favicon.ico` (15 KB), `logomultas.webp` (5 KB, 192×192, placa amarela com câmera).
