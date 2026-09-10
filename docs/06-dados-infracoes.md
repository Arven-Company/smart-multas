# 06. Dataset das infrações (catálogo `/multas`)

Origem: chunk `finesData-D_qDQiJV.js` (580 KB) embutido no bundle do site. Não vem de API. Extraído e convertido para `docs/data/fines.json` (array de 234 objetos).

## Esquema de cada infração

| Campo | Tipo | Exemplo |
|---|---|---|
| `slug` | string | `velocidade-ate-20-7455` (14 curados) ou `dirigir-veiculo-sem-possuir-carteira-naci-50100` (gerado) |
| `code` | string | `7455`, `50100` |
| `name` | string | Nome completo da infração |
| `title` | string | "Recurso de Multa por … (Art. 162 I)" |
| `ctbArticle` | string | "Art. 218, I do CTB" |
| `severity` | enum | Leve · Média · Grave · Gravíssima |
| `points` | number | 3, 4, 5, 7 (um caso com 0) |
| `fineValue` | string | "R$ 130,16" |
| `canConvertToWarning` | boolean | true para leves/médias |
| `category` | enum | 8 categorias (abaixo) |
| `shortDesc` | string | Resumo para card do catálogo |
| `fullDesc` | string | Parágrafo do hero da página |
| `legalDefenses[]` | `{title, law, description}` | Teses (3 a 4 por infração) |
| `faqs[]` | `{question, answer}` | 2 perguntas por infração |

## Estatísticas

- Total: 234 infrações.
- Gravidade: Gravíssima 81 · Grave 64 · Média 69 · Leve 20.
- Pontos: 7 → 81 · 5 → 64 · 4 → 68 · 3 → 20 · 0 → 1.
- Conversível em advertência: 89 sim · 145 não.
- Categorias: Circulação e Preferência 65 · Segurança 40 · Habilitação e Veículo 39 · Estacionamento 30 · Equipamentos e Carga 22 · Velocidade 18 · Sinalização 16 · Álcool e Drogas 4.
- Valores: R$ 88,38 (20) · R$ 130,16 (69) · R$ 195,23 (64) · R$ 293,47 (49) · R$ 586,94 (1) · R$ 880,41 (7) · R$ 1.467,35 (14) · R$ 2.934,70 (8) · R$ 5.869,40 (1) · R$ 17.608,20 (1).
- Teses distintas: 47. As 4 mais usadas cobrem quase tudo: Decadência do Prazo Notificatório (Art. 281, II) em 220; Garantia do Contraditório e Ampla Defesa em 134; Inconsistência e Falhas Formais no Auto em 106; Conversão Obrigatória em Advertência por Escrito em 86. Teses específicas: Radar sem Aferição INMETRO (18), Margem de Erro do Medidor (17), Sinalização R-6 (29), Sinal Amarelo (28), Etilômetro sem calibração (1), etc.
- FAQs seguem 3 templates: "Preciso pagar a multa de R$ X antes de recorrer?", "Quais são as chances de anular a multa do Art. X?", "Posso converter esta multa de … em advertência?".

## 14 páginas curadas (no sitemap, slug curto)

| Slug | Código | Infração |
|---|---|---|
| velocidade-ate-20-7455 | 7455 | Velocidade até 20% (Art. 218, I) — Média, 4 pts, R$ 130,16 |
| velocidade-20-a-50-7463 | 7463 | Velocidade 20% a 50% — Grave, 5 pts, R$ 195,23 |
| velocidade-acima-50-7471 | 7471 | Velocidade acima de 50% — Gravíssima ×3, 7 pts, R$ 880,41 |
| avanco-sinal-vermelho-6050 | 6050 | Avanço de sinal vermelho |
| celular-ao-volante-7633 | 7633 | Uso de celular ao volante |
| cinto-de-seguranca-5185 | 5185 | Falta de cinto |
| lei-seca-bafometro-165 | 165 | Lei Seca / bafômetro (Art. 165 e 165-A) |
| estacionamento-rotativo-5541 | 5541 | Estacionamento rotativo / Zona Azul |
| cnh-vencida-5045 | 5045 | CNH vencida |
| estacionar-na-contramao-5525 | 5525 | Estacionar na contramão |
| transitar-pela-contramao-5720 | 5720 | Transitar na contramão |
| motocicleta-sem-capacete-7030 | 7030 | Moto sem capacete |
| pelicula-insulfilm-irregular-6700 | 6700 | Película / insulfilm irregular |
| farois-apagados-7064 | 7064 | Faróis apagados |

As outras 220 páginas existem (`/multas/<slug>`) mas não estão no sitemap.

## Lookup

Função `g(str)`: normaliza a busca (`lowercase`, remove tudo exceto `a-z0-9-`) e retorna a primeira infração cujo `slug` ou `code` seja igual, ou cujo slug contenha a busca, ou cuja busca contenha o código.

## Links dos DETRANs (modal em `/define-violation`)

27 estados, formato `http://www.detran.<uf>.gov.br/` (MG usa https). Lista completa em `docs/raw/pages/define-violation.json` não inclui o modal; os pares estado/link foram extraídos do chunk `DetransWithLinks`: AC, AL, AP, AM, BA, CE, DF, ES, GO, MA, MT, MS, MG, PA, PB, PR, PE, PI, RJ, RN, RS, RO, RR, SC, SP, SE, TO.
