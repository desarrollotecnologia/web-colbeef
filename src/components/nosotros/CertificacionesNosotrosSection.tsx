import { Check } from 'lucide-react'
import { certificacionesContent } from '../../data/nosotros'
import { corporativo, images } from '../../data/assets'
import { AnimatedSection, FadeIn } from '../ui/AnimatedSection'
import { PillTitle } from '../ui/DesignAssets'

function CertList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-2 text-colbeef-gray text-sm leading-snug"
        >
          <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-colbeef-green" strokeWidth={2.5} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function CertificacionesNosotrosSection() {
  const { iso22000, haccp } = certificacionesContent

  return (
    <>
      <AnimatedSection className="py-10 md:py-12 lg:py-14 bg-[#d4edda]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <FadeIn>
              <img
                src={images.certIso22000}
                alt="Certificación ISO 22000"
                className="w-full max-w-[200px] sm:max-w-[220px] mx-auto h-auto object-contain"
              />
            </FadeIn>

            <FadeIn delay={0.12}>
              <PillTitle className="mb-4">{iso22000.title}</PillTitle>
              <div className="space-y-3">
                <p className="text-colbeef-gray text-sm leading-relaxed">{iso22000.intro}</p>
                <p className="text-colbeef-dark text-sm leading-relaxed font-medium">
                  {iso22000.compromisoLabel}
                </p>
                <CertList items={iso22000.items} />
              </div>
            </FadeIn>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-10 md:py-12 lg:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <FadeIn>
              <PillTitle className="mb-4">{haccp.title}</PillTitle>
              <div className="space-y-3">
                <p className="text-colbeef-gray text-sm leading-relaxed">{haccp.intro}</p>
                <p className="text-colbeef-dark text-sm leading-relaxed font-medium">
                  {haccp.compromisoLabel}
                </p>
                <CertList items={haccp.items} />
                <p className="text-colbeef-gray text-sm leading-relaxed">{haccp.closing}</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.12}>
              <img
                src={images.certHaccp}
                alt="Certificación HACCP"
                className="w-full max-w-[200px] sm:max-w-[220px] mx-auto h-auto object-contain"
              />
            </FadeIn>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 md:py-24 bg-[#d4edda]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <FadeIn className="text-center">
            <PillTitle className="mb-8">{certificacionesContent.subtitle}</PillTitle>
            <div className="space-y-4 max-w-3xl mx-auto text-left">
              {certificacionesContent.sections.map((section) => (
                <p key={section.title} className="text-colbeef-gray text-sm leading-relaxed">
                  {section.content}
                </p>
              ))}
            </div>
          </FadeIn>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 md:py-24 bg-colbeef-green-darker">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center rounded-3xl overflow-hidden">
            <FadeIn>
              <div className="relative rounded-3xl overflow-hidden">
                <img
                  src={corporativo.certificaciones.politicasCalidad}
                  alt="Políticas de calidad"
                  className="w-full h-[280px] md:h-[360px] object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-colbeef-green/90 text-white px-5 py-3 rounded-xl">
                  <span className="block text-xs font-light tracking-wider uppercase">Políticas</span>
                  <span className="block font-bold tracking-wider uppercase">de calidad</span>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.12}>
              <p className="text-white/85 text-sm md:text-base leading-relaxed">
                {certificacionesContent.politicaCalidad}
              </p>
            </FadeIn>
          </div>
        </div>
      </AnimatedSection>
    </>
  )
}
