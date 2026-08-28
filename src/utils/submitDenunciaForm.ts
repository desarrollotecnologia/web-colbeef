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

function fechaEnvioLabel(): string {
  return new Date().toLocaleString('es-CO', {
    timeZone: 'America/Bogota',
    dateStyle: 'long',
    timeStyle: 'short',
  })
}

function evidenciaLabel(archivoNombre?: string): string {
  if (!archivoNombre?.trim()) return 'Sin evidencia indicada'
  return `${archivoNombre.trim()} (referencia; enviar archivo a ${lineaEticaEmail} si aplica)`
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
    data.anonimo ? lineaEticaEmail : data.email?.trim() || lineaEticaEmail,
  )
  if (!data.anonimo && data.email?.trim()) {
    formData.append('replyto', data.email.trim())
  }
  formData.append('botcheck', '')
  formData.append('form_type', 'Denuncia linea etica')

  // Campos separados: Web3Forms los muestra como ficha legible en el correo
  formData.append('Tipo de denuncia', data.anonimo ? 'Anonima' : 'Identificada')
  formData.append('Relacion con la empresa', data.relacion.trim() || 'No indicada')
  formData.append('Personas involucradas', data.personas.trim() || 'No indicadas')
  formData.append('Fecha del hecho', data.fecha.trim() || 'No indicada')
  formData.append('Evidencia', evidenciaLabel(data.archivoNombre))
  formData.append('Fecha de envio', fechaEnvioLabel())
  formData.append('Origen', 'colbeef.com/corporativo/gobierno-corporativo')
  formData.append('message', data.descripcion.trim())

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
