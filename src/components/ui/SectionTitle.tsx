import { FadeIn } from './AnimatedSection'

interface SectionTitleProps {
  subtitle?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  light?: boolean
}

export function SectionTitle({
  subtitle,
  title,
  description,
  align = 'center',
  light = false,
}: SectionTitleProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <FadeIn className={`max-w-3xl mb-12 ${alignClass}`}>
      {subtitle && (
        <p
          className={`text-[10px] sm:text-xs md:text-sm font-semibold tracking-[0.2em] sm:tracking-[0.35em] uppercase mb-4 ${
            light ? 'text-colbeef-green-light' : 'text-colbeef-green'
          }`}
        >
          {subtitle}
        </p>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 ${
          light ? 'text-white' : 'text-colbeef-green'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-base md:text-lg leading-relaxed ${
            light ? 'text-white/80' : 'text-colbeef-gray'
          }`}
        >
          {description}
        </p>
      )}
    </FadeIn>
  )
}

export function LocationBadge({ light = false }: { light?: boolean }) {
  return (
    <p
      className={`text-[10px] sm:text-xs md:text-sm font-medium tracking-[0.2em] sm:tracking-[0.35em] uppercase ${
        light ? 'text-white/70' : 'text-colbeef-gray'
      }`}
    >
      FLORIDABLANCA / SANTANDER / COLOMBIA
    </p>
  )
}
