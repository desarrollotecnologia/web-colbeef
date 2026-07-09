import { PageHero } from '../ui/PageHero'

interface NosotrosHeroProps {
  image: string
  label: string
  alt?: string
}

export function NosotrosHero({ image, label }: NosotrosHeroProps) {
  return <PageHero image={image} label={label} showCategories={false} />
}
