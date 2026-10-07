import { Check } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { lenses } from '../data/site'

export default function Lenses() {
  const { eyebrow, title, highlight, text, items, closingStart, closingHighlight } = lenses

  return (
    <section
      id="lentes"
      aria-labelledby="lentes-titulo"
      className="relative overflow-hidden bg-ink py-16 md:py-28"
    >
      {/* Motivo gráfico: círculos finos de lente */}
      <svg
        viewBox="0 0 400 400"
        className="pointer-events-none absolute -right-32 -bottom-40 w-[28rem] text-white/10 md:-right-20 md:w-[40rem]"
        aria-hidden="true"
      >
        <g fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="200" cy="200" r="190" />
          <circle cx="150" cy="230" r="120" className="text-accent/60" />
        </g>
      </svg>

      <div className="relative mx-auto max-w-[1200px] px-5 text-center md:px-8">
        <SectionHeading
          id="lentes-titulo"
          eyebrow={eyebrow}
          title={title}
          highlight={highlight}
          align="center"
          tone="light"
        >
          {text}
        </SectionHeading>

        <ul className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3 md:mt-14">
          {items.map((item) => (
            <li
              key={item}
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-ink"
            >
              <Check className="size-4 text-accent-strong" strokeWidth={2} aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-12 font-display text-2xl text-white md:mt-16 md:text-4xl">
          {closingStart} <em className="text-accent">{closingHighlight}</em>
        </p>
      </div>
    </section>
  )
}
