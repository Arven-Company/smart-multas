# 04. Conteúdo página a página (copy real do site atual)

Fonte: scraping renderizado (Playwright, 1440px e 390px) de 41 URLs em 10/09/2026. Texto integral de cada página está em `docs/raw/pages/<slug>.txt`; headings, links, botões, meta e JSON-LD em `docs/raw/pages/<slug>.json`.

Elementos globais (repetidos em toda página) estão descritos uma vez na seção 1.

## 1. Elementos globais

### Header (fixo, 73px, branco 94% + blur)
- Logo: placa amarela com câmera (`/logomultas.webp`, 192x192) + "Smart Multas" + chip "IA" + subtítulo "Defesa e Recursos de Trânsito".
- Nav central: Tipos de Multas (`/multas`), Ranking (`/ranking-multas`), Blog (`/blog`). Ícones MUI à esquerda de cada item.
- Direita: "Entrar" (ghost) e "Recorrer Multa" (pílula azul `#2563eb`, sombra azul) → `/define-violation`.
- Mobile: hambúrguer; CTA fixo no rodapé (`StickyMobileCTA`) após 80px de scroll: "Petição com IA / Liberação imediata" + botão verde "Recorrer Agora".

### FAB WhatsApp
- Botão circular verde `#25d366`, canto inferior direito, link `https://wa.me/553121812033?text=Olá! Gostaria de tirar uma dúvida sobre o Smart Multas.`

### Faixa de confiança (pré-footer, fundo `#0f172a`)
1. Legislação Atualizada: Embasado no CTB e CONTRAN 2026
2. Inteligência Artificial: Análise técnica de falhas formais
3. Pagamento Seguro: Criptografia SSL via Mercado Pago
4. Direito de Defesa: Garantido pelo Art. 5º da CF/88

### Footer (fundo `#090d16`, 4 colunas)
- Coluna marca: logo + "Smart Multas" + "INTELIGÊNCIA EM DIREITO DE TRÂNSITO" (azul claro) + parágrafo "A tecnologia pioneira para motoristas recorrerem de multas indevidas de forma rápida, eficiente e acessível. Analisamos sua autuação e geramos a petição pronta para protocolo." + "FORMAS DE PAGAMENTO ACEITAS": chips PIX Instantâneo (verde), Cartão de Crédito (azul), Mercado Pago (cinza).
- Recursos & Multas: Tipos de Multas (CTB), Ranking de Infrações, Blog de Trânsito, Recorrer Minha Multa, Indique e Ganhe.
- Para Profissionais: Smart Multas Pro (Despachantes) `/despachantes`, Painel para Advogados `/advogados`, Proteção Veicular & APVs `/protecao-veicular`, API B2B para Frotas `/api-b2b`, Perguntas Frequentes (FAQ) `/faq`.
- Atendimento Oficial: WhatsApp (31) 2181-2033 (verde), "Atendimento de Segunda a Sexta, das 09h às 18h", ícones WhatsApp, Instagram (`@smartmultas.ia`), YouTube (`@smartmultas9896`), Facebook (`/smartmultas`), TikTok (`@smartmultas`).
- Base: "Aviso Legal: A Smart Multas é uma plataforma tecnológica de inteligência artificial aplicada ao Direito de Trânsito que auxilia o cidadão a exercer seu direito constitucional de ampla defesa. Não substituímos a assessoria jurídica individualizada de um advogado devidamente inscrito na OAB." / "© 2026 Smart Multas Tecnologia. Todos os direitos reservados." / "Desenvolvido pela Novamente Software" (link novamentesoftware.com).

## 2. Home (`/`)

Title: `Recurso de Multa Online com IA | Smart Multas`
Description: `Cancele sua multa de trânsito em minutos com a Smart Multas. Petição com IA, opção de documentos ou protocolo com advogado. Pagamento 100% seguro via Mercado Pago (PIX e Cartão).`
Altura renderizada: 8.578px (desktop).

### 2.1 Hero (2 colunas)
- H1: "Cancele sua multa em **minutos**." ("minutos" em verde `#10b981`)
- Sub: "Sem advogado. Sem pagar a multa antes. Petição pronta para recorrer."
- CTA: "Recorrer agora →" (verde, pílula 50px, sombra verde 45%)
- Micro-prova: "★ 4.9/5 · +15.000 recursos"
- Mock à direita (card branco, borda arredondada 24px): chip flutuante "✦ IA Treinada no CTB"; cabeçalho "Recurso Administrativo / Padrão JARI / DETRAN / PRF" + selo "Fundamentado"; bloco "DESTINATÁRIO: ILMO. SR. DIRETOR PRESIDENTE DA JARI DO ÓRGÃO AUTUADOR"; "TESES JURÍDICAS APLICADAS PELA IA:" com 3 linhas coloridas: Art. 281, II do CTB (Decadência / 30 dias) [Nulidade, verde]; Resolução CONTRAN nº 798 (Aferição Radar) [Técnico, azul]; Art. 267 do CTB (Conversão em Advertência) [Sem Multa, âmbar]; rodapé "PDF A4 pronto para assinatura e protocolo"; chip flutuante "Pronto em 3 minutos / Liberação via PIX".

### 2.2 Stats (4 cards brancos)
- +15.000 · Recursos Elaborados · Condutores defendidos
- 4.9 / 5.0 (5 estrelas) · Avaliação Média · Baseada em avaliações reais
- 100% · Conforme CTB & CONTRAN · Legislação atualizada
- 27 Estados · Cobertura Nacional · DETRAN, PRF, DNIT & Municípios

