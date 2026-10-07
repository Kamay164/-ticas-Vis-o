import useReveal from '../hooks/useReveal'

// Envolve um bloco e aplica a animação de entrada (fade + subida de 16px).
// `as` troca a tag (ex.: "li", "ul"); `delay` (ms) escalona itens vizinhos.
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', style, children, ...props }) {
  const ref = useReveal()

  return (
    <Tag
      ref={ref}
      data-reveal=""
      className={className}
      style={delay ? { ...style, '--reveal-delay': `${delay}ms` } : style}
      {...props}
    >
      {children}
    </Tag>
  )
}
