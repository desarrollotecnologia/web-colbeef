import { sostenibilidadContent } from '../../data/nosotros'
import { corporativo } from '../../data/assets'
import { AnimatedSection, FadeIn } from '../ui/AnimatedSection'

const pillarImages = [
  corporativo.sostenibilidad.energiaRenovable,
  corporativo.sostenibilidad.gestionAgua,
  corporativo.sostenibilidad.produccionResponsable,
  corporativo.sostenibilidad.compromisoComunidad,
]

export function SostenibilidadNosotrosSection() {
  return (
    <>
      <AnimatedSection className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16">
            <FadeIn>
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <img
                  src={corporativo.sostenibilidad.foto2}
                  alt="Compromiso ambiental Colbeef"
                  className="w-full h-[320px] md:h-[420px] object-cover"
                />
              </div>
            </FadeIn>

            <FadeIn delay={0.12} className="space-y-5">
              <p className="text-colbeef-gray text-sm md:text-base leading-relaxed">
                {sostenibilidadContent.intro}
              </p>
              <p className="text-colbeef-green font-bold text-sm md:text-base leading-relaxed">
                {sostenibilidadContent.management}
              </p>
            </FadeIn>
          </div>

          <div className="space-y-10">
            {sostenibilidadContent.pillars.map((pillar, i) => (
              <FadeIn key={pillar.id} delay={i * 0.1}>
                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  <div className="shrink-0 w-20 h-20 rounded-full bg-colbeef-green-darker flex items-center justify-center overflow-hidden">
                    <img
                      src={pillarImages[i]}
                      alt=""
                      className="w-14 h-14 object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="bg-colbeef-green text-white font-bold text-sm md:text-base px-6 py-3 rounded-r-full inline-block mb-3">
                      {pillar.title}
                    </div>
                    <p className="text-colbeef-gray text-sm leading-relaxed pl-2 sm:pl-0">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="relative py-20 md:py-28 overflow-hidden">
        <img
          src={corporativo.sostenibilidad.bannerConstruyendo}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-colbeef-green-darker/55" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-10 items-center">
          <FadeIn>
            <p className="text-white font-bold text-xl md:text-2xl uppercase leading-relaxed tracking-wide">
              {sostenibilidadContent.banner}
            </p>
          </FadeIn>
          <FadeIn delay={0.15} className="flex flex-col items-start md:items-end gap-4">
            <img
              src={corporativo.sostenibilidad.iconoRes}
              alt=""
              className="w-20 h-20 object-contain brightness-0 invert opacity-90"
            />
            <p className="text-white/80 text-sm leading-relaxed max-w-md md:text-right">
              Líder en innovación, inocuidad alimentaria, sostenibilidad y exportación de carne bovina
              y bufalina, con una visión enfocada en la excelencia y el crecimiento responsable.
            </p>
          </FadeIn>
        </div>
      </AnimatedSection>
    </>
  )
}
