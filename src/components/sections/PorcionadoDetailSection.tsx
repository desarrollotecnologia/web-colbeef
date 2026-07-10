import { AnimatedSection, FadeIn } from '../ui/AnimatedSection'

const porcionadoSectionImage = '/assets/images/servicios/porcionado-proceso.jpg'

export function PorcionadoDetailSection() {
  return (
    <AnimatedSection className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-stretch">
          <FadeIn className="flex flex-col justify-center">
            <h2 className="text-colbeef-dark text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-wide leading-tight mb-5 md:mb-6">
              Precisión, estandarización y rendimiento para cada necesidad.
            </h2>

            <div className="space-y-4 text-colbeef-gray text-sm md:text-base leading-relaxed">
              <p>
                En COLBEEF transformamos postas de carne bovina y bufalina en porciones
                estandarizadas y cortes especializados, adaptados a los requerimientos de la
                industria alimentaria, restaurantes, hoteles, supermercados, distribuidores y
                grandes superficies.
              </p>
              <p>
                Nuestro proceso combina tecnología, precisión en el corte y estrictos controles
                de calidad para entregar productos listos para cocinar, optimizando tiempos de
                preparación, reduciendo desperdicios y garantizando uniformidad en cada porción.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="min-h-[240px] sm:min-h-[280px] lg:min-h-0 h-full">
            <div className="relative overflow-hidden rounded-xl lg:rounded-2xl shadow-lg h-full min-h-[240px] sm:min-h-[280px] bg-colbeef-green-pale">
              <img
                src={porcionadoSectionImage}
                alt="Proceso de porcionado en COLBEEF"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </AnimatedSection>
  )
}
