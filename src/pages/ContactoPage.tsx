import { useState } from 'react'
import { images } from '../data/assets'
import { contactoContent } from '../data/contacto'
import { contactoHero } from '../data/pageHeroes'
import { submitContactForm } from '../utils/submitContactForm'
import {
  ContactPrivacyCheckbox,
  contactSubmitClass,
  contactTextareaClass,
  contactUnderlineInputClass,
} from '../components/contacto/contactFormStyles'
import { AnimatedSection, FadeIn } from '../components/ui/AnimatedSection'
import { PageHero } from '../components/ui/PageHero'

export function ContactoPage() {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
  })
  const [privacyAccepted, setPrivacyAccepted] = useState(false)
  const [privacyTouched, setPrivacyTouched] = useState(false)
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const showError = (field: 'nombre' | 'email' | 'telefono') =>
    touched[field] && !form[field].trim()

  const showPrivacyError = privacyTouched && !privacyAccepted

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setTouched({ nombre: true, email: true, telefono: true })
    setPrivacyTouched(true)

    if (!form.nombre.trim() || !form.email.trim() || !form.telefono.trim()) {
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
      await submitContactForm({
        kind: 'contacto',
        nombre: form.nombre,
        email: form.email,
        telefono: form.telefono,
        mensaje: form.mensaje,
      })
      setStatus('success')
      setForm({ nombre: '', email: '', telefono: '', mensaje: '' })
      setPrivacyAccepted(false)
      setPrivacyTouched(false)
      setTouched({})
    } catch (error) {
      setStatus('error')
      setErrorMessage(
        error instanceof Error ? error.message : 'No pudimos enviar el mensaje. Intenta de nuevo.',
      )
    }
  }

  return (
    <>
      <PageHero image={images.panoramica} alt="Contacto Colbeef" content={contactoHero} />

      <AnimatedSection className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
            <FadeIn className="max-w-xl mx-auto w-full">
              <h2 className="text-colbeef-dark text-2xl sm:text-3xl font-bold mb-2 text-center">
                {contactoContent.formTitle}
              </h2>
              <p className="text-colbeef-gray text-sm mb-8 text-center">{contactoContent.formSubtitle}</p>

              {status === 'success' ? (
                <div className="rounded-xl border border-colbeef-green/20 bg-[#d4edda]/40 px-5 py-8 text-center">
                  <p className="text-colbeef-green font-semibold mb-2">Mensaje enviado</p>
                  <p className="text-colbeef-gray text-sm">
                    Pronto nos comunicaremos con usted.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-5 text-sm text-colbeef-green font-semibold underline"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div>
                    <input
                      type="text"
                      placeholder="Nombre*"
                      required
                      value={form.nombre}
                      onBlur={() => setTouched((t) => ({ ...t, nombre: true }))}
                      onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                      className={contactUnderlineInputClass}
                    />
                    {showError('nombre') && (
                      <p className="text-colbeef-red text-xs mt-1">El campo es obligatorio.</p>
                    )}
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Email*"
                      required
                      value={form.email}
                      onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={contactUnderlineInputClass}
                    />
                    {showError('email') && (
                      <p className="text-colbeef-red text-xs mt-1">El campo es obligatorio.</p>
                    )}
                  </div>

                  <div>
                    <input
                      type="tel"
                      placeholder="Teléfono*"
                      required
                      value={form.telefono}
                      onBlur={() => setTouched((t) => ({ ...t, telefono: true }))}
                      onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                      className={contactUnderlineInputClass}
                    />
                    {showError('telefono') && (
                      <p className="text-colbeef-red text-xs mt-1">El campo es obligatorio.</p>
                    )}
                  </div>

                  <textarea
                    placeholder="Mensaje"
                    value={form.mensaje}
                    onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                    className={contactTextareaClass}
                  />

                  <div>
                    <ContactPrivacyCheckbox
                      checked={privacyAccepted}
                      onChange={(value) => {
                        setPrivacyAccepted(value)
                        setPrivacyTouched(true)
                        if (value) setErrorMessage('')
                      }}
                      id="contacto-main-privacy"
                    />
                    {showPrivacyError && (
                      <p className="text-colbeef-red text-xs mt-1.5" role="alert">
                        Debes marcar esta casilla para enviar el mensaje.
                      </p>
                    )}
                  </div>

                  {status === 'error' && errorMessage && !showPrivacyError && (
                    <p className="text-colbeef-red text-sm" role="alert">
                      {errorMessage}
                    </p>
                  )}

                  <div className="flex justify-center">
                    <button
                      type="submit"
                      disabled={status === 'loading' || !privacyAccepted}
                      className={contactSubmitClass}
                      title={
                        !privacyAccepted
                          ? 'Marca la casilla de autorización para poder enviar'
                          : undefined
                      }
                    >
                      {status === 'loading' ? 'Enviando...' : 'Enviar mensaje'}
                    </button>
                  </div>
                </form>
              )}
            </FadeIn>
        </div>
      </AnimatedSection>
    </>
  )
}
