import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { corporativo } from '../data/assets'
import { NosotrosHero } from '../components/nosotros/NosotrosHero'
import { SomosSection } from '../components/nosotros/SomosSection'
import { HistoriaSection } from '../components/nosotros/HistoriaSection'

export function NosotrosPage() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 120
          window.scrollTo({ top, behavior: 'smooth' })
        }
      }, 100)
    }
  }, [location.hash])

  return (
    <>
      <NosotrosHero image={corporativo.nosotros.banner} label="Nosotros" />
      <SomosSection />
      <HistoriaSection />
    </>
  )
}
