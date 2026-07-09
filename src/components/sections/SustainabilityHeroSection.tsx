import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Droplets, Flame, Lightbulb } from 'lucide-react'
import { useEffect, useState } from 'react'
import { images } from '../../data/assets'
import { sustainabilityFeatures } from '../../data/sustainability'

const icons = [Droplets, Lightbulb, Flame]

const slides = [images.panoramica, images.img5280]

export function SustainabilityHeroSection() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 7000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="relative min-h-[420px] sm:min-h-[500px] md:min-h-[600px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={slides[current]}
          src={slides[current]}
          alt="Sostenibilidad Colbeef"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-colbeef-green-darker/75" />

      <button
        type="button"
        onClick={() => setCurrent((p) => (p - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-white/30 text-white flex items-center justify-center"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        type="button"
        onClick={() => setCurrent((p) => (p + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-white/30 text-white flex items-center justify-center"
        aria-label="Siguiente"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-12 sm:py-16 md:py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 sm:mb-12 text-center md:text-left">
          <h2 className="text-white text-lg sm:text-xl md:text-2xl font-bold tracking-wider uppercase">
            Sistema Fotovoltaico
          </h2>
          <span className="px-6 py-2 border-2 border-white rounded-full text-white text-xs font-semibold tracking-[0.2em] uppercase">
            Somos sostenibles
          </span>
          <p className="text-white/70 text-xs md:text-sm max-w-xs text-center md:text-right">
            Energía renovable con alto valor agregado que contribuye con el bienestar social y desarrollo sostenible.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {sustainabilityFeatures.map((feature, i) => {
            const Icon = icons[i]
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-colbeef-green-light/30 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-colbeef-green-light" />
                </div>
                <p className="text-colbeef-green-light text-2xl font-bold mb-2">
                  {feature.value}
                </p>
                <p className="text-white/80 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
