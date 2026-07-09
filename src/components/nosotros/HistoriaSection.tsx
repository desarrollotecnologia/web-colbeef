import { motion } from 'framer-motion'
import { historiaTimeline, somosContent } from '../../data/nosotros'
import { corporativo } from '../../data/assets'
import { AnimatedSection, FadeIn } from '../ui/AnimatedSection'

const cardClipPaths = [
  'polygon(0 0, 100% 0, 92% 100%, 0 100%)',
  'polygon(4% 0, 100% 0, 96% 100%, 0 100%)',
  'polygon(8% 0, 100% 0, 100% 100%, 0 100%)',
]

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 36, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
}

function HistoriaSideLabel({ children, side }: { children: string; side: 'left' | 'right' }) {
  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 0, x: side === 'left' ? -24 : 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`hidden sm:flex pointer-events-none absolute top-1/2 -translate-y-1/2 z-20 items-center justify-center ${
        side === 'left'
          ? 'left-[clamp(0.5rem,2vw,2.5rem)]'
          : 'right-[clamp(0.5rem,2vw,2.5rem)]'
      }`}
    >
      <span
        className="block uppercase font-bold leading-none text-transparent opacity-40 md:opacity-55 lg:opacity-70 xl:opacity-90 [font-size:clamp(3.25rem,4.5vw+1.5rem,9.5rem)] tracking-[0.04em] md:tracking-[0.06em]"
        style={{
          WebkitTextStroke: 'clamp(1.5px, 0.15vw, 3px) rgba(255,255,255,0.4)',
          writingMode: 'vertical-rl',
          transform: side === 'left' ? 'rotate(180deg)' : undefined,
        }}
      >
        {children}
      </span>
    </motion.div>
  )
}

export function HistoriaSection() {
  return (
    <AnimatedSection
      id="historia"
      className="relative py-16 md:py-24 bg-colbeef-green-darker overflow-x-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(46,157,82,0.35)_0%,transparent_55%),radial-gradient(circle_at_80%_40%,rgba(46,157,82,0.25)_0%,transparent_50%)] opacity-40 pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.35)_0px,rgba(255,255,255,0.35)_1px,transparent_1px,transparent_7px)]" />

      <HistoriaSideLabel side="left">Somos</HistoriaSideLabel>
      <HistoriaSideLabel side="right">Colbeef</HistoriaSideLabel>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full sm:pl-[clamp(4.5rem,11vw,11rem)] sm:pr-[clamp(4.5rem,11vw,11rem)]">
        <div className="w-full">
            <FadeIn className="text-center mb-10">
              <motion.h2
                initial={{ opacity: 0, letterSpacing: '0.5em' }}
                whileInView={{ opacity: 1, letterSpacing: '0.35em' }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="text-white/90 text-2xl md:text-3xl font-medium italic tracking-[0.35em] uppercase"
              >
                Nuestra historia
              </motion.h2>
            </FadeIn>

            <motion.div
              className="grid lg:grid-cols-3 gap-4 md:gap-5 mb-10"
              variants={gridVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              {historiaTimeline.map((item, i) => {
                const isGreen = item.variant === 'green'

                return (
                  <motion.div
                    key={`${item.year}-${i}`}
                    variants={cardVariants}
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                  >
                    <div
                      className={`h-full ${isGreen ? 'bg-colbeef-green text-white' : 'bg-white text-colbeef-green'} p-6 md:p-7 min-h-[190px] shadow-[0_12px_30px_rgba(0,0,0,0.18)] transition-shadow duration-300 hover:shadow-[0_18px_40px_rgba(0,0,0,0.28)]`}
                      style={{ clipPath: cardClipPaths[i % 3] }}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <motion.span
                          initial={{ opacity: 0, x: -12 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + i * 0.08, duration: 0.45 }}
                          className={`text-3xl md:text-4xl font-bold italic underline underline-offset-4 decoration-[2px] ${
                            isGreen ? 'text-white' : 'text-colbeef-green'
                          }`}
                        >
                          {item.year}
                        </motion.span>
                      </div>
                      <div className="mt-4 space-y-2">
                        <p
                          className={`${isGreen ? 'text-white/85' : 'text-colbeef-green'} text-[11px] md:text-xs leading-relaxed font-semibold`}
                        >
                          {item.title}
                        </p>
                        <p
                          className={`${isGreen ? 'text-white/75' : 'text-colbeef-gray'} text-[11px] md:text-xs leading-relaxed`}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-2xl overflow-hidden min-h-[280px] group"
            >
              <motion.img
                src={corporativo.nosotros.banner}
                alt="Planta Colbeef"
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ scale: 1.08 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
              />
              <div className="absolute inset-0 bg-colbeef-green-darker/65" />

              <div className="relative z-10 grid md:grid-cols-2 gap-8 p-8 md:p-12 items-end min-h-[280px]">
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.55 }}
                  className="text-white/85 text-xs md:text-sm leading-relaxed max-w-lg"
                >
                  {somosContent.highlight}
                </motion.p>
                <div className="text-right">
                  <motion.span
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.35, duration: 0.6, type: 'spring', stiffness: 120 }}
                    className="inline-block text-7xl md:text-8xl font-semibold text-transparent italic"
                    style={{ WebkitTextStroke: '2px rgba(255,255,255,0.9)' }}
                  >
                    2026
                  </motion.span>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.55, duration: 0.5, ease: 'easeOut' }}
                    className="h-1.5 bg-colbeef-green w-36 ml-auto mt-2 origin-right"
                  />
                </div>
              </div>
            </motion.div>
        </div>
      </div>
    </AnimatedSection>
  )
}
