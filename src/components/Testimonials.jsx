import { Star } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { testimonials } from '../data/site'

function initials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
}

export default function Testimonials() {
  const { eyebrow, title, highlight, items } = testimonials

  return (
    <section id="depoimentos" aria-labelledby="depoimentos-titulo" className="py-16 md:py-28">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <SectionHeading
          id="depoimentos-titulo"
          eyebrow={eyebrow}
          title={title}
          highlight={highlight}
          align="center"
        />

        {/* Celular: rolagem horizontal com snap. Desktop: grade de 3 colunas. */}
        <ul className="-mx-5 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 md:mx-0 md:mt-16 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map((item) => (
            <li key={item.name} className="w-[82%] shrink-0 snap-center sm:w-[60%] md:w-auto">
              <figure className="flex h-full flex-col rounded-[var(--radius-card)] border border-line bg-white p-7">
                <div className="flex gap-0.5 text-accent" role="img" aria-label="Avaliação: 5 de 5 estrelas">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} className="size-4 fill-current" strokeWidth={0} aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-ink md:text-base">
                  “{item.text}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span
                    className="flex size-10 items-center justify-center rounded-full bg-surface text-sm font-semibold text-accent-text"
                    aria-hidden="true"
                  >
                    {initials(item.name)}
                  </span>
                  <span className="text-sm font-semibold text-ink">{item.name}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
