import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import { beneficiosNegocioContent } from '../../data/pesajeBeneficios'
import { AnimatedSection, FadeIn } from '../ui/AnimatedSection'

function useItemsPerPage() {
  const [itemsPerPage, setItemsPerPage] = useState(6)

  useEffect(() => {
    const update = () => {
      const width = window.innerWidth
      if (width < 640) setItemsPerPage(2)
      else if (width < 1024) setItemsPerPage(3)
      else setItemsPerPage(6)
    }

    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return itemsPerPage
}

export function BeneficiosNegocioSection() {
  const { title, items } = beneficiosNegocioContent
  const itemsPerPage = useItemsPerPage()
  const [page, setPage] = useState(0)

  const maxPage = Math.max(0, Math.ceil(items.length / itemsPerPage) - 1)
  const visibleItems = items.slice(page * itemsPerPage, page * itemsPerPage + itemsPerPage)
  const showArrows = items.length > itemsPerPage

  const goPrev = useCallback(() => {
    setPage((current) => (current <= 0 ? maxPage : current - 1))
  }, [maxPage])

  const goNext = useCallback(() => {
    setPage((current) => (current >= maxPage ? 0 : current + 1))
  }, [maxPage])

  useEffect(() => {
    setPage((current) => Math.min(current, maxPage))
  }, [maxPage])

  return (
    <AnimatedSection className="py-12 md:py-16 lg:py-20 bg-colbeef-green-darker relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
        <FadeIn className="text-center mb-10 md:mb-14">
          <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-wide">
            {title}
          </h2>
        </FadeIn>

        <div className="relative px-10 sm:px-12 md:px-14">
          {showArrows && (
            <>
              <button
                type="button"
                onClick={goPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 md:w-10 md:h-10 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Beneficio anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={goNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 md:w-10 md:h-10 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Beneficio siguiente"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          <div
            className="grid gap-8 md:gap-10"
            style={{ gridTemplateColumns: `repeat(${visibleItems.length}, minmax(0, 1fr))` }}
          >
            {visibleItems.map((item, index) => {
              const Icon = item.icon

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.45 }}
                  className="flex flex-col items-center text-center gap-4 md:gap-5"
                >
                  <motion.div
                    className="text-white"
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.25,
                    }}
                    whileHover={{ scale: 1.12, rotate: [0, -4, 4, 0] }}
                  >
                    <Icon className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" strokeWidth={1.25} />
                  </motion.div>
                  <p className="text-white text-xs sm:text-sm md:text-base leading-snug max-w-[180px]">
                    {item.label}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
