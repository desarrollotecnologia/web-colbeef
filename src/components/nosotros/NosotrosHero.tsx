import type { PageHeroContent } from '../../types/pageHero'
import { corporativoHeroByLabel } from '../../data/pageHeroes'
import { PageHero } from '../ui/PageHero'

interface NosotrosHeroProps {
  image: string
  label: string
  content?: PageHeroContent
}

export function NosotrosHero({ image, label, content }: NosotrosHeroProps) {
  const heroContent =
    content ??
    corporativoHeroByLabel[label] ?? {
      badge: label.toUpperCase(),
      headline: label,
      features: '',
    }

  return <PageHero image={image} alt={label} content={heroContent} />
}
