import { motion } from 'framer-motion'
import { Check, ChevronLeft, ChevronRight } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { serviciosImages } from '../../data/assets'
import { AnimatedSection, FadeIn } from '../ui/AnimatedSection'

interface PorcionadoSolucion {
  id: string
  number: string
  title: string
  description: string
  items: string[]
  image: string
}

const soluciones: PorcionadoSolucion[] = [
  {
    id: 'porciones',
    number: '01',
    title: 'Porciones listas para cocinar',
    description: 'Ideal para operaciones que requieren rapidez y estandarización.',
    items: ['Carne en sábana', 'Julianas', 'Cubos', 'Goulash'],
    image: serviciosImages.porcionadoProceso,
  },
  {
    id: 'premium',
    number: '02',
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
    image: serviciosImages.desposteTipo4,
  },
  {
    id: 'gramajes',
    number: '03',
    title: 'Gramajes personalizados',
    description: 'Adaptamos cada producto según las especificaciones del cliente.',
    items: ['Peso exacto', 'Espesor definido', 'Empaque personalizado', 'Etiquetado'],
    image: serviciosImages.desposteTipo2,
  },
  {
    id: 'picking',
    number: '04',
    title: 'Picking y Alistamiento',
    description:
      'Cada pedido es preparado bajo un proceso organizado y controlado que asegura la correcta selección, consolidación y despacho de los productos.',
    items: [
      'Proceso preciso y meticuloso',
      'Mínimos errores',
      'Tiempos de entrega óptimos',
      'Pedido exacto',
    ],
    image: serviciosImages.beneficioProceso,
  },
]

function SolucionCard({
  solucion,
  index,
}: {
  solucion: PorcionadoSolucion
  index: number
}) {
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
            {solucion.number}
          </span>
          <div>
            <h3 className="text-sm sm:text-base font-bold uppercase leading-snug text-colbeef-green transition-colors duration-300 group-hover:text-white">
              {solucion.title}
            </h3>
          </div>
        </div>

        <p className="mb-4 min-h-[3.5rem] text-xs sm:text-sm leading-relaxed text-colbeef-gray transition-colors duration-300 group-hover:text-white/80">
          {solucion.description}
        </p>

        <p className="mb-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-colbeef-green transition-colors duration-300 group-hover:text-colbeef-green-light">
          Incluye
        </p>
        <ul className="mb-5 min-h-[12.5rem] space-y-1.5 sm:min-h-[13.5rem]">
          {solucion.items.map((item) => (
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
    <AnimatedSection className="py-12 md:py-16 lg:py-20 bg-[#f3f4f6]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <FadeIn className="mb-10 md:mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="hidden sm:block h-px flex-1 max-w-[120px] bg-colbeef-green/30" />
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rotate-45 bg-colbeef-green" />
              <h2 className="text-colbeef-green text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-wide text-center leading-tight">
                Soluciones de porcionado diseñadas para su operación
              </h2>
              <span className="h-1.5 w-1.5 rotate-45 bg-colbeef-green" />
            </div>
            <span className="hidden sm:block h-px flex-1 max-w-[120px] bg-colbeef-green/30" />
          </div>
          <p className="text-center text-colbeef-gray text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
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
            {soluciones.map((solucion, index) => (
              <button
                key={solucion.id}
                type="button"
                onClick={() => goTo(index)}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex ? 'w-6 bg-colbeef-green' : 'w-2 bg-colbeef-green/30'
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
