import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { images } from '../data/assets'
import { serviciosHero } from '../data/pageHeroes'
import { servicePages, serviciosPageContent } from '../data/services'
import { navDropdowns } from '../data/navigation'
import { AnimatedSection, FadeIn } from '../components/ui/AnimatedSection'
import { PageHero } from '../components/ui/PageHero'

export function ServiciosPage() {
  return (
    <>
      <PageHero image={images.beneficioLavado} alt="Servicios" content={serviciosHero} />

      <AnimatedSection className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-colbeef-green text-xs tracking-[0.25em] uppercase mb-4">
              FLORIDABLANCA / SANTANDER / COLOMBIA
            </p>
            <h2 className="text-2xl font-bold text-colbeef-green uppercase">
              Servicios integrales para el sector cárnico
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {navDropdowns['/servicios'].map((item, i) => {
              const service = servicePages[item.href.split('/').pop()!]
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    to={item.href}
                    className="block bg-colbeef-cream rounded-xl overflow-hidden hover:shadow-md transition-shadow h-full"
                  >
                    <img
                      src={service.image}
                      alt={item.label}
                      className="w-full h-36 object-cover"
                    />
                    <div className="p-5">
                      <h3 className="text-colbeef-green font-bold text-sm mb-2">{item.label}</h3>
                      <p className="text-colbeef-gray text-xs leading-relaxed line-clamp-3 mb-3">
                        {service.description}
                      </p>
                      <span className="text-colbeef-green text-xs font-semibold uppercase inline-flex items-center gap-1">
                        Ver más <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {serviciosPageContent.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <p className="text-colbeef-gray text-sm leading-relaxed">{item.description}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  )
}
