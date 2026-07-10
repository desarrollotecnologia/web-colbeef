import { horecaEmail, type HorecaFormData } from '../data/horeca'

const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

function buildMessage(data: HorecaFormData): string {
  const productos =
    data.productos.length > 0
      ? data.productos
          .map((p) => (p === 'Otro' && data.productoOtro ? `Otro: ${data.productoOtro}` : p))
          .join(', ')
      : '—'

  return [
    `Empresa: ${data.empresa}`,
    `Cargo: ${data.cargo || '—'}`,
    `Tipo de negocio: ${
      data.tipoNegocio === 'Otro'
        ? `Otro: ${data.tipoNegocioOtro || '—'}`
        : data.tipoNegocio || '—'
    }`,
    `Ciudad: ${data.ciudad}`,
    `Departamento: ${data.departamento || '—'}`,
    `Teléfono / WhatsApp: ${data.telefono}`,
    `Consumo mensual aproximado: ${data.consumoMensual || '—'}`,
    `Productos o servicios de interés: ${productos}`,
  ].join('\n')
}

export function buildHorecaMailtoBody(data: HorecaFormData): string {
  return [
    `Nombre completo: ${data.nombre}`,
    buildMessage(data),
    `Correo electrónico: ${data.email}`,
  ].join('\n')
}

async function submitWithWeb3Forms(data: HorecaFormData): Promise<void> {
  if (!accessKey) {
    throw new Error(
      `Falta configurar el envío del formulario. Crea una clave en web3forms.com con ${horecaEmail} y agrégala como VITE_WEB3FORMS_ACCESS_KEY.`,
    )
  }

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `Solicitud canal HORECA — ${data.empresa}`,
      from_name: data.nombre,
      name: data.nombre,
      email: data.email,
      replyto: data.email,
      to: horecaEmail,
      message: buildMessage(data),
      empresa: data.empresa,
      cargo: data.cargo || '—',
      tipo_negocio:
        data.tipoNegocio === 'Otro'
          ? `Otro: ${data.tipoNegocioOtro || '—'}`
          : data.tipoNegocio || '—',
      ciudad: data.ciudad,
      departamento: data.departamento || '—',
      telefono: data.telefono,
      consumo_mensual: data.consumoMensual || '—',
      productos_interes:
        data.productos.length > 0
          ? data.productos
              .map((p) => (p === 'Otro' && data.productoOtro ? `Otro: ${data.productoOtro}` : p))
              .join(', ')
          : '—',
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
