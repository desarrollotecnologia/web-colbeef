import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Lightbulb, X } from 'lucide-react'
import { images } from '../../data/assets'
import {
  cortesMapAreas,
  cortesMapZonas,
  getAreaCenter,
  getAreaPoints,
  getCorteDetalle,
  getCorteFichaImage,
  type CorteArea,
  type CorteGrupo,
} from '../../data/cortesMap'
import { AnimatedSection, FadeIn } from '../ui/AnimatedSection'

const grupoLabels: Record<CorteGrupo, string> = {
  delanteros: 'Cortes delanteros',
  traseros: 'Cortes traseros',
}

function ActiveCutLabel({ area }: { area: CorteArea }) {
  const { x, y } = getAreaCenter(area)
  const { dx = 0, dy = 0, rotate = 0, scale = 1 } = area.label ?? {}

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.16 }}
      className="absolute whitespace-nowrap font-bold uppercase leading-none tracking-wide text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.55)]"
      style={{
        left: `${x + dx}%`,
        top: `${y + dy}%`,
        fontSize: `${1.85 * scale}cqw`,
        transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
      }}
    >
      {area.name}
    </motion.span>
  )
}

export function CortesMapSection() {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  const selected = cortesMapAreas.find((a) => a.id === selectedId) ?? null
  const detalle = selected ? getCorteDetalle(selected) : null
  const activeId = hoveredId ?? selectedId
  const activeArea = cortesMapAreas.find((a) => a.id === activeId) ?? null

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
            Pase el cursor o toque una zona del animal: verá el nombre del corte y su ficha al seleccionarlo.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.85fr)] gap-8 lg:gap-10 items-start">
          <FadeIn>
            <div className="@container relative mx-auto w-full max-w-[950px] select-none">
              <img
                src={images.cortesMapaRes}
                alt="Mapa de cortes bovinos Colbeef"
                className="block w-full h-auto"
                draggable={false}
              />

              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 h-full w-full"
              >
                {cortesMapZonas.map((area) => (
                  <polygon
                    key={`zona-${area.id}`}
                    points={getAreaPoints(area)}
                    fill="rgba(20, 87, 45, 0.14)"
                    stroke="rgba(20, 87, 45, 0.55)"
                    strokeWidth={1.25}
                    vectorEffect="non-scaling-stroke"
                  />
                ))}

                {activeArea && (
                  <polygon
                    points={getAreaPoints(activeArea)}
                    fill="rgba(20, 87, 45, 0.62)"
                    stroke="#ffffff"
                    strokeWidth={2}
                    vectorEffect="non-scaling-stroke"
                    className="transition-opacity duration-200"
                  />
                )}
              </svg>

              <div className="absolute inset-0">
                {cortesMapAreas.map((area) => (
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
                    className="absolute inset-0 cursor-pointer border-0 bg-transparent p-0 focus:outline-none"
                    style={{
                      clipPath: area.clipPath,
                      WebkitClipPath: area.clipPath,
                    }}
                  />
                ))}
              </div>

              <div className="absolute inset-0 pointer-events-none">
                <AnimatePresence mode="wait">
                  {activeArea && (
                    <ActiveCutLabel key={activeArea.id} area={activeArea} />
                  )}
                </AnimatePresence>
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

                  <div className="relative aspect-[4/3] bg-black overflow-hidden">
                    <img
                      src={getCorteFichaImage(selected)}
                      alt={selected.name}
                      className="absolute inset-0 w-full h-full object-contain"
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

                    {detalle ? (
                      <>
                        <div className="flex flex-wrap gap-2 mt-3">
                          <span className="rounded-full bg-colbeef-green-pale px-3 py-1 text-[11px] font-semibold text-colbeef-green">
                            {detalle.categoria}
                          </span>
                          <span className="rounded-full border border-colbeef-green/25 px-3 py-1 text-[11px] font-semibold text-colbeef-green">
                            Terneza: {detalle.terneza}
                          </span>
                        </div>

                        <p className="text-colbeef-gray text-sm mt-3 leading-relaxed">
                          {detalle.descripcion}
                        </p>

                        <div className="mt-4 flex items-start gap-2 rounded-lg bg-colbeef-cream p-3">
                          <Lightbulb className="w-4 h-4 text-colbeef-gold shrink-0 mt-0.5" />
                          <p className="text-colbeef-dark text-xs leading-relaxed">{detalle.tip}</p>
                        </div>
                      </>
                    ) : (
                      <p className="text-colbeef-gray text-sm mt-2 leading-relaxed">
                        Seleccione otra zona del mapa para cambiar esta ficha, o ciérrela con la X.
                      </p>
                    )}
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
