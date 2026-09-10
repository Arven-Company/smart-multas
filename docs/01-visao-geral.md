# 01. Visão geral do smartmultas.com.br

Data do levantamento: 10/09/2026. Método: fetch bruto (curl), scraping renderizado com Playwright (41 URLs, desktop 1440px e mobile 390px), download e leitura dos bundles JS (index + 31 chunks), sitemap, robots, llms.txt, manifest.

## O que é

Smart Multas é uma plataforma brasileira de recurso de multas de trânsito por IA. O usuário informa o código da infração (ou fotografa a notificação, OCR), responde perguntas objetivas, paga via Mercado Pago e baixa uma petição em PDF (Defesa Prévia / Recurso à JARI) fundamentada em CTB, resoluções do CONTRAN e jurisprudência. Opera desde 2017 (segundo a página Sobre; o blog cita origem no escritório Loreto & Cajazeiro Advogados).

Posicionamento: "Cancele sua multa em minutos. Sem advogado. Sem pagar a multa antes." Tom combativo contra a "indústria da multa".

## Empresa e contatos

- Razão social (Termos de Uso): NOVAMENTE DESENVOLVIMENTO DE PROJETOS TECNOLÓGICOS LTDA, CNPJ 41.244.251/0001-07, Rua Valério Eugênio, 578, Areal, Conselheiro Lafaiete/MG. Foro: Belo Horizonte/MG.
- Marca no rodapé: "© 2026 Smart Multas Tecnologia" e "Desenvolvido pela Novamente Software" (novamentesoftware.com).
- WhatsApp: (31) 2181-2033, Seg–Sex 09h–18h. Link `wa.me/553121812033`.
- E-mails: contato@smartmultas.com.br (FAQ e privacidade); contato@multas.cc (Termos, seção suporte, provavelmente legado).
- Redes: Instagram @smartmultas.ia · YouTube @smartmultas9896 · Facebook /smartmultas · TikTok @smartmultas.

## Produtos e preços (B2C)

| Produto | Preço | O que inclui |
|---|---|---|
| Petição | R$ 39,90 | PDF pronto para o usuário protocolar |
| Petição + documentos | R$ 69,90 | Anexa exames/laudos; IA considera na petição |
| Protocolo e acompanhamento | R$ 690,00 | Smart Multas protocola; advogado acompanha; status na plataforma |

Pagamento: Mercado Pago (PIX, cartão, saldo, boleto). Garantia: 7 dias (CDC art. 49). Petições ficam disponíveis 30 dias. Programa de indicação: R$ 10,00 por petição paga por indicado (após 7 dias), saque via PIX.

Preços antigos ainda aparecem em pontos do site: JSON-LD Product das páginas de multa diz R$ 19,90; llms.txt diz "Petição Avulsa R$ 19,90" e "Plano Ilimitado Anual R$ 99,00"; a rota `/plano-anual` hoje só renderiza o FAQ.

## Produtos B2B

| Público | Rota | Modelo |
|---|---|---|
| Despachantes | `/despachantes` | White-label, Kanban de prazos, equipe, R$ 5,00/petição, créditos pré-pagos |
| Advogados | `/advogados` | Timbre com OAB, Kanban admin + judicial, captação white-label, R$ 5,00/petição |
| Associações de proteção veicular (APVs) | `/associacoes`, `/protecao-veicular` | Add-on R$ 9,90/mês (lucro ~R$ 6/adesão), PMPM R$ 0,75–1,20/carro, ou clube de benefícios com repasse R$ 10/petição |
| Frotas / SaaS / apps | `/api-b2b`, `/desenvolvedores`, `/b2b` | API REST: lookup R$ 0,50, analyze R$ 1,00, generate R$ 3,50, direct R$ 5,00 |

## Números de prova usados no site

+15.000 recursos elaborados · 4.9/5 · 100% conforme CTB & CONTRAN · 27 estados · 234 infrações catalogadas · "mais de 30% das multas têm erros formais" · API: 98,7% assertividade formal, < 300 ms.

## Stack técnica

- Frontend: React SPA (Vite), MUI (Material UI) + @mui/icons, framer-motion, axios, react-hook-form (`vendor-forms`). Code-splitting por rota (31+ chunks). Tema MUI customizado (paleta slate/azul/verde/âmbar, Inter declarada).
- Hosting: Netlify (`Server: Netlify`, cache edge). HTML shell de 1,7 KB; todo conteúdo depende de JS (`<noscript>Precisa habilitar o JavaScript…`).
- Backend: `https://smartmultas-c40c81aa45ec.herokuapp.com/api/v1/*` (Heroku). Endpoints observados: `tracking/session`, `tracking/step`, `events`, `events/user_events`, `events/ocr_scan`, `flows`, `rankings`, `rankings/vehicle_risk`, `posts`, `posts/:slug`, `users`, `users/login`, `wallet`, `wallet/transactions`, `referrals`, `payments`, `coupons/validate`, `lawyer`, `dispatcher`, `error_reports`. API pública B2B anunciada em `api.smartmultas.com.br/api/v1/partner/*`.
- Mídia do blog: DigitalOcean Spaces (`smartmultas.sfo3.digitaloceanspaces.com`) com URLs assinadas de 5 min.
- Analytics: Google Ads (AW-16680889358) + GA4 (G-WN5QR9W7WE) via gtag; tracker interno (`tracker` chunk → `/tracking/session` e `/events`). Google AdSense citado nos Termos/Privacidade.
- Assistente "Mutonildo" (modal de chat IA) existe no código mas está desativado ("temporariamente desativado").

## Estrutura do site (público)

Home · Catálogo `/multas` (234) · Página por multa `/multas/:slug` · Ranking · Blog (15 posts) · FAQ · Sobre · Fluxo de recurso (`/define-violation` → perguntas → análise → dados → pagamento → download) · 4 landings B2B · Indique · Legais. Detalhe de rotas em `02-arquitetura-e-rotas.md`; conteúdo em `04-conteudo-paginas.md`.

## Pontos de atenção (resumo; detalhe em `07-achados.md`)

1. SPA sem SSR: crawlers de IA e previews de link não veem conteúdo.
2. Canonical e OG só existem via JS e de forma parcial: canonical em 7 tipos de página; OG/Twitter apenas em blog, post e ranking (home e páginas de multa não têm). 8 páginas públicas com `<title>` "Smart Multas" genérico.
3. Preços desatualizados em JSON-LD e llms.txt.
4. Fonte Inter declarada no tema mas nunca carregada (renderiza fallback do sistema).
5. Ranking com base pequena (88 autuações) exposta publicamente.
