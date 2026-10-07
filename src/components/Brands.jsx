import SectionHeading from './SectionHeading'
import { brands } from '../data/site'

export default function Brands() {
  const { eyebrow, title, highlight, items } = brands

  return (
    <section id="marcas" aria-labelledby="marcas-titulo" className="bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <SectionHeading
          id="marcas-titulo"
          eyebrow={eyebrow}
          title={title}
          highlight={highlight}
          align="center"
        />

        <ul className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 text-center sm:grid-cols-3 lg:grid-cols-6 md:mt-14">
          {items.map((name) => (
            <li
              key={name}
              className="font-display text-3xl text-muted/80 transition-colors duration-300 hover:text-ink md:text-4xl"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
