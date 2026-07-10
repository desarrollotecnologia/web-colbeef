import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Sprout } from 'lucide-react'
import { useState } from 'react'
import { compromisoProcesoContent } from '../../data/pesajeCompromiso'
import { AnimatedSection, FadeIn } from '../ui/AnimatedSection'
import { Button } from '../ui/Button'

const slides = [compromisoProcesoContent]

export function CompromisoProcesoSection() {
  const [current, setCurrent] = useState(0)
  const slide = slides[current]
  const showArrows = slides.length > 1

  const goPrev = () => setCurrent((index) => (index <= 0 ? slides.length - 1 : index - 1))
  const goNext = () => setCurrent((index) => (index >= slides.length - 1 ? 0 : index + 1))

  return (
    <AnimatedSection className="bg-white">
      <div className="relative">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[280px] sm:min-h-[340px] lg:min-h-[480px] xl:min-h-[540px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={slide.image}
                src={slide.image}
                alt={slide.imageAlt}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45 }}
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
            </AnimatePresence>
          </div>

          <FadeIn className="relative flex flex-col justify-center px-6 sm:px-10 lg:px-12 xl:px-16 py-10 md:py-12 lg:py-16">
            <Sprout className="w-8 h-8 text-colbeef-green mb-4" strokeWidth={1.5} />
            <div className="w-full h-px bg-gray-200 mb-6 md:mb-8" />

            <AnimatePresence mode="wait">
              <motion.div
                key={slide.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
              >
                <h2 className="text-colbeef-dark text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-5 md:mb-6">
                  {slide.title}
                </h2>
                <p className="text-colbeef-gray text-sm md:text-base leading-relaxed mb-8 md:mb-10 max-w-xl">
                  {slide.description}
                </p>
                <Button to={slide.ctaHref} size="lg" className="w-full sm:w-auto">
                  {slide.ctaLabel}
                </Button>
              </motion.div>
            </AnimatePresence>
          </FadeIn>
        </div>

        {showArrows && (
          <>
            <button
              type="button"
              onClick={goPrev}
              className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-white/40 bg-black/20 text-white flex items-center justify-center hover:bg-black/35 transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={goNext}
              className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-white/40 bg-black/20 text-white flex items-center justify-center hover:bg-black/35 transition-colors"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>
    </AnimatedSection>
  )
}
