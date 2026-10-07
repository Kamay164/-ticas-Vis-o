// Ilustrações de traço usadas no lugar das fotos até o plano de imagens ser aprovado.
const art = {
  grau: (
    <>
      <rect x="22" y="30" width="62" height="42" rx="18" />
      <rect x="116" y="30" width="62" height="42" rx="18" />
      <path d="M84 46c10-7 22-7 32 0M22 40 6 34M178 40l16-6" />
    </>
  ),
  sol: (
    <>
      <path d="M22 34h64c0 22-10 38-32 38S22 56 22 34Z" fill="currentColor" fillOpacity=".18" />
      <path d="M114 34h64c0 22-10 38-32 38s-32-16-32-38Z" fill="currentColor" fillOpacity=".18" />
      <path d="M86 42c9-6 19-6 28 0M22 38 6 32M178 38l16-6" />
    </>
  ),
  contato: (
    <>
      <circle cx="100" cy="50" r="40" />
      <circle cx="100" cy="50" r="28" />
      <path d="M78 36c5-8 13-12 22-12" />
    </>
  ),
  infantil: (
    <>
      <circle cx="52" cy="52" r="26" />
      <circle cx="148" cy="52" r="26" />
      <path d="M78 48c14-8 30-8 44 0M26 46 8 40M174 46l18-6" />
    </>
  ),
  esportivo: (
    <>
      <path d="M16 38c30-14 138-14 168 0-2 20-14 34-34 34-16 0-26-8-32-14-4-4-14-4-18 0-6 6-16 14-32 14-20 0-32-14-52-34Z" />
      <path d="M100 52V40" />
    </>
  ),
}

export default function ProductArt({ type = 'grau', className = '' }) {
  return (
    <svg
      viewBox="0 0 200 100"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {art[type] ?? art.grau}
    </svg>
  )
}