### 2.3 Órgãos
"VÁLIDO PARA RECURSOS EM TODOS OS ÓRGÃOS AUTUADORES DO BRASIL:" ✓ DETRANs Estaduais ✓ Polícia Rodoviária Federal (PRF) ✓ DNIT ✓ CET / DSV ✓ DER

### 2.4 Busca rápida (fundo cinza `#f8fafc`)
- H: "Já sabe o código da multa?" / "Busque, escolha um caso frequente ou veja sua chance de cancelamento."
- Input pílula com borda verde + botão "Analisar".
- Chips: ⚡ Velocidade (7455), 🚦 Sinal Vermelho (6050), 📱 Celular ao Volante (7633), 🍺 Lei Seca (165), 🅿️ Estacionamento, 🔍 Outro.
- Links: "Chance de cancelamento" (outline verde) · "▶ Ver como funciona (1 min)".

### 2.5 Fundamentação legal (4 cards)
Eyebrow: "FUNDAMENTAÇÃO LEGAL DO BRASIL". H2: "Por que milhares de multas são anuladas?". Sub: "A legislação de trânsito brasileira impõe regras rígidas aos órgãos fiscalizadores. Nossa Inteligência Artificial investiga brechas legais e erros de procedimento na sua autuação."

| Chip | Título | Texto | Rodapé |
|---|---|---|---|
| Art. 281, II do CTB | Notificação após 30 dias | Se o órgão autuador demorar mais de 30 dias da data da infração para emitir a Notificação de Autuação, o CTB determina a NULIDADE e o arquivamento imediato do auto. | ✓ ANULAÇÃO OBRIGATÓRIA POR LEI |
| Resolução CONTRAN 798/20 | Radar sem Aferição Anual | Radares fixos e portáteis de velocidade precisam de laudo de calibração do INMETRO válido nos últimos 12 meses. Sem isso, a medição é judicialmente nula. | ✓ CANCELAMENTO DA MULTA DE VELOCIDADE |
| Art. 267 do CTB | Conversão em Advertência | Infrações leves ou médias cometidas por condutores que não cometeram a mesma falta nos últimos 12 meses têm direito à conversão da multa em advertência por escrito. | ✓ ZERO REAIS E ZERO PONTOS NA CNH |
| Art. 280 do CTB | Erros Formais & Sinalização | Local impreciso, foto ilegível, falta de sinalização regulamentar (R-19) ou ausência de dados obrigatórios do agente autuador invalidam o procedimento. | ✓ INCONSISTÊNCIA INSANÁVEL DO AUTO |

CTA: "Verificar Brechas na Minha Multa →" (pílula navy `#1e293b`).

### 2.6 Como funciona (4 passos)
Eyebrow "⚡ SIMPLES, RÁPIDO E 100% ONLINE". H2 "Como funciona o processo?". Sub "Do recebimento da autuação até o recurso formal pronto para envio em apenas 4 etapas."
1. Envie a Foto ou Código (chip "OCR Inteligente"): Faça upload da notificação para leitura automática por IA ou digite o código da infração.
2. Perguntas Rápidas (Análise Personalizada): Responda algumas perguntas objetivas para nossa IA identificar brechas no procedimento do agente.
3. Cruzamento Legal (Fundamentação Jurídica): A IA cruza o CTB, resoluções do CONTRAN, prazos do Art. 281 e jurisprudências dos tribunais.
4. Baixe seu PDF Pronto (Liberação Imediata): Pague com segurança via Mercado Pago (PIX instantâneo) e baixe a petição completa para protocolar.

### 2.7 Comparativo (tabela)
Eyebrow "💰 ECONOMIA & EFICIÊNCIA". H2 "Por que recorrer com a Smart Multas?". Sub "Veja como nossa plataforma com inteligência artificial se compara às alternativas tradicionais."

| Comparativo | Pagar a Multa (✗) | Despachante / Advogado (—) | Smart Multas IA (✓, coluna destacada verde) |
|---|---|---|---|
| Custo Médio | Valor integral da multa | Honorários elevados | Fração do custo de um advogado |
| Pontuação na CNH | Até 7 pontos (risco de suspensão) | Pode evitar | Defesa para anular pontos |
| Tempo para Elaboração | Imediato (Prejuízo total) | 5 a 15 dias úteis | 3 minutos (IA Instantânea) |
| Obriga pagar multa antes? | SIM (Paga 100% da multa) | NÃO (Art. 284/286 CTB) | NÃO (Art. 284/286 CTB) |
| Leitura de Foto/OCR da Multa | Não aplicável | Manual (você leva cópias) | Automático por IA |
| Garantia de Devolução (CDC) | Nenhuma garantia | Geralmente não há | 7 dias incondicional |

CTA "Economizar Agora →" (verde).

### 2.8 Planos (3 cards)
Eyebrow "💳 ESCOLHA SEU PLANO". H2 "Escolha a melhor opção para você". Sub "Pague com total segurança pelo Mercado Pago. Liberação imediata do seu documento via PIX ou Cartão de Crédito."

1. **Petição** — "PDF pronto para você protocolar" — PAGAMENTO ÚNICO — "Uma petição completa": Recurso personalizado completo em PDF; Fundamentação legal com CTB e CONTRAN; Análise e perguntas guiadas por IA; Instruções passo a passo de protocolo; Liberação imediata no PIX ou Cartão. Botão outline "Criar petição". (Preço R$ 39,90 aparece no FAQ/outras páginas, não no card.)
2. **Petição + documentos** (borda azul) — "Exames e laudos entram na defesa" — IA COM SEUS ANEXOS — "Petição reforçada": Tudo da petição padrão; Anexe exames, laudos e comprovantes; A IA considera esses documentos na petição; PDF atualizado após o envio dos arquivos; Você protocola no órgão. Botão outline azul "Criar com documentos". (R$ 69,90)
3. **Protocolo e acompanhamento** (borda verde, selo "★ MAIS COMPLETO") — "Nós protocolamos. Um advogado acompanha." — SERVIÇO COMPLETO — "Do PDF ao protocolo": Petição gerada e documentos considerados; Protocolamos o recurso no órgão; Advogado acompanha o andamento; Você vê o status na plataforma; Sem precisar protocolar por conta própria. Botão verde "Contratar acompanhamento". (R$ 690,00)

