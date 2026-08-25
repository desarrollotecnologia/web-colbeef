import { agendaDesarrolloSostenible } from '../../data/sostenibilidadAgenda'
import { AnimatedSection, FadeIn } from '../ui/AnimatedSection'

export function SostenibilidadAgendaSection() {
  return (
    <AnimatedSection className="py-14 md:py-20 lg:py-24 bg-[#f3f4f2]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <FadeIn>
          <h2 className="text-center text-colbeef-dark text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-wide mb-12 md:mb-16 leading-snug">
            {agendaDesarrolloSostenible.title}
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-10 md:gap-8 lg:gap-12">
          {agendaDesarrolloSostenible.objetivos.map((objetivo, index) => (
            <FadeIn key={objetivo.number} delay={index * 0.08}>
              <article className="relative pt-10 sm:pt-12">
                <span
                  aria-hidden
                  className="pointer-events-none absolute left-0 top-0 select-none text-[7.5rem] sm:text-[8.5rem] md:text-[9rem] leading-none font-bold text-colbeef-dark/[0.08]"
                >
                  {objetivo.number}
                </span>

                <div className="relative z-10">
                  <h3 className="text-colbeef-dark text-base sm:text-lg font-semibold mb-4 leading-snug">
                    {objetivo.number}. {objetivo.title}
                  </h3>
                  <ul className="space-y-2.5">
                    {objetivo.items.map((item) => (
                      <li
                        key={item}
                        className="text-colbeef-gray text-sm sm:text-[15px] leading-relaxed pl-3 border-l-2 border-colbeef-green/40"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
