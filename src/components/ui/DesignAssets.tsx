import { corporativo } from '../../data/assets'
import { FadeIn } from './AnimatedSection'

interface SectionBannerProps {
  src: string
  alt: string
  className?: string
}

export function SectionBanner({ src, alt, className = '' }: SectionBannerProps) {
  return (
    <FadeIn className={className}>
      <img src={src} alt={alt} className="w-full h-auto object-contain" />
    </FadeIn>
  )
}

export function SectionTitleImage({
  src,
  alt,
  className = 'h-12 md:h-16 w-auto object-contain',
}: {
  src: string
  alt: string
  className?: string
}) {
  return (
    <FadeIn>
      <img src={src} alt={alt} className={className} />
    </FadeIn>
  )
}

interface DesignImageButtonProps {
  src: string
  alt: string
  active?: boolean
  onClick?: () => void
}

export function DesignImageButton({ src, alt, active, onClick }: DesignImageButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`transition-transform hover:scale-105 ${active ? 'ring-2 ring-colbeef-green ring-offset-2' : 'opacity-80 hover:opacity-100'}`}
    >
      <img src={src} alt={alt} className="h-14 md:h-16 w-auto object-contain" />
    </button>
  )
}

export function PillTitle({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <FadeIn className={className}>
      <div className="inline-block bg-colbeef-green text-white font-bold text-xs md:text-sm tracking-wider uppercase px-6 py-3 rounded-full">
        {children}
      </div>
    </FadeIn>
  )
}

export function CertificacionesOficiales({ className = '' }: { className?: string }) {
  return (
    <FadeIn className={className}>
      <img
        src={corporativo.certificaciones.todosCertificados}
        alt="Certificaciones HACCP, ISO 22000 e Invima"
        className="w-full max-w-2xl mx-auto h-auto object-contain"
      />
    </FadeIn>
  )
}