Faixa de garantias: Mercado Pago Oficial (Checkout com criptografia SSL 256-bit e conformidade PCI-DSS) · Liberação Instantânea (Aprovação no PIX ou Cartão com download imediato do PDF) · Garantia de 7 Dias (Direito de arrependimento com reembolso integral garantido pelo CDC).

### 2.9 Indicação (card com borda laranja, gradiente âmbar→verde)
Eyebrow "🎁 PROGRAMA DE INDICAÇÃO". H2 "Ganhe **recompensa no PIX** por amigo indicado". Texto: "Conhece alguém que tomou multa de trânsito ou trabalha como motorista de aplicativo? Indique a Smart Multas e receba uma recompensa no PIX a cada recurso gerado."
Passos: 1. Compartilhe seu link (Cadastre-se e pegue seu link exclusivo.) 2. Seu amigo recorre (Seu amigo gera a petição com IA.) 3. Receba no PIX (Recompensa direta na sua carteira a cada recurso.)
Card lateral: "Recompensa / por cada recurso concluído / Saque via PIX sem burocracia". CTA laranja "Quero Participar e Indicar →" → `/indique` (hoje redireciona para a home).
Valor da recompensa (do FAQ): R$ 10,00 por petição paga após 7 dias.

### 2.10 FAQ (6 perguntas, accordion)
Eyebrow "TIRE SUAS DÚVIDAS". H2 "Perguntas Frequentes". Sub "Tudo o que você precisa saber sobre o recurso de multas com inteligência artificial."
1. Preciso pagar a multa para entrar com o recurso? — NÃO! Conforme determinam expressamente os artigos 284 e 286 do Código de Trânsito Brasileiro (CTB), o condutor tem o direito constitucional de apresentar Defesa Prévia e Recurso à JARI sem a necessidade de pagamento prévio da penalidade.
2. Quanto custa e como funciona o pagamento? — Há três opções por petição: Petição (R$ 39,90), Petição + documentos para a IA (R$ 69,90) ou Protocolo e acompanhamento por advogado (R$ 690,00). O pagamento é 100% seguro via Mercado Pago (PIX instantâneo ou Cartão de Crédito).
3. Preciso contratar um advogado para recorrer? — Não! A legislação brasileira garante que qualquer cidadão pode apresentar sua própria defesa administrativa nos órgãos de trânsito (DETRAN, PRF, DNIT e Prefeituras). Nossa IA analisa seu caso e gera a petição jurídica pronta e formatada nos padrões oficiais.
4. Em quanto tempo o PDF do recurso fica pronto? — Após responder perguntas rápidas sobre a autuação e confirmar o pagamento no PIX ou Cartão, a petição completa em PDF é liberada imediatamente na sua tela para download e também fica salva na sua conta.
5. O que faço após baixar a petição em PDF? — Nas opções Petição e Petição + documentos: baixe, assine, anexe CNH, CRLV e a notificação, e protocole no órgão (presencial, portal ou Correios com AR). No serviço de protocolo e acompanhamento, a equipe protocola por você e um advogado acompanha o caso na plataforma.
6. Existe garantia de reembolso? — Sim! Em total conformidade com o Art. 49 do Código de Defesa do Consumidor (CDC), oferecemos garantia incondicional de 7 dias. Se por qualquer motivo você desistir da petição, basta solicitar pelo nosso suporte e faremos o reembolso integral.
Rodapé: "Ainda tem dúvidas ou quer saber mais sobre o processo?" → "Ver central de ajuda completa →" (`/faq`).

### 2.11 CTA final (fundo navy gradiente)
H2 "Não aceite pagar uma multa sem recorrer." Sub "Petição com IA, opção de documentos ou protocolo com advogado. Gere seu recurso agora mesmo." CTA verde "Gerar Meu Recurso Agora →".

## 3. Catálogo de multas (`/multas`)

Title: `Guia Completo de Recursos de Multas de Trânsito (234 Infrações CTB) | Smart Multas`
- Hero navy: chip "CATÁLOGO COMPLETO DE INFRAÇÕES CTB (234 INFRAÇÕES)"; H1 "Guias de Recursos para Todas as Multas"; sub "Consulte todas as infrações do Código de Trânsito Brasileiro: artigos, pontuação na CNH, valores atualizados e modelos de defesas técnicas."; busca "Pesquisar por código (ex: 7455, 6050, 5010), artigo (ex: 218, 162) ou palavra".
- Filtros (chips): Todas, Velocidade, Sinalização, Segurança, Álcool e Drogas, Estacionamento, Habilitação e Veículo, Circulação e Preferência, Equipamentos e Carga.
- "Exibindo 234 de 234 infrações" · "Página 1 de 10" (24 por página, paginação numérica).
- Card: "Cód: 50100" + chip gravidade (Gravíssima vermelho / Grave laranja / Média azul / Leve verde) + chip categoria; nome da infração (negrito); "Art. 162 I do CTB · 7 Pontos na CNH"; shortDesc; "Valor da autuação: R$ 880,41" (vermelho); botão navy "Ver Guia →".
- Fonte dos dados: `finesData` embutido no bundle (ver `06-dados-infracoes.md`).

