import type { LucideIcon } from 'lucide-react'
import {
  Beef,
  Cloud,
  Droplets,
  GraduationCap,
  Heart,
  Leaf,
  Lightbulb,
  Recycle,
  ShieldCheck,
  Sprout,
  Sun,
  TreePine,
  Users,
  UsersRound,
  Zap,
} from 'lucide-react'
import { corporativo, images, serviciosImages } from './assets'

export interface SostenibilidadIndicador {
  label: string
  icon: LucideIcon
}

export interface SostenibilidadBloque {
  id: string
  number: string
  title: string
  subtitle: string
  paragraphs: string[]
  image: string
  imageAlt: string
  indicadoresTitle?: string
  indicadores?: SostenibilidadIndicador[]
  highlight?: string
  imageOnLeft: boolean
}

export const sostenibilidadBloques: SostenibilidadBloque[] = [
  {
    id: 'energia-solar',
    number: '1',
    title: 'Energía solar',
    subtitle: 'Energía renovable para una operación más eficiente',
    paragraphs: [
      'La eficiencia energética hace parte de nuestra estrategia de mejora continua.',
      'COLBEEF cuenta con un sistema fotovoltaico conformado por 1.363 paneles solares, diseñado para disminuir el consumo de energía proveniente de fuentes convencionales y aportar a una operación más eficiente.',
      'Esta energía limpia reduce el consumo de fuentes convencionales y evita la emisión de 2.967,8 toneladas de CO2.',
    ],
    image: serviciosImages.compromisoProceso,
    imageAlt: 'Sistema fotovoltaico en instalaciones COLBEEF',
    indicadoresTitle: 'Indicadores',
    indicadores: [
      { label: '1.363 Paneles', icon: Sun },
      { label: '76.500 kWh/mes', icon: Zap },
      { label: '2.967,8 t CO₂ evitadas', icon: Cloud },
      { label: '75.767 árboles equivalentes', icon: TreePine },
    ],
    highlight: 'Energía limpia que transforma nuestra operación',
    imageOnLeft: true,
  },
  {
    id: 'ptar',
    number: '2',
    title: 'Gestión integral del agua',
    subtitle: 'Gestión Hídrica de Alto Impacto: Nuestra PTAR',
    paragraphs: [
      'El agua es el corazón de nuestra operación. En Colbeef contamos con una Planta de Tratamiento de Aguas Residuales (PTAR) de última tecnología, diseñada para procesar la totalidad de los efluentes de nuestros procesos industriales.',
      'Superamos con rigor los estándares y la normativa ambiental vigente, garantizando un vertimiento de calidad superior que minimiza el impacto en el entorno. A través de este control avanzado, reafirmamos nuestro compromiso con el ciclo de vida del recurso hídrico, la eficiencia operativa y la sostenibilidad del sector.',
    ],
    image: corporativo.sostenibilidad.ptar,
    imageAlt: 'Planta de Tratamiento de Aguas Residuales (PTAR) de COLBEEF',
    indicadoresTitle: 'Beneficios',
    indicadores: [
      { label: 'Gestión responsable del recurso hídrico', icon: Droplets },
      { label: 'Cumplimiento ambiental', icon: ShieldCheck },
      { label: 'Monitoreo permanente', icon: Lightbulb },
      { label: 'Mejora continua', icon: Recycle },
    ],
    highlight: 'Agua tratada con responsabilidad y control',
    imageOnLeft: false,
  },
  {
    id: 'comunidad',
    number: '3',
    title: 'Comunidad',
    subtitle: 'Crecemos junto a nuestra región',
    paragraphs: [
      'Nuestro compromiso trasciende la operación industrial.',
      'Trabajamos de manera articulada con colaboradores, proveedores, organizaciones sociales e instituciones para generar oportunidades de desarrollo y fortalecer el bienestar de las comunidades donde tenemos presencia.',
      'Impulsamos iniciativas enfocadas en el fortalecimiento del empleo, la seguridad alimentaria, la formación y el acompañamiento a diferentes programas sociales.',
    ],
    image: corporativo.sostenibilidad.comunidad,
    imageAlt: 'Compromiso de COLBEEF con la comunidad',
    indicadoresTitle: 'Nuestras líneas de acción',
    indicadores: [
      { label: 'Desarrollo social', icon: Users },
      { label: 'Seguridad alimentaria', icon: Beef },
      { label: 'Formación y capacitación', icon: GraduationCap },
      { label: 'Donaciones de alimentos', icon: Heart },
      { label: 'Fortalecimiento regional', icon: Sprout },
      { label: 'Bienestar de colaboradores', icon: UsersRound },
    ],
    highlight:
      'Creemos que el crecimiento empresarial también debe generar valor para las personas y las comunidades.',
    imageOnLeft: true,
  },
  {
    id: 'residuos',
    number: '4',
    title: 'Aprovechamiento de residuos',
    subtitle: 'Gestión Responsable de Residuos',
    paragraphs: [
      'En Colbeef implementamos una Gestión Integral de Residuos orientada a minimizar el impacto ambiental de nuestras operaciones y promover el aprovechamiento responsable de los materiales generados en cada proceso.',
      'Fomentamos la segregación en la fuente, la valorización y el reciclaje, fortaleciendo prácticas de economía circular que contribuyen a una operación más eficiente y sostenible.',
      'Para el tratamiento y la disposición final de los residuos trabajamos con gestores ambientales autorizados, garantizando la trazabilidad de los procesos, el cumplimiento de la normatividad vigente y la gestión adecuada de cada tipo de residuo.',
      'De esta manera, reafirmamos nuestro compromiso con una producción responsable, la protección del entorno y la mejora continua de nuestro desempeño ambiental.',
    ],
    image: images.comercializacion,
    imageAlt: 'Aprovechamiento de subproductos en COLBEEF',
    indicadoresTitle: 'Subproductos',
    indicadores: [
      { label: 'Sebo', icon: Recycle },
      { label: 'Hueso', icon: Recycle },
      { label: 'Vísceras aprovechables', icon: Leaf },
      { label: 'Otros subproductos', icon: ShieldCheck },
    ],
    highlight: 'Economía circular en cada etapa del proceso',
    imageOnLeft: false,
  },
]
