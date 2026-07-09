import { corporativo } from '../../data/assets'
import { NosotrosHero } from '../../components/nosotros/NosotrosHero'
import { SostenibilidadNosotrosSection } from '../../components/nosotros/SostenibilidadNosotrosSection'

export function SostenibilidadPage() {
  return (
    <>
      <NosotrosHero image={corporativo.sostenibilidad.banner} label="Sostenibilidad" />
      <SostenibilidadNosotrosSection />
    </>
  )
}
