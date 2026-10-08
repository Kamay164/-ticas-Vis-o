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

As fotos ficam em `src/assets/images/` em WebP, com duas larguras cada (ex.: `hero-480.webp` e `hero-960.webp`), e o navegador escolhe a mais adequada (`srcset`). Detalhes em `src/assets/images/README.md`.

Na otimização (Etapa 7) as fotos foram recortadas, redimensionadas e tiveram gravações de marcas reais removidas (logotipo do óculos esportivo e escritas na haste do óculos de grau) e uma placa de loja desfocada apagada da foto "sobre". O peso total caiu de cerca de 21 MB para cerca de 430 KB.

## Fontes

Manrope e Instrument Serif, hospedadas em `public/fonts/` (licença SIL Open Font License, arquivos de licença na mesma pasta).

## SEO e compartilhamento

Título, descrição, Open Graph e imagem de compartilhamento (`public/og-image.jpg`) estão no `index.html`. A URL absoluta (canonical e `og:image`) é preenchida no build da Vercel pela variável `VERCEL_PROJECT_PRODUCTION_URL`. Para usar um domínio próprio, defina `VITE_SITE_URL` nas variáveis de ambiente do projeto na Vercel.

## Créditos de imagens

Preencha com o autor e o link de cada foto (somente fotos com licença livre, como Unsplash, Pexels ou Freepik, conforme a licença de cada uma).

| Arquivo | Autor | Fonte |
|---|---|---|
| hero | (a preencher) | (link) |
| colecao-grau | (a preencher) | (link) |
| colecao-sol | (a preencher) | (link) |
| colecao-contato | (a preencher) | (link) |
| colecao-infantil | (a preencher) | (link) |
| colecao-esportivo | (a preencher) | (link) |
| diferenciais | (a preencher) | (link) |
| sobre | (a preencher) | (link) |

## Aviso

Nome, endereço, telefone, depoimentos e marcas são inventados. Nenhum dado real é usado.
