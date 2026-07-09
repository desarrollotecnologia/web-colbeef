import { ArrowRight } from 'lucide-react'
import { beefCuts, desposteSections } from '../../data/products'
import { images } from '../../data/assets'
import { AnimatedSection } from '../../components/ui/AnimatedSection'
import { PageHero } from '../../components/ui/PageHero'
import { BrandIcon } from '../../components/ui/BrandIcon'

export function CortesPage() {
  return (
    <>
      <PageHero image={images.desposteTrabajador} label="Cortes" showCategories={false} />

      <AnimatedSection className="py-16 bg-colbeef-green-darker">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-white text-2xl font-bold tracking-wider uppercase">Desposte bovino</h2>
            <BrandIcon className="w-6 h-6" />
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-3 space-y-3">
              {desposteSections.map((section, i) => (
                <div
                  key={section}
                  className={`w-full px-4 py-3 text-xs font-semibold tracking-wider uppercase flex items-center justify-between ${
                    i === 1 ? 'bg-colbeef-green text-white' : 'bg-white text-colbeef-green'
                  }`}
                >
                  {section}
                  <ArrowRight className="w-4 h-4" />
                </div>
              ))}
            </div>

            <div className="lg:col-span-9">
              <div className="bg-colbeef-green-darker border border-white/10 rounded-xl p-6 md:p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <img
                    src={images.desposteTrabajador}
                    alt="Diagrama de cortes"
                    className="max-h-80 w-full object-cover rounded-lg"
                  />
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-colbeef-green-light text-xs font-bold tracking-wider uppercase mb-3">
                        Cortes delanteros
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {beefCuts.delanteros.map((cut) => (
                          <span
                            key={cut}
                            className="px-2 py-1 bg-colbeef-gold/90 text-colbeef-green-darker text-[10px] font-semibold"
                          >
                            {cut}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-colbeef-green-light text-xs font-bold tracking-wider uppercase mb-3">
                        Cortes traseros
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {beefCuts.traseros.map((cut) => (
                          <span
                            key={cut}
                            className="px-2 py-1 bg-colbeef-gold/90 text-colbeef-green-darker text-[10px] font-semibold"
                          >
                            {cut}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  )
}
