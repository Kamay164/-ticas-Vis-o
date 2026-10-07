// Fotos opcionais: coloque os arquivos em src/assets/images/ com o nome indicado em site.js
// (ex.: hero.webp, colecao-grau.jpg). Se o arquivo não existir, o componente mostra uma ilustração.
const files = import.meta.glob('../assets/images/*.{webp,avif,jpg,jpeg,png}', {
  eager: true,
  query: '?url',
  import: 'default',
})

const byName = Object.fromEntries(
  Object.entries(files).map(([path, url]) => [path.split('/').pop().replace(/\.[^.]+$/, ''), url]),
)

export function getImageUrl(name) {
  return byName[name] ?? null
}
