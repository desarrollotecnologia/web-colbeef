import { corporativo, icons, images } from './assets'

export interface ProductCategory {
  id: string
  title: string
  description: string
  image: string
  icon: string
}

export const productCategories: ProductCategory[] = [
  {
    id: 'cortes',
    title: 'CORTES',
    description:
      'Planta equipada para procesar 180 canales por turno, con capacidad de almacenamiento de 75 toneladas refrigeradas y 7 toneladas congeladas.',
    image: images.desposteTrabajador,
    icon: icons.carnes,
  },
  {
    id: 'subproductos',
    title: 'SUB PRODUCTOS',
    description:
      'En el área de productos cárnicos comestibles obtenemos víscera de excelente calidad atrayente para el mercado local, nacional y de exportación.',
    image: images.comercializacion,
    icon: icons.desposte,
  },
  {
    id: 'canales',
    title: 'CANALES',
    description:
      'Contamos con un salón de oreo donde obtenemos canales pre-refrigeradas y con un porcentaje de merma por refrigeración conveniente para su negocio.',
    image: images.canales,
    icon: icons.beneficio,
  },
]

export const beefCuts = {
  delanteros: [
    'DESCARGUE',
    'MORRILLO',
    'COGOTE',
    'PALETERO INTERNO',
    'PALETERO EXTERNO',
    'LOMO DE BRAZO',
    'MURILLO DELANTERO',
    'ASADO DE TIRA',
    'COSTILLA',
    'ENTRAÑA',
    'FALDA',
    'SOBREBARRIGA GRUESA',
    'SOBREBARRIGA DELGADA',
    'BOLA DE BRAZO',
    'PECHO',
  ],
  traseros: [
    'BOLA DE PIERNA',
    'MURILLO TRASERO',
    'CENTRO DE PIERNA',
    'BOTA',
    'MUCHACHO',
    'COLA',
    'PUNTA DE ANCA',
    'CADERA CON COLITA',
    'LOMO FINO',
    'LOMO ANCHO',
    'LOMO ANGOSTO',
  ],
}

export const desposteSections = [
  'DESPOSTE BOVINO',
  'CORTES TRASEROS',
  'CORTES DELANTEROS',
]

export interface QualitySectionBlock {
  label: string
  title: string
  description: string
}

export const qualityPillars = [
  {
    id: 'calidad',
    category: 'Calidad',
    title: 'LA CALIDAD COMO PROMESA DE VALOR',
    description: '',
    sections: [
      {
        label: 'HACCP (Hazard Analysis and Critical Control Points)',
        title: 'Control en cada punto crítico',
        description:
          'Aplicamos el sistema HACCP para identificar, prevenir y controlar los riesgos físicos, químicos y biológicos en cada etapa del proceso, garantizando que solo lleguen a tu mesa productos verificados y seguros.',
      },
      {
        label: 'ISO 22000',
        title: 'Gestión integral de la inocuidad',
        description:
          'Certificados bajo la norma ISO 22000, el estándar internacional que asegura un sistema de gestión sólido, trazable y en mejora continua a lo largo de toda nuestra cadena de producción.',
      },
      {
        label: 'INVIMA',
        title: 'Respaldo sanitario nacional',
        description:
          'Contamos con la vigilancia y aprobación del Instituto Nacional de Vigilancia de Medicamentos y Alimentos, garantía de que cumplimos con la normativa colombiana en materia de seguridad alimentaria.',
      },
    ] as QualitySectionBlock[],
    image: corporativo.certificaciones.todosCertificados,
    badge: icons.badgeLideres,
  },
  {
    id: 'cuidados',
    category: 'Producción',
    title: 'CUIDADOS EN EL CONSUMO DE LA CARNE',
    description:
      'Promovemos buenas prácticas en el manejo, almacenamiento y consumo de la carne, acompañando a nuestros clientes con información clara y productos que cumplen los más altos estándares.',
    image: images.img5282,
    badge: icons.badgePlanta,
  },
  {
    id: 'exportacion',
    category: 'Santander / Colombia',
    title: 'PAÍSES A LOS QUE EXPORTAMOS',
    description:
      'Seguimos apostando por prestar un servicio de exportación de carne de excelente calidad, generando confianza en nuestra capacidad de producción y permitiendo que más personas puedan disfrutar de los excelentes productos colombianos.',
    image: images.mapaExportacion,
    badge: icons.badgeExpertos,
  },
]
