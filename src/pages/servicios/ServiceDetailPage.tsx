import { Navigate, useParams } from 'react-router-dom'
import { defaultServiceHref } from '../../data/navigation'
import { getServiceHeroContent, servicePages } from '../../data/services'
import { BeneficioCalidadCardsSection } from '../../components/sections/BeneficioCalidadCardsSection'
import { BeneficioConfianzaSection } from '../../components/sections/BeneficioConfianzaSection'
import { BeneficioDetailSection } from '../../components/sections/BeneficioDetailSection'
import { BeneficioProcesoSection } from '../../components/sections/BeneficioProcesoSection'
import { BeneficiosNegocioSection } from '../../components/sections/BeneficiosNegocioSection'
import { BienestarAnimalSection } from '../../components/sections/BienestarAnimalSection'
import { CompromisoProcesoSection } from '../../components/sections/CompromisoProcesoSection'
import { DesposteDetailSection } from '../../components/sections/DesposteDetailSection'
import { DesposteNivelesSection } from '../../components/sections/DesposteNivelesSection'
import { DesposteValorSection } from '../../components/sections/DesposteValorSection'
import { PesajeDetailSection } from '../../components/sections/PesajeDetailSection'
import { PorcionadoDetailSection } from '../../components/sections/PorcionadoDetailSection'
import { PorcionadoSolucionesSection } from '../../components/sections/PorcionadoSolucionesSection'
import { AnimatedSection, FadeIn } from '../../components/ui/AnimatedSection'
import { PageHero } from '../../components/ui/PageHero'

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const service = slug ? servicePages[slug] : undefined

  if (!service) {
    return <Navigate to={defaultServiceHref} replace />
  }

  const heroImage = service.heroImage ?? service.image
  const isPesaje = slug === 'pesaje-de-ganado'
  const isBeneficio = slug === 'beneficio'
  const isDesposte = slug === 'desposte'
  const isPorcionado = slug === 'porcionado'

  return (
    <>
      <PageHero
        image={heroImage}
        alt={service.title}
        content={getServiceHeroContent(service)}
      />

      {isPesaje ? (
        <>
          <PesajeDetailSection />
          <BienestarAnimalSection />
          <BeneficiosNegocioSection />
          <CompromisoProcesoSection />
        </>
      ) : isBeneficio ? (
        <>
          <BeneficioDetailSection />
          <BeneficioProcesoSection />
          <BeneficioConfianzaSection />
          <BeneficioCalidadCardsSection />
        </>
      ) : isDesposte ? (
        <>
          <DesposteDetailSection />
          <DesposteNivelesSection />
          <DesposteValorSection />
        </>
      ) : isPorcionado ? (
        <>
          <PorcionadoDetailSection />
          <PorcionadoSolucionesSection />
        </>
      ) : (
        <AnimatedSection className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 md:px-8">
            <FadeIn>
              <h2 className="text-colbeef-green text-2xl font-bold uppercase tracking-wider mb-6">
                {service.title}
              </h2>
              <p className="text-colbeef-gray text-sm md:text-base leading-relaxed mb-10">
                {service.description}
              </p>
              <img
                src={heroImage}
                alt={service.title}
                className="w-full rounded-2xl object-cover max-h-[420px] shadow-lg"
              />
            </FadeIn>
          </div>
        </AnimatedSection>
      )}
    </>
  )
}
