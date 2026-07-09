import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { corporativo } from '../../data/assets'
import { sostenibilidadContent } from '../../data/nosotros'
import { navDropdowns } from '../../data/navigation'
import { NosotrosHero } from '../../components/nosotros/NosotrosHero'
import { AnimatedSection, FadeIn } from '../../components/ui/AnimatedSection'

const pillarIcons = [
  corporativo.sostenibilidad.energiaRenovable,
  corporativo.sostenibilidad.gestionAgua,
  corporativo.sostenibilidad.compromisoComunidad,
]

const slugToPillar: Record<string, number> = {
  'energia-solar': 0,
  ptar: 1,
  comunidad: 3,
}

export function SostenibilidadIndexPage() {
  return (
    <>
      <NosotrosHero image={corporativo.sostenibilidad.banner} label="Sostenibilidad" />

      <AnimatedSection className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <FadeIn className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-colbeef-gray text-sm md:text-base leading-relaxed mb-4">
              {sostenibilidadContent.intro}
            </p>
            <p className="text-colbeef-green font-bold text-sm md:text-base leading-relaxed">
              {sostenibilidadContent.management}
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {navDropdowns['/sostenibilidad'].map((item, i) => {
              const pillarIndex = slugToPillar[item.href.split('/').pop()!]
              const pillar = sostenibilidadContent.pillars[pillarIndex]
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
                    className="block bg-colbeef-cream rounded-2xl p-6 hover:shadow-md transition-shadow h-full"
                  >
                    <img
                      src={pillarIcons[i]}
                      alt=""
                      className="w-16 h-16 object-contain mb-4"
                    />
                    <h3 className="text-colbeef-green font-bold mb-2">{item.label}</h3>
                    <p className="text-colbeef-gray text-xs leading-relaxed mb-4 line-clamp-4">
                      {pillar.description}
                    </p>
                    <span className="text-colbeef-green text-xs font-semibold uppercase inline-flex items-center gap-1">
                      Ver más <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </AnimatedSection>
    </>
  )
}
