import { serviciosImages } from '../../data/assets'
import { AnimatedSection, FadeIn } from '../ui/AnimatedSection'

const beneficioIntro =
  'En COLBEEF realizamos el beneficio, sacrificio y procesamiento de ganado bovino y bufalino mediante procesos certificados, tecnología de última generación y estrictos protocolos de inocuidad alimentaria, bienestar animal y trazabilidad, garantizando una carne segura, fresca y de excelente calidad para nuestros clientes.'

const beneficioSectionImage = serviciosImages.beneficioProceso

export function BeneficioDetailSection() {
  return (
    <AnimatedSection className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-stretch">
          <FadeIn className="flex flex-col justify-center">
            <h2 className="text-colbeef-green text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-wide leading-tight mb-5 md:mb-6">
              Beneficio
            </h2>

            <p className="text-colbeef-gray text-sm md:text-base leading-relaxed">
              {beneficioIntro}
            </p>
          </FadeIn>

          <FadeIn delay={0.1} className="min-h-[240px] sm:min-h-[280px] lg:min-h-0 h-full">
            <div className="relative overflow-hidden rounded-xl lg:rounded-2xl shadow-lg h-full min-h-[240px] sm:min-h-[280px] bg-colbeef-green-pale">
              <img
                src={beneficioSectionImage}
                alt="Proceso de beneficio en COLBEEF"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </AnimatedSection>
  )
}
