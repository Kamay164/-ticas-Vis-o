import { Check } from 'lucide-react'
import SectionHeading from './SectionHeading'
import ProductArt from './ProductArt'
import Reveal from './Reveal'
import { benefits } from '../data/site'
import { getImage } from '../data/images'

export default function Benefits() {
  const { eyebrow, title, highlight, titleEnd, stats, items, image } = benefits
  const photo = getImage(image.name)

  return (
    <section id="diferenciais" aria-labelledby="diferenciais-titulo" className="py-16 md:py-28">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-media)] bg-gradient-to-b from-surface to-[#e4ddd3] lg:aspect-[4/5]">
          {photo ? (
            <img
              src={photo.src}
              srcSet={photo.srcSet}
              sizes="(min-width: 1024px) 530px, 100vw"
              width={1600}
              height={1066}
              decoding="async"
              alt={image.alt}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <ProductArt type="grau" className="w-3/5 text-accent-strong/70" />
            </div>
          )}
        </Reveal>

        <div>
          <SectionHeading
            id="diferenciais-titulo"
            eyebrow={eyebrow}
            title={title}
            highlight={highlight}
            titleEnd={titleEnd}
          />

          <Reveal as="dl" delay={100} className="mt-10 grid grid-cols-3 gap-4 border-y border-line py-7">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-display text-4xl leading-none text-ink md:text-5xl">
                    {stat.value}
                  </span>
                  <span className="mt-2 block text-sm text-muted" aria-hidden="true">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </Reveal>

          <ul className="mt-8 space-y-4">
            {items.map((item, i) => (
              <Reveal as="li" key={item} delay={i * 70} className="flex items-center gap-3 text-base text-ink">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-surface">
                  <Check className="size-3.5 text-accent-strong" strokeWidth={2.25} aria-hidden="true" />
                </span>
                {item}
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
