# Smart Multas — site estático (modelo TrivoxIA)

Landing page + páginas legais em HTML/CSS/JS puro, sem build. Fase 1 do plano em `docs/08-spec-novo-site.md`.

## Estrutura

```
index.html          landing page (JSON-LD @graph, OG, canonical)
privacidade.html    Política de Privacidade
termos.html         Termos de Uso
css/style.css       tokens em :root + componentes + responsivo (1024 / 720)
js/main.js          header, abas do demo, demo de análise, FAQ, reveal, contadores, busca
js/effects.js       text reveal, marcador, feixes animados
assets/             logo, fontes Inter (woff2), og-image.png (1200×630)
favicon.svg/.ico, icon-192.png, icon-512.png, apple-touch-icon.png
robots.txt, sitemap.xml, llms.txt, site.webmanifest
docs/               levantamento do site atual, dataset das 234 infrações, spec
```

## Constantes (troca por find/replace)

- App de recurso: `https://smartmultas.com.br/define-violation`
- Área logada: `https://smartmultas.com.br/user-petitions`
- WhatsApp: `https://wa.me/553121812033`
- Canonical/OG: `https://smartmultas.com.br/`

## Preview local

```
node -e "require('http').createServer((q,s)=>{const f=require('path').join(__dirname,decodeURIComponent(q.url.split('?')[0]).replace(/\/$/,'/index.html'));require('fs').readFile(f,(e,d)=>{s.writeHead(e?404:200);s.end(e?'404':d)})}).listen(8787)"
```

Abrir `http://localhost:8787/`. Abrir via `file://` funciona, mas bloqueia fonte e manifest por CORS.

## Fase 2 (pendente)

Catálogo `/multas/` (índice + 234 páginas geradas de `docs/data/fines.json`), `faq.html`, `sobre.html`, sitemap completo.