## 4. Página de multa (`/multas/:slug`) — template

Exemplo: `/multas/velocidade-ate-20-7455`
Title: `Recurso de Multa por Velocidade até 20% (Cód. 7455) | Smart Multas`
Description: `Recorra da multa de Velocidade Superior à Máxima em até 20% (Art. 218, I do CTB). Petição jurídica pronta por R$ 39,90 gerada por IA. Economize R$ 130,16 e proteja seus 4 pontos na CNH.`

1. Hero (2 col): chips "CÓDIGO: 7455" (navy) · "Art. 218, I do CTB" · "Gravidade: Média" (azul). H1 "Recurso para Multa de Velocidade Superior à Máxima em até 20%". Parágrafo descritivo. Faixa de 4 valores: VALOR DA MULTA R$ 130,16 (vermelho) · PONTOS NA CNH 4 Pontos (laranja) · CUSTO RECURSO R$ 39,90 (verde) · ADVERTÊNCIA ✓ Possível. CTA verde "Gerar Recurso por R$ 39,90 →" + "🔒 Pagamento 100% seguro via Mercado Pago · Garantia de devolução de 7 dias".
   Card direito (borda navy): "IA Especializada no CTB / Elaboração automática para o Cód. 7455"; "O QUE SERÁ INCLUÍDO NO SEU RECURSO:" Petição completa endereçada à JARI / DETRAN; Argumentação detalhada sobre Art. 218, I do CTB; Verificação de prazos e decadência de 30 dias; Instruções práticas de protocolo presencial ou online; Garantia legal incondicional de 7 dias (CDC). Caixa azul: "Art. 284 e 286 do CTB: Você NÃO precisa pagar a multa de R$ 130,16 para apresentar sua defesa prévia e recurso."
2. Teses (fundo cinza): eyebrow "TESES JURÍDICAS APLICÁVEIS"; H2 "Principais Brechas de Anulação para esta Multa"; sub "Nossa Inteligência Artificial analisa minuciosamente seu auto de infração buscando irregularidades formais e materiais."; grid 2 col de cards (chip com a lei + título + descrição). Para 7455: Radar sem Aferição Válida do INMETRO; Margem de Erro do Radar (Tolerância); Conversão Automática em Advertência por Escrito; Decadência por Prazo de Notificação Superior a 30 Dias.
3. FAQ específico: eyebrow "DÚVIDAS ESPECÍFICAS"; H2 "Perguntas sobre a Multa de …"; accordion (2 perguntas).
4. CTA (fundo cinza): "Pronto para anular sua multa de R$ 130,16?" / "Pague apenas R$ 39,90 no PIX ou Cartão e receba sua petição completa elaborada por IA em poucos minutos." / botão verde "Criar Recurso por R$ 39,90 →".
5. Relacionados: "Outros Guias de Recursos de Multas Populares:" 4 cards (Cód, nome, "R$ · pontos") + "Ver todos os tipos de multas →".

JSON-LD: `Product` com `offers.price: "19.90"` (desatualizado; preço real R$ 39,90).

## 5. Ranking (`/ranking-multas`, alias `/ranking`, `/estatisticas-multas`)

Title: `Ranking Nacional de Multas de Trânsito: Marcas e Carros Mais Multados | Smart Multas`
- Hero navy: chip "DADOS 100% ANÔNIMOS · BASE SMART MULTAS"; H1 "Ranking de Multas: quais marcas e carros mais levam autuações"; sub; CTAs "Gerar recurso por R$ 39,90 →" (verde) / "Ver preços" / "Compartilhar".
- 3 KPIs: AUTUAÇÕES ANALISADAS 88 · PONTOS EM CNH NO RADAR 450 · VALOR ESTIMADO DAS MULTAS R$ 20.952,78 (dinâmicos, via `GET /api/v1/rankings`).
- "Raio-X do meu carro": selects Marca / Modelo / Ano + "Simular risco" (`/api/v1/rankings/vehicle_risk`).
- Tabs: Marcas mais multadas · Modelos · Por ano do carro · Tipos de multa. Lista #1..#10 com barra, "8 · 9.1%", "Multa mais comum: … (código) · média N pts".
- Card "CONVERSÃO INTELIGENTE": "Teve multa? Gere a petição agora" + 3 preços (R$ 39,90 / R$ 69,90 / R$ 690) + botões "Fazer minha petição →" (verde) e "Ver todos os preços" (laranja).
- FAQ (4): origem dos dados; não substitui Senatran; como recorrer da multa mais comum; precisa pagar antes.
- "Atualizado em 10/09/2026, 18:40:12."
JSON-LD: BreadcrumbList + Dataset + FAQPage.

## 6. Blog (`/blog`) e post (`/blog/:slug`)

