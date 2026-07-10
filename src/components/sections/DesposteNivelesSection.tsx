import { motion } from 'framer-motion'
import { Check, ChevronLeft, ChevronRight } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatedSection, FadeIn } from '../ui/AnimatedSection'

interface DesposteNivel {
  id: string
  number: string
  title: string
  subtitle: string
  description: string
  includes: string[]
  result: string
  image: string
}

const niveles: DesposteNivel[] = [
  {
    id: 'tipo-1',
    number: '01',
    title: 'Desposte Tipo 1',
    subtitle: 'Deshuese Básico',
    description: 'Ideal para clientes que realizan procesos posteriores de transformación.',
    includes: [
      'Extracción del hueso poroso',
      'Canal completa en bloque',
      'Sin separación de músculos',
      'Sin limpieza de cortes',
      'Retiro de coágulos',
      'Hematomas',
      'Quistes',
      'Ganglios',
    ],
    result: 'Mayor volumen con mínima intervención.',
    image: '/assets/images/servicios/desposte-tipo-1.jpg',
  },
  {
    id: 'tipo-2',
    number: '02',
    title: 'Desposte Tipo 2',
    subtitle: 'Separación de Cortes',
    description: 'Separación individual de músculos manteniendo su estructura natural.',
    includes: [
      'Separación de músculos',
      'Extracción de hueso poroso',
      'Sin perfilado',
      'Sin remoción de grasa',
      'Retiro de coágulos',
      'Ganglios',
      'Hematomas',
    ],
    result: 'Postas listas para posteriores procesos de transformación.',
    image: '/assets/images/servicios/desposte-tipo-2.jpg',
  },
  {
    id: 'tipo-3',
    number: '03',
    title: 'Desposte Tipo 3',
    subtitle: 'Perfilado Intermedio',
    description: 'Mayor nivel de limpieza para optimizar presentación y rendimiento.',
    includes: [
      'Separación de músculos',
      'Perfilado medio',
      'Remoción parcial de fascias',
      'Extracción de sebo',
      'Cartílagos',
      'Tendones',
      'Ganglios',
    ],
    result: 'Cortes con mejor presentación y menor contenido de tejido conectivo.',
    image: '/assets/images/servicios/desposte-tipo-3.jpg',
  },
  {
    id: 'tipo-4',
    number: '04',
    title: 'Desposte Tipo 4',
    subtitle: 'Desposte Premium',
    description: 'Máximo nivel de precisión y presentación.',
    includes: [
      'Separación en subcortes',
      'Perfilado avanzado',
      'Remoción de tejido conectivo',
      'Remoción de fascias',
      'Limpieza superior',
      'Alto valor comercial',
    ],
    result: 'Cortes premium listos para comercialización o porcionado.',
    image: '/assets/images/servicios/desposte-tipo-4.jpg',
  },
]

function NivelCard({ nivel, index }: { nivel: DesposteNivel; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      className="group flex h-full w-full flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-md transition-colors duration-300 hover:bg-colbeef-green-darker hover:border-colbeef-green-darker"
    >
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-4 flex min-h-[3.25rem] items-start gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-colbeef-green text-sm font-bold text-white transition-colors duration-300 group-hover:bg-white group-hover:text-colbeef-green-darker">
            {nivel.number}
          </span>
          <div>
            <h3 className="text-sm sm:text-base font-bold uppercase leading-snug text-colbeef-green transition-colors duration-300 group-hover:text-white">
              {nivel.title}
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-colbeef-dark transition-colors duration-300 group-hover:text-white/90">
              {nivel.subtitle}
            </p>
          </div>
        </div>

        <p className="mb-4 min-h-[3.5rem] text-xs sm:text-sm leading-relaxed text-colbeef-gray transition-colors duration-300 group-hover:text-white/80">
          {nivel.description}
        </p>

        <p className="mb-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-colbeef-green transition-colors duration-300 group-hover:text-colbeef-green-light">
          Incluye
        </p>
        <ul className="mb-5 min-h-[12.5rem] space-y-1.5 sm:min-h-[13.5rem]">
          {nivel.includes.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-xs sm:text-sm text-colbeef-dark transition-colors duration-300 group-hover:text-white/90"
            >
              <Check
                className="mt-0.5 h-3.5 w-3.5 shrink-0 text-colbeef-green transition-colors duration-300 group-hover:text-colbeef-green-light"
                strokeWidth={2.5}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto h-36 w-full shrink-0 overflow-hidden rounded-lg sm:h-40">
          <img
            src={nivel.image}
            alt={nivel.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      <div className="flex min-h-[5.75rem] flex-col justify-center bg-colbeef-green px-5 py-4 transition-colors duration-300 group-hover:bg-colbeef-green-dark">
        <p className="mb-1 text-[10px] font-bold uppercase tracking-wider text-white/80">
          Resultado
        </p>
        <p className="text-xs sm:text-sm font-medium leading-snug text-white">{nivel.result}</p>
      </div>
    </motion.article>
  )
}

export function DesposteNivelesSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)

  const goTo = useCallback((index: number) => {
    const next = (index + niveles.length) % niveles.length
    setActiveIndex(next)
    const track = trackRef.current
    if (!track) return
    const child = track.children[next] as HTMLElement | undefined
    child?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }, [])

  useEffect(() => {
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
  }, [])

  return (
    <AnimatedSection className="py-12 md:py-16 lg:py-20 bg-[#f3f4f6]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <FadeIn className="mb-10 md:mb-12 flex items-center justify-center gap-4">
          <span className="hidden sm:block h-px flex-1 max-w-[120px] bg-colbeef-green/30" />
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rotate-45 bg-colbeef-green" />
            <h2 className="text-colbeef-green text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-wide text-center">
              Nuestros niveles de desposte
            </h2>
            <span className="h-1.5 w-1.5 rotate-45 bg-colbeef-green" />
          </div>
          <span className="hidden sm:block h-px flex-1 max-w-[120px] bg-colbeef-green/30" />
        </FadeIn>

        {/* Desktop: 4 cards */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-5 xl:gap-6 items-stretch">
          {niveles.map((nivel, index) => (
            <NivelCard key={nivel.id} nivel={nivel} index={index} />
          ))}
        </div>

        {/* Mobile / tablet: carousel */}
        <div className="lg:hidden relative">
          <div
            ref={trackRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-8 items-stretch"
          >
            {niveles.map((nivel, index) => (
              <div
                key={nivel.id}
                className="snap-center shrink-0 w-[85%] sm:w-[60%] max-w-[360px] flex"
              >
                <NivelCard nivel={nivel} index={index} />
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
            {niveles.map((nivel, index) => (
              <button
                key={nivel.id}
                type="button"
                onClick={() => goTo(index)}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex ? 'w-6 bg-colbeef-green' : 'w-2 bg-colbeef-green/30'
                }`}
                aria-label={`Ir a ${nivel.title}`}
              />
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
