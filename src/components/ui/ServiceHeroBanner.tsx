import type { PageHeroContent } from '../../types/pageHero'
import { PageHero } from './PageHero'

interface ServiceHeroBannerProps {
  image: string
  alt: string
  content: PageHeroContent
}

/** @deprecated Usar PageHero directamente */
export function ServiceHeroBanner({ image, alt, content }: ServiceHeroBannerProps) {
  return <PageHero image={image} alt={alt} content={content} />
}

export type { PageHeroContent as ServiceHeroContent }
