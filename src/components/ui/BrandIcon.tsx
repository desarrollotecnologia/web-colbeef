import { icons } from '../../data/assets'

interface BrandIconProps {
  variant?: 'cow' | 'badge'
  className?: string
}

export function BrandIcon({ variant = 'cow', className = 'w-6 h-6' }: BrandIconProps) {
  const src = variant === 'badge' ? icons.badgePlanta : icons.beneficio
  return (
    <img
      src={src}
      alt=""
      className={`${className} object-contain`}
      aria-hidden="true"
    />
  )
}
