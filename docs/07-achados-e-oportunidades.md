# 07. Achados e oportunidades para a reconstrução

Códigos F (achados) e O (oportunidades) são estáveis para referência nas conversas seguintes.

## Achados (site atual)

- F1. SPA sem SSR. Crawlers de IA e previews de link recebem HTML vazio. É o maior problema de aquisição orgânica/GEO.
- F2. OG/Twitter só em blog, post e ranking, e sem imagem 1200×630 própria; home, catálogo, guias de multa, sobre, B2B e legais não têm OG. Canonical existe (via JS) em 7 tipos de página e falta nas demais. Link da home ou de um guia compartilhado no WhatsApp aparece sem imagem.
- F3. 8 páginas públicas com `<title>` "Smart Multas" e description padrão: sobre, despachantes, advogados, associações, API, define-violation, privacidade, termos.
- F4. Preços inconsistentes: Product JSON-LD diz R$ 19,90; llms.txt diz R$ 19,90 + plano anual R$ 99; site diz R$ 39,90 / 69,90 / 690. `/plano-anual` está no sitemap com prioridade 0.85 mas só renderiza o FAQ.
- F5. Inter declarada no tema MUI mas nenhum `@font-face`/Google Fonts carregado. Renderiza Roboto/Helvetica/Arial conforme o dispositivo.
- F6. Sitemap cobre 26 de ~280 URLs públicas. 220 guias de multa fora do sitemap.
- F7. FAQPage schema cobre 2 de 15 perguntas no `/faq`; home e páginas de multa têm FAQ sem schema.
- F8. Ranking público mostra base de 88 autuações. Enfraquece a prova "+15.000 recursos" se lido junto.
- F9. Home longa (8.578px) com 11 seções e 4 CTAs diferentes ("Recorrer agora", "Verificar Brechas", "Economizar Agora", "Gerar Meu Recurso Agora") apontando para o mesmo destino.
- F10. Cards de plano na home não mostram preço; preço só aparece no FAQ, ranking, sobre e páginas de multa.
- F11. Semântica: H5/H6 usados como rótulos de UI; FAQ da home duplica cada H3.
- F12. `/indique` redireciona para a home sem login (link do rodapé e da seção de indicação levam a lugar nenhum para visitante).
- F13. Dois e-mails de contato (contato@smartmultas.com.br nos legais/FAQ; contato@multas.cc nos Termos).
- F14. Imagens do blog com URL assinada de 5 min: `BlogPosting.image` quebra para crawlers.
- F15. Assistente "Mutonildo" desativado no código, ainda empacotado.
- F16. Copy de prova sem fonte: "+15.000", "4.9/5", "mais de 30% das multas têm erros formais", "98,7% assertividade".
- F17. Landings B2B em tema escuro com sub-header próprio dentro do header global (dois headers empilhados).
- F18. Página de multa: bloco "Outros Guias" mostra nomes completos do CTB (3–4 linhas) sem truncar.

## O que funciona bem e deve ser preservado

- Estrutura de conteúdo da página de multa (código, artigo, gravidade, valor, pontos, teses, FAQ, relacionados) é boa para SEO e conversão.
- Dataset de 234 infrações com teses e FAQs já escrito (`data/fines.json`).
- Comparativo "Pagar × Despachante × Smart Multas IA" é claro e citável.
- Mock de petição no hero comunica o produto sem screenshot real.
- 3 planos com diferenciação simples (PDF / PDF + docs / protocolo).
- Trust strip (Legislação, IA, Pagamento, Direito de Defesa) e footer completo.
- WhatsApp FAB + sticky CTA mobile.
- Ranking com Dataset schema (ideia boa, base pequena).

## Oportunidades na reconstrução (modelo trivoxia)

- O1. Site estático (HTML/CSS/JS puro como o trivoxia) para todas as páginas de marketing e conteúdo; o app (fluxo de recurso, login, portais) continua no React em outro caminho/subdomínio. Resolve F1, F2, F3.
- O2. Gerar as 234 páginas de multa + catálogo a partir de `fines.json` com um script de build simples (Node), com FAQPage + BreadcrumbList + Offer corretos. Resolve F4, F6, F7.
- O3. Home mais curta seguindo o ritmo do trivoxia: hero com demo interativa (petição sendo montada), stats, "como funciona", comparativo, planos com preço, FAQ, contato/CTA. Um CTA primário. Resolve F9, F10.
- O4. Design system: base neutra clara do trivoxia (painéis `#F4F3F0`, réguas com "+", raios 24/16, Inter self-hosted) com a paleta Smart Multas (navy `#0F172A`, azul `#2563EB`, verde `#10B981`, âmbar `#D97706`, amarelo do logo). Resolve F5.
- O5. Fundação GEO igual à aplicada no trivoxia: JSON-LD @graph (Organization + WebSite + WebPage + Service + FAQPage), OG image 1200×630, canonical, sitemap completo com lastmod, robots com crawlers de IA, llms.txt corrigido.
- O6. Uma landing B2B "Para profissionais" no mesmo design claro, com 4 blocos (despachantes, advogados, associações, API) e calculadoras em JS puro; ou 4 páginas irmãs. Resolve F17.
- O7. Legais no template `legal` do trivoxia, com e-mail único.
- O8. Blog: se mantido, precisa de SSG a partir da API (`GET /posts`) ou de markdown; fora disso, linkar para o blog atual.
