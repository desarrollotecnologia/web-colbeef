import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { qualityPillars } from '../../data/products'
import { certificationText } from '../../data/site'
import { AnimatedSection } from '../ui/AnimatedSection'

export function QualitySection() {
  const [active, setActive] = useState(2)

  const setActivePanel = (index: number) => setActive(index)

  return (
    <AnimatedSection className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="rounded-2xl md:rounded-3xl bg-colbeef-green border border-colbeef-green-light/20 overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] min-h-[520px] md:min-h-[560px]">
            <div className="flex flex-col gap-2 p-3 sm:p-4 min-h-[280px] lg:min-h-0">
              {qualityPillars.map((pillar, i) => {
                const isActive = active === i

                return (
                  <motion.button
                    key={pillar.id}
                    type="button"
                    layout
                    onMouseEnter={() => setActivePanel(i)}
                    onFocus={() => setActivePanel(i)}
                    onClick={() => setActivePanel(i)}
                    className={`w-full text-left rounded-xl bg-white transition-shadow duration-300 overflow-hidden ${
                      isActive ? 'shadow-lg flex-[2.5]' : 'flex-1 hover:shadow-md'
                    }`}
                    aria-expanded={isActive}
                  >
                    <div className="p-4 sm:p-5 h-full flex flex-col">
                      <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-colbeef-green/60 mb-1">
                        {pillar.category}
                      </p>
                      <h3 className="text-colbeef-green font-bold text-xs sm:text-sm md:text-base leading-snug">
                        {pillar.title}
                      </h3>

                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.p
                            key="description"
                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                            animate={{ opacity: 1, height: 'auto', marginTop: 12 }}
                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                            transition={{ duration: 0.35, ease: 'easeOut' }}
                            className="text-colbeef-gray text-xs sm:text-sm leading-relaxed overflow-hidden"
                          >
                            {pillar.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.button>
                )
              })}
            </div>

            <div className="flex flex-col gap-2 p-3 sm:p-4 pt-0 lg:pt-4 lg:pl-0 min-h-[200px] lg:min-h-0">
              <div className="lg:hidden relative h-44 sm:h-52 rounded-xl overflow-hidden">
                <img
                  src={qualityPillars[active].image}
                  alt={qualityPillars[active].title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>

              <div className="hidden lg:flex flex-col gap-2 flex-1 min-h-0">
              {qualityPillars.map((pillar, i) => {
                const isActive = active === i

                return (
                  <motion.button
                    key={`${pillar.id}-image`}
                    type="button"
                    layout
                    onMouseEnter={() => setActivePanel(i)}
                    onFocus={() => setActivePanel(i)}
                    onClick={() => setActivePanel(i)}
                    className={`relative w-full rounded-xl overflow-hidden transition-shadow duration-300 ${
                      isActive ? 'flex-[3] shadow-lg' : 'flex-1 hover:opacity-95'
                    }`}
                    aria-label={pillar.title}
                  >
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div
                      className={`absolute inset-0 transition-colors duration-300 ${
                        isActive ? 'bg-black/10' : 'bg-colbeef-green-darker/45'
                      }`}
                    />

                    {!isActive && (
                      <div className="absolute inset-0 flex items-center px-4">
                        <span className="text-white text-[10px] sm:text-xs font-bold tracking-wider uppercase drop-shadow">
                          {pillar.title}
                        </span>
                      </div>
                    )}

                    {pillar.id === 'exportacion' && isActive && (
                      <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-black/50 text-white/80 text-[10px] italic px-2 py-1 rounded">
                        * Mapa de exportación — reemplazar con imagen oficial
                      </div>
                    )}
                  </motion.button>
                )
              })}
              </div>
            </div>
          </div>
        </div>

        <p className="text-colbeef-gray text-xs text-center mt-10 md:mt-12 max-w-4xl mx-auto leading-relaxed">
          {certificationText}
        </p>
      </div>
    </AnimatedSection>
  )
}
