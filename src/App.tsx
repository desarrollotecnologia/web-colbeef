import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { HomePage } from './pages/HomePage'
import { ProductosPage } from './pages/ProductosPage'
import { CortesPage } from './pages/productos/CortesPage'
import { SubproductosPage } from './pages/productos/SubproductosPage'
import { ServiciosPage } from './pages/ServiciosPage'
import { ServiceDetailPage } from './pages/servicios/ServiceDetailPage'
import { SostenibilidadIndexPage } from './pages/sostenibilidad/SostenibilidadIndexPage'
import { SostenibilidadPillarPage } from './pages/sostenibilidad/SostenibilidadPillarPage'
import { CorporativoNosotrosPage } from './pages/corporativo/CorporativoNosotrosPage'
import { CorporativoHistoriaPage } from './pages/corporativo/CorporativoHistoriaPage'
import { FilosofiaPage } from './pages/corporativo/FilosofiaPage'
import { CertificacionesPage } from './pages/corporativo/CertificacionesPage'
import { GobiernoCorporativoPage } from './pages/corporativo/GobiernoCorporativoPage'
import { ContactoPage } from './pages/ContactoPage'

const routerBasename = import.meta.env.BASE_URL.replace(/\/$/, '')

export default function App() {
  return (
    <BrowserRouter basename={routerBasename}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />

          <Route path="/productos" element={<ProductosPage />} />
          <Route path="/productos/cortes" element={<CortesPage />} />
          <Route path="/productos/subproductos" element={<SubproductosPage />} />

          <Route path="/servicios" element={<ServiciosPage />} />
          <Route path="/servicios/:slug" element={<ServiceDetailPage />} />

          <Route path="/sostenibilidad" element={<SostenibilidadIndexPage />} />
          <Route path="/sostenibilidad/:slug" element={<SostenibilidadPillarPage />} />

          <Route path="/corporativo/nosotros" element={<CorporativoNosotrosPage />} />
          <Route path="/corporativo/historia" element={<CorporativoHistoriaPage />} />
          <Route path="/corporativo/filosofia" element={<FilosofiaPage />} />
          <Route path="/corporativo/certificaciones" element={<CertificacionesPage />} />
          <Route path="/corporativo/gobierno-corporativo" element={<GobiernoCorporativoPage />} />
          <Route path="/corporativo" element={<Navigate to="/corporativo/nosotros" replace />} />

          <Route path="/contacto" element={<ContactoPage />} />

          {/* Redirecciones anteriores */}
          <Route path="/nosotros" element={<Navigate to="/corporativo/nosotros" replace />} />
          <Route path="/nosotros/filosofia" element={<Navigate to="/corporativo/filosofia" replace />} />
          <Route path="/nosotros/sostenibilidad" element={<Navigate to="/sostenibilidad" replace />} />
          <Route path="/nosotros/certificaciones" element={<Navigate to="/corporativo/certificaciones" replace />} />
          <Route
            path="/nosotros/gobierno-corporativo"
            element={<Navigate to="/corporativo/gobierno-corporativo" replace />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
