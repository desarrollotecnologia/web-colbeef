import { corporativo } from '../../data/assets'
import { NosotrosHero } from '../../components/nosotros/NosotrosHero'
import { FilosofiaSection } from '../../components/nosotros/FilosofiaSection'

export function FilosofiaPage() {
  return (
    <>
      <NosotrosHero image={corporativo.filosofia.banner} label="Filosofía" />
      <FilosofiaSection />
    </>
  )
}
