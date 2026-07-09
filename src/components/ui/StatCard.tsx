import { motion } from 'framer-motion'
import { CountUp } from './AnimatedSection'

interface StatCardProps {
  value: string
  label: string
  description: string
  sublabel?: string
  index?: number
  dark?: boolean
}

export function StatCard({
  value,
  label,
  description,
  sublabel,
  index = 0,
  dark = false,
}: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className={`p-6 md:p-8 text-center border ${
        dark
          ? 'border-white/10 bg-white/5 backdrop-blur-sm'
          : 'border-gray-100 bg-colbeef-cream'
      }`}
    >
      <CountUp
        value={value}
        className={`block text-4xl md:text-5xl font-bold mb-2 ${
          dark ? 'text-colbeef-gold' : 'text-colbeef-red'
        }`}
      />
      <p
        className={`text-xs font-bold tracking-[0.25em] uppercase mb-3 ${
          dark ? 'text-white' : 'text-colbeef-dark'
        }`}
      >
        {label}
      </p>
      {sublabel && (
        <p className={`text-sm mb-3 ${dark ? 'text-white/70' : 'text-colbeef-gray'}`}>
          {sublabel}
        </p>
      )}
      <p className={`text-sm leading-relaxed ${dark ? 'text-white/60' : 'text-colbeef-gray'}`}>
        {description}
      </p>
      <button
        type="button"
        className={`mt-4 text-xs font-semibold tracking-widest uppercase ${
          dark ? 'text-colbeef-gold hover:text-white' : 'text-colbeef-red hover:text-colbeef-red-dark'
        } transition-colors`}
      >
        VER MÁS
      </button>
    </motion.div>
  )
}
