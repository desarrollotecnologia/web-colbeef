import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { icons } from '../../data/assets'

interface CategoryTilesProps {
  showArrow?: boolean
}

export function CategoryTiles({ showArrow = true }: CategoryTilesProps) {
  return (
    <div className="flex items-stretch gap-2">
      <motion.button
        type="button"
        whileHover={{ scale: 1.05 }}
        className="flex items-center justify-center p-0"
        aria-label="Ganado res"
      >
        <img
          src={icons.ganado}
          alt="Ganado res"
          className="h-12 w-auto sm:h-16 md:h-20 lg:h-24 object-contain"
        />
      </motion.button>
      {showArrow && (
        <motion.button
          type="button"
          whileHover={{ scale: 1.05 }}
          className="w-10 h-16 sm:w-12 sm:h-20 md:w-14 md:h-24 bg-white flex items-center justify-center text-colbeef-dark"
          aria-label="Siguiente"
        >
          <ChevronRight className="w-5 h-5" />
        </motion.button>
      )}
    </div>
  )
}
