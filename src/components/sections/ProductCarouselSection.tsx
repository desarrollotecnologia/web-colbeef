import { carouselCuts } from '../../data/assets'
import { AnimatedSection, FadeIn } from '../ui/AnimatedSection'
import { BrandIcon } from '../ui/BrandIcon'
import { Button } from '../ui/Button'
import { Carousel3D } from '../ui/Carousel3D'

export function ProductCarouselSection() {
  return (
    <AnimatedSection className="relative py-12 sm:py-14 md:py-20 bg-colbeef-green-darker overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(46,157,82,0.3)_0%,transparent_55%),radial-gradient(circle_at_70%_60%,rgba(26,130,61,0.2)_0%,transparent_50%)] opacity-50 pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.35)_0px,rgba(255,255,255,0.35)_1px,transparent_1px,transparent_7px)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <FadeIn className="text-center mb-8 md:mb-10">
          <p className="text-white/50 text-xs font-semibold tracking-[0.25em] uppercase mb-3">
            FLORIDABLANCA / SANTANDER / COLOMBIA
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white uppercase">
            Nuestros cortes premium
          </h2>
          <p className="text-white/60 text-sm md:text-base max-w-2xl mx-auto mt-3 leading-relaxed">
            Calidad, frescura y excelencia en cada pieza. Descubre la selección que nos distingue en el mercado nacional e internacional.
          </p>
          <div className="flex justify-center mt-4">
            <BrandIcon variant="badge" className="w-8 h-8" />
          </div>
        </FadeIn>

        <Carousel3D items={carouselCuts} />

        <FadeIn className="text-center mt-8 sm:mt-10 md:mt-12">
          <Button to="/productos/cortes" size="lg" showArrow className="shadow-lg shadow-colbeef-green/20">
            Ver todos los cortes
          </Button>
        </FadeIn>
      </div>
    </AnimatedSection>
  )
}
