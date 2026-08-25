export interface AgendaObjetivo {
  number: string
  title: string
  items: string[]
}

export const agendaDesarrolloSostenible = {
  title: 'Agenda de desarrollo sostenible de Colbeef.',
  objetivos: [
    {
      number: '1',
      title: 'Objetivos de impacto ambiental:',
      items: [
        'Terminación proyecto de ampliación PTAR.',
        'Sistema de energía fotovoltaica.',
        'Siembra de árboles.',
      ],
    },
    {
      number: '2',
      title: 'Objetivos de impacto social:',
      items: [
        'Programa de donación mensual.',
        'Jornada de prevención de lucha contra el cáncer dirigido a empleados.',
        'Programa de validación de bachillerato dirigido a personal operativo de Colbeef.',
      ],
    },
    {
      number: '3',
      title: 'Objetivos de impacto en Gobernanza:',
      items: ['Proceso de implementación de Gobierno Corporativo en Colbeef.'],
    },
  ] satisfies AgendaObjetivo[],
} as const
