# Design brief: Óticas Visão

Etapa 1, aguardando aprovação. Todos os dados do negócio são fictícios.

## 1. O que a referência (Ótica Lumme) ensina

Fonte: `referencias/` (print da página no Behance). O que vale **absorver**, sem copiar:

- **Cores:** quase toda a página em neutros (branco, cinzas claros, grafite, preto) e uma única cor de destaque terrosa (taupe `#887F6E`).
- **Tipografia:** uma fonte sem serifa geométrica para o texto e uma serifa display em itálico para frases de impacto, como em "os óculos *certos*".
- **Espaço:** muito espaço em branco, blocos centralizados e seções alternando fundo branco e cinza bem claro.
- **Imagens:** retrato com óculos sobre fundo claro, e produto em pedestal branco com luz suave (still de estúdio).
- **Elementos:** botões retangulares sólidos, chips com ícone de check, cards de depoimento em cor de destaque, rodapé em faixa de destaque.

O que **não** vamos repetir: logotipo, ícones de estrela/brilho, textos, nomes de modelos, paleta exata, fonte IvyPresto, banner de 30% OFF e vitrine com botão "Comprar".

## 2. Identidade

- **Nome:** Óticas Visão.
- **Logotipo:** wordmark em texto: "Óticas" na sans, pequeno e espaçado, sobre "Visão" na serifa. Ao lado vai um símbolo simples de dois círculos finos (lentes). Feito em SVG/CSS, sem imagem.
- **Local fictício:** bairro de Lourdes, Belo Horizonte, MG.
- **Tom de voz:** acolhedor, claro e profissional. Usa "você", frases curtas e nada de exagero. Promete cuidado e orientação, nunca diagnóstico.

## 3. Paleta: neutros com destaque areia/caramelo

| Token | Hex | Uso |
|---|---|---|
| `bg` | `#FAF8F5` | Fundo principal (off-white quente) |
| `surface` | `#EFEBE5` | Seções alternadas, cards |
| `white` | `#FFFFFF` | Cards sobre `surface`, header |
| `ink` | `#1C1B19` | Texto principal, botão primário, rodapé |
| `muted` | `#6B6862` | Texto secundário |
| `line` | `#DDD7CF` | Bordas e divisores |
| `accent` | `#A6845C` | Detalhes decorativos, ícones, palavras em destaque grandes |
| `accent-strong` | `#8A6A45` | Botão de destaque (texto branco) |
| `accent-text` | `#7A5C3B` | Links e textos pequenos em destaque |

Contraste (WCAG) conferido:
- `ink` sobre `bg`: 16,2:1.
- `muted` sobre `bg`: 5,2:1.
- `muted` sobre `surface`: 4,7:1.
- Branco sobre `accent-strong`: 5,0:1.
- `accent-text` sobre `bg`: 5,8:1.

**Regra:** `accent` (3,3:1) só aparece em decoração ou em texto grande (24px ou mais); nunca em texto pequeno.

## 4. Tipografia (Google Fonts, gratuitas)

- **Texto e interface:** **Manrope** (400, 500, 600). Sem serifa moderna e próxima do clima da Poppins, mas diferente dela.
- **Display:** **Instrument Serif** (regular e itálico), para títulos e palavras de destaque em itálico.

| Estilo | Fonte | Mobile / Desktop |
|---|---|---|
| H1 | Instrument Serif | 40px / 64px, altura de linha 1,05 |
| H2 | Instrument Serif | 32px / 48px |
| H3 | Manrope 600 | 18px / 20px |
| Eyebrow (rótulo acima do título) | Manrope 500, MAIÚSCULAS, espaçamento 0,2em | 12px / 13px |
| Corpo | Manrope 400 | 16px / 17px, altura de linha 1,6 |
| Botão | Manrope 600 | 15px |

Padrão de título: eyebrow pequeno e espaçado, seguido do título com **uma** palavra-chave em itálico na cor `accent`. Exemplo: "Lentes que fazem *diferença*".

## 5. Layout e componentes

- **Grid e espaço:**
  - Container de largura máxima 1200px, com margem lateral de 20px no celular e 32px no desktop.
  - Seções com 64px de espaço vertical no celular e 112px no desktop.
  - Fundos alternando `bg` e `surface`.
- **Botões** em formato pílula (diferente da Lumme):
  - Primário: `ink` com texto branco.
  - Destaque: `accent-strong`.
  - Secundário: contorno `ink`.
  - Altura de 48px e foco visível.
- **Imagens:** cantos arredondados de 24px, e o retrato do Hero com o topo em arco (formato de lente).
- **Cards:** fundo branco, borda `line`, cantos de 16px e sem sombra pesada. No hover, a borda fica `accent` e a imagem dá um zoom leve.
- **Chips de tecnologia:** pílula branca com ícone de check em `accent`.
- **Motivo gráfico:** círculos finos (1px, `line`/`accent`) atrás do retrato e nos cantos de algumas seções. É o "rastro" das lentes e substitui as estrelas da Lumme.
- **Ícones:** lucide-react, traço de 1,5.
- **Animação** (Etapa 6): fade + subida de 16px, 600ms, ease-out, com escalonamento de 80ms entre itens. Desligada com `prefers-reduced-motion`.

