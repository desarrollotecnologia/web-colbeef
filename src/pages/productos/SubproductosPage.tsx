import { productCategories } from '../../data/products'
import { images } from '../../data/assets'
import { AnimatedSection, FadeIn } from '../../components/ui/AnimatedSection'
import { PageHero } from '../../components/ui/PageHero'

const subproductosItems = productCategories.filter((cat) =>
  ['subproductos', 'canales'].includes(cat.id),
)

export function SubproductosPage() {
  return (
    <>
      <PageHero
        image={images.comercializacion}
        label="Subproductos"
        showCategories={false}
      />

      <AnimatedSection className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {subproductosItems.map((cat, i) => (
              <FadeIn key={cat.id} delay={i * 0.1}>
                <div className="rounded-2xl overflow-hidden shadow-lg border border-colbeef-green/10">
                  <img src={cat.image} alt={cat.title} className="w-full h-56 object-cover" />
                  <div className="p-6">
                    <h3 className="text-colbeef-green font-bold tracking-wider mb-3">{cat.title}</h3>
                    <p className="text-colbeef-gray text-sm leading-relaxed">{cat.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-12 bg-colbeef-cream rounded-2xl p-8">
            <h3 className="text-colbeef-green font-bold uppercase tracking-wider mb-4">
              Otros subproductos
            </h3>
            <p className="text-colbeef-gray text-sm leading-relaxed">
              También comercializamos vísceras, pieles, productos de tercer ciclo y carnes genéricas
              con los más altos estándares de calidad e inocuidad para mercados locales, nacionales e
              internacionales.
            </p>
          </FadeIn>
        </div>
      </AnimatedSection>
    </>
  )
}
