import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { certificationLogos } from '../../data/assets'
import { qualityPillars } from '../../data/products'
import { AnimatedSection } from '../ui/AnimatedSection'

function CertLogosPanel() {
  return (
    <div className="absolute inset-0 flex items-center justify-center gap-4 sm:gap-6 md:gap-8 px-5 sm:px-8 py-6 md:py-10 bg-[#C9D5D7]">
      {certificationLogos.map((logo) => (
        <img
          key={logo.alt}
          src={logo.src}
          alt={logo.alt}
          className="h-24 sm:h-28 md:h-32 lg:h-36 w-auto max-w-[28%] object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.12)]"
        />
      ))}
    </div>
  )
}

function CertLogosStrip() {
  return (
    <div className="flex items-center gap-2 xl:gap-3 shrink-0">
      {certificationLogos.map((logo) => (
        <img
          key={logo.alt}
          src={logo.src}
          alt=""
          className="h-7 xl:h-9 w-auto object-contain opacity-80"
        />
      ))}
    </div>
  )
}

export function QualitySection() {
  const [active, setActive] = useState(0)

  const setActivePanel = (index: number) => setActive(index)

  return (
    <AnimatedSection className="bg-white px-4 sm:px-6 md:px-8 py-10 md:py-14 lg:py-16">
      <div className="max-w-[1640px] mx-auto bg-[#546B74] overflow-hidden rounded-2xl xl:rounded-3xl">
        <div className="grid lg:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)] xl:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:min-h-[600px] xl:min-h-[680px]">
          <div className="flex flex-col gap-3 lg:gap-4 px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10 py-5 lg:py-6 xl:py-8">
            {qualityPillars.map((pillar, i) => {
              const isActive = active === i
              const sections = 'sections' in pillar ? pillar.sections : undefined

              return (
                <motion.button
                  key={pillar.id}
                  type="button"
                  layout
                  onMouseEnter={() => setActivePanel(i)}
                  onFocus={() => setActivePanel(i)}
                  onClick={() => setActivePanel(i)}
                  className={`w-full text-left rounded-xl bg-white overflow-hidden transition-shadow duration-300 ${
                    isActive
                      ? 'shadow-lg flex-none'
                      : 'flex-1 min-h-[68px] sm:min-h-[76px] lg:min-h-[88px] hover:shadow-md'
                  }`}
                  aria-expanded={isActive}
                >
                  <div className="p-4 sm:p-5 md:p-6 h-full flex flex-col">
                    <p className="text-xs sm:text-sm font-extrabold tracking-[0.18em] uppercase text-colbeef-green mb-1.5">
                      {pillar.category}
                    </p>
                    <h3 className="text-colbeef-green font-bold text-sm sm:text-base md:text-lg xl:text-xl leading-snug">
                      {pillar.title}
                    </h3>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          key="content"
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{ opacity: 1, height: 'auto', marginTop: 14 }}
                          exit={{ opacity: 0, height: 0, marginTop: 0 }}
                          transition={{ duration: 0.35, ease: 'easeOut' }}
                          className="overflow-hidden"
                        >
                          {sections ? (
                            <div className="space-y-5 pr-1">
                              {sections.map((block) => (
                                <div key={block.label}>
                                  <p className="text-[11px] sm:text-xs font-extrabold tracking-wide uppercase text-colbeef-green mb-0.5">
                                    {block.label}
                                  </p>
                                  <p className="text-colbeef-green font-bold text-xs sm:text-sm mb-1.5">
                                    {block.title}
                                  </p>
                                  <p className="text-colbeef-gray text-xs sm:text-sm leading-relaxed">
                                    {block.description}
                                  </p>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <p className="text-colbeef-gray text-xs sm:text-sm leading-relaxed">
                              {pillar.description}
                            </p>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.button>
              )
            })}
          </div>

          <div className="flex flex-col gap-3 lg:gap-4 px-4 sm:px-6 md:px-8 lg:pr-8 xl:pr-10 py-5 lg:py-6 xl:py-8 lg:pl-0 pt-0 lg:pt-6 min-h-[220px] lg:min-h-0">
            <div className="lg:hidden relative h-48 sm:h-60 md:h-72 rounded-xl overflow-hidden bg-[#A4B8B7]">
              {qualityPillars[active].id === 'calidad' ? (
                <CertLogosPanel />
              ) : (
                <>
                  <img
                    src={qualityPillars[active].image}
                    alt={qualityPillars[active].title}
                    className={`absolute inset-0 w-full h-full ${
                      qualityPillars[active].id === 'exportacion'
                        ? 'object-cover object-center'
                        : 'object-cover'
                    }`}
                  />
                  {qualityPillars[active].id !== 'exportacion' && (
                    <div className="absolute inset-0 bg-black/10" />
                  )}
                </>
              )}
            </div>

            <div className="hidden lg:flex flex-col gap-3 lg:gap-4 flex-1 min-h-0">
              {qualityPillars.map((pillar, i) => {
                const isActive = active === i
                const isMap = pillar.id === 'exportacion'
                const isCerts = pillar.id === 'calidad'

                return (
                  <motion.button
                    key={`${pillar.id}-image`}
                    type="button"
                    layout
                    onMouseEnter={() => setActivePanel(i)}
                    onFocus={() => setActivePanel(i)}
                    onClick={() => setActivePanel(i)}
                    className={`relative w-full rounded-xl overflow-hidden transition-shadow duration-300 ${
                      isActive
                        ? 'flex-[2.5] min-h-[240px] xl:min-h-[280px] shadow-lg'
                        : 'flex-1 min-h-[88px] xl:min-h-[104px] hover:opacity-95'
                    } ${isMap && isActive ? 'bg-[#A4B8B7]' : ''}`}
                    aria-label={pillar.title}
                  >
                    {isCerts ? (
                      isActive ? (
                        <CertLogosPanel />
                      ) : (
                        <>
                          <div className="absolute inset-0 bg-[#C9D5D7]" />
                          <div className="absolute inset-0 flex items-center justify-between gap-3 px-4 xl:px-6">
                            <span className="min-w-0 text-[#263136] text-[10px] sm:text-xs xl:text-sm font-bold tracking-wider uppercase leading-snug">
                              {pillar.title}
                            </span>
                            <CertLogosStrip />
                          </div>
                        </>
                      )
                    ) : (
                      <>
                        <img
                          src={pillar.image}
                          alt={pillar.title}
                          className={`absolute inset-0 w-full h-full object-cover ${
                            isMap && isActive ? 'object-center' : ''
                          }`}
                        />
                        <div
                          className={`absolute inset-0 transition-colors duration-300 ${
                            isMap && isActive
                              ? 'bg-transparent'
                              : isActive
                                ? 'bg-black/10'
                                : 'bg-colbeef-green-darker/45'
                          }`}
                        />
                        {!isActive && (
                          <div className="absolute inset-0 flex items-center px-4 xl:px-6">
                            <span className="text-white text-[10px] sm:text-xs xl:text-sm font-bold tracking-wider uppercase drop-shadow">
                              {pillar.title}
                            </span>
                          </div>
                        )}
                      </>
                    )}
                  </motion.button>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
