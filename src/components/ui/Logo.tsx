import { Link } from 'react-router-dom'
import { brand } from '../../data/assets'

interface LogoProps {
  variant?: 'default' | 'white' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizes = {
  sm: 'h-8 md:h-9',
  md: 'h-10 md:h-12',
  lg: 'h-16 md:h-20',
}

export function Logo({ size = 'md', className = '' }: LogoProps) {
  return (
    <Link to="/" className={`inline-block ${className}`}>
      <img
        src={brand.logo}
        alt="Colbeef"
        className={`${sizes[size]} w-auto object-contain`}
      />
    </Link>
  )
}
