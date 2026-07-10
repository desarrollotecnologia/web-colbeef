import { motion } from 'framer-motion'
import { Eye, Target } from 'lucide-react'
import { familiaColbeef, filosofiaTabs } from '../../data/nosotros'
import { corporativo } from '../../data/assets'
import { AnimatedSection, FadeIn } from '../ui/AnimatedSection'
import { ValoresFlipSection } from './ValoresFlipSection'

const filosofiaItems = filosofiaTabs.filter((tab) => tab.id === 'mision' || tab.id === 'vision')

const itemIcons = {
  mision: Target,
  vision: Eye,
} as const

export function FilosofiaSection() {
  return (
    <AnimatedSection className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <FadeIn className="text-center mb-10 md:mb-14">
          <p className="text-colbeef-green text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-3">
            Corporativo
          </p>
          <h2 className="text-colbeef-dark text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wide">
            Filosofía
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {filosofiaItems.map((item, index) => {
            const Icon = itemIcons[item.id as keyof typeof itemIcons]

            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.45 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-colbeef-green/15 bg-gradient-to-br from-white to-[#d4edda]/40 p-6 sm:p-8 shadow-sm hover:shadow-lg hover:border-colbeef-green/35 transition-shadow duration-300"
              >
                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-colbeef-green/5 transition-transform duration-500 group-hover:scale-125" />

                <motion.div
                  className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-colbeef-green text-white shadow-md"
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.3,
                  }}
                  whileHover={{ scale: 1.08, rotate: [0, -6, 6, 0] }}
                >
                  <Icon className="h-7 w-7" strokeWidth={1.75} />
                </motion.div>

                <h3 className="text-colbeef-green text-xl sm:text-2xl font-bold uppercase tracking-wide mb-4">
                  {item.title}
                </h3>

                <p className="text-colbeef-gray text-sm md:text-base leading-relaxed">
                  {item.content}
                </p>

                <div className="mt-6 h-1 w-16 rounded-full bg-colbeef-green/30 transition-all duration-300 group-hover:w-28 group-hover:bg-colbeef-green" />
              </motion.article>
            )
          })}
        </div>

        <ValoresFlipSection />

        <FadeIn>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <div className="grid md:grid-cols-2 min-h-[340px] lg:min-h-[420px]">
              <div className="relative min-h-[280px] md:min-h-full bg-colbeef-green-darker">
                <img
                  src={corporativo.filosofia.familiaColbeef}
                  alt="Familia Colbeef"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-colbeef-green-darker via-colbeef-green-darker/55 to-colbeef-green-darker/10" />
                <div className="absolute inset-0 bg-gradient-to-r from-colbeef-green-darker/70 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-l from-colbeef-green/40 via-transparent to-transparent md:from-colbeef-green/30" />

                <p className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 text-white font-bold text-xs sm:text-sm md:text-base tracking-wide uppercase leading-snug max-w-[95%]">
                  Trabajamos unidos para generar{' '}
                  <span className="text-colbeef-green-light">confianza, calidad y progreso.</span>
                </p>
              </div>

              <div className="bg-colbeef-green p-6 sm:p-8 md:p-10 lg:p-12 space-y-4 flex flex-col justify-center">
                <p className="text-white/90 text-sm leading-relaxed">{familiaColbeef.intro}</p>
                {familiaColbeef.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)} className="text-white/80 text-sm leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </AnimatedSection>
  )
}
