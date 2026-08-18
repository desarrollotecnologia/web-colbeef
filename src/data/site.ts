import { icons, images } from './assets'
import { footerCorporativo } from './navigation'
import { assetUrl } from '../utils/assetUrl'

export {
  navLinks,
  navDropdowns,
  footerCorporativo,
  footerProductos,
  footerServiciosNav,
  footerSostenibilidad,
  isNavActive,
} from './navigation'

export const footerNosotros = footerCorporativo

export const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/colbeefoficial', icon: icons.instagram },
  {
    label: 'Facebook',
    href: 'https://web.facebook.com/colbeefoficial?_rdc=11&_rdr#',
    icon: icons.facebook,
  },
  { label: 'YouTube', href: 'https://www.youtube.com/@colbeefs.a.s7812', icon: icons.youtube },
] as const

export const heroSlides = [
  {
    image: images.panoramica,
    banner: 'Desde Santander, aportamos al desarrollo regional.',
    label: 'INICIO',
  },
  {
    image: images.lineaProcesamiento,
    banner: 'PRODUCTOS DE LA MÁS ALTA CALIDAD',
    label: 'PRODUCTOS',
  },
  {
    image: images.beneficioLavado,
    banner: 'SERVICIOS INTEGRALES PARA SU NEGOCIO',
    label: 'SERVICIOS',
  },
]

export const certifications = [
  { id: 'haccp', name: 'HACCP', image: assetUrl('/assets/corporativo/certificaciones/todos-certificados.png') },
  { id: 'iso', name: 'ISO 22000', image: assetUrl('/assets/corporativo/certificaciones/todos-certificados.png') },
  { id: 'invima', name: 'Invima', image: assetUrl('/assets/corporativo/certificaciones/invima-sello.png') },
]

export const footerProducts = [
  'Canales',
  'Carnes genéricas',
  'Cortes convencionales',
  'Pieles',
  'Productos de tercer ciclo',
  'Vísceras',
]

export const footerServices = [
  'Asesoría en el negocio',
  'Pesaje de ganado',
  'Venta de ganado',
  'Asesoría en exportaciones',
  'Beneficio bovino y bufalino',
  'Desposte',
  'Empaque al vacío y termoformado',
  'Porcionado',
  'Etiquetado',
  'Despalado',
  'Repele de hueso',
  'Molida',
  'Refrigeración',
  'Congelación',
]

export const contactInfo = {
  address: 'Vía Corredor Río Frío Cll 210 N° 9-631, Floridablanca, Santander',
  email: 'info@colbeef.com',
  hours: 'Lunes a sábado de 7:30 a.m. a 5:00 p.m.',
}

export const locationLabel = 'FLORIDABLANCA / SANTANDER / COLOMBIA'

export const certificationText =
  'En Colbeef garantizamos la trazabilidad, calidad e inocuidad en todos nuestros procesos y productos, a través de la implementación de BPM, certificación HACCP, ISO 22000 y el pleno cumplimiento del decreto 1500 de 2007, generando confianza y rentabilidad a nuestros clientes.'

export const aboutParagraphs = [
  'En COLBEEF S.A.S. transformamos la excelencia en confianza. Somos una empresa especializada en el beneficio, procesamiento y comercialización de carne bovina y bufalina, comprometida con los más altos estándares de calidad, inocuidad y eficiencia operacional.',
  'Contamos con una planta certificada y habilitada para exportación, respaldada por tecnología, procesos certificados y un firme compromiso con la sostenibilidad. Nuestra experiencia y el talento de nuestro equipo nos permiten ofrecer una cadena de suministro eficiente, trazable y confiable, brindando soluciones que responden a las necesidades de nuestros clientes y de los diferentes canales de comercialización.',
] as const
