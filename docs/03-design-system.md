# 03. Design system do site atual

Fonte: tema MUI extraído do bundle (`createTheme` em `index-Cue0YIhC.js`) + estilos computados na home renderizada + screenshots em `raw/screenshots/`.

## Cores (tema MUI)

| Token | Hex | Uso |
|---|---|---|
| primary.main | `#1E293B` | botões navy, faixa de confiança, hero escuro (ranking/blog/FAQ) |
| primary.light | `#334155` | |
| primary.dark | `#0F172A` | texto principal, hover primário, fundo da trust strip |
| secondary.main | `#D97706` | laranja: chip/CTA indicação, "Escanear Notificação", pontos na CNH |
| secondary.light / dark | `#F59E0B` / `#B45309` | |
| success.main | `#059669` | verde escuro (texto, hover) |
| success.light | `#10B981` | **verde de conversão**: CTA "Recorrer agora", plano Protocolo, palavra "minutos" |
| success.dark | `#047857` | |
| info.main | `#2563EB` | **azul**: botão "Recorrer Multa" do header, plano + documentos, links |
| info.light / dark | `#3B82F6` / `#1D4ED8` | |
| background.default | `#F8FAFC` | fundo do body |
| background.paper | `#FFFFFF` | cards |
| text.primary | `#0F172A` | |
| text.secondary | `#475569` | |
| divider | `#E2E8F0` | bordas |
| footer | `#090D16` | rodapé |
| WhatsApp | `#25D366` | FAB |
| erro/valor da multa | `#DC2626` / `#EF4444` | preço da multa em vermelho |
| tints | `#ECFDF5` (verde), `#EFF6FF` (azul), `#FEF3C7` (âmbar), `#F5F3FF` (roxo) | fundos de ícone/chip |

Paleta é a escala Tailwind slate + blue-600 + emerald-500 + amber-600. Gradientes radiais sutis no hero (verde 9% e azul 6% a 70%). Landings B2B usam tema escuro (`#0B1220`–`#111827` com cards `#1E293B`).

## Tipografia

- Família declarada: `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`. **Inter não é carregada** (sem @font-face nem Google Fonts); o navegador usa Roboto/Helvetica/Arial.
- h1: 3.5rem (56px; renderiza 61,6px na home por override), peso 800–900, letter-spacing -0.02em, line-height 1.1.
- h2: 2.75rem (44px), 800, -0.02em, lh 1.2.
- h3: 2.25rem declarado, mas cards usam 20px/800.
- h4 1.75rem/700 · h5 1.25rem/600 · h6 1.125rem/600.
- subtitle1 18px/500 `#475569` · body1 16px/400 `#334155` lh 1.6 · body2 14px `#64748B`.
- button: 600, 1rem, sem uppercase, ls 0.01em.
- Tamanhos mais frequentes na home: 12px/400, 14px/700, 12px/700, 14px/600, 20px/800.

## Raios e sombras

- `shape.borderRadius: 12`. Cards e Paper: 16px. Botões: 8px no tema, mas todos os CTAs usam pílula (`50px`/`30px`/`36px`/`40px`). Painéis grandes: 24–48px. Chips: 999px.
- Card: `0 4px 6px -1px rgb(0 0 0 / .05), 0 2px 4px -2px rgb(0 0 0 / .05)` + borda `#E2E8F0`; hover `translateY(-4px)` + sombra `0 20px 25px -5px rgb(0 0 0 / .1)`.
- Botão verde: `0 4px 14px rgba(16,185,129,.39)`; hero CTA `0 14px 32px rgba(16,185,129,.45)`; hover `0 6px 20px rgba(16,185,129,.4)`.
- Botão azul do header: `0 4px 14px rgba(37,99,235,.35)`.
- Header: `rgba(255,255,255,.94)` + `backdrop-filter: blur(12px)` + `0 4px 20px rgba(15,23,42,.04)`.

## Componentes recorrentes

- **Header** 73px: logo 40px + nome + chip "IA" + tagline; nav com ícones; "Entrar" ghost; CTA pílula azul.
- **Eyebrow chip**: pílula com fundo tint (verde/azul/âmbar) + ícone + texto uppercase 12px/700 (ex.: "FUNDAMENTAÇÃO LEGAL DO BRASIL").
- **Card de argumento** (4 col): ícone em círculo tint 56px (canto sup. esq.) + chip da lei (canto sup. dir.) + H3 20px + parágrafo 14px + linha pontilhada + rodapé uppercase colorido.
- **Card de passo** (4 col, fundo `#F8FAFC`): ícone em círculo navy + chip branco + "N. Título" + texto.
- **Tabela comparativa**: 4 colunas, última coluna com fundo verde tint e borda verde, ícones ✗ (vermelho) / — (cinza) / ✓ (verde).
- **Card de plano**: borda 2px (cinza / azul / verde), ícone tint, título + sub, label uppercase, nome do pacote em cor, lista com check colorido, botão (outline / outline azul / verde sólido), selo "★ MAIS COMPLETO".
- **Card de indicação**: borda laranja 2px, gradiente âmbar→verde, 3 mini-cards de passos, card de recompensa à direita, CTA laranja.
- **Accordion FAQ**: item com borda `#E2E8F0`, raio 16, pergunta 16px/700, chevron; item aberto com fundo `rgba(30,41,59,.03)` e borda navy.
- **Hero escuro** (ranking/blog/FAQ/multas): fundo navy `#0F172A`→`#1E293B` com textura diagonal, H1 branco 44–56px, chips translúcidos.
- **Stat card**: ícone tint + número 32px/800 + label 14px/700 + sub 12px.
- **Chip de gravidade**: Gravíssima vermelho (`#FEE2E2`/`#DC2626`), Grave laranja, Média azul, Leve verde.
- **Faixa de valores** (página de multa): 4 colunas em card cinza, label uppercase 11px + valor 20px/800 colorido.
- **WhatsApp FAB** 56px verde, fixo bottom-right 24px.
- **Sticky mobile CTA**: barra branca 96% + blur, borda superior, texto + botão verde pílula.
- **Trust strip**: fundo `#0F172A`, 4 itens com ícone colorido + título 14px/700 branco + sub 12px `#94A3B8`.
- **Footer** `#090D16`: 4 colunas (brand 1.4fr + 3), títulos 14px/700, links 14px `#CBD5E1`, chips de pagamento, ícones sociais em círculo `#1E293B`.

## Layout

- Container ~1.377px (MUI `lg` 1200 + padding) em 1440px; grid 4 col (cards), 3 col (planos, catálogo), 2 col (hero, teses).
- Seções alternam fundo branco e `#F8FAFC`; padding vertical ~96px.
- Mobile 390px: tudo em 1 coluna; hero H1 ~40px; cards de plano empilhados; tabela comparativa com scroll horizontal; sticky CTA.

## Ícones e imagens

- MUI Icons (outlined/filled) em 20–24px; emojis em chips (⚡🚦📱🍺🅿️🔍🪑).
- Única imagem própria: logo (`logomultas.webp`, placa amarela `#FACC15` com câmera preta). Blog usa fotos stock (carro/CNH/radar) do DO Spaces.
- Sem ilustrações, sem mock de produto real (o "PDF" do hero é HTML).

## Motion

- framer-motion: fade/slide-in nas seções ao entrar na viewport; hover lift em cards e botões; sticky CTA com slide-up.
- Sem preferência por `prefers-reduced-motion` observada.
