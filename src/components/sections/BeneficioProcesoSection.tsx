import { motion } from 'framer-motion'
import {
  Beef,
  ClipboardCheck,
  Leaf,
  ScanBarcode,
  ShieldCheck,
  Truck,
} from 'lucide-react'
import { AnimatedSection, FadeIn } from '../ui/AnimatedSection'

const procesoItems = [
  { label: 'Calidad sanitaria', icon: ShieldCheck },
  { label: 'Trazabilidad individual', icon: ScanBarcode },
  { label: 'Bienestar animal', icon: Beef },
  { label: 'Eficiencia logística', icon: Truck },
  { label: 'Inocuidad alimentaria', icon: Leaf },
  { label: 'Cumplimiento de la normatividad colombiana', icon: ClipboardCheck },
] as const

export function BeneficioProcesoSection() {
  return (
    <AnimatedSection className="py-12 md:py-16 lg:py-20 bg-[#f3f4f6]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-0 items-center">
          <FadeIn className="lg:pr-10 xl:pr-14">
            <h2 className="text-colbeef-green text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-wide leading-tight mb-5 md:mb-6">
              Un proceso diseñado para garantizar confianza desde el origen
            </h2>
            <p className="text-colbeef-gray text-sm md:text-base leading-relaxed mb-4">
              Cada animal que ingresa a nuestra planta sigue un proceso completamente controlado,
              donde la tecnología, la experiencia técnica y los sistemas de aseguramiento de
              calidad trabajan de forma integrada para entregar un producto confiable.
            </p>
            <p className="text-colbeef-dark text-sm md:text-base font-medium">
              Nuestro modelo operativo permite garantizar:
            </p>
          </FadeIn>

          <div className="lg:pl-10 xl:pl-14 lg:border-l lg:border-gray-300">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-0">
              {procesoItems.map(({ label, icon: Icon }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                  className={`flex items-start gap-3 py-5 sm:py-6 ${
                    index < 3 ? 'sm:border-b sm:border-gray-300' : ''
                  }`}
                >
                  <motion.div
                    className="text-colbeef-green shrink-0 mt-0.5"
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      duration: 2.6,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.2,
                    }}
                    whileHover={{ scale: 1.15, rotate: [0, -6, 6, 0] }}
                  >
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8" strokeWidth={1.5} />
                  </motion.div>
                  <span className="text-colbeef-green text-sm sm:text-base font-bold leading-snug">
                    {label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
