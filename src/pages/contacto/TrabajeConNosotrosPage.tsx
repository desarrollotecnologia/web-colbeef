import { useState } from 'react'
import { images } from '../../data/assets'
import { trabajeContent } from '../../data/contacto'
import { heroFromTitle } from '../../data/pageHeroes'
import { submitContactForm } from '../../utils/submitContactForm'
import {
  ContactPrivacyCheckbox,
  contactSubmitClass,
  contactTextareaClass,
  contactUnderlineInputClass,
} from '../../components/contacto/contactFormStyles'
import { AnimatedSection, FadeIn } from '../../components/ui/AnimatedSection'
import { PageHero } from '../../components/ui/PageHero'

const trabajeHero = heroFromTitle(
  'Trabaje con nosotros',
  'Haga parte del equipo Colbeef.',
  'Talento • Crecimiento • Cultura organizacional',
)

export function TrabajeConNosotrosPage() {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    telefono: '',
    cargo: '',
    mensaje: '',
  })
  const [file, setFile] = useState<File | null>(null)
  const [privacyAccepted, setPrivacyAccepted] = useState(false)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!form.nombre.trim() || !form.email.trim()) {
      setStatus('error')
      setErrorMessage('Completa los campos obligatorios.')
      return
    }

    if (!privacyAccepted) {
      setStatus('error')
      setErrorMessage('Debes autorizar el tratamiento de datos personales para continuar.')
      return
    }

    setStatus('loading')
    setErrorMessage('')

    try {
      await submitContactForm(
        {
          kind: 'trabaje',
          nombre: form.nombre,
          email: form.email,
          telefono: form.telefono,
          cargo: form.cargo,
          mensaje: form.mensaje,
          archivoNombre: file?.name,
        },
        file,
      )
      setStatus('success')
      setForm({ nombre: '', email: '', telefono: '', cargo: '', mensaje: '' })
      setFile(null)
      setPrivacyAccepted(false)
    } catch (error) {
      setStatus('error')
      setErrorMessage(
        error instanceof Error ? error.message : 'No pudimos enviar el mensaje. Intenta de nuevo.',
      )
    }
  }

  return (
    <>
      <PageHero image={images.panoramica} alt="Trabaje con nosotros" content={trabajeHero} />

      <AnimatedSection className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-start">
            <FadeIn>
              {status === 'success' ? (
                <div className="rounded-xl border border-colbeef-green/20 bg-[#d4edda]/40 px-5 py-8 text-center">
                  <p className="text-colbeef-green font-semibold mb-2">Mensaje enviado</p>
                  <p className="text-colbeef-gray text-sm">
                    Revisaremos su información y nos comunicaremos pronto.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-5 text-sm text-colbeef-green font-semibold underline"
                  >
                    Enviar otra postulación
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <input
                    type="text"
                    placeholder="Nombre*"
                    required
                    value={form.nombre}
                    onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                    className={contactUnderlineInputClass}
                  />
                  <input
                    type="email"
                    placeholder="Email*"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={contactUnderlineInputClass}
                  />
                  <input
                    type="tel"
                    placeholder="Teléfono"
                    value={form.telefono}
                    onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                    className={contactUnderlineInputClass}
                  />
                  <input
                    type="text"
                    placeholder="Cargo al que aspira"
                    value={form.cargo}
                    onChange={(e) => setForm({ ...form, cargo: e.target.value })}
                    className={contactUnderlineInputClass}
                  />
                  <textarea
                    placeholder="Mensaje"
                    value={form.mensaje}
                    onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                    className={contactTextareaClass}
                  />

                  <div>
                    <label className="block text-xs font-semibold text-colbeef-dark mb-2">
                      Hoja de vida
                    </label>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                      className="block w-full text-sm text-colbeef-gray file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-colbeef-green/10 file:text-colbeef-green file:text-xs file:font-semibold hover:file:bg-colbeef-green/15"
                    />
                    <p className="text-xs text-colbeef-gray mt-1.5">
                      {file ? file.name : 'Ningún archivo seleccionado'}
                    </p>
                  </div>

                  <ContactPrivacyCheckbox
                    checked={privacyAccepted}
                    onChange={setPrivacyAccepted}
                    id="trabaje-privacy"
                  />

                  {status === 'error' && errorMessage && (
                    <p className="text-colbeef-red text-sm" role="alert">
                      {errorMessage}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className={contactSubmitClass}
                  >
                    {status === 'loading' ? 'Enviando...' : 'Enviar mensaje'}
                  </button>
                </form>
              )}
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="text-colbeef-dark text-2xl sm:text-3xl font-bold mb-4">
                {trabajeContent.title}
              </h2>
              <p className="text-colbeef-gray text-sm leading-relaxed max-w-md">
                {trabajeContent.description}
              </p>
            </FadeIn>
          </div>
        </div>
      </AnimatedSection>
    </>
  )
}
