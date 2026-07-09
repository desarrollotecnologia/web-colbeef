import { CertificacionesOficiales } from './DesignAssets'
import { certifications } from '../../data/site'
import { FadeIn } from './AnimatedSection'

export function CertificationBadges({
  size = 'md',
  variant = 'official',
}: {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'official' | 'badges'
}) {
  if (variant === 'official') {
    const sizes = {
      sm: 'max-w-md',
      md: 'max-w-xl',
      lg: 'max-w-3xl',
    }
    return <CertificacionesOficiales className={sizes[size]} />
  }

  const sizeClasses = {
    sm: 'w-20 h-20',
    md: 'w-24 h-24 md:w-28 md:h-28',
    lg: 'w-32 h-32 md:w-36 md:h-36',
  }

  return (
    <div className="flex flex-wrap items-center gap-4 md:gap-6">
      {certifications.map((cert, i) => (
        <FadeIn key={cert.id} delay={i * 0.1}>
          <div className="flex flex-col items-center gap-2">
            <img
              src={cert.image}
              alt={cert.name}
              className={`${sizeClasses[size]} object-contain drop-shadow-md`}
            />
            <span className="text-[10px] font-bold text-colbeef-green tracking-wider uppercase">
              {cert.name}
            </span>
          </div>
        </FadeIn>
      ))}
    </div>
  )
}