Title lista: `Blog Smart Multas | Guia Definitivo de Trânsito, Recursos e Legislação do CTB`
- Hero navy: chip "Portal Especializado em Direito de Trânsito"; H1 "Conhecimento Jurídico para Defender sua CNH"; sub "Artigos diários sobre legislação, prazos de recursos, fiscalização por radar, bafômetro e brechas do CTB para cancelar autuações indevidas."; busca; 3 provas (100% Embasado no CTB e CONTRAN · Defesa Prévia, JARI e CETRAN · +15.000 Motoristas Orientados).
- Filtros: Todos os Artigos, Gravíssima (7 pts), Grave (5 pts), Média (4 pts), Leve (3 pts), Recursos & Prazos, Blitz & CNH.
- "EM DESTAQUE HOJE / Artigo do Dia" (card grande com imagem) + grid 3 col de 15 artigos (imagem, chip categoria, data, tempo de leitura, título, resumo, "Ler artigo →"). Posts vêm de `GET /api/v1/posts`; imagens em DigitalOcean Spaces com URL assinada (expira em 5 min).
- Tabela "Guia Rápido de Valores e Pontos do CTB (2026)": Leve R$ 88,38 / 3 pts / Conversão em Advertência (art. 267) / Defesa Prévia + JARI; Média R$ 130,16 / 4 pts / Retenção até regularização / Defesa Prévia + JARI; Grave R$ 195,23 / 5 pts / Retenção e remoção ao pátio / Defesa Prévia + JARI + CETRAN; Gravíssima R$ 293,47 (fator 2x a 60x) / 7 pts / Risco de suspensão / Defesa Prévia + JARI + CETRAN.
- CTA navy "Recebeu uma notificação de autuação?" ("Mais de 30% das multas emitidas no Brasil possuem erros formais…") + "Analisar Minha Multa Grátis".
- FAQ (4): vale a pena recorrer; desconto 20/40% impede recorrer?; Defesa Prévia vs JARI; como a IA ajuda.
- Post: breadcrumb Início / Blog / Categoria; data, tempo de leitura, visualizações; H1; resumo; "Revisado por Especialistas em Direito de Trânsito"; controle de tamanho de fonte; compartilhar (WhatsApp, Telegram, Copiar Link); corpo; box "Dica Jurídica Smart Multas: Atenção ao Artigo 281 do CTB"; CTA lateral "Recebeu uma multa e precisa de recurso urgente?"; box "Direitos Fundamentais do Condutor" (Efeito Suspensivo; Desconto de 40% SNE; Notificação em 30 dias); "CONTINUE LENDO" 3 posts. JSON-LD BlogPosting (author Organization).
- Posts existentes (15): free flow suspensas; CNH Digital recusada na blitz; Qual a diferença entre multa, infração e autuação; Como recorrer de multa gravíssima/grave/média/leve; Como recorrer da sua multa; Tudo sobre multa gravíssima/grave/média/leve; 5 razões para sempre recorrer; Tudo para recorrer da sua multa; Tudo sobre multas de trânsito. Nota histórica no corpo: plataforma "idealizada pela Loreto & Cajazeiro Advogados".

## 7. FAQ (`/faq`, alias `/plano-anual`, `/anual`)

Title: `Perguntas Frequentes e Informações de Pagamento | Smart Multas`
Hero navy: ícone "?"; H1 "Perguntas Frequentes"; sub; chips "Petição R$ 39,90 · Com documentos R$ 69,90 · Protocolo R$ 690 · PIX & Cartão Mercado Pago".

**Grupo 1 — Pagamento, Planos e Preços** ("Dúvidas sobre valores, PIX, cartões, liberação e garantia de 7 dias")
1. Quanto custa gerar uma petição de recurso? — Há três opções por petição: (1) Petição por R$ 39,90, com PDF pronto para você protocolar; (2) Petição + documentos por R$ 69,90, para anexar exames, laudos e comprovantes que a IA considera na defesa; (3) Protocolo e acompanhamento por R$ 690,00, em que protocolamos e um advogado acompanha o caso.
2. Quais são as formas de pagamento aceitas? — Todos os pagamentos são processados com segurança pelo Mercado Pago. Aceitamos PIX (com aprovação imediata e liberação instantânea do PDF), Cartão de Crédito (todas as principais bandeiras), saldo do Mercado Pago e Boleto bancário.
3. O pagamento na plataforma é seguro? — Sim, 100% seguro! Todo o checkout é intermediado diretamente pela infraestrutura certificada do Mercado Pago, com criptografia SSL de 256 bits e padrão internacional de segurança PCI-DSS. A Smart Multas não armazena nenhum dado sigiloso de cartões de crédito.
4. Em quanto tempo o recurso é liberado após o pagamento? — Nos pagamentos efetuados via PIX ou Cartão de Crédito, a aprovação ocorre em poucos segundos e o documento em PDF é liberado imediatamente na tela para download. Para boletos, a compensação bancária ocorre entre 1 e 3 dias úteis.
5. Existe garantia de reembolso se eu desistir? — Sim! Conforme estabelece o Código de Defesa do Consumidor (Art. 49), você tem até 7 dias corridos a partir da data de pagamento para exercer seu direito de arrependimento e solicitar o reembolso integral sem complicações pelo nosso suporte.
6. O que inclui a petição com documentos para IA? — Por R$ 69,90 você gera a petição e pode anexar exames, laudos e comprovantes. A IA lê esses arquivos e inclui os elementos relevantes na defesa. Depois você protocola no órgão, como na petição padrão.
7. O que inclui o serviço de protocolo e acompanhamento? — Por R$ 690,00 a equipe Smart Multas protocola o recurso, acompanha o andamento e um advogado cuida do caso. Você vê o status na plataforma. Não é necessário protocolar por conta própria.
8. Como recebo o comprovante de pagamento? — O Mercado Pago envia automaticamente o comprovante detalhado para o seu e-mail. Além disso, todas as suas petições geradas e liberadas ficam salvas e acessíveis na seção 'Minhas Petições' da sua conta.
9. Como funciona o programa 'Indique e Ganhe'? — Ao se cadastrar na Smart Multas, você recebe um link exclusivo de indicação. Quando um amigo indicado pagar uma petição na plataforma e passar o prazo legal de 7 dias, você recebe R$ 10,00 de saldo na sua carteira virtual, podendo solicitar saque mensal via PIX.

