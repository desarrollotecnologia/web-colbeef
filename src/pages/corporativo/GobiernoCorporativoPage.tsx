import { corporativo } from '../../data/assets'
import { NosotrosHero } from '../../components/nosotros/NosotrosHero'
import { GobiernoCorporativoSection } from '../../components/nosotros/GobiernoCorporativoSection'

export function GobiernoCorporativoPage() {
  return (
    <>
      <NosotrosHero image={corporativo.gobierno.banner} label="Gobierno corporativo" />
      <GobiernoCorporativoSection />
    </>
  )
}