## 6. Seções e rascunho de textos (ordem da página)

1. **Header fixo:** logotipo, links (Coleções, Lentes, Sobre, Contato) e botão "Fale no WhatsApp". No celular, menu hambúrguer em tela cheia.
2. **Hero** (fundo `bg`, texto à esquerda e retrato à direita):
   - Eyebrow: "Ótica em Lourdes · BH".
   - H1: "Enxergue com clareza. *Viva com estilo.*"
   - Texto: "Armações selecionadas, lentes de alta tecnologia e um atendimento que começa ouvindo você."
   - Botões: "Agendar pelo WhatsApp" (destaque) e "Ver coleções" (secundário).
   - Selo: "15 anos cuidando do seu olhar".
3. **Coleções** (`surface`):
   - Título: "Encontre o seu *estilo*".
   - Cinco cards: Óculos de grau, Óculos de sol, Lentes de contato, Infantil, Esportivo. Cada card tem foto, uma linha de descrição e o link "Quero ver modelos", que abre o WhatsApp com a categoria na mensagem.
4. **Lentes e tecnologias** (`ink`, texto claro; é o bloco escuro da página, como o card cinza da Lumme):
   - Título: "Lentes que fazem *diferença*".
   - Chips: Multifocais, Antirreflexo, Filtro de luz azul, Fotossensíveis, Proteção UV, Polarizadas.
   - Frase final: "Mais do que corrigir, *cuidar da sua visão*."
5. **Por que a Óticas Visão** (`bg`, still de produto + lista):
   - Números de exemplo: +800 modelos, +30 marcas e 15 anos.
   - Lista: Atendimento personalizado, Ajuste de armação gratuito, Orientação na escolha das lentes, Garantia de adaptação, Parcelamento facilitado.
6. **Marcas** (`surface`): faixa de 6 nomes fictícios em texto (ex.: Arco, Linea, Nórdica, Halo, Vértice, Brisa), em cinza, ficando escuros no hover. Na Etapa 4, conferir que nenhum nome é marca real de óculos.
7. **Depoimentos** (`bg`): título "Quem já *enxerga melhor*". São 3 cards com nome fictício, 5 estrelas e um texto curto. No celular, rolagem horizontal com scroll-snap, sem biblioteca. No `site.js`, os depoimentos ficam marcados como exemplos.
8. **Sobre o espaço** (`surface`, foto da loja + texto):
   - Título: "Um espaço feito para *você ficar à vontade*".
   - Texto sobre o atendimento sem pressa, com café e ajuda para escolher a armação.
9. **Visite-nos** (`bg`):
   - Endereço fictício: Rua da Clareza, 120 – Lourdes, Belo Horizonte – MG.
   - Mapa (iframe sem chave de API) centralizado no bairro de Lourdes.
   - Horários: Seg a Sex das 9h às 19h, Sáb das 9h às 14h, Dom fechado.
   - Telefone (31) 90000-0000 e botão de WhatsApp.
10. **Rodapé** (`ink`): logotipo claro, links das seções, Instagram (placeholder), "© 2026 Óticas Visão, marca fictícia criada para portfólio" e crédito do desenvolvedor.

**Botão flutuante de WhatsApp:** canto inferior direito, círculo `accent-strong` com `aria-label`. Mensagem padrão: "Olá! Vim pelo site e gostaria de atendimento."

O número de WhatsApp é fictício, então o link abre o WhatsApp mas não conversa com ninguém real. Isso fica registrado no README.

## 7. Imagens necessárias (Unsplash/Pexels, licença livre)

O plano final de quais fotos usar será mostrado antes de baixar, e todas terão crédito no README.

1. **Hero:** retrato de pessoa usando óculos de grau, fundo claro e neutro, luz suave, formato vertical.
2. **Coleções** (5 fotos de produto, mesma linguagem visual):
   - Armação de grau.
   - Óculos de sol.
   - Lentes de contato e estojo.
   - Óculos infantil colorido (só o produto, sem foto de criança).
   - Óculos esportivo.
3. **Diferenciais:** still de armação sobre superfície ou pedestal claro.
4. **Sobre:** interior de loja/ótica claro e organizado, sem marcas visíveis.
5. **Open Graph** (Etapa 7): composição com o logotipo e a foto do Hero.

Formato final WebP, com largura máxima de 1600px para o Hero e 800px para os cards.

## 8. Fora do escopo (confirmado)

Vitrine com botão de compra, banner de promoção, formulário de agendamento, preços, convênios, blog, FAQ.
