import { carouselCuts } from '../../data/assets'
import { AnimatedSection, FadeIn } from '../ui/AnimatedSection'
import { Button } from '../ui/Button'
import { Carousel3D } from '../ui/Carousel3D'

export function ProductCarouselSection() {
  return (
    <AnimatedSection className="relative py-6 sm:py-7 md:py-9 bg-[#157925] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(46,157,82,0.25)_0%,transparent_55%),radial-gradient(circle_at_70%_60%,rgba(13,85,22,0.25)_0%,transparent_50%)] opacity-50 pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.35)_0px,rgba(255,255,255,0.35)_1px,transparent_1px,transparent_7px)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <FadeIn className="text-center mb-4 md:mb-5">
          <h2 className="text-2xl md:text-3xl font-bold text-white uppercase">
            Nuestros cortes
          </h2>
          <p className="text-white/60 text-sm md:text-base max-w-2xl mx-auto mt-2 leading-relaxed">
            Nuestros cortes, calidad desde el origen, frescura garantizada y procesos bajo estrictos estándares de inocuidad. Una selección de cortes que destaca por su consistencia, rendimiento y excelencia para el mercado nacional e internacional
          </p>
        </FadeIn>

        <Carousel3D items={carouselCuts} />

        <FadeIn className="relative z-20 text-center mt-6 sm:mt-7 md:mt-8">
          <Button
            to="/productos/cortes"
            variant="greenLight"
            size="lg"
            showArrow
            className="shadow-lg shadow-black/20"
          >
            Ver todos los cortes
          </Button>
        </FadeIn>
      </div>
    </AnimatedSection>
  )
}
