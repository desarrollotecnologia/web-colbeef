import { Navigate, useParams } from 'react-router-dom'
import { servicePages } from '../../data/services'
import { AnimatedSection, FadeIn } from '../../components/ui/AnimatedSection'
import { PageHero } from '../../components/ui/PageHero'

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const service = slug ? servicePages[slug] : undefined

  if (!service) {
    return <Navigate to="/servicios" replace />
  }

  return (
    <>
      <PageHero image={service.image} label={service.shortTitle} showCategories={false} />

      <AnimatedSection className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <FadeIn>
            <h2 className="text-colbeef-green text-2xl font-bold uppercase tracking-wider mb-6">
              {service.title}
            </h2>
            <p className="text-colbeef-gray text-sm md:text-base leading-relaxed mb-10">
              {service.description}
            </p>
            <img
              src={service.image}
              alt={service.title}
              className="w-full rounded-2xl object-cover max-h-[420px] shadow-lg"
            />
          </FadeIn>
        </div>
      </AnimatedSection>
    </>
  )
}
