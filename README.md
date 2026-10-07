# Óticas Visão

Landing page de uma ótica **fictícia**, criada como projeto de portfólio.

## Stack

React + Vite + Tailwind CSS. Deploy na Vercel.

## Como rodar

```bash
npm install
npm run dev      # servidor local
npm run build    # gera a pasta dist
npm run lint
```

## Estrutura

- `src/data/site.js`: todos os textos e dados do negócio (fictícios)
- `src/index.css`: tokens de design (cores, fontes, raios)
- `docs/design-brief.md`: direção visual
- `referencias/`: prints de referência

## Imagens

As fotos ficam em `src/assets/images/` (WebP, JPG ou PNG) e aparecem sozinhas quando o arquivo existe. Sem o arquivo, o site mostra uma ilustração no lugar.

Nomes esperados: `hero`, `colecao-grau`, `colecao-sol`, `colecao-contato`, `colecao-infantil`, `colecao-esportivo`, `diferenciais` e `sobre`. Ajuste o texto alternativo de cada uma em `src/data/site.js` para descrever a foto escolhida.

## Créditos de imagens

Preencha conforme as fotos forem adicionadas (somente fotos com licença livre, como Unsplash ou Pexels).

| Arquivo | Autor | Fonte |
|---|---|---|
| hero | (a preencher) | (link) |

## Aviso

Nome, endereço, telefone, depoimentos e marcas são inventados. Nenhum dado real é usado.
