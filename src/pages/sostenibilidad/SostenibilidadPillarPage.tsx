import { Navigate, useParams } from 'react-router-dom'
import { corporativo } from '../../data/assets'
import { getSostenibilidadPillarHero } from '../../data/pageHeroes'
import { sostenibilidadContent } from '../../data/nosotros'
import { navDropdowns } from '../../data/navigation'
import { NosotrosHero } from '../../components/nosotros/NosotrosHero'
import { AnimatedSection, FadeIn } from '../../components/ui/AnimatedSection'

const pillarMap: Record<string, { pillarIndex: number; icon: string; label: string }> = {
  'energia-solar': {
    pillarIndex: 0,
    icon: corporativo.sostenibilidad.energiaRenovable,
    label: 'Energía solar',
  },
  ptar: {
    pillarIndex: 1,
    icon: corporativo.sostenibilidad.gestionAgua,
    label: 'PTAR',
  },
  comunidad: {
    pillarIndex: 3,
    icon: corporativo.sostenibilidad.compromisoComunidad,
    label: 'Comunidad',
  },
}

const validSlugs = navDropdowns['/sostenibilidad'].map((item) => item.href.split('/').pop()!)

export function SostenibilidadPillarPage() {
  const { slug } = useParams<{ slug: string }>()

  if (!slug || !validSlugs.includes(slug)) {
    return <Navigate to="/sostenibilidad" replace />
  }

  const config = pillarMap[slug]
  const pillar = sostenibilidadContent.pillars[config.pillarIndex]

  return (
    <>
      <NosotrosHero
        image={corporativo.sostenibilidad.banner}
        label={config.label}
        content={getSostenibilidadPillarHero(config.label, pillar.description)}
      />

      <AnimatedSection className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <FadeIn>
            <div className="flex flex-col sm:flex-row gap-6 items-start mb-8">
              <div className="shrink-0 w-20 h-20 rounded-full bg-colbeef-green-darker flex items-center justify-center">
                <img src={config.icon} alt="" className="w-14 h-14 object-contain" />
              </div>
              <div>
                <div className="bg-colbeef-green text-white font-bold text-sm md:text-base px-6 py-3 rounded-r-full inline-block mb-4">
                  {pillar.title}
                </div>
                <p className="text-colbeef-gray text-sm md:text-base leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
            <img
              src={corporativo.sostenibilidad.foto2}
              alt={pillar.title}
              className="w-full rounded-2xl object-cover max-h-[360px] shadow-lg"
            />
          </FadeIn>
        </div>
      </AnimatedSection>
    </>
  )
}
