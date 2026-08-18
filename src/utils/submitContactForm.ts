import { trabajeEmail } from '../data/contacto'

const trabajeAccessKey = import.meta.env.VITE_WEB3FORMS_TRABAJE_ACCESS_KEY
const horecaAccessKey = import.meta.env.VITE_WEB3FORMS_HORECA_ACCESS_KEY
const fallbackAccessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

export type ContactFormPayload = {
  kind: 'contacto' | 'pqr' | 'trabaje'
  nombre: string
  email: string
  telefono?: string
  mensaje: string
  codigoRes?: string
  cargo?: string
  archivoNombre?: string
}

function subjectFor(kind: ContactFormPayload['kind']) {
  if (kind === 'pqr') return 'PQRS — Colbeef'
  if (kind === 'trabaje') return 'Trabaje con nosotros — Colbeef'
  return 'Contacto — Colbeef'
}

function fromNameFor(kind: ContactFormPayload['kind']) {
  if (kind === 'pqr') return 'Colbeef Web · PQRS'
  if (kind === 'trabaje') return 'Colbeef Web · Trabaje con nosotros'
  return 'Colbeef Web · Contacto'
}

function accessKeyFor(kind: ContactFormPayload['kind']) {
  if (kind === 'trabaje') return trabajeAccessKey || fallbackAccessKey
  // Temporal: PQR usa la misma clave que Solicitud de negocio
  if (kind === 'pqr') return horecaAccessKey || fallbackAccessKey
  return fallbackAccessKey || horecaAccessKey
}

export async function submitContactForm(data: ContactFormPayload, file?: File | null): Promise<void> {
  const accessKey = accessKeyFor(data.kind)

  if (!accessKey) {
    throw new Error(
      data.kind === 'trabaje'
        ? `Falta configurar el envío. Crea una clave en web3forms.com con ${trabajeEmail} y agrégala como VITE_WEB3FORMS_TRABAJE_ACCESS_KEY.`
        : `Falta configurar el envío. Agrega VITE_WEB3FORMS_HORECA_ACCESS_KEY (PQR usa por ahora el mismo destino que Solicitud de negocio).`,
    )
  }

  const formData = new FormData()
  formData.append('access_key', accessKey)
  formData.append('subject', subjectFor(data.kind))
  formData.append('from_name', fromNameFor(data.kind))
  formData.append('name', data.nombre)
  formData.append('email', data.email)
  formData.append('replyto', data.email)

  // Campos ordenados con etiquetas claras (sin duplicar en "message")
  formData.append('Teléfono', data.telefono?.trim() || '—')

  if (data.kind === 'trabaje') {
    formData.append('Cargo al que aspira', data.cargo?.trim() || '—')
    formData.append('Hoja de vida', data.archivoNombre || (file ? file.name : 'Sin archivo'))
  }

  if (data.kind === 'pqr' && data.codigoRes) {
    formData.append('Código de la res', data.codigoRes)
  }

  formData.append('Mensaje', data.mensaje?.trim() || '—')

  if (file) {
    formData.append('attachment', file)
  }

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    body: formData,
  })

  const result = (await response.json()) as { success?: boolean; message?: string }
  if (!response.ok || !result.success) {
    throw new Error(result.message || 'No pudimos enviar el mensaje. Intenta de nuevo.')
  }
}
