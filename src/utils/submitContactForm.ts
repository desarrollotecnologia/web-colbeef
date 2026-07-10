const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

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
  if (kind === 'pqr') return 'PQR — Colbeef'
  if (kind === 'trabaje') return 'Trabaje con nosotros — Colbeef'
  return 'Contacto — Colbeef'
}

export async function submitContactForm(data: ContactFormPayload, file?: File | null): Promise<void> {
  if (!accessKey) {
    throw new Error(
      'Falta configurar el envío del formulario. Agrega VITE_WEB3FORMS_ACCESS_KEY en el entorno.',
    )
  }

  const formData = new FormData()
  formData.append('access_key', accessKey)
  formData.append('subject', subjectFor(data.kind))
  formData.append('from_name', data.nombre)
  formData.append('email', data.email)
  formData.append(
    'message',
    [
      `Tipo: ${data.kind}`,
      `Nombre: ${data.nombre}`,
      `Email: ${data.email}`,
      `Teléfono: ${data.telefono || '—'}`,
      data.codigoRes ? `Código de la res: ${data.codigoRes}` : null,
      data.cargo ? `Cargo al que aspira: ${data.cargo}` : null,
      data.archivoNombre ? `Archivo: ${data.archivoNombre}` : null,
      '',
      data.mensaje,
    ]
      .filter(Boolean)
      .join('\n'),
  )

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
