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
  enlaceHv?: string
  archivoNombre?: string
  /** Solo honeypot: si viene marcado, se descarta el envio. */
  botcheck?: boolean
}

function subjectFor(data: ContactFormPayload) {
  if (data.kind === 'pqr') {
    const codigo = data.codigoRes?.trim()
    return codigo ? `[Colbeef] PQRS: ${codigo}` : '[Colbeef] PQRS'
  }
  if (data.kind === 'trabaje') {
    const cargo = data.cargo?.trim()
    return cargo
      ? `[Colbeef] Postulacion: ${data.nombre.trim()} — ${cargo}`
      : `[Colbeef] Postulacion: ${data.nombre.trim()}`
  }
  return 'Contacto — Colbeef'
}

function fromNameFor(kind: ContactFormPayload['kind']) {
  if (kind === 'pqr') return 'Colbeef · PQRS'
  if (kind === 'trabaje') return 'Colbeef · Talento Humano'
  return 'Colbeef · Contacto'
}

function accessKeyFor(kind: ContactFormPayload['kind']) {
  if (kind === 'trabaje') return trabajeAccessKey || fallbackAccessKey
  // Temporal: PQR usa la misma clave que Solicitud de negocio
  if (kind === 'pqr') return horecaAccessKey || fallbackAccessKey
  return fallbackAccessKey || horecaAccessKey
}

function formatTrabajeMessage(data: ContactFormPayload): string {
  const fecha = new Date().toLocaleString('es-CO', {
    timeZone: 'America/Bogota',
    dateStyle: 'long',
    timeStyle: 'short',
  })

  return [
    '================================================',
    '  NUEVA POSTULACION — TRABAJE CON NOSOTROS',
    '  COLBEEF S.A.S.',
    '================================================',
    '',
    'DATOS DEL CANDIDATO',
    '------------------------------------------------',
    `Nombre:              ${data.nombre.trim()}`,
    `Correo electronico:  ${data.email.trim()}`,
    `Telefono:            ${data.telefono?.trim() || 'No indicado'}`,
    `Cargo al que aspira: ${data.cargo?.trim() || 'No indicado'}`,
    '',
    'HOJA DE VIDA',
    '------------------------------------------------',
    data.enlaceHv?.trim() || 'No indicado',
    '',
    'MENSAJE DEL CANDIDATO',
    '------------------------------------------------',
    data.mensaje?.trim() || 'Sin mensaje adicional',
    '',
    '------------------------------------------------',
    `Fecha de envio: ${fecha}`,
    'Origen: colbeef.com/trabaje-con-nosotros',
    `Responder a: ${data.email.trim()}`,
  ].join('\n')
}

function formatPqrMessage(data: ContactFormPayload, archivoNombre?: string): string {
  const fecha = new Date().toLocaleString('es-CO', {
    timeZone: 'America/Bogota',
    dateStyle: 'long',
    timeStyle: 'short',
  })

  return [
    '================================================',
    '  NUEVA SOLICITUD — PQRS',
    '  COLBEEF S.A.S.',
    '================================================',
    '',
    'DATOS DEL SOLICITANTE',
    '------------------------------------------------',
    `Nombre:              ${data.nombre.trim()}`,
    `Correo electronico:  ${data.email.trim()}`,
    `Telefono:            ${data.telefono?.trim() || 'No indicado'}`,
    '',
    'CODIGO DE LA SOLICITUD',
    '------------------------------------------------',
    data.codigoRes?.trim() || '—',
    '',
    'ARCHIVO ADJUNTO',
    '------------------------------------------------',
    archivoNombre?.trim() || 'Ninguno',
    '',
    'MENSAJE',
    '------------------------------------------------',
    data.mensaje?.trim() || 'Sin mensaje adicional',
    '',
    '------------------------------------------------',
    `Fecha de envio: ${fecha}`,
    'Origen: colbeef.com/contacto/pqrs',
    `Responder a: ${data.email.trim()}`,
  ].join('\n')
}

function appendCommonFields(formData: FormData, data: ContactFormPayload, accessKey: string) {
  formData.append('access_key', accessKey)
  formData.append('subject', subjectFor(data))
  formData.append('from_name', fromNameFor(data.kind))
  formData.append('name', data.nombre.trim())
  formData.append('email', data.email.trim())
  formData.append('replyto', data.email.trim())

  // Honeypot anti-spam (Web3Forms): solo bots marcan este campo
  if (!data.botcheck) {
    formData.append('botcheck', '')
  }
}

export async function submitContactForm(
  data: ContactFormPayload,
  file?: File | null,
): Promise<void> {
  const accessKey = accessKeyFor(data.kind)

  if (!accessKey) {
    throw new Error(
      data.kind === 'trabaje'
        ? `Falta configurar el envio. Crea una clave en web3forms.com con ${trabajeEmail} y agregala como VITE_WEB3FORMS_TRABAJE_ACCESS_KEY.`
        : `Falta configurar el envio. Agrega VITE_WEB3FORMS_HORECA_ACCESS_KEY (PQRS usa por ahora el mismo destino que Solicitud de negocio).`,
    )
  }

  if (data.botcheck) {
    throw new Error('No pudimos enviar el mensaje. Intenta de nuevo.')
  }

  const formData = new FormData()
  appendCommonFields(formData, data, accessKey)

  if (data.kind === 'trabaje') {
    // Un solo cuerpo estructurado: mas legible y sin caracteres rotos (TelÃ©fono)
    formData.append('message', formatTrabajeMessage(data))
    formData.append('form_type', 'Postulacion laboral')
  } else {
    if (data.kind === 'pqr') {
      const archivoNombre = (data.archivoNombre || file?.name) ?? undefined
      formData.append('message', formatPqrMessage(data, archivoNombre))
      formData.append('form_type', 'Solicitud PQRS')
    } else {
      // Contacto general (sin codigoRes)
      formData.append('message', data.mensaje?.trim() || '—')
      formData.append('form_type', 'Contacto')
    }

    if (file) {
      formData.append('attachment', file)
    }
  }

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { Accept: 'application/json' },
    body: formData,
  })

  const result = (await response.json()) as { success?: boolean; message?: string }
  if (!response.ok || !result.success) {
    throw new Error(result.message || 'No pudimos enviar el mensaje. Intenta de nuevo.')
  }
}
