import { AtSign, MapPin, MessageCircle, Phone } from 'lucide-react'
import Logo from './Logo'
import { contact, footer, navLinks, site, whatsappLink } from '../data/site'

const year = new Date().getFullYear()

export default function Footer() {
  const { address } = contact

  const contactItems = [
    {
      icon: MapPin,
      label: `${address.street} – ${address.district}, ${address.city} – ${address.state}`,
    },
    { icon: Phone, label: contact.phone, href: contact.phoneHref },
    { icon: MessageCircle, label: 'WhatsApp', href: whatsappLink(), external: true },
    { icon: AtSign, label: contact.instagram, href: contact.instagramUrl },
  ]

  return (
    <footer className="bg-ink text-white/70">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-5 py-16 md:grid-cols-[1.4fr_1fr_1.4fr] md:px-8 md:py-20">
        <div>
          <Logo tone="light" />
          <p className="mt-5 max-w-xs text-sm">{footer.about}</p>
        </div>

        <nav aria-label="Rodapé">
          <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-white">Navegação</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-white">Contato</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {contactItems.map(({ icon: Icon, label, href, external }) => (
              <li key={label} className="flex items-start gap-3">
                <Icon className="mt-0.5 size-4 shrink-0 text-accent" strokeWidth={1.5} aria-hidden="true" />
                {href ? (
                  <a
                    href={href}
                    className="transition-colors hover:text-white"
                    {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
                  >
                    {label}
                  </a>
                ) : (
                  <span>{label}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-2 px-5 py-6 text-xs md:flex-row md:justify-between md:px-8">
          <p>
            © {year} {site.name}, {footer.disclaimer}
          </p>
          <p>Desenvolvido por {footer.developer}</p>
        </div>
      </div>
    </footer>
  )
}
