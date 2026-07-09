import { corporativo } from '../../data/assets'
import { NosotrosHero } from '../../components/nosotros/NosotrosHero'
import { HistoriaSection } from '../../components/nosotros/HistoriaSection'

export function CorporativoHistoriaPage() {
  return (
    <>
      <NosotrosHero image={corporativo.nosotros.banner} label="Historia" />
      <HistoriaSection />
    </>
  )
}
