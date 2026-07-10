import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { images } from '../../data/assets'
import {
  cortesMapAreas,
  getCorteFichaImage,
  type CorteGrupo,
} from '../../data/cortesMap'
import { assetUrl } from '../../utils/assetUrl'
import { AnimatedSection, FadeIn } from '../ui/AnimatedSection'

const grupoLabels: Record<CorteGrupo, string> = {
  delanteros: 'Cortes delanteros',
  traseros: 'Cortes traseros',
}

export function CortesMapSection() {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  const selected = cortesMapAreas.find((a) => a.id === selectedId) ?? null
  const activeId = hoveredId ?? selectedId

  return (
    <AnimatedSection className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <FadeIn className="text-center mb-8 md:mb-10">
          <p className="text-colbeef-green text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-3">
            Productos
          </p>
          <h2 className="text-colbeef-dark text-2xl sm:text-3xl font-bold uppercase tracking-wide">
            Seleccione un corte
          </h2>
          <p className="text-colbeef-gray text-sm mt-3 max-w-2xl mx-auto">
            Pase el cursor o toque una zona del animal. Al seleccionarla verá la ficha del corte.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.85fr)] gap-8 lg:gap-10 items-start">
          <FadeIn>
            <div className="relative mx-auto w-full max-w-[950px] select-none">
              <img
                src={images.cortesMapaBase}
                alt="Mapa de cortes bovinos Colbeef"
                className="block w-full h-auto"
                draggable={false}
              />

              <div className="absolute inset-0">
                {cortesMapAreas.map((area) => {
                  const isActive = activeId === area.id
                  return (
                    <button
                      key={area.id}
                      type="button"
                      aria-label={area.name}
                      aria-pressed={selectedId === area.id}
                      onMouseEnter={() => setHoveredId(area.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      onFocus={() => setHoveredId(area.id)}
                      onBlur={() => setHoveredId(null)}
                      onClick={() => setSelectedId(area.id)}
                      className="absolute inset-0 cursor-pointer border-0 p-0 transition-opacity duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-colbeef-green/60"
                      style={{
                        clipPath: area.clipPath,
                        WebkitClipPath: area.clipPath,
                        opacity: isActive ? 1 : 0,
                        backgroundImage: `url(${images.cortesMapaOverlay})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center center',
                        backgroundSize: '100% 100%',
                      }}
                    />
                  )
                })}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.08} className="lg:sticky lg:top-28">
            <AnimatePresence mode="wait">
              {selected && (
                <motion.article
                  key={selected.id}
                  initial={{ opacity: 0, y: 16, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.98 }}
                  transition={{ duration: 0.28 }}
                  className="relative overflow-hidden rounded-2xl border border-colbeef-green/15 bg-white shadow-lg shadow-colbeef-green/10"
                >
                  <button
                    type="button"
                    onClick={() => setSelectedId(null)}
                    className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/45 text-white flex items-center justify-center hover:bg-black/60 transition-colors"
                    aria-label="Cerrar ficha"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  <div className="relative aspect-[4/3] bg-colbeef-dark overflow-hidden">
                    <img
                      src={assetUrl(getCorteFichaImage(selected))}
                      alt={selected.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/55 to-transparent" />
                  </div>

                  <div className="p-5 sm:p-6">
                    <p className="text-colbeef-green text-[10px] font-bold tracking-[0.18em] uppercase mb-2">
                      {grupoLabels[selected.grupo]}
                    </p>
                    <h3 className="text-colbeef-dark text-xl sm:text-2xl font-bold tracking-wide">
                      {selected.name}
                    </h3>
                    <p className="text-colbeef-gray text-sm mt-2 leading-relaxed">
                      Seleccione otra zona del mapa para cambiar esta ficha, o ciérrela con la X.
                    </p>
                  </div>
                </motion.article>
              )}
            </AnimatePresence>

            {selected && (
              <p className="mt-4 text-xs text-colbeef-gray lg:hidden">
                Tip: en móvil, toque la zona del mapa para seleccionar el corte.
              </p>
            )}
          </FadeIn>
        </div>
      </div>
    </AnimatedSection>
  )
}
