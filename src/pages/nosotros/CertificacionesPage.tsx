import { corporativo } from '../../data/assets'
import { NosotrosHero } from '../../components/nosotros/NosotrosHero'
import { CertificacionesNosotrosSection } from '../../components/nosotros/CertificacionesNosotrosSection'

export function CertificacionesPage() {
  return (
    <>
      <NosotrosHero image={corporativo.certificaciones.banner} label="Certificaciones" />
      <CertificacionesNosotrosSection />
    </>
  )
}
