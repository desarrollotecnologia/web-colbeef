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
    subtitle: 'Planta de Tratamiento de Aguas Residuales (PTAR)',
    paragraphs: [
      'El agua es un recurso esencial para nuestra operación.',
      'Por esta razón contamos con una Planta de Tratamiento de Aguas Residuales (PTAR) diseñada para tratar las aguas generadas durante nuestros procesos industriales antes de su disposición final, conforme a la normativa ambiental vigente.',
      'Nuestra gestión busca optimizar el uso del recurso hídrico, fortalecer el control de nuestros procesos y promover una operación responsable con el entorno.',
    ],
    image: corporativo.sostenibilidad.gestionAgua,
    imageAlt: 'Gestión responsable del agua en COLBEEF',
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
    image: corporativo.sostenibilidad.compromisoComunidad,
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
    subtitle: 'Economía circular aplicada a la industria cárnica',
    paragraphs: [
      'Reducimos y separamos los residuos sólidos desde su fuente de generación.',
      'Promovemos el reciclaje, la recolección, almacenamiento y tratamiento de residuos.',
      'Transformamos los residuos orgánicos en subproductos aplicando una economía circular a la industria cárnica.',
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
