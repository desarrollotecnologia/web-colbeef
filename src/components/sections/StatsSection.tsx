import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { images } from '../../data/assets'
import { sustainabilityStats } from '../../data/sustainability'
import { AnimatedSection, FadeIn } from '../ui/AnimatedSection'
import { AnimatedCounter } from '../ui/AnimatedCounter'
import { BrandIcon } from '../ui/BrandIcon'

const statImages = [
  images.panoramica,
  images.lineaProcesamiento,
  images.img5280,
  images.img5289,
]

export function StatsSection() {
  return (
    <AnimatedSection className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <FadeIn className="text-center mb-12">
          <p className="text-colbeef-gray text-xs font-semibold tracking-[0.25em] uppercase mb-3">
            FLORIDABLANCA / SANTANDER / COLOMBIA
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-colbeef-green uppercase">
            Datos curiosos sobre nuestra planta
          </h2>
          <div className="flex justify-center mt-4">
            <BrandIcon variant="badge" className="w-8 h-8" />
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {sustainabilityStats.map((stat, i) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-40 overflow-hidden">
                <img
                  src={statImages[i]}
                  alt={stat.label}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 text-center">
                <AnimatedCounter
                  value={stat.value}
                  className="block text-3xl font-bold text-colbeef-green mb-1"
                />
                <p className="text-xs font-bold text-colbeef-green tracking-wider uppercase mb-2">
                  {stat.label}
                </p>
                {stat.sublabel && (
                  <p className="text-colbeef-gray text-xs mb-2">{stat.sublabel}</p>
                )}
                <p className="text-colbeef-gray text-xs leading-relaxed mb-4">
                  {stat.description}
                </p>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 bg-colbeef-green text-white text-xs font-semibold tracking-widest uppercase px-5 py-2.5 hover:bg-colbeef-green-dark transition-colors"
                >
                  VER MÁS <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
