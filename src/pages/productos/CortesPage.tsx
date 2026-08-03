import { images } from '../../data/assets'
import { cortesHero } from '../../data/pageHeroes'
import { CortesMapSection } from '../../components/productos/CortesMapSection'
import { PageHero } from '../../components/ui/PageHero'

export function CortesPage() {
  return (
    <>
      <PageHero image={images.desposteTrabajador} alt="Cortes" content={cortesHero} />
      <CortesMapSection />
    </>
  )
}
