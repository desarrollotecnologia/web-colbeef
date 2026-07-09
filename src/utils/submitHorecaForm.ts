import { horecaEmail, type HorecaFormData } from '../data/horeca'

export async function submitHorecaForm(data: HorecaFormData): Promise<void> {
  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(horecaEmail)}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      _subject: `Solicitud canal HORECA — ${data.empresa}`,
      _template: 'table',
      _captcha: 'false',
      'Nombre completo': data.nombre,
      'Empresa o establecimiento': data.empresa,
      Cargo: data.cargo || '—',
      'Tipo de negocio': data.tipoNegocio || '—',
      Ciudad: data.ciudad,
      Departamento: data.departamento || '—',
      'Correo electrónico': data.email,
      'Teléfono / WhatsApp': data.telefono,
      'Consumo mensual aproximado': data.consumoMensual || '—',
      'Productos o servicios de interés': data.productos.length > 0 ? data.productos.join(', ') : '—',
    }),
  })

  if (!response.ok) {
    throw new Error('No se pudo enviar la solicitud.')
  }

  const result = (await response.json()) as { success?: string }
  if (result.success !== 'true') {
    throw new Error('No se pudo enviar la solicitud.')
  }
}
