import { corporativo } from '../../data/assets'
import { SostenibilidadBloquesSection } from '../../components/sections/SostenibilidadBloquesSection'
import { NosotrosHero } from '../../components/nosotros/NosotrosHero'

export function SostenibilidadIndexPage() {
  return (
    <>
      <NosotrosHero image={corporativo.sostenibilidad.banner} label="Sostenibilidad" />
      <SostenibilidadBloquesSection />
    </>
  )
}
