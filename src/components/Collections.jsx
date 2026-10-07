import { ArrowUpRight } from 'lucide-react'
import SectionHeading from './SectionHeading'
import ProductArt from './ProductArt'
import { collectionMessage, collections, whatsappLink } from '../data/site'

// 3 cards na primeira linha e 2 maiores na segunda (desktop).
const spans = [
  'lg:col-span-2',
  'lg:col-span-2',
  'lg:col-span-2',
  'lg:col-span-3',
  'sm:col-span-2 lg:col-span-3',
]

// O último card ocupa a linha toda no tablet: imagem mais baixa para não ficar gigante.
const mediaAspect = ['', '', '', '', 'sm:max-lg:aspect-[16/7]']

export default function Collections() {
  const { eyebrow, title, highlight, linkLabel, items } = collections

  return (
    <section id="colecoes" aria-labelledby="colecoes-titulo" className="bg-surface py-16 md:py-28">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <SectionHeading
          id="colecoes-titulo"
          eyebrow={eyebrow}
          title={title}
          highlight={highlight}
        />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-6 md:mt-16 md:gap-6">
          {items.map((item, i) => (
            <li key={item.id} className={spans[i] ?? ''}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-white transition-colors duration-300 focus-within:border-accent hover:border-accent">
                <div
                  className={`relative aspect-[4/3] overflow-hidden bg-gradient-to-b from-surface to-[#e4ddd3] ${mediaAspect[i] ?? ''}`}
                >
                  {item.image ? (
                    <img
                      src={item.image.src}
                      alt={item.image.alt}
                      width={item.image.width}
                      height={item.image.height}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center transition-transform duration-500 group-hover:scale-105">
                      <ProductArt type={item.art} className="w-1/2 text-accent-strong/70" />
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold text-ink md:text-xl">{item.name}</h3>
                  <p className="mt-2 text-[15px] text-muted">{item.text}</p>
                  <a
                    href={whatsappLink(collectionMessage(item.name))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-text after:absolute after:inset-0"
                  >
                    {linkLabel}
                    <span className="sr-only">: {item.name}</span>
                    <ArrowUpRight
                      className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
