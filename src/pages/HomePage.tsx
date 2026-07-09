import { AboutSection } from '../components/sections/AboutSection'
import { EnvironmentalPolicySection } from '../components/sections/EnvironmentalPolicySection'
import { HeroSection } from '../components/sections/HeroSection'
import { HorecaSection } from '../components/sections/HorecaSection'
import { MainServicesSection } from '../components/sections/MainServicesSection'
import { ProductCarouselSection } from '../components/sections/ProductCarouselSection'
import { QualitySection } from '../components/sections/QualitySection'
import { StatsSection } from '../components/sections/StatsSection'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <MainServicesSection />
      <StatsSection />
      <ProductCarouselSection />
      <QualitySection />
      <HorecaSection />
      <EnvironmentalPolicySection />
    </>
  )
}
