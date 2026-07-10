import { Phone } from 'lucide-react'
import { AnimatedSection, FadeIn } from '../ui/AnimatedSection'
import { Button } from '../ui/Button'

const confianzaImage = '/assets/images/servicios/beneficio-confianza.jpg'

export function BeneficioConfianzaSection() {
  return (
    <AnimatedSection className="bg-white overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-[380px] md:min-h-[440px] lg:min-h-[500px]">
        <FadeIn className="relative z-10 flex flex-col justify-center px-6 sm:px-10 lg:px-12 xl:px-16 py-12 md:py-14 lg:py-16 bg-white">
          <h2 className="text-colbeef-green text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-wide leading-tight mb-5 md:mb-6">
            Confianza que comienza desde el origen
          </h2>

          <div className="space-y-4 mb-8 md:mb-10 max-w-xl">
            <p className="text-colbeef-gray text-sm md:text-base leading-relaxed">
              En COLBEEF, cada etapa del beneficio bovino y bufalino está orientada a ofrecer
              productos con altos estándares de calidad, inocuidad y trazabilidad.
            </p>
            <p className="text-colbeef-gray text-sm md:text-base leading-relaxed">
              Nuestro compromiso es brindar soluciones confiables para la industria cárnica,
              respaldadas por tecnología, experiencia y una operación eficiente.
            </p>
          </div>

          <Button to="/contacto" size="lg" className="w-full sm:w-auto">
            <Phone className="w-4 h-4" strokeWidth={2} />
            Contactar un comercial
          </Button>
        </FadeIn>

        <FadeIn delay={0.1} className="relative min-h-[260px] sm:min-h-[320px] lg:min-h-full">
          <img
            src={confianzaImage}
            alt="Ganado bovino COLBEEF"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-y-0 left-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        </FadeIn>
      </div>
    </AnimatedSection>
  )
}
