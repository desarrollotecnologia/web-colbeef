import { motion } from 'framer-motion'
import { ArrowRight, Leaf, Sun, TreePine, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import { images } from '../../data/assets'
import { sustainabilityStats } from '../../data/sustainability'
import { AnimatedSection, FadeIn } from '../ui/AnimatedSection'
import { AnimatedCounter } from '../ui/AnimatedCounter'

const statImages = [
  images.panoramica,
  images.lineaProcesamiento,
  images.img5280,
  images.img5289,
]

const statIcons = [Leaf, TreePine, Sun, Zap] as const

export function StatsSection() {
  return (
    <AnimatedSection className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <FadeIn className="text-center mb-12 md:mb-14 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-colbeef-green uppercase tracking-wide leading-tight">
            Nuestro impacto, nuestro compromiso
          </h2>

          <div className="flex items-center justify-center gap-3 mt-5 mb-5">
            <span className="h-px w-12 sm:w-20 bg-colbeef-green/40" />
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-colbeef-green text-white shrink-0">
              <Leaf className="w-4 h-4" strokeWidth={2.25} aria-hidden />
            </span>
            <span className="h-px w-12 sm:w-20 bg-colbeef-green/40" />
          </div>

          <p className="text-colbeef-gray text-sm sm:text-base leading-relaxed px-2">
            Trabajamos cada día para generar valor, cuidar el planeta y transformar nuestro entorno.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {sustainabilityStats.map((stat, i) => {
            const Icon = statIcons[i] ?? Leaf
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-40 sm:h-44 overflow-hidden">
                  <img
                    src={statImages[i]}
                    alt={stat.label}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="relative px-5 pt-8 pb-5 text-center">
                  <div className="absolute left-1/2 -top-5 -translate-x-1/2 w-10 h-10 rounded-full bg-colbeef-green text-white flex items-center justify-center shadow-md ring-4 ring-white">
                    <Icon className="w-5 h-5" strokeWidth={2} aria-hidden />
                  </div>

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
                  <p className="text-colbeef-gray text-xs leading-relaxed">{stat.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        <FadeIn className="flex justify-center mt-10">
          <Link
            to="/sostenibilidad"
            className="inline-flex items-center gap-2 bg-[#157925] text-white text-xs font-semibold tracking-widest uppercase px-6 py-3 hover:bg-colbeef-green-dark transition-colors"
          >
            VER MÁS <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </div>
    </AnimatedSection>
  )
}
