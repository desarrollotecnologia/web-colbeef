interface HeroPageLabelProps {
  label: string
  className?: string
}

export function HeroPageLabel({ label, className = '' }: HeroPageLabelProps) {
  return (
    <div
      className={`inline-flex max-w-full bg-colbeef-green text-white shadow-[0_12px_40px_rgba(0,0,0,0.28)] ring-1 ring-white/15 rounded-tr-2xl sm:rounded-tr-3xl overflow-hidden ${className}`}
    >
      <div className="px-6 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6">
        <span className="font-bold uppercase leading-tight tracking-[0.14em] break-words text-lg sm:text-2xl md:text-3xl lg:text-4xl">
          {label}
        </span>
      </div>
    </div>
  )
}
