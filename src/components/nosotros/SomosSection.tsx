import { corporativo } from '../../data/assets'
import { somosContent } from '../../data/nosotros'
import { AnimatedSection, FadeIn } from '../ui/AnimatedSection'

export function SomosSection() {
  return (
    <AnimatedSection id="somos" className="bg-white">
      <div className="h-2 bg-colbeef-green" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <FadeIn>
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src={corporativo.nosotros.foto1}
                alt="Planta Colbeef"
                className="w-full h-[320px] md:h-[480px] object-cover"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.12} className="space-y-5">
            {somosContent.boldParagraphs.map((p) => (
              <p key={p.slice(0, 40)} className="text-colbeef-green font-bold text-sm md:text-base leading-relaxed">
                {p}
              </p>
            ))}
            {somosContent.paragraphs.map((p) => (
              <p key={p.slice(0, 40)} className="text-colbeef-gray text-sm md:text-base leading-relaxed">
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
