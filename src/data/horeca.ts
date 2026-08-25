export const horecaEmail = 'jefe.mercadeo@colbeef.com'

export const horecaIntroParagraphs = [
  'Las empresas del sector alimentario necesitan productos consistentes, abastecimiento confiable y un aliado que garantice eficiencia operativa. Las soluciones cárnicas integrales permiten optimizar procesos, mejorar el rendimiento de los productos, reducir costos operativos y asegurar una experiencia de calidad para el consumidor final.',
  'Un portafolio diseñado para adaptarse a las necesidades de distintos canales de comercialización, con altos estándares de inocuidad, trazabilidad y servicio.',
] as const

export const horecaFeatures = [
  { id: 'rendimiento', label: 'Rendimiento superior por corte' },
  { id: 'trazabilidad', label: 'Trazabilidad y control de origen' },
  { id: 'invima', label: 'Respaldo INVIMA' },
  { id: 'abastecimiento', label: 'Abastecimiento continuo y puntual' },
  { id: 'atencion', label: 'Atención especializada' },
  { id: 'iso', label: 'Certificación Icontec ISO 22000' },
] as const

export const horecaBusinessTypes = [
  'Hotel',
  'Restaurante',
  'Parrilla',
  'Steak House',
  'Cafetería',
  'Catering',
  'Casino',
  'Distribuidor',
  'Supermercado',
  'Otro',
] as const

export const horecaConsumptionOptions = [
  'Menos de 100 kg',
  '100 – 300 kg',
  '300 – 700 kg',
  'Más de 700 kg',
] as const

export const horecaProductOptions = [
  'Beneficio',
  'Desposte',
  'Comercialización',
  'Otro',
] as const

export interface HorecaFormData {
  nombre: string
  empresa: string
  cargo: string
  tipoNegocio: string
  tipoNegocioOtro: string
  ciudad: string
  departamento: string
  email: string
  telefono: string
  consumoMensual: string
  productos: string[]
  productoOtro: string
}
