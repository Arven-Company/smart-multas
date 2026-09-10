# 08. Spec do novo site (aprovada em 10/09/2026)

Decisões: D1 site estático no modelo trivoxia (HTML + CSS com tokens + JS vanilla, sem framework); D2 CTAs apontam para o app existente; D3 visual trivoxia com paleta Smart Multas; D4 fundação GEO igual à do trivoxia. Blog fora do escopo (link para o atual).

## Fases

- Fase 1 (esta entrega): landing page `index.html` + `privacidade.html` + `termos.html` + `robots.txt`, `sitemap.xml`, `llms.txt`, `site.webmanifest`, favicon, OG image, fontes self-hosted.
- Fase 2: `/multas/` (índice + 234 páginas geradas de `docs/data/fines.json` por script Node), `/faq.html`, `/sobre.html`, sitemap completo. Opcional depois: landings B2B.

## Constantes

- App (fluxo de recurso): `https://smartmultas.com.br/define-violation`. Entrar: `https://smartmultas.com.br/user-petitions`. Um único valor, usado em todos os CTAs; troca por find/replace quando o app mudar de host.
- WhatsApp: `https://wa.me/553121812033?text=Olá! Gostaria de tirar uma dúvida sobre o Smart Multas.`
- E-mail: contato@smartmultas.com.br. CNPJ 41.244.251/0001-07 (NOVAMENTE DESENVOLVIMENTO DE PROJETOS TECNOLÓGICOS LTDA), Conselheiro Lafaiete/MG.
- Canonical: `https://smartmultas.com.br/` (a LP substitui a home atual).
- Links de conteúdo que ainda vive no site atual: `/multas`, `/multas/<slug>`, `/ranking-multas`, `/blog`, `/faq`, `/despachantes`, `/advogados`, `/associacoes`, `/api-b2b`.

## Tokens (css/style.css `:root`)

`--bg #FFFFFF · --ink #0F172A · --ink-2 #475569 · --ink-3 #64748B · --panel #F5F7FA · --panel-2 #ECEFF4 · --line #E2E8F0 · --line-2 #CBD5E1 · --brand #2563EB · --brand-2 #38BDF8 · --green #10B981 · --green-2 #059669 · --amber #D97706 · --yellow #FACC15 · --red #DC2626 · --wa #25D366`. Raios 24/16, container 1200, header 72, Inter self-hosted (woff2 do trivoxia).

Botões: `.btn-primary` navy (ink), `.btn-cta` verde (conversão: hero, planos, CTA final), `.btn-outline`. Réguas com marcador "+" entre seções. Gradientes escuros navy→azul com acentos azul/verde nos painéis de destaque.

## Seções da LP (ordem)

1. Header fixo: logo (placa) + wordmark "Smart Multas" + chip "IA"; nav Como funciona · Por que recorrer · Planos · FAQ; "Entrar"; CTA "Recorrer minha multa".
2. Hero: H1 "Recorra da sua multa em minutos." (text reveal; "Cancele" foi trocado em 10/09 para não prometer resultado) + aside com marcador em "sem pagar a multa antes" + CTA verde "Recorrer minha multa" + "Ver a IA em ação" + micro-provas (a partir de R$ 39,90 · PDF em 3 minutos · garantia de 7 dias).
3. Painel demo com 3 abas: Análise da multa (conversa animada com eventos laterais: brecha identificada, tese aplicada, PDF pronto; respostas rápidas) · Petição gerada (frame do app com o PDF) · Protocolo e status (próximos passos + acompanhamento Defesa prévia → JARI → CETRAN). Chips + nota "dados ilustrativos".
4. Órgãos: "Válido em todos os órgãos autuadores" (DETRANs, PRF, DNIT, CET/DSV, DER).
5. Intro "Análise jurídica e petição pronta no mesmo lugar" + diagrama com feixes: Foto da notificação / Código da multa → IA Smart Multas → Teses jurídicas / Petição PDF / Protocolo.
6. Bloco A "Fundamentação legal": H2 "Quatro brechas que anulam multas todos os dias"; bento (análise + comparação custo × multa); 4 cards (Art. 281 II · CONTRAN 798 · Art. 267 · Art. 280); faixa "Código 7455…" → guia no site atual.
7. Bloco B "Como funciona": 4 cards (foto ou código · perguntas · cruzamento legal · PDF) + processo pós-PDF em 3 passos (assinar · anexar · protocolar).
8. Comparativo: Pagar a multa × Despachante/Advogado × Smart Multas IA (6 linhas).
9. Planos: Petição R$ 39,90 · Petição + documentos R$ 69,90 · Protocolo e acompanhamento R$ 690 (destaque) + garantias Mercado Pago / liberação imediata / 7 dias.
10. Resultados: 4 stats (+15.000 · 4.9/5 · 100% CTB · 27 estados) + card gradiente "Não aceite pagar uma multa sem recorrer".
11. Sobre: "Desde 2017, o escudo do motorista brasileiro" + grid (marca · Segurança jurídica · Defesa do condutor · Preço justo).
12. FAQ: 8 perguntas com FAQPage.
13. Contato → busca "Já sabe o código da multa?" (input + chips) que leva ao app.
14. Pré-footer + Footer (Recursos · Empresa · Contato · redes) + FAB WhatsApp.

## GEO

JSON-LD @graph: Organization (legalName, taxID, address, contactPoint, sameAs) · WebSite · WebPage (speakable) · Service com 3 Offers (39,90 / 69,90 / 690) · FAQPage (8). Title ≤ 60, description ≤ 160, canonical, OG 1200×630 gerada, Twitter Card, robots com GPTBot/ClaudeBot/PerplexityBot/OAI-SearchBot/Google-Extended, llms.txt com preços corretos, sitemap com lastmod.

## Verificação

Playwright: screenshots desktop 1440 e mobile 390; sem erro de console; sem scroll horizontal em 390px; links de CTA resolvem para o app; JSON-LD válido (parse); `prefers-reduced-motion` respeitado.
