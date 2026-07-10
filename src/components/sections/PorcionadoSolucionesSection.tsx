import { motion } from 'framer-motion'
import { Check, ChevronLeft, ChevronRight } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatedSection, FadeIn } from '../ui/AnimatedSection'

interface PorcionadoSolucion {
  id: string
  title: string
  description: string
  items: string[]
  image: string
  accent: 'green' | 'red'
}

const soluciones: PorcionadoSolucion[] = [
  {
    id: 'porciones',
    title: 'Porciones listas para cocinar',
    description: 'Ideal para operaciones que requieren rapidez y estandarización.',
    items: ['Carne en sábana', 'Julianas', 'Cubos', 'Goulash'],
    image: '/assets/images/servicios/porcionado-proceso.jpg',
    accent: 'green',
  },
  {
    id: 'premium',
    title: 'Cortes Premium',
    description: 'Transformamos las postas en cortes de alto valor gastronómico.',
    items: [
      'Tomahawk',
      'Chuletón',
      'Porterhouse',
      'T-Bone',
      'Ribeye',
      'Bife Chorizo',
      'Prime Rib',
      'Ojo de Bife',
      'Bife de Paleta',
      'Asado de Tira',
    ],
    image: '/assets/images/servicios/desposte-tipo-4.jpg',
    accent: 'red',
  },
  {
    id: 'gramajes',
    title: 'Gramajes personalizados',
    description: 'Adaptamos cada producto según las especificaciones del cliente.',
    items: ['Peso exacto', 'Espesor definido', 'Empaque personalizado', 'Etiquetado'],
    image: '/assets/images/servicios/desposte-tipo-2.jpg',
    accent: 'green',
  },
  {
    id: 'picking',
    title: 'Picking y Alistamiento',
    description:
      'Cada pedido es preparado bajo un proceso organizado y controlado que asegura la correcta selección, consolidación y despacho de los productos.',
    items: [
      'Proceso preciso y meticuloso',
      'Mínimos errores',
      'Tiempos de entrega óptimos',
      'Pedido exacto',
    ],
    image: '/assets/images/servicios/beneficio-proceso.jpg',
    accent: 'red',
  },
]

const accentStyles = {
  green: {
    border: 'border-colbeef-green',
    title: 'text-colbeef-green group-hover:text-colbeef-green-light',
    check: 'text-colbeef-green group-hover:text-colbeef-green-light',
  },
  red: {
    border: 'border-[#8B1E2D]',
    title: 'text-[#C43B4E] group-hover:text-[#E85A6B]',
    check: 'text-[#C43B4E] group-hover:text-[#E85A6B]',
  },
} as const

function SolucionCard({
  solucion,
  index,
}: {
  solucion: PorcionadoSolucion
  index: number
}) {
  const accent = accentStyles[solucion.accent]

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      className={`group flex h-full w-full flex-col overflow-hidden rounded-xl border-2 bg-[#111111] shadow-lg transition-colors duration-300 hover:bg-[#1a1a1a] ${accent.border}`}
    >
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3
          className={`mb-3 min-h-[2.75rem] text-sm sm:text-base font-bold uppercase leading-snug transition-colors duration-300 ${accent.title}`}
        >
          {solucion.title}
        </h3>

        <p className="mb-4 min-h-[3.75rem] text-xs sm:text-sm leading-relaxed text-white/75 transition-colors duration-300 group-hover:text-white/90">
          {solucion.description}
        </p>

        <ul className="mb-5 min-h-[11.5rem] space-y-1.5 sm:min-h-[12.5rem]">
          {solucion.items.map((item) => (
            <li key={item} className="flex items-start gap-2 text-xs sm:text-sm text-white/90">
              <Check
                className={`mt-0.5 h-3.5 w-3.5 shrink-0 transition-colors duration-300 ${accent.check}`}
                strokeWidth={2.5}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto h-36 w-full shrink-0 overflow-hidden rounded-lg sm:h-40">
          <img
            src={solucion.image}
            alt={solucion.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    </motion.article>
  )
}

export function PorcionadoSolucionesSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)

  const goTo = useCallback((index: number) => {
    const next = (index + soluciones.length) % soluciones.length
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
    <AnimatedSection className="py-12 md:py-16 lg:py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-wide leading-tight mb-4">
            Soluciones de porcionado diseñadas{' '}
            <span className="text-colbeef-green">para su operación</span>
          </h2>
          <p className="text-white/75 text-sm md:text-base leading-relaxed">
            Nuestro servicio garantiza precisión, eficiencia y una presentación uniforme en cada
            entrega.
          </p>
        </FadeIn>

        <div className="hidden lg:grid lg:grid-cols-4 gap-5 xl:gap-6 items-stretch">
          {soluciones.map((solucion, index) => (
            <SolucionCard key={solucion.id} solucion={solucion} index={index} />
          ))}
        </div>

        <div className="lg:hidden relative">
          <div
            ref={trackRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-8 items-stretch"
          >
            {soluciones.map((solucion, index) => (
              <div
                key={solucion.id}
                className="snap-center shrink-0 w-[85%] sm:w-[60%] max-w-[360px] flex"
              >
                <SolucionCard solucion={solucion} index={index} />
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => goTo(activeIndex - 1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full border border-white/25 bg-black/50 text-white flex items-center justify-center"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => goTo(activeIndex + 1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full border border-white/25 bg-black/50 text-white flex items-center justify-center"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="flex justify-center gap-2 mt-5">
            {soluciones.map((solucion, index) => (
              <button
                key={solucion.id}
                type="button"
                onClick={() => goTo(index)}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex ? 'w-6 bg-colbeef-green' : 'w-2 bg-white/30'
                }`}
                aria-label={`Ir a ${solucion.title}`}
              />
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
