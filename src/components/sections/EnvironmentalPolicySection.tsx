import { ArrowRight } from 'lucide-react'
import { images } from '../../data/assets'
import { environmentalPolicy } from '../../data/sustainability'
import { AnimatedSection, FadeIn } from '../ui/AnimatedSection'
import { Logo } from '../ui/Logo'

export function EnvironmentalPolicySection() {
  return (
    <AnimatedSection className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-colbeef-green-darker rounded-2xl overflow-hidden grid lg:grid-cols-2">
          <FadeIn direction="left" className="relative min-h-[240px] sm:min-h-[280px] lg:min-h-[320px]">
            <img
              src={images.panoramica}
              alt="Política ambiental"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-colbeef-green p-4 sm:p-5 max-w-[min(200px,70vw)]">
              <p className="text-white font-bold text-sm tracking-wider uppercase mb-3">
                Política Ambiental
              </p>
              <button
                type="button"
                className="bg-colbeef-gold text-colbeef-dark text-xs font-bold px-4 py-2 flex items-center gap-2 hover:bg-yellow-400 transition-colors"
              >
                VER MÁS <ArrowRight className="w-3 h-3" />
              </button>
            </div>
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 hidden sm:block">
              <Logo variant="white" size="sm" />
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.15} className="p-8 md:p-12 flex items-center">
            <div>
              <p className="text-white font-bold text-lg md:text-xl leading-relaxed mb-4">
                Se encuentra comprometida con el manejo ambiental responsable, la prevención de la
                contaminación y el control de los impactos ambientales asociados a sus procesos,
              </p>
              <p className="text-white/70 text-sm leading-relaxed">{environmentalPolicy}</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </AnimatedSection>
  )
}
