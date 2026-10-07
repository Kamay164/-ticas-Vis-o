// Padrão de título do brief: eyebrow pequeno e espaçado + título com uma palavra em itálico no destaque.
export default function SectionHeading({
  id,
  eyebrow,
  title,
  highlight,
  titleEnd,
  align = 'left',
  tone = 'dark',
  children,
}) {
  const isLight = tone === 'light'
  const centered = align === 'center'

  return (
    <div className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <p
        className={`text-xs font-medium uppercase tracking-[0.2em] md:text-[13px] ${
          isLight ? 'text-white/70' : 'text-muted'
        }`}
      >
        {eyebrow}
      </p>
      <h2
        id={id}
        className={`mt-4 font-display text-[2rem] leading-[1.1] md:text-5xl ${
          isLight ? 'text-white' : 'text-ink'
        }`}
      >
        {title} <em className="text-accent">{highlight}</em>
        {titleEnd && <> {titleEnd}</>}
      </h2>
      {children && (
        <p className={`mt-5 text-base md:text-[17px] ${isLight ? 'text-white/70' : 'text-muted'}`}>
          {children}
        </p>
      )}
    </div>
  )
}
