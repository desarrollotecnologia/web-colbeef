import { motion } from 'framer-motion'
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Cog,
  Satellite,
  Shield,
  Snowflake,
  Truck,
  type LucideIcon,
} from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatedSection, FadeIn } from '../ui/AnimatedSection'

interface CalidadCard {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

const cards: CalidadCard[] = [
  {
    id: 'trazabilidad',
    title: 'Trazabilidad Total',
    description:
      'Seguimiento individual de cada canal desde el beneficio hasta la distribución.',
    icon: Satellite,
  },
  {
    id: 'tecnologia',
    title: 'Tecnología Industrial',
    description:
      'Infraestructura moderna diseñada bajo estándares internacionales.',
    icon: Cog,
  },
  {
    id: 'inocuidad',
    title: 'Inocuidad Alimentaria',
    description:
      'Procesos controlados que garantizan productos seguros y confiables.',
    icon: Shield,
  },
  {
    id: 'frio',
    title: 'Cadena de Frío',
    description:
      'Conservación óptima para mantener la frescura y calidad del producto.',
    icon: Snowflake,
  },
  {
    id: 'logistica',
    title: 'Logística Eficiente',
    description: 'Operación ágil que optimiza la recepción y el despacho.',
    icon: Truck,
  },
  {
    id: 'inspeccion',
    title: 'Inspección Permanente',
    description:
      'Procesos supervisados conforme a la normativa sanitaria vigente.',
    icon: CheckCircle2,
  },
]

const CARD_BG = '#289B38'

function FlipCard({
  card,
  flipped,
  onToggle,
  hoverFlip,
}: {
  card: CalidadCard
  flipped: boolean
  onToggle: () => void
  hoverFlip: boolean
}) {
  const Icon = card.icon

  return (
    <button
      type="button"
      onClick={onToggle}
      className={`group relative w-full h-[220px] sm:h-[240px] md:h-[260px] [perspective:1000px] text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-xl ${
        hoverFlip ? 'md:cursor-default' : ''
      }`}
      aria-label={`${card.title}. ${flipped ? 'Mostrar título' : 'Mostrar detalle'}`}
      aria-pressed={flipped}
    >
      <div
        className={`relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] ${
          flipped ? '[transform:rotateY(180deg)]' : ''
        } ${hoverFlip ? 'md:group-hover:[transform:rotateY(180deg)]' : ''}`}
      >
        {/* Frente */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-white/35 px-4 py-6 [backface-visibility:hidden]"
          style={{ backgroundColor: CARD_BG }}
        >
          <Icon className="w-9 h-9 sm:w-10 sm:h-10 text-white" strokeWidth={1.5} />
          <p className="text-white text-sm sm:text-base font-semibold text-center leading-snug px-2">
            {card.title}
          </p>
        </div>

        {/* Reverso */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-white/35 px-5 py-6 [backface-visibility:hidden] [transform:rotateY(180deg)]"
          style={{ backgroundColor: CARD_BG }}
        >
          <Icon className="w-7 h-7 text-white/90" strokeWidth={1.5} />
          <p className="text-white text-sm sm:text-base font-bold text-center leading-snug">
            {card.title}
          </p>
          <p className="text-white/90 text-xs sm:text-sm text-center leading-relaxed">
            {card.description}
          </p>
        </div>
      </div>
    </button>
  )
}

export function BeneficioCalidadCardsSection() {
  const [flippedIds, setFlippedIds] = useState<Set<string>>(new Set())
  const [activeIndex, setActiveIndex] = useState(0)
  const [isDesktop, setIsDesktop] = useState(false)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const update = () => setIsDesktop(window.matchMedia('(min-width: 1024px)').matches)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const toggleFlip = useCallback((id: string) => {
    setFlippedIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }, [])

  const goTo = useCallback((index: number) => {
    const next = (index + cards.length) % cards.length
    setActiveIndex(next)
    const track = trackRef.current
    if (!track) return
    const child = track.children[next] as HTMLElement | undefined
    child?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }, [])

  useEffect(() => {
    if (isDesktop) return
    const track = trackRef.current
    if (!track) return

    const onScroll = () => {
      const children = Array.from(track.children) as HTMLElement[]
      if (!children.length) return
      const center = track.scrollLeft + track.clientWidth / 2
      let closest = 0
      let minDist = Infinity
      children.forEach((child, i) => {
        const childCenter = child.offsetLeft + child.offsetWidth / 2
        const dist = Math.abs(childCenter - center)
        if (dist < minDist) {
          minDist = dist
          closest = i
        }
      })
      setActiveIndex(closest)
    }

    track.addEventListener('scroll', onScroll, { passive: true })
    return () => track.removeEventListener('scroll', onScroll)
  }, [isDesktop])

  return (
    <AnimatedSection className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <FadeIn className="text-center mb-10 md:mb-12">
          <h2 className="text-colbeef-dark text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
            Comprometidos con la calidad en cada etapa
          </h2>
        </FadeIn>

        {/* Desktop: 6 cards */}
        <div className="hidden lg:grid lg:grid-cols-6 gap-4 xl:gap-5">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.4 }}
            >
              <FlipCard
                card={card}
                flipped={flippedIds.has(card.id)}
                onToggle={() => toggleFlip(card.id)}
                hoverFlip
              />
            </motion.div>
          ))}
        </div>

        {/* Mobile / tablet: carousel */}
        <div className="lg:hidden relative">
          <div
            ref={trackRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-8"
          >
            {cards.map((card) => (
              <div
                key={card.id}
                className="snap-center shrink-0 w-[78%] sm:w-[55%] max-w-[320px]"
              >
                <FlipCard
                  card={card}
                  flipped={flippedIds.has(card.id)}
                  onToggle={() => toggleFlip(card.id)}
                  hoverFlip={false}
                />
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => goTo(activeIndex - 1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full border border-colbeef-green/30 bg-white text-colbeef-green shadow-sm flex items-center justify-center"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => goTo(activeIndex + 1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full border border-colbeef-green/30 bg-white text-colbeef-green shadow-sm flex items-center justify-center"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="flex justify-center gap-2 mt-5">
            {cards.map((card, index) => (
              <button
                key={card.id}
                type="button"
                onClick={() => goTo(index)}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex ? 'w-6 bg-colbeef-green' : 'w-2 bg-colbeef-green/30'
                }`}
                aria-label={`Ir a ${card.title}`}
              />
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