**Grupo 2 — Sobre os Recursos e a Plataforma** ("Como funciona a elaboração, protocolo e fundamentação legal da IA")
1. O que é a plataforma Smart Multas? — A Smart Multas é uma plataforma desenvolvida com inteligência artificial avançada, treinada na legislação brasileira de trânsito (CTB, resoluções do CONTRAN e jurisprudências), para elaborar defesas e recursos personalizados de alta qualidade técnica em minutos.
2. É obrigatório contratar um advogado para recorrer de uma multa? — Não! A legislação brasileira assegura a todo condutor e proprietário o direito de apresentar sua própria defesa administrativa perante o órgão autuador (Detran, PRF, DNIT, órgãos municipais) sem necessidade de advogado. Nossa IA monta a petição jurídica completa para você.
3. A Smart Multas garante que meu recurso será deferido (anulado)? — Nenhum serviço ou advogado pode garantir o resultado de um julgamento, pois a decisão final é exclusiva da autoridade de trânsito competente (JARI/CETRAN). O que a Smart Multas garante é uma defesa técnica fundamentada com as melhores teses jurídicas e legais aplicáveis ao seu caso.
4. Quais passos devo seguir após baixar a petição em PDF? — Nas opções Petição e Petição + documentos: 1) Imprimir; 2) Assinar; 3) Anexar CNH, CRLV e notificação; 4) Protocolar no órgão (presencial, portal ou Correios com AR). Se você contratou protocolo e acompanhamento, a equipe cuida do protocolo e você só acompanha o status na plataforma.
5. Por quanto tempo a plataforma armazena meus recursos? — Seus recursos gerados ficam salvos na área 'Minhas Petições' por 30 dias após a emissão para que você possa baixar novamente sempre que precisar.
6. Como entro em contato caso precise de ajuda ou suporte? — Você pode entrar em contato com nossa equipe diretamente pelo WhatsApp no número (31) 2181-2033 ou pelo e-mail contato@smartmultas.com.br.

JSON-LD FAQPage cobre só as 2 primeiras perguntas.

## 8. Sobre (`/sobre`)

Title: `Smart Multas` (genérico). Sem JSON-LD.
- H1 verde "Nosso Manifesto". Sub "Em defesa incondicional do motorista brasileiro contra a implacável indústria da multa."
- "Pela Liberdade e Seus Direitos": "O sistema de trânsito no Brasil frequentemente prioriza a arrecadação em detrimento da educação. Multas injustas, radares escondidos e autuações arbitrárias formam a famigerada "indústria da multa". / Nós acreditamos nas garantias constitucionais, na presunção da inocência e no direito inalienável da ampla defesa. Ninguém deve ser punido injustamente ou ter o seu direito de ir e vir ameaçado por falhas e abusos do sistema."
- Card navy "A Inteligência Artificial a Seu Favor": "Desde 2017, a Smart Multas tem sido o escudo do motorista brasileiro. Nossa plataforma nasceu com um propósito claro: democratizar o acesso à defesa especializada. / Hoje, nossa Inteligência Artificial analisa milhares de padrões de autuações e legislações vigentes, tornando-se mais inteligente e implacável a cada dia na elaboração de defesas consistentes e vencedoras."
- "Nossos Pilares" (4 cards): Segurança Jurídica (Amparados pelas leis de trânsito e pela Constituição Federal, garantimos defesas tecnicamente impecáveis.); Defesa do Condutor (Você não está mais sozinho contra o Estado. Nós lutamos pelo seu direito de dirigir em paz.); Inovação Constante (Algoritmos que evoluem. Uma IA treinada diariamente para identificar falhas e proteger seus direitos.); Preço Justo & Acessível (Petição por R$ 39,90, com documentos para IA por R$ 69,90, ou protocolo e acompanhamento por R$ 690, pagos via Mercado Pago.).
- Card "Transparência e Acessibilidade": "Enquanto escritórios tradicionais e despachantes cobram centenas ou milhares de reais para elaborar um recurso de trânsito, a Smart Multas utiliza a tecnologia para reduzir custos e oferecer petições de nível profissional a partir de R$ 39,90, com opção de documentos para IA por R$ 69,90 ou protocolo e acompanhamento por R$ 690,00. / Todas as operações financeiras são intermediadas diretamente pelo Mercado Pago, garantindo total segurança, liberação imediata no PIX ou Cartão de Crédito e garantia legal de reembolso em 7 dias." + box verde: Garantia Incondicional de 7 Dias · Checkout Seguro via Mercado Pago · chips PIX Instantâneo / Cartão de Crédito.

## 9. Fluxo de recurso (`/define-violation` → app)

Title genérico. Card central branco:
- Alerta azul: "Você NÃO precisa pagar a multa para recorrer: De acordo com os Arts. 284 e 286 do CTB, a Defesa Prévia e o Recurso à JARI são direitos garantidos sem exigência de pagamento prévio."
- H1 "Qual a infração cometida?" / "Envie uma foto da sua notificação para preenchimento automático com IA ou digite o código da multa."
- Box tracejado "Leitura Automática da Multa (Foto ou PDF)" / "Tire uma foto ou faça upload da carta recebida pelos Correios para preenchimento instantâneo." / botão outline laranja "☁ Escanear Notificação" (OCR → `POST /api/v1/events/ocr_scan`).
- "OU DIGITE MANUALMENTE" · "Infrações mais comuns:" chips ⚡ Velocidade (7455) 🚦 Sinal Vermelho (6050) 📱 Uso de Celular (7633) 🪑 Cinto de Segurança (5185) 🅿️ Estacionamento 🍺 Lei Seca / Bafômetro.
- Input "Código da Infração ou Palavra-chave (Ex: 7455, 745-5, sinal, velocidade)" + ajuda "Aceita código completo com ou sem hífen (ex: 7455, 745-5, 50020) ou palavras."
- Select "Pesquisar por todas as infrações do CTB..."
- "Precisa de ajuda para achar o código no DETRAN? Ver links dos DETRANs" (modal com os 27 DETRANs).
- CTA navy "Continuar com o Recurso ➤".
Etapas seguintes (rotas logadas): `/answer-violation-questions/:id` → `/analyze-defense-arguments/:id` → `/fill-personal-vehicle-info/:id` → pagamento → `/download-petition/:id`; histórico em `/user-petitions`; rastreio público `/status/:token`.

