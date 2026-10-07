// Botões em formato pílula (design-brief, seção 5).
const variants = {
  primary: 'bg-ink text-white hover:bg-accent-strong',
  accent: 'bg-accent-strong text-white hover:bg-ink',
  outline: 'border border-ink text-ink hover:bg-ink hover:text-white',
}

export default function Button({ href, variant = 'primary', icon: Icon, children, className = '', ...props }) {
  return (
    <a
      href={href}
      className={`inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full px-7 text-[15px] font-semibold transition-colors duration-200 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {Icon && <Icon className="size-4" strokeWidth={1.75} aria-hidden="true" />}
    </a>
  )
}
