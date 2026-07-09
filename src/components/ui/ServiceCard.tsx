import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

interface ServiceCardProps {
  title: string
  description: string
  image: string
  href?: string
  index?: number
  variant?: 'default' | 'overlay'
}

export function ServiceCard({
  title,
  description,
  image,
  href = '#',
  index = 0,
  variant = 'default',
}: ServiceCardProps) {
  if (variant === 'overlay') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.6 }}
        className="group relative h-[300px] sm:h-[360px] md:h-[420px] overflow-hidden cursor-pointer"
      >
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <h3 className="text-white text-xl md:text-2xl font-bold tracking-wider mb-3">
            {title}
          </h3>
          <p className="text-white/75 text-sm leading-relaxed mb-4 line-clamp-3">
            {description}
          </p>
          <Link
            to={href}
            className="inline-flex items-center gap-2 text-colbeef-gold text-xs font-semibold tracking-widest uppercase group-hover:gap-3 transition-all"
          >
            VER MÁS <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group bg-white border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-500"
    >
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-colbeef-dark mb-2 tracking-wide">
          {title}
        </h3>
        <p className="text-colbeef-gray text-sm leading-relaxed mb-4">
          {description}
        </p>
        <Link
          to={href}
          className="inline-flex items-center gap-2 text-colbeef-red text-xs font-semibold tracking-widest uppercase group-hover:gap-3 transition-all"
        >
          VER MÁS <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  )
}