## 10. Despachantes (`/despachantes`) — tema escuro

Title genérico. Sub-header próprio: "Smart Multas / DESPACHANTE PRO" + Entrar + "Criar Conta".
- Chip "🚀 A FERRAMENTA DEFINITIVA PARA ESCRITÓRIOS DE TRÂNSITO". H1 "Multiplique os lucros do seu escritório recorrendo multas em 2 minutos." Sub: "Envie um link com a sua marca para o cliente preencher pelo celular, gerencie sua equipe de assistentes e gere petições fundamentadas com as últimas resoluções do CONTRAN e jurisprudências do STJ por apenas R$ 5,00 por recurso." CTAs "Começar Agora →" / "Calcular Meu Lucro".
- Mock: "Despachante Aliança & Soluções / CRDD-SP nº 88492 • White-Label Ativo"; KANBAN EM TEMPO REAL (Defesa Prévia (Autuação) Placa BRA2E19 🚨 Prazo: 2 dias; Pronto p/ Protocolo Placa XYZ9876 📄 PDF Gerado); "Link de Autoatendimento do Cliente: smartmultas.com.br/d/despachante-alianca".
- CALCULADORA DE RETORNO: "Veja quanto seu escritório pode lucrar" — sliders "Multas atendidas por mês" (30) e "Quanto você cobra do cliente por recurso" (R$ 150,00) → "SEU LUCRO LÍQUIDO ESTIMADO R$ 4.350,00 /mês / Faturamento: R$ 4.500 • Custo Smart Multas: R$ 150" + "Começar a Lucrar Agora".
- "Tudo o que seu escritório precisa em um só lugar" (6 cards): Link de Autoatendimento White-Label; Dono & Equipe de Assistentes; Kanban com Semáforo de Prazos; Acervo Jurídico de Ponta Atualizado (Portaria INMETRO 158/2022, Resolução CONTRAN 432/2013, Tema 1097/STJ); Petições 100% com a Sua Marca; Preço Justo e Sem Mensalidade Fixa (R$ 5,00 por petição, créditos não expiram).
- FAQ (4) com respostas (white-label total; não precisa ser advogado; carteira de créditos via PIX debitada só ao gerar PDF; pode cadastrar assistentes sem acesso ao saldo).
- CTA "Pronto para transformar multas no setor mais lucrativo do seu escritório?" → "Cadastrar Meu Escritório".

## 11. Advogados (`/advogados`) — tema escuro

Sub-header "Smart Multas / JURÍDICO PRO" + "Criar Conta Jurídica".
- Chip "SMART MULTAS JURÍDICO · ADVOCACIA EM TRÂNSITO". H1 "Escale o faturamento do seu escritório com petições forenses de trânsito em minutos." Sub: "Peças fundamentadas com súmulas do STJ/STF, resoluções do CONTRAN e normas do INMETRO. Timbre com sua OAB, link de captação white-label e Kanban completo — incluindo fase judicial — por apenas R$ 5,00 por petição." CTAs "Criar Conta Jurídica Grátis" / "Calcular Honorários".
- Mock "Silva & Associados Advocacia / OAB/SP 123.456 • Timbre Ativo"; KANBAN PROCESSUAL (Ação Judicial · Placa BRA2E19 · Prazo: 5 dias; Petição com OAB · Placa XYZ9876 · PDF Timbrado); "Link de Captação do Cliente: smartmultas.com.br/adv/silva-advogados".
- CALCULADORA DE HONORÁRIOS: 25 casos/mês × R$ 600 → "LUCRO LÍQUIDO ESTIMADO R$ 14.875,00 /mês · Faturamento R$ 15.000 • Custo R$ 125 · Projeção anual R$ 178.500,00".
- "Feito para a advocacia de trânsito" (6 cards): 100% Timbrado com sua OAB; Acervo Jurídico de Alto Nível; Kanban Administrativo + Judicial; Captação White-Label; Sociedades de Advogados; Créditos Pré-pagos.
- FAQ (4): sai com OAB e timbre; conformidade com ética OAB (Provimento 205/2021); Kanban inclui fase judicial; pagamento pré-pago R$ 5,00.
- CTA "Pronto para elevar a advocacia de trânsito do seu escritório?" → "Cadastrar Meu Escritório".

## 12. Associações / Proteção veicular (`/associacoes`, `/protecao-veicular`) — tema escuro

