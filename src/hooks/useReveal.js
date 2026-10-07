import { useEffect, useRef } from 'react'

// Marca o elemento com data-revealed="true" quando ele entra na tela (uma única vez).
// Altera o atributo direto no DOM (sem re-render). Com "reduzir movimento" ativado,
// ou sem IntersectionObserver, o elemento já aparece revelado.
export default function useReveal({ threshold = 0.15, rootMargin = '0px 0px -8% 0px' } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion || !('IntersectionObserver' in window)) {
      el.dataset.revealed = 'true'
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Também revela quem já ficou para trás (ex.: rolagem muito rápida ou link de âncora),
        // para não sobrar bloco invisível acima da tela.
        const passed = entry.boundingClientRect.top < 0
        if (entry.isIntersecting || passed) {
          el.dataset.revealed = 'true'
          observer.disconnect()
        }
      },
      { threshold, rootMargin },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return ref
}
