import { horecaEmail, type HorecaFormData } from '../data/horeca'

const accessKey =
  import.meta.env.VITE_WEB3FORMS_HORECA_ACCESS_KEY || import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

function tipoNegocioLabel(data: HorecaFormData): string {
  if (data.tipoNegocio === 'Otro') return `Otro: ${data.tipoNegocioOtro || '—'}`
  return data.tipoNegocio || '—'
}

function productosLabel(data: HorecaFormData): string {
  if (data.productos.length === 0) return '—'
  return data.productos
    .map((p) => (p === 'Otro' && data.productoOtro ? `Otro: ${data.productoOtro}` : p))
    .join(', ')
}

export function buildHorecaMailtoBody(data: HorecaFormData): string {
  return [
    `Nombre completo: ${data.nombre}`,
    `Empresa: ${data.empresa}`,
    `Cargo: ${data.cargo || '—'}`,
    `Tipo de negocio: ${tipoNegocioLabel(data)}`,
    `Ciudad: ${data.ciudad}`,
    `Departamento: ${data.departamento || '—'}`,
    `Teléfono / WhatsApp: ${data.telefono}`,
    `Correo electrónico: ${data.email}`,
    `Consumo mensual aproximado: ${data.consumoMensual || '—'}`,
    `Productos o servicios de interés: ${productosLabel(data)}`,
  ].join('\n')
}

async function submitWithWeb3Forms(data: HorecaFormData): Promise<void> {
  if (!accessKey) {
    throw new Error(
      `Falta configurar el envío del formulario. Crea una clave en web3forms.com con ${horecaEmail} y agrégala como VITE_WEB3FORMS_HORECA_ACCESS_KEY.`,
    )
  }

  // Campos con etiquetas en español: Web3Forms las muestra tal cual en el correo.
  // No enviamos "message" con el resumen ni "to" (ya va al correo de la access key).
  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `Solicitud canal HORECA — ${data.empresa}`,
      from_name: 'Colbeef Web · Canal HORECA',
      name: data.nombre,
      email: data.email,
      replyto: data.email,
      Empresa: data.empresa,
      Cargo: data.cargo || '—',
      'Tipo de negocio': tipoNegocioLabel(data),
      Ciudad: data.ciudad,
      Departamento: data.departamento || '—',
      'Teléfono / WhatsApp': data.telefono,
      'Consumo mensual aproximado': data.consumoMensual || '—',
      'Productos o servicios de interés': productosLabel(data),
    }),
  })

  let result: { success?: boolean; message?: string } | null = null

  try {
    result = (await response.json()) as { success?: boolean; message?: string }
  } catch {
    if (response.ok) return
    throw new Error('El servicio de envío no respondió correctamente.')
  }

  if (result?.success) return

  throw new Error(result?.message ?? 'No se pudo enviar la solicitud.')
}

export async function submitHorecaForm(data: HorecaFormData): Promise<void> {
  try {
    await submitWithWeb3Forms(data)
  } catch (error) {
    if (error instanceof TypeError) {
      throw new Error(
        `No hay conexión con el servicio de envío. Intenta de nuevo o escríbenos a ${horecaEmail}.`,
      )
    }
    throw error
  }
}
