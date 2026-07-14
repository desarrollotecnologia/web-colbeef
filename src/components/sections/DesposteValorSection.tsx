import { motion } from 'framer-motion'
import {
  Award,
  BarChart3,
  Beef,
  Cog,
  Recycle,
  ShieldCheck,
} from 'lucide-react'
import { icons, serviciosImages } from '../../data/assets'
import { AnimatedSection, FadeIn } from '../ui/AnimatedSection'

const beneficios = [
  { label: 'Mayor aprovechamiento de la canal', icon: BarChart3 },
  { label: 'Cortes uniformes', icon: Beef },
  { label: 'Menor desperdicio', icon: Recycle },
  { label: 'Producción personalizada', icon: Cog },
  { label: 'Control de calidad permanente', icon: ShieldCheck },
  { label: 'Procesos higiénicos certificados', icon: Award },
] as const

const sectionImage = serviciosImages.desposteBeneficios

export function DesposteValorSection() {
  return (
    <AnimatedSection className="py-12 md:py-16 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-[1.05fr_1.1fr_0.95fr] gap-10 lg:gap-8 xl:gap-10 items-center">
          <FadeIn className="relative">
            <img
              src={icons.ganado}
              alt=""
              aria-hidden
              className="pointer-events-none absolute -bottom-6 -left-4 w-40 sm:w-52 opacity-[0.07] select-none"
            />

            <h2 className="relative text-colbeef-green text-xl sm:text-2xl md:text-[1.65rem] font-bold uppercase tracking-wide leading-tight mb-5 md:mb-6">
              Un proceso que maximiza el valor de cada canal
            </h2>

            <div className="relative space-y-4 text-colbeef-gray text-sm md:text-base leading-relaxed">
              <p>
                El desposte es una etapa fundamental dentro de la cadena de procesamiento cárnico.
                Consiste en separar cuidadosamente la estructura ósea del tejido muscular para
                obtener postas, cortes y subcortes con especificaciones técnicas definidas.
              </p>
              <p>
                En COLBEEF cada procedimiento está diseñado para responder a los requerimientos
                específicos de nuestros clientes, garantizando uniformidad, eficiencia operativa y
                un excelente rendimiento comercial.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.08} className="relative min-h-[280px] sm:min-h-[340px] lg:min-h-[420px]">
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={sectionImage}
                alt="Proceso de desposte en COLBEEF"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <div className="absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-white to-transparent pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-white to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white to-transparent pointer-events-none lg:hidden" />
              <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white to-transparent pointer-events-none lg:hidden" />
            </div>
          </FadeIn>

          <FadeIn delay={0.12}>
            <p className="text-colbeef-green text-xs font-bold tracking-[0.2em] uppercase mb-5">
              Beneficios
            </p>
            <ul>
              {beneficios.map(({ label, icon: Icon }, index) => (
                <motion.li
                  key={label}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06, duration: 0.35 }}
                  className={`flex items-center gap-3 py-3.5 ${
                    index < beneficios.length - 1 ? 'border-b border-gray-200' : ''
                  }`}
                >
                  <Icon
                    className="w-5 h-5 sm:w-6 sm:h-6 text-colbeef-green shrink-0"
                    strokeWidth={1.5}
                  />
                  <span className="text-colbeef-dark text-sm sm:text-base font-medium leading-snug">
                    {label}
                  </span>
                </motion.li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </AnimatedSection>
  )
}
