export interface StatCard {
  id: string
  value: string
  label: string
  sublabel?: string
  description: string
}

export const sustainabilityStats: StatCard[] = [
  {
    id: 'co2',
    value: '2.967',
    label: 'TONELADAS',
    description: 'Emisiones totales de CO2 evitadas desde 2022.',
  },
  {
    id: 'arboles',
    value: '75.767',
    label: 'ÁRBOLES',
    description: 'Cantidad de árboles que representa el impacto positivo ambiental.',
  },
  {
    id: 'paneles',
    value: '1.363',
    label: 'PANELES',
    description: 'Sistema fotovoltaico de energía renovable con alto valor agregado.',
  },
  {
    id: 'kwh',
    value: '76.500',
    label: 'KWH/MES',
    sublabel: 'Generamos el 20% de nuestro consumo energético.',
    description: 'Energía renovable que contribuye con el bienestar social y desarrollo sostenible.',
  },
]

export const sustainabilityFeatures = [
  {
    id: 'agua',
    title: 'Recirculación de agua',
    value: '130 m³/día',
    description:
      'Con un sistema de recirculación de agua, procesamos 2 litros de agua por segundo, utilizada en otros procesos.',
  },
  {
    id: 'energia',
    title: 'Energía renovable',
    value: '98%',
    description:
      'Desde 2020, dimos inicio al consumo de energía generada con fuentes renovables, demostrando nuestro compromiso con la mitigación del cambio climático.',
  },
  {
    id: 'biodigestor',
    title: 'Biodigestores',
    value: '30 m³/día',
    description:
      'Generamos gas al día a través del sistema de biodigestores, aprovechando la composición de nuestras aguas residuales. Esto equivale al 3% del gas necesario para la operación.',
  },
]

export const environmentalPolicy =
  'En Colbeef S.A.S. asumimos el compromiso de gestionar responsablemente nuestros impactos ambientales, prevenir la contaminación y promover prácticas sostenibles en cada etapa de nuestra operación. Actuamos en cumplimiento de la normatividad ambiental vigente, impulsando el uso eficiente de los recursos y la mejora continua de nuestros procesos, con el objetivo de contribuir al desarrollo sostenible y fortalecer una cultura de responsabilidad ambiental.'

export const sostenibilidadPageSlugs = ['energia-solar', 'ptar', 'comunidad'] as const

export type SostenibilidadPageSlug = (typeof sostenibilidadPageSlugs)[number]
