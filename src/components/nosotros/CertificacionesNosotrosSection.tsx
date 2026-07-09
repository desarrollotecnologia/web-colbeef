import { certificacionesContent } from '../../data/nosotros'
import { corporativo } from '../../data/assets'
import { AnimatedSection, FadeIn } from '../ui/AnimatedSection'
import { CertificacionesOficiales, PillTitle } from '../ui/DesignAssets'

export function CertificacionesNosotrosSection() {
  return (
    <>
      <AnimatedSection className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-16">
            <FadeIn>
              <img
                src={corporativo.certificaciones.invima}
                alt="Sello INVIMA"
                className="w-full max-w-md mx-auto h-auto object-contain"
              />
            </FadeIn>

            <FadeIn delay={0.12}>
              <PillTitle className="mb-6">{certificacionesContent.invima.title}</PillTitle>
              <div className="space-y-4">
                {certificacionesContent.invima.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)} className="text-colbeef-gray text-sm leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </FadeIn>
          </div>

          <FadeIn className="text-center mb-10">
            <PillTitle className="mb-8">{certificacionesContent.subtitle}</PillTitle>
            <div className="space-y-4 max-w-3xl mx-auto text-left">
              {certificacionesContent.sections.map((section) => (
                <p key={section.title} className="text-colbeef-gray text-sm leading-relaxed">
                  {section.content}
                </p>
              ))}
            </div>
          </FadeIn>

          <FadeIn className="mb-16">
            <CertificacionesOficiales className="max-w-3xl mx-auto" />
          </FadeIn>

          <FadeIn>
            <PillTitle className="mb-6">Políticas de calidad</PillTitle>
            <p className="text-colbeef-gray text-sm leading-relaxed max-w-4xl">
              {certificacionesContent.politicaCalidad}
            </p>
          </FadeIn>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 md:py-24 bg-colbeef-green-darker">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center rounded-3xl overflow-hidden">
            <FadeIn>
              <div className="relative rounded-3xl overflow-hidden">
                <img
                  src={corporativo.certificaciones.bannerPoliticaAmbiental}
                  alt="Política ambiental"
                  className="w-full h-[280px] md:h-[360px] object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-colbeef-green/90 text-white px-5 py-3 rounded-xl">
                  <span className="block text-xs font-light tracking-wider uppercase">Política</span>
                  <span className="block font-bold tracking-wider uppercase">Ambiental</span>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.12}>
              <p className="text-white/85 text-sm md:text-base leading-relaxed">
                {certificacionesContent.politicaAmbiental}
              </p>
            </FadeIn>
          </div>
        </div>
      </AnimatedSection>
    </>
  )
}
