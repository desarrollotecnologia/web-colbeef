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
        className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-colbeef-green flex flex-col items-center justify-center gap-1 text-white p-2"
        aria-label="Res"
      >
        <img src={icons.ganado} alt="" className="h-10 w-auto object-contain brightness-0 invert" />
        <span className="text-xs font-bold tracking-widest">RES</span>
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
