import { motion } from 'framer-motion'
import type { PageHeroContent } from '../../types/pageHero'

interface PageHeroProps {
  image: string
  alt: string
  content: PageHeroContent
}

export function PageHero({ image, alt, content }: PageHeroProps) {
  return (
    <section className="relative h-[52vh] min-h-[380px] sm:min-h-[420px] md:min-h-[480px] max-h-[620px] overflow-hidden pt-header">
      <img src={image} alt={alt} className="absolute inset-0 w-full h-full object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/20" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="relative z-10 h-full max-w-7xl mx-auto px-4 md:px-8 flex items-center"
      >
        <div className="max-w-2xl lg:max-w-3xl">
          <span className="inline-block bg-colbeef-green text-white text-[10px] sm:text-xs font-bold tracking-[0.18em] uppercase px-4 py-2 mb-4 sm:mb-5">
            {content.badge}
          </span>

          <h1 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] leading-tight mb-4 sm:mb-5">
            {content.headline}
          </h1>

          <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
            {content.features}
          </p>
        </div>
      </motion.div>
    </section>
  )
}
