export const horecaEmail = 'jefe.mercadeo@colbeef.com'

export const horecaIntroText =
  'Sabemos que cada cocina requiere productos consistentes, entregas puntuales y un proveedor que responda con eficiencia. Por eso desarrollamos soluciones personalizadas que mejoran el rendimiento, optimizan los costos operativos y garantizan una experiencia superior para sus clientes.'

export const horecaFeatures = [
  { id: 'calidad', label: 'Calidad garantizada' },
  { id: 'frio', label: 'Cadena de frío garantizada' },
  { id: 'invima', label: 'Certificación INVIMA' },
  { id: 'entregas', label: 'Entregas puntuales' },
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
  ciudad: string
  departamento: string
  email: string
  telefono: string
  consumoMensual: string
  productos: string[]
}
