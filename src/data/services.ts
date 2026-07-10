import { icons, images } from './assets'
import type { PageHeroContent } from '../types/pageHero'

const pesajeHeroImage = '/assets/images/servicios/pesaje-ganado.jpg'
const beneficioHeroImage = '/assets/images/servicios/beneficio-hero.jpg'

export type ServiceHeroContent = PageHeroContent
export interface Service {
  id: string
  title: string
  shortTitle: string
  description: string
  image: string
  icon: string
  href: string
  video?: string
  heroImage?: string
  hero?: ServiceHeroContent
}

export const mainServices: Service[] = [
  {
    id: 'pesaje',
    title: 'PESAJE DE GANADO',
    shortTitle: 'Pesaje de ganado',
    description:
      'Garantizamos un proceso de recepción y pesaje de ganado respaldado por básculas certificadas y verificadas diariamente, asegurando precisión, confiabilidad y transparencia en cada operación.',
    image: images.panoramica,
    heroImage: pesajeHeroImage,
    hero: {
      badge: 'PESAJE DE GANADO',
      headline: 'La calidad comienza desde el origen.',
      features: 'Infraestructura especializada • Bienestar Animal • Pesaje Certificado',
    },
    icon: icons.ganado,
    href: '/servicios/pesaje-de-ganado',
  },
  {
    id: 'beneficio',
    title: 'BENEFICIO',
    shortTitle: 'Beneficio',
    description:
      'Producción en línea equipada con capacidad para procesar hasta 75 reses por hora, con capacidad de almacenamiento de más de 1000 canales.',
    image: images.beneficioLavado,
    heroImage: beneficioHeroImage,
    hero: {
      badge: 'BENEFICIO',
      headline: 'Procesamiento eficiente y certificado.',
      features: 'Hasta 75 reses por hora • Almacenamiento • Calidad e inocuidad',
    },
    icon: icons.beneficio,
    href: '/servicios/beneficio',
  },
  {
    id: 'desposte',
    title: 'DESPOSTE',
    shortTitle: 'Desposte',
    description:
      'Planta equipada para procesar 180 canales por turno, con capacidad de almacenamiento de 75 toneladas refrigeradas y 7 toneladas congeladas.',
    image: images.desposteTrabajador,
    hero: {
      badge: 'DESPOSTE',
      headline: 'Transformamos cada canal con precisión y rendimiento.',
      features: '',
    },
    icon: icons.desposte,
    href: '/servicios/desposte',
  },
  {
    id: 'porcionado',
    title: 'PORCIONADO',
    shortTitle: 'Porcionado',
    description:
      'Procesamiento de diferentes cortes empacados en termoformado o al vacío de acuerdo a las necesidades de su negocio.',
    image: images.lineaProcesamiento,
    hero: {
      badge: 'PORCIONADO',
      headline: 'Cortes listos para su negocio.',
      features: 'Termoformado • Empaque al vacío • Soluciones a medida',
    },
    icon: icons.porcionado,
    href: '/servicios/porcionado',
  },
]

export interface ComplementaryService extends Service {
  tags: string[]
}

export const complementaryServices: ComplementaryService[] = [
  {
    id: 'pesaje',
    title: 'PESAJE DE GANADO',
    shortTitle: 'Pesaje',
    tags: ['PESAJE', 'PLANILLAJE', 'CORRALES'],
    description:
      'Contamos con básculas Tru-test, las más seguras y confiables en sistemas de medición. Además, tenemos certificación con la ONAC, que garantiza el buen estado de los equipos y la exactitud en el pesaje de ganado.',
    image: images.panoramica,
    icon: icons.ganado,
    href: '/servicios/pesaje-de-ganado',
  },
  {
    id: 'venta',
    title: 'VENTA DE GANADO',
    shortTitle: 'Venta',
    tags: ['PESAJE', 'ASESORÍAS'],
    description:
      'Con los nuevos modelos de comercialización de productos cárnicos las plantas de beneficio deben garantizar el abastecimiento de ganado bovino con los más altos estándares de calidad.',
    image: images.img5280,
    icon: icons.ganado,
    href: '/servicios/pesaje-de-ganado',
  },
  {
    id: 'congelacion',
    title: 'CONGELACIÓN',
    shortTitle: 'Congelación',
    tags: ['REFRIGERACIÓN'],
    description:
      'Los cuartos de conservación de producto congelado cuentan con modernos sistemas que garantizan temperaturas de -18 grados y permiten asegurar la calidad del producto.',
    image: images.canales,
    icon: icons.desposte,
    href: '/servicios/beneficio',
  },
]

export const servicePages: Record<string, Service> = {
  'pesaje-de-ganado': mainServices.find((s) => s.id === 'pesaje')!,
  beneficio: mainServices.find((s) => s.id === 'beneficio')!,
  desposte: mainServices.find((s) => s.id === 'desposte')!,
  porcionado: mainServices.find((s) => s.id === 'porcionado')!,
}

export function getServiceHeroContent(service: Service): PageHeroContent {
  if (service.hero) return service.hero

  return {
    badge: service.title,
    headline: service.shortTitle,
    features: service.description,
  }
}

export const serviceTabs = ['PESAJE', 'PLANILLAJE', 'CORRALES PESAJE', 'ASESORÍAS']

export const servicesIntroParagraphs = [
  'En COLBEEF S.A.S. ofrecemos soluciones integrales para la industria cárnica, respaldadas por tecnología, talento humano especializado y procesos certificados que garantizan calidad, inocuidad, trazabilidad y eficiencia en cada etapa de la cadena productiva.',
  'Nuestro compromiso es convertirnos en un aliado estratégico para productores, distribuidores, cadenas de supermercados, industrias alimentarias y el sector HORECA, desarrollando servicios que generan mayor productividad, optimizan costos y aseguran productos con los más altos estándares del mercado colombiano.',
] as const

export const serviciosPageContent = [
  {
    title: 'Beneficio de ganado bovino y bufalino',
    description:
      'COLBEEF ofrece el servicio a través de nuestra planta beneficio de ganado bovino y bufalino cumpliendo con la legislación sanitaria y de calidad de los mercados más exigentes.',
  },
  {
    title: 'Bienestar animal y calidad',
    description:
      'El diseño de nuestras instalaciones y el conocimiento técnico de nuestro personal, brinda a los bovinos un alto grado de bienestar animal desde el ingreso, estancia en cómodos corrales, beneficio, almacenamiento y despacho.',
  },
  {
    title: 'Tecnología de punta',
    description:
      'Poseemos una planta de producción moderna, con alta tecnología y ubicación estratégica, de la cual se destaca la producción en línea que evita la contaminación cruzada, paredes en acero inoxidable.',
  },
  {
    title: 'Transporte refrigerado',
    description:
      'En COLBEEF tenemos a disposición de nuestros clientes una flota de vehículos de transporte refrigerado, los cuales son monitoreados satelitalmente para que su producto llegue a tiempo.',
  },
]
