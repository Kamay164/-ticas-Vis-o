import { ArrowRight } from 'lucide-react'
import Button from './Button'
import Reveal from './Reveal'
import { hero, whatsappLink } from '../data/site'
import { getImageUrl } from '../data/images'

// Ilustração usada enquanto a foto do Hero não é definida.
function HeroPlaceholder() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-b from-surface to-[#e4ddd3]">
      <svg viewBox="0 0 200 80" className="w-3/5 text-accent-strong/70" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <rect x="18" y="22" width="68" height="44" rx="20" />
          <rect x="114" y="22" width="68" height="44" rx="20" />
          <path d="M86 38c8-7 20-7 28 0" />
          <path d="M18 32 4 26M182 32l14-6" />
        </g>
      </svg>
    </div>
  )
}

export default function Hero() {
  const heroSrc = getImageUrl(hero.image.name)

  return (
    <section id="inicio" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-28">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 lg:grid-cols-[1.05fr_1fr] lg:gap-16 md:px-8">
        <div className="max-w-xl">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted md:text-[13px]">
              {hero.eyebrow}
            </p>
          </Reveal>
          <h1 className="mt-5 font-display text-[2.75rem] leading-[1.05] text-ink md:text-[4rem] lg:text-[4.25rem]">
            {hero.titleStart} <em className="text-accent">{hero.titleHighlight}</em>
          </h1>
          <Reveal delay={120}>
            <p className="mt-6 max-w-md text-base text-muted md:text-[17px]">{hero.text}</p>
          </Reveal>

          <Reveal delay={240} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              href={whatsappLink(hero.primaryCta.message)}
              variant="accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} variant="outline" icon={ArrowRight}>
              {hero.secondaryCta.label}
            </Button>
          </Reveal>
        </div>

        <div className="relative mx-auto w-full max-w-[400px] lg:max-w-[460px]">
          {/* Motivo gráfico: círculos finos (lentes) atrás da imagem */}
          <svg
            viewBox="0 0 400 400"
            className="pointer-events-none absolute -top-10 -right-16 w-[115%] text-line lg:-right-24"
            aria-hidden="true"
          >
            <g fill="none" stroke="currentColor" strokeWidth="1">
              <circle cx="200" cy="200" r="190" />
              <circle cx="250" cy="170" r="140" className="text-accent/40" stroke="currentColor" />
            </g>
          </svg>

          <div className="relative aspect-[4/5] overflow-hidden rounded-t-full rounded-b-[var(--radius-media)] bg-surface">
            {heroSrc ? (
              <img
                src={heroSrc}
                alt={hero.image.alt}
                fetchPriority="high"
                style={{ objectPosition: hero.image.focus }}
                className="h-full w-full object-cover"
              />
            ) : (
              <HeroPlaceholder />
            )}
          </div>

          <Reveal
            delay={360}
            className="absolute -bottom-5 left-4 rounded-[var(--radius-card)] border border-line bg-white px-5 py-3.5 shadow-[0_8px_24px_-12px_rgba(28,27,25,0.18)] lg:-left-8"
          >
            <p className="font-display text-3xl leading-none text-ink">{hero.badge.value}</p>
            <p className="mt-1 text-sm text-muted">{hero.badge.label}</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
