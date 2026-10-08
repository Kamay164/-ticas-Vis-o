# Fotos do site

O site usa só os arquivos **WebP** desta pasta, em duas larguras: `nome-<largura>.webp`
(ex.: `hero-480.webp` e `hero-960.webp`). Um único `nome.webp` também funciona.
Sem arquivo para o nome, o site mostra uma ilustração no lugar.

| Nome | Formato | Larguras |
|---|---|---|
| hero | retrato 4:5 (já recortado) | 480 e 960 |
| colecao-grau, colecao-sol, colecao-contato, colecao-infantil, colecao-esportivo | 4:3 | 600 e 1200 |
| diferenciais, sobre | 3:2 | 800 e 1600 |

Para trocar uma foto: exporte em WebP (qualidade ~78) nas duas larguras, por exemplo no squoosh.app,
e ajuste o texto alternativo em `src/data/site.js`.

Os JPG originais não são usados pelo site. Guarde-os fora de `src/` (por exemplo em `fotos-originais/`,
que está no `.gitignore`) para não pesar o repositório.

Registre o crédito de cada foto no README.md do projeto.
