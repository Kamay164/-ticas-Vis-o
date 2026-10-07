import { MessageCircle } from 'lucide-react'
import SectionHeading from './SectionHeading'
import ProductArt from './ProductArt'
import Button from './Button'
import Reveal from './Reveal'
import { about, whatsappLink } from '../data/site'
import { getImageUrl } from '../data/images'

export default function About() {
  const { eyebrow, title, highlight, paragraphs, cta, image } = about
  const src = getImageUrl(image.name)

  return (
    <section id="sobre" aria-labelledby="sobre-titulo" className="bg-surface py-16 md:py-28">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <SectionHeading id="sobre-titulo" eyebrow={eyebrow} title={title} highlight={highlight} />
          <div className="mt-6 max-w-xl space-y-4 text-base text-muted md:text-[17px]">
            {paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
          <div className="mt-9">
            <Button
              href={whatsappLink()}
              variant="primary"
              icon={MessageCircle}
              target="_blank"
              rel="noopener noreferrer"
            >
              {cta}
            </Button>
          </div>
        </Reveal>

        <Reveal delay={120} className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-media)] bg-gradient-to-b from-[#f6f3ee] to-[#e4ddd3] lg:order-first">
          {src ? (
            <img src={src} alt={image.alt} loading="lazy" className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <ProductArt type="infantil" className="w-3/5 text-accent-strong/60" />
            </div>
          )}
        </Reveal>
      </div>
    </section>
  )
}
