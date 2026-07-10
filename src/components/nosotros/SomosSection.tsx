import { corporativo } from '../../data/assets'
import { somosContent } from '../../data/nosotros'
import { AnimatedSection, FadeIn } from '../ui/AnimatedSection'

export function SomosSection() {
  return (
    <AnimatedSection id="somos" className="bg-white">
      <div className="h-2 bg-colbeef-green" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <FadeIn>
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src={corporativo.nosotros.foto1}
                alt="Planta Colbeef"
                className="w-full h-[280px] md:h-[400px] object-cover"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.12} className="space-y-3 md:space-y-3.5">
            {somosContent.boldParagraphs.map((p) => (
              <p
                key={p.slice(0, 40)}
                className="text-colbeef-green font-bold text-xs md:text-[13px] leading-relaxed"
              >
                {p}
              </p>
            ))}
            {somosContent.paragraphs.map((p) => (
              <p
                key={p.slice(0, 40)}
                className="text-colbeef-gray text-xs md:text-[13px] leading-relaxed"
              >
                {p}
              </p>
            ))}
          </FadeIn>
        </div>
      </div>

      <div className="h-2 bg-colbeef-green" />
    </AnimatedSection>
  )
}
