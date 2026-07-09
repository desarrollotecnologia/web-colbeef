import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'outline' | 'ghost' | 'white'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  href?: string
  to?: string
  showArrow?: boolean
}

const variants = {
  primary:
    'bg-colbeef-green text-white hover:bg-colbeef-green-dark border border-colbeef-green',
  outline:
    'bg-white text-colbeef-green border-2 border-colbeef-green hover:bg-colbeef-green-pale',
  ghost:
    'bg-transparent text-colbeef-green border border-colbeef-green hover:bg-colbeef-green hover:text-white',
  white:
    'bg-white text-colbeef-green border border-white hover:bg-colbeef-green-pale',
}

const sizes = {
  sm: 'px-4 py-2 text-xs tracking-widest',
  md: 'px-6 py-2.5 text-xs tracking-widest',
  lg: 'px-8 py-3 text-sm tracking-widest',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  href,
  to,
  showArrow = false,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 font-semibold uppercase transition-colors duration-300 rounded-sm ${variants[variant]} ${sizes[size]} ${className}`
  const content = (
    <>
      {children}
      {showArrow && <ArrowRight className="w-4 h-4" />}
    </>
  )

  if (to) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link to={to} className={classes}>
          {content}
        </Link>
      </motion.div>
    )
  }

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      type="button"
      className={classes}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.button>
  )
}
