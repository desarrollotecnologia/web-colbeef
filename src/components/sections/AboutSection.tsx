import { images } from '../../data/assets'
import { aboutParagraphs } from '../../data/site'
import { AnimatedSection, FadeIn } from '../ui/AnimatedSection'
import { Button } from '../ui/Button'

export function AboutSection() {
  return (
    <AnimatedSection id="nosotros" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <FadeIn direction="left" className="relative aspect-[4/3] sm:aspect-[5/4] lg:aspect-auto lg:min-h-[420px]">
            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl">
              <img
                src={images.homeAbout}
                alt="Planta Colbeef vista aérea"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.15} className="flex flex-col justify-center">
            <p className="text-colbeef-green text-[10px] sm:text-xs font-bold tracking-[0.15em] sm:tracking-[0.25em] uppercase mb-4">
              FLORIDABLANCA / SANTANDER / COLOMBIA
            </p>

            <div className="space-y-5 mb-8">
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="text-colbeef-gray text-sm md:text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <Button to="/corporativo/filosofia" showArrow>
              Ver más
            </Button>
          </FadeIn>
        </div>
      </div>
    </AnimatedSection>
  )
}
