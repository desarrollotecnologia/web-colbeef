import { motion } from 'framer-motion'
import { sostenibilidadBloques } from '../../data/sostenibilidadBloques'
import { AnimatedSection, FadeIn } from '../ui/AnimatedSection'

export function SostenibilidadBloquesSection() {
  return (
    <div>
      {sostenibilidadBloques.map((bloque, index) => (
        <AnimatedSection
          key={bloque.id}
          className={`py-12 md:py-16 lg:py-20 ${
            index % 2 === 0 ? 'bg-colbeef-green-pale/40' : 'bg-white'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center ${
                bloque.imageOnLeft ? '' : ''
              }`}
            >
              <FadeIn
                className={`min-h-[240px] sm:min-h-[300px] lg:min-h-[380px] ${
                  bloque.imageOnLeft ? 'order-1' : 'order-1 lg:order-2'
                }`}
              >
                <div className="relative overflow-hidden rounded-xl lg:rounded-2xl shadow-lg h-full min-h-[240px] sm:min-h-[300px] lg:min-h-[380px] bg-colbeef-green-pale">
                  <img
                    src={bloque.image}
                    alt={bloque.imageAlt}
                    className="absolute inset-0 h-full w-full object-cover object-center"
                  />
                </div>
              </FadeIn>

              <FadeIn
                delay={0.08}
                className={bloque.imageOnLeft ? 'order-2' : 'order-2 lg:order-1'}
              >
                <p className="text-colbeef-green text-sm font-bold tracking-wide mb-2">
                  {bloque.number}. {bloque.title.toUpperCase()}
                </p>
                <h2 className="text-colbeef-dark text-xl sm:text-2xl md:text-3xl font-bold leading-tight mb-5">
                  {bloque.subtitle}
                </h2>

                <div className="space-y-4 text-colbeef-gray text-sm md:text-base leading-relaxed mb-8">
                  {bloque.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </div>

                {bloque.indicadores && (
                  <div className="mb-6">
                    {bloque.indicadoresTitle && (
                      <p className="text-colbeef-green text-xs font-bold tracking-[0.15em] uppercase mb-4">
                        {bloque.indicadoresTitle}
                      </p>
                    )}
                    <div className="grid grid-cols-2 gap-4">
                      {bloque.indicadores.map(({ label, icon: Icon }, i) => (
                        <motion.div
                          key={label}
                          initial={{ opacity: 0, y: 12 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.05 }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-10 h-10 rounded-full border border-colbeef-green/25 flex items-center justify-center text-colbeef-green shrink-0">
                            <Icon className="w-5 h-5" strokeWidth={1.5} />
                          </div>
                          <p className="text-colbeef-dark text-xs sm:text-sm font-semibold leading-snug pt-2">
                            {label}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {bloque.highlight && (
                  <div className="bg-colbeef-green text-white text-xs sm:text-sm font-medium leading-relaxed px-5 py-4 rounded-lg">
                    {bloque.highlight}
                  </div>
                )}
              </FadeIn>
            </div>
          </div>
        </AnimatedSection>
      ))}
    </div>
  )
}