Sub-header "Smart Multas / PROTEÇÃO VEICULAR": Simular Lucro · Modelos de Parceria · Painel da Associação · "Cadastrar Associação".
- Chip "Solução Exclusiva para Associações de Proteção Veicular e Cooperativas". H1 "Multiplique as receitas da sua Proteção Veicular protegendo a CNH dos associados." Sub: "Ofereça recursos de multas com inteligência artificial e leitura de notificações por foto diretamente no app do seu associado. Ganhe até R$ 6,00 de lucro líquido por mês por veículo, reduza cancelamentos e zere a burocracia para sua equipe." CTAs "Cadastrar Minha Associação Grátis" / "Simular Lucro". Provas: Margem de até 60% no Add-on · Zero operadores na associação · Leitura de multa por OCR em 3s · Prevenção de CNH suspensa em sinistros.
- Mock "Clube CNH Protegida / Autoatendimento Co-Branded / ONLINE 24/7 / COMO SEU ASSOCIADO VÊ NO APP": 📸 Tire foto da notificação; OCR detectou Art. 218, II · Defesa com Portaria INMETRO 158/2022; Tempo de geração: Menos de 2 minutos; Trabalho da equipe: Zero; Protocolo no DETRAN/CDT: Instruções passo a passo; "Conhecer em 15 Minutos →".
- SIMULADOR DE RECEITA RECORRENTE: 5.000 veículos × 20% adesão × R$ 9,90/mês → "LUCRO LÍQUIDO MENSAL R$ 6.000,00 / + R$ 72.000,00 por ano" (Receita bruta R$ 9.900 · Custo Smart Multas R$ 3.900). Sugerido R$ 9,90 leves / R$ 14,90 pesados/Uber.
- FLEXIBILIDADE TOTAL — 3 modelos: (1) Add-on no Boleto [MAIS RECOMENDADO · ALTA MARGEM]: R$ 9,90/mês, lucro ~R$ 6,00 por adesão, recursos ilimitados por veículo; (2) Base Total (PMPM) [RETENÇÃO MÁXIMA]: R$ 0,75 a R$ 1,20/carro; (3) Clube de Benefícios [ZERO RISCO]: custo R$ 0, repasse R$ 10,00/petição, associado com 30% de desconto, link co-branded em 24h.
- COMPLIANCE & BLINDAGEM OPERACIONAL: 100% Amparado na CF (Art. 5º, XXXIV; Art. 282 CTB); Sem Funcionários Dedicados; Suporte Técnico e Jurídico Integrado; Integração com ERPs (Hinova SGA, SigAuto, MaxxData, MicroWork, Softia ERP, Sistemas Próprios); Disparo automatizado de e-mails (import CSV).
- FAQ (5) para diretores; CTA "Comece a proteger a CNH dos seus associados nesta semana" → "Cadastrar Associação Agora →".

## 13. API B2B (`/api-b2b`, `/desenvolvedores`, `/b2b`) — tema escuro

Sub-header "Smart Multas / B2B API & SDK": Portal do Parceiro · "Criar Conta B2B".
- Chip "API RESTful de Defesa de Multas com IA Jurídica". H1 "Ofereça Recursos de Multas via API no seu Sistema ou Aplicativo". Sub: "Envie o código da infração, receba as perguntas dinâmicas e gere petições jurídicas completas em PDF prontas para protocolo em segundos. Sem contratos fixos, com recarga pré-paga via PIX e Cartão." CTAs "Começar Integração Grátis" / "Falar com Especialista". Provas: Ambiente Sandbox · Documentação Swagger · Recarga Instantânea no PIX.
- Bloco de código com tabs CURL / JSON RETURN / NODE / PYTHON (endpoints `api.smartmultas.com.br/api/v1/partner/fines/lookup` e `/partner/petitions/direct`, Bearer `sk_live_…`), "Status: 200 OK (280ms)".
- PÚBLICOS-ALVO: Frotas & Locadoras · Despachantes & Assessorias · Apps de Mobilidade & Logtechs · Seguradoras & Proteção Veicular · Desenvolvedores & SaaS (tabs com dores/entregas; ex.: "Economia de até 85% no custo por recurso processado").
- Motor Jurídico Especializado: assertividade formal 98.7% · resposta < 300 ms · PDF A4 + JSON.
- ARQUITETURA: 01 `POST /fines/lookup` (R$ 0,50) · 02 `POST /petitions/analyze` (R$ 1,00) · 03 `POST /petitions/generate` (R$ 3,50) · One-Shot `POST /petitions/direct` (R$ 5,00).
- CALCULADORA DE ECONOMIA: 250 petições/mês → Economia anual R$ 165.000 (tradicional R$ 60–150 vs R$ 5).
- FAQ (5); CTA "Cadastrar Empresa Parceira" / "Acessar Portal do Desenvolvedor".

## 14. Legais

- `/privacy-policy` — "Política de Privacidade", atualizada 10/09/2026. 7 seções: Introdução; Informações que Coletamos (pessoais + uso); Uso; Compartilhamento, Bases Legais e Segurança (Mercado Pago; compartilhamento de e-mail com parceiros comerciais em 24/48h; compartilhamento com advogados parceiros; opt-out); Direitos; Cookies (Google AdSense); Contato contato@smartmultas.com.br.
- `/terms-of-use` — "Termos de Uso", atualizada 10/09/2026. Empresa: NOVAMENTE DESENVOLVIMENTO DE PROJETOS TECNOLÓGICOS LTDA, CNPJ 41.244.251/0001-07, Rua Valério Eugênio, 578, Areal, Conselheiro Lafaiete/MG. Seções: Como funciona; Limites de responsabilidade (não protocola, guarda 30 dias); Danos e erros (suporte contato@multas.cc); Responsabilidades; Arrependimento 7 dias; Alterações; Foro Belo Horizonte/MG; Preços (R$ 39,90 / 69,90 / 690,00), comunicações de parceiros, AdSense, marketplace jurídico.
Texto integral em `docs/raw/pages/privacy-policy.txt` e `terms-of-use.txt`.
