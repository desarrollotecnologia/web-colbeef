import { corporativo } from '../../data/assets'
import { NosotrosHero } from '../../components/nosotros/NosotrosHero'
import { SomosSection } from '../../components/nosotros/SomosSection'

export function CorporativoNosotrosPage() {
  return (
    <>
      <NosotrosHero image={corporativo.nosotros.banner} label="Nosotros" />
      <SomosSection />
    </>
  )
}
