// Wordmark: "Óticas" pequeno e espaçado sobre "Visão" na serifa, com o símbolo de duas lentes.
export default function Logo({ tone = 'dark', className = '' }) {
  const isLight = tone === 'light'

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 40 20"
        className={`h-5 w-10 ${isLight ? 'text-accent' : 'text-accent-strong'}`}
        aria-hidden="true"
      >
        <g fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="10" cy="10" r="8.25" />
          <circle cx="30" cy="10" r="8.25" />
          <path d="M18.25 9.5c1.1-1 2.4-1 3.5 0" />
        </g>
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={`text-[0.6rem] font-medium uppercase tracking-[0.35em] ${
            isLight ? 'text-white/70' : 'text-muted'
          }`}
        >
          Óticas
        </span>{' '}
        <span className={`font-display text-2xl ${isLight ? 'text-white' : 'text-ink'}`}>
          Visão
        </span>
      </span>
    </span>
  )
}
