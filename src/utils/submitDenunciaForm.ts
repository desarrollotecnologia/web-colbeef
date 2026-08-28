import { lineaEticaEmail } from '../data/contacto'

const lineaEticaAccessKey = import.meta.env.VITE_WEB3FORMS_LINEA_ETICA_ACCESS_KEY

export type DenunciaFormPayload = {
  anonimo: boolean
  nombre: string
  email?: string
  relacion: string
  personas: string
  descripcion: string
  fecha: string
  archivoNombre?: string
}

function formatDenunciaMessage(data: DenunciaFormPayload): string {
  const fechaEnvio = new Date().toLocaleString('es-CO', {
    timeZone: 'America/Bogota',
    dateStyle: 'long',
    timeStyle: 'short',
  })

  return [
    '================================================',
    '  NUEVA DENUNCIA — LINEA ETICA',
    '  COLBEEF S.A.S.',
    '================================================',
    '',
    'CONFIDENCIALIDAD',
    '------------------------------------------------',
    data.anonimo ? 'Denuncia ANONIMA' : 'Denuncia IDENTIFICADA',
    '',
    'DATOS DEL REPORTANTE',
    '------------------------------------------------',
    `Nombre:                 ${data.anonimo ? 'Anonimo' : data.nombre.trim() || 'No indicado'}`,
    `Correo:                 ${data.anonimo ? 'No aplica (anonima)' : data.email?.trim() || 'No indicado'}`,
    `Relacion con la empresa: ${data.relacion.trim() || 'No indicado'}`,
    '',
    'PERSONAS INVOLUCRADAS',
    '------------------------------------------------',
    data.personas.trim() || 'No indicado',
    '',
    'FECHA DEL HECHO',
    '------------------------------------------------',
    data.fecha.trim() || 'No indicada',
    '',
    'DESCRIPCION DEL HECHO',
    '------------------------------------------------',
    data.descripcion.trim() || 'Sin descripcion',
    '',
    'EVIDENCIA',
    '------------------------------------------------',
    data.archivoNombre?.trim()
      ? `El reportante indico el archivo: ${data.archivoNombre.trim()}\n(Nota: por el canal web no se adjunta el archivo. Solicitarlo a ${lineaEticaEmail} si aplica.)`
      : 'Ninguna evidencia adjunta en el formulario',
    '',
    '------------------------------------------------',
    `Fecha de envio: ${fechaEnvio}`,
    'Origen: colbeef.com/corporativo/gobierno-corporativo',
    `Destino: ${lineaEticaEmail}`,
  ].join('\n')
}

export async function submitDenunciaForm(data: DenunciaFormPayload): Promise<void> {
  if (!lineaEticaAccessKey) {
    throw new Error(
      `Falta configurar el envio. Crea una clave en web3forms.com con ${lineaEticaEmail} y agregala como secret LINEA_ETICA / VITE_WEB3FORMS_LINEA_ETICA_ACCESS_KEY.`,
    )
  }

  if (!data.descripcion.trim()) {
    throw new Error('La descripcion del hecho es obligatoria.')
  }

  if (!data.anonimo && !data.nombre.trim()) {
    throw new Error('Indique su nombre completo o marque la denuncia como anonima.')
  }

  const formData = new FormData()
  formData.append('access_key', lineaEticaAccessKey)
  formData.append(
    'subject',
    data.anonimo
      ? '[Colbeef] Denuncia anonima — Linea etica'
      : `[Colbeef] Denuncia — ${data.nombre.trim()}`,
  )
  formData.append('from_name', 'Colbeef · Linea Etica')
  formData.append('name', data.anonimo ? 'Denuncia anonima' : data.nombre.trim())
  formData.append(
    'email',
    data.anonimo
      ? lineaEticaEmail
      : data.email?.trim() || lineaEticaEmail,
  )
  if (!data.anonimo && data.email?.trim()) {
    formData.append('replyto', data.email.trim())
  }
  formData.append('botcheck', '')
  formData.append('form_type', 'Denuncia linea etica')
  formData.append('message', formatDenunciaMessage(data))

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { Accept: 'application/json' },
    body: formData,
  })

  const result = (await response.json()) as { success?: boolean; message?: string }
  if (!response.ok || !result.success) {
    throw new Error(result.message || 'No pudimos enviar la denuncia. Intenta de nuevo.')
  }
}
