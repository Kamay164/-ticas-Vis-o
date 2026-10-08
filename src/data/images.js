// Fotos otimizadas em src/assets/images/, no formato WebP e em duas larguras: nome-<largura>.webp
// (ex.: hero-480.webp e hero-960.webp). Um arquivo único "nome.webp" também funciona.
// Se não houver arquivo para o nome, o componente mostra uma ilustração no lugar.
// Os JPG originais não entram no site (não são importados aqui).
const files = import.meta.glob('../assets/images/*.webp', {
  eager: true,
  query: '?url',
  import: 'default',
})

const images = {}
for (const [path, url] of Object.entries(files)) {
  const file = path.split('/').pop().replace(/\.webp$/, '')
  const match = file.match(/^(.*)-(\d+)$/)
  const name = match ? match[1] : file
  const width = match ? Number(match[2]) : null
  ;(images[name] ??= []).push({ url, width })
}

// Retorna { src, srcSet } ou null. src é a maior versão; srcSet deixa o navegador escolher.
export function getImage(name) {
  const list = images[name]
  if (!list) return null
  const sorted = [...list].sort((a, b) => (a.width ?? 0) - (b.width ?? 0))
  const withWidth = sorted.filter((item) => item.width)
  return {
    src: sorted[sorted.length - 1].url,
    srcSet: withWidth.length > 1 ? withWidth.map((item) => `${item.url} ${item.width}w`).join(', ') : undefined,
  }
}
