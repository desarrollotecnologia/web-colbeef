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

export const qualityPillars = [
  {
    id: 'calidad',
    category: 'Calidad',
    title: 'LA CALIDAD COMO PROMESA DE VALOR',
    description:
      'Texto de ejemplo: en Colbeef la calidad no es un discurso, es una promesa respaldada por procesos certificados, controles rigurosos y un equipo comprometido con la excelencia en cada producto.',
    image: corporativo.certificaciones.todosCertificados,
    badge: icons.badgeLideres,
  },
  {
    id: 'cuidados',
    category: 'Producción',
    title: 'CUIDADOS EN EL CONSUMO DE LA CARNE',
    description:
      'Texto de ejemplo: promovemos buenas prácticas en el manejo, almacenamiento y consumo de la carne, acompañando a nuestros clientes con información clara y productos que cumplen los más altos estándares.',
    image: images.img5282,
    badge: icons.badgePlanta,
  },
  {
    id: 'exportacion',
    category: 'Santander / Colombia',
    title: 'PAÍSES A LOS QUE EXPORTAMOS',
    description:
      'Seguimos apostando por prestar un servicio de exportación de carne de excelente calidad, generando confianza en nuestra capacidad de producción y permitiendo que más personas puedan disfrutar de los excelentes productos colombianos.',
    image: images.panoramica,
    badge: icons.badgeExpertos,
  },
]
