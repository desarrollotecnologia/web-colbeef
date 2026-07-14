import { BadgeCheck, BarChart3, Layers, ScanBarcode } from 'lucide-react'
import { serviciosImages } from '../../data/assets'
import { AnimatedSection, FadeIn } from '../ui/AnimatedSection'

const desposteIntro =
  'En COLBEEF desarrollamos procesos especializados de desposte bovino y bufalino, mediante procedimientos estandarizados, personal altamente capacitado y estrictos controles de inocuidad alimentaria. Nuestro objetivo es maximizar el aprovechamiento de cada canal, optimizar el rendimiento de los cortes y entregar productos adaptados a las necesidades de la industria, el canal institucional y el comercio especializado.'

const desposteFeatures = [
  { label: 'Máximo rendimiento', icon: BarChart3 },
  { label: 'Cortes estandarizados', icon: Layers },
  { label: 'Trazabilidad', icon: ScanBarcode },
  { label: 'Calidad garantizada', icon: BadgeCheck },
] as const

const desposteSectionImage = serviciosImages.desposteProceso

export function DesposteDetailSection() {
  return (
    <AnimatedSection className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-stretch">
          <FadeIn className="flex flex-col">
            <h2 className="text-colbeef-dark text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-wide leading-tight mb-5 md:mb-6">
              Transformamos cada canal con precisión y rendimiento.
            </h2>

            <p className="text-colbeef-gray text-sm md:text-base leading-relaxed mb-8 md:mb-10">
              {desposteIntro}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8 mt-auto">
              {desposteFeatures.map(({ label, icon: Icon }) => (
                <div key={label} className="flex flex-col items-center text-center gap-3">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-colbeef-green/25 flex items-center justify-center text-colbeef-green shrink-0">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8" strokeWidth={1.5} />
                  </div>
                  <p className="text-colbeef-dark text-xs sm:text-sm font-medium leading-snug max-w-[140px]">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="min-h-[240px] sm:min-h-[280px] lg:min-h-0 h-full">
            <div className="relative overflow-hidden rounded-xl lg:rounded-2xl shadow-lg h-full min-h-[240px] sm:min-h-[280px] bg-colbeef-green-pale">
              <img
                src={desposteSectionImage}
                alt="Proceso de desposte en COLBEEF"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </AnimatedSection>
  )
}
