import { Clock, ExternalLink, MapPin, MessageCircle, Phone } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Button from './Button'
import Reveal from './Reveal'
import { contact, hours, location, whatsappLink } from '../data/site'

export default function Location() {
  const { eyebrow, title, highlight, text, hoursTitle, map } = location
  const { address } = contact
  const mapQuery = encodeURIComponent(map.query)
  const mapEmbedUrl = `https://maps.google.com/maps?q=${mapQuery}&z=${map.zoom}&hl=pt-BR&output=embed`
  const mapLinkUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`

  return (
    <section id="contato" aria-labelledby="contato-titulo" className="py-16 md:py-28">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <SectionHeading id="contato-titulo" eyebrow={eyebrow} title={title} highlight={highlight}>
          {text}
        </SectionHeading>

        <div className="mt-12 grid gap-10 md:mt-16 lg:grid-cols-[1fr_1.25fr] lg:gap-14">
          <Reveal className="space-y-8">
            <address className="space-y-4 not-italic">
              <p className="flex items-start gap-3 text-base text-ink">
                <MapPin className="mt-1 size-5 shrink-0 text-accent-strong" strokeWidth={1.5} aria-hidden="true" />
                <span>
                  {address.street}
                  <br />
                  {address.district}, {address.city} – {address.state}
                </span>
              </p>
              <p className="flex items-center gap-3 text-base">
                <Phone className="size-5 shrink-0 text-accent-strong" strokeWidth={1.5} aria-hidden="true" />
                <a href={contact.phoneHref} className="text-ink underline-offset-4 hover:underline">
                  {contact.phone}
                </a>
              </p>
            </address>

            <div>
              <h3 className="flex items-center gap-3 text-base font-semibold text-ink">
                <Clock className="size-5 text-accent-strong" strokeWidth={1.5} aria-hidden="true" />
                {hoursTitle}
              </h3>
              <table className="mt-4 w-full text-left text-[15px]">
                <caption className="sr-only">{hoursTitle}</caption>
                <tbody className="divide-y divide-line border-y border-line">
                  {hours.map((row) => (
                    <tr key={row.days}>
                      <th scope="row" className="py-3 pr-4 font-normal text-muted">
                        {row.days}
                      </th>
                      <td className="py-3 text-right font-medium text-ink">{row.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Button
              href={whatsappLink()}
              variant="accent"
              icon={MessageCircle}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              Falar pelo WhatsApp
            </Button>
          </Reveal>

          <Reveal delay={120}>
            <div className="aspect-[4/3] overflow-hidden rounded-[var(--radius-media)] border border-line bg-surface lg:aspect-auto lg:h-full lg:min-h-[440px]">
              <iframe
                title={map.title}
                src={mapEmbedUrl}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="h-full w-full border-0 [filter:grayscale(.35)_contrast(.95)]"
              />
            </div>
            <a
              href={mapLinkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-text"
            >
              {map.linkLabel}
              <ExternalLink className="size-3.5" strokeWidth={1.75} aria-hidden="true" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
