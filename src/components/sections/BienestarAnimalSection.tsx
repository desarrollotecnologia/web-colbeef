import { bienestarAnimalContent } from '../../data/pesajeBienestar'
import { AnimatedSection, FadeIn } from '../ui/AnimatedSection'

export function BienestarAnimalSection() {
  const { label, title, intro, features } = bienestarAnimalContent

  return (
    <AnimatedSection className="py-12 md:py-16 lg:py-20 bg-colbeef-green-pale/40">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <p className="text-colbeef-green text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-3">
            {label}
          </p>
          <h2 className="text-colbeef-dark text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-5 md:mb-6">
            {title}
          </h2>
          <p className="text-colbeef-gray text-sm md:text-base leading-relaxed">{intro}</p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon

            return (
              <FadeIn key={feature.id} delay={index * 0.05}>
                <article className="bg-white rounded-xl md:rounded-2xl shadow-md hover:shadow-lg transition-shadow h-full flex flex-col overflow-hidden">
                  <div className="flex items-center gap-3 px-5 pt-5 pb-4">
                    <div className="w-10 h-10 rounded-lg bg-colbeef-green flex items-center justify-center text-white shrink-0">
                      <Icon className="w-5 h-5" strokeWidth={1.75} />
                    </div>
                    <span className="text-colbeef-green text-sm font-bold">{feature.number}</span>
                    <h3 className="text-colbeef-dark text-sm sm:text-base font-bold leading-snug">
                      {feature.title}
                    </h3>
                  </div>

                  <div className="px-5 pb-4">
                    <div className="relative overflow-hidden rounded-lg aspect-[16/10] bg-colbeef-green-pale">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="absolute inset-0 h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>

                  <p className="text-colbeef-gray text-xs sm:text-sm leading-relaxed px-5 pb-5 mt-auto">
                    {feature.description}
                  </p>
                </article>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </AnimatedSection>
  )
}
