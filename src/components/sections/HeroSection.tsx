import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { heroSlides } from '../../data/site'
import { CategoryTiles } from '../ui/CategoryTiles'

export function HeroSection() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const slide = heroSlides[current]

  const go = (dir: -1 | 1) => {
    setCurrent((prev) => (prev + dir + heroSlides.length) % heroSlides.length)
  }

  return (
    <section className="relative h-[85dvh] min-h-[480px] sm:min-h-[540px] md:min-h-[600px] max-h-[900px] overflow-hidden pt-[var(--header-height)]">
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.image}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt={slide.banner}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 overlay-hero" />
        </motion.div>
      </AnimatePresence>

      {/* Banner inferior */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="absolute bottom-14 sm:bottom-16 md:bottom-20 left-0 right-0 z-10 flex justify-center px-4"
      >
        <div className="bg-colbeef-green/90 backdrop-blur-sm px-4 sm:px-6 md:px-12 py-2.5 sm:py-3 md:py-4 max-w-[95vw]">
          <p className="text-white text-[10px] sm:text-xs md:text-sm font-semibold tracking-[0.15em] sm:tracking-[0.25em] uppercase text-center">
            {slide.banner}
          </p>
        </div>
      </motion.div>

      {/* Controles slider */}
      <button
        type="button"
        onClick={() => go(-1)}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/40 text-white flex items-center justify-center hover:bg-white/10 transition-colors"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/40 text-white flex items-center justify-center hover:bg-white/10 transition-colors"
        aria-label="Siguiente"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="absolute bottom-14 sm:bottom-8 right-4 sm:right-6 md:right-12 z-10">
        <CategoryTiles showArrow={false} />
      </div>

      {/* Indicadores */}
      <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            className={`h-1 transition-all ${
              i === current ? 'w-8 bg-colbeef-green' : 'w-4 bg-white/50'
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
