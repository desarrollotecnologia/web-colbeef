import { motion } from 'framer-motion'
import { CategoryTiles } from './CategoryTiles'
import { HeroPageLabel } from './HeroPageLabel'

interface PageHeroProps {
  image: string
  label: string
  banner?: string
  showCategories?: boolean
}

export function PageHero({
  image,
  label,
  banner,
  showCategories = true,
}: PageHeroProps) {
  return (
    <section className="relative h-[50vh] min-h-[360px] sm:min-h-[400px] md:min-h-[420px] max-h-[600px] overflow-hidden pt-header">
      <img src={image} alt={label} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 overlay-hero" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="absolute bottom-0 left-0 z-10 max-w-[95vw]"
      >
        <HeroPageLabel label={label} />
      </motion.div>

      {banner && (
        <p className="absolute top-[38%] sm:top-1/3 left-1/2 -translate-x-1/2 text-white text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase z-10 px-4 text-center max-w-[90vw]">
          {banner}
        </p>
      )}

      {showCategories && (
        <div className="absolute bottom-6 sm:bottom-8 right-4 sm:right-6 md:right-12 z-10 hidden sm:block">
          <CategoryTiles />
        </div>
      )}
    </section>
  )
}
