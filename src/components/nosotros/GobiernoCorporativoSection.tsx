import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, FileUp, Upload } from 'lucide-react'
import { gobiernoCorporativo } from '../../data/nosotros'
import { corporativo } from '../../data/assets'
import { lineaEticaEmail } from '../../data/contacto'
import { submitDenunciaForm } from '../../utils/submitDenunciaForm'
import { AnimatedSection, FadeIn } from '../ui/AnimatedSection'
import { PillTitle } from '../ui/DesignAssets'

const inputClass =
  'w-full px-4 py-3 rounded-xl border border-gray-200 text-sm bg-white focus:border-colbeef-green focus:outline-none'

export function GobiernoCorporativoSection() {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    relacion: 'Empleado',
    personas: '',
    descripcion: '',
    fecha: '',
    anonimo: 'si',
  })
  const [archivo, setArchivo] = useState<File | null>(null)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const esAnonimo = form.anonimo === 'si'

  const handleAnonimoChange = (value: string) => {
    setForm((prev) => ({
      ...prev,
      anonimo: value,
      nombre: value === 'si' ? '' : prev.nombre,
      email: value === 'si' ? '' : prev.email,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!form.descripcion.trim()) {
      setStatus('error')
      setErrorMessage('La descripción del hecho es obligatoria.')
      return
    }

    if (!esAnonimo && !form.nombre.trim()) {
      setStatus('error')
      setErrorMessage('Indique su nombre completo o marque la denuncia como anónima.')
      return
    }

    if (!esAnonimo && !form.email.trim()) {
      setStatus('error')
      setErrorMessage('Indique su correo electrónico o marque la denuncia como anónima.')
      return
    }

    setStatus('loading')
    setErrorMessage('')

    try {
      await submitDenunciaForm({
        anonimo: esAnonimo,
        nombre: form.nombre,
        email: form.email,
        relacion: form.relacion,
        personas: form.personas,
        descripcion: form.descripcion,
        fecha: form.fecha,
        archivoNombre: archivo?.name,
      })
      setStatus('success')
      setForm({
        nombre: '',
        email: '',
        relacion: 'Empleado',
        personas: '',
        descripcion: '',
        fecha: '',
        anonimo: 'si',
      })
      setArchivo(null)
    } catch (error) {
      setStatus('error')
      setErrorMessage(
        error instanceof Error ? error.message : 'No pudimos enviar la denuncia. Intenta de nuevo.',
      )
    }
  }

  const canales = [
    { label: lineaEticaEmail, href: `mailto:${lineaEticaEmail}` },
    { label: 'www.supersociedades.gov.co', href: 'https://www.supersociedades.gov.co' },
    { label: 'Denuncias Anticorrupción', href: '#' },
  ]

  return (
    <>
      <AnimatedSection className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-16">
            <FadeIn>
              <div className="rounded-3xl overflow-hidden relative">
                <img
                  src={corporativo.gobierno.foto3}
                  alt="Gobierno corporativo"
                  className="w-full h-[240px] sm:h-[280px] md:h-[320px] object-cover"
                />
                <div className="absolute inset-0 bg-colbeef-green/40 mix-blend-multiply" />
              </div>
            </FadeIn>

            <FadeIn delay={0.12} className="space-y-8">
              <div>
                <PillTitle className="mb-4">Gobierno corporativo y línea ética</PillTitle>
                <p className="text-colbeef-gray text-sm leading-relaxed">{gobiernoCorporativo.intro}</p>
              </div>
              <div>
                <PillTitle className="mb-4">{gobiernoCorporativo.queEs}</PillTitle>
                <p className="text-colbeef-gray text-sm leading-relaxed mb-4">
                  {gobiernoCorporativo.lineaEtica}
                </p>
                <ul className="space-y-2">
                  {gobiernoCorporativo.reportes.map((item) => (
                    <li key={item} className="text-colbeef-green text-xs font-bold uppercase flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-colbeef-green shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-colbeef-gray text-sm leading-relaxed mt-4">
                  Este canal protege su identidad y prohíbe cualquier tipo de represalia contra quien
                  de buena fe reporte irregularidades.
                </p>
              </div>
            </FadeIn>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 mb-16">
            <FadeIn>
              <PillTitle className="mb-4">{gobiernoCorporativo.queReportar}</PillTitle>
              <ul className="space-y-2">
                {gobiernoCorporativo.reportesAdicionales.map((item) => (
                  <li key={item} className="text-colbeef-green text-xs font-bold uppercase flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-colbeef-green shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.1}>
              <PillTitle className="mb-4">{gobiernoCorporativo.quienPuede}</PillTitle>
              <p className="text-colbeef-gray text-sm leading-relaxed">{gobiernoCorporativo.eticaIntro}</p>
            </FadeIn>
          </div>

          <FadeIn>
            <div className="relative rounded-3xl overflow-hidden bg-colbeef-green-darker p-8 md:p-12 text-center">
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 30% 50%, rgba(46,157,82,0.4) 0%, transparent 60%)',
                }}
              />
              <div className="relative z-10 max-w-2xl mx-auto">
                <PillTitle className="mb-6">La línea ética o canal de denuncias</PillTitle>
                <p className="text-white/80 text-sm leading-relaxed">
                  La Línea Ética es un canal confidencial y seguro que permite reportar situaciones que
                  puedan afectar los principios y valores de la organización.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 md:py-24 bg-gray-100">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <FadeIn>
            <PillTitle className="mb-8 mx-auto block text-center w-fit">
              Formulario de denuncia
            </PillTitle>

            {status === 'success' ? (
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-colbeef-green/20 text-center">
                <p className="text-colbeef-green font-semibold mb-2">Denuncia enviada</p>
                <p className="text-colbeef-gray text-sm leading-relaxed">
                  Su reporte fue recibido por la Línea Ética ({lineaEticaEmail}) y será gestionado con
                  confidencialidad por el Oficial de Cumplimiento.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-5 text-sm text-colbeef-green font-semibold underline"
                >
                  Enviar otra denuncia
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-200 space-y-4"
              >
                <div className="bg-colbeef-green text-white rounded-xl px-5 py-4 flex flex-wrap items-center justify-between gap-3 text-sm">
                  <span>¿Desea que su denuncia sea anónima?</span>
                  <div className="flex gap-4">
                    {['si', 'no'].map((opt) => (
                      <label key={opt} className="flex items-center gap-2 cursor-pointer uppercase text-xs font-bold">
                        <input
                          type="radio"
                          name="anonimo"
                          value={opt}
                          checked={form.anonimo === opt}
                          onChange={(e) => handleAnonimoChange(e.target.value)}
                          className="accent-white"
                        />
                        {opt}
                      </label>
                    ))}
                  </div>
                </div>

                {esAnonimo ? (
                  <p className="rounded-xl border border-colbeef-green/20 bg-colbeef-green/5 px-4 py-3 text-xs text-colbeef-gray leading-relaxed">
                    Denuncia anónima: no se solicitará su nombre ni correo. Puede continuar con la
                    descripción del hecho.
                  </p>
                ) : (
                  <>
                    <input
                      type="text"
                      required
                      placeholder="Nombre completo*"
                      value={form.nombre}
                      onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                      className={inputClass}
                    />
                    <input
                      type="email"
                      required
                      placeholder="Correo electrónico*"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputClass}
                    />
                  </>
                )}

                <select
                  value={form.relacion}
                  onChange={(e) => setForm({ ...form, relacion: e.target.value })}
                  className={inputClass}
                  aria-label="Relación con la empresa"
                >
                  <option value="Empleado">Empleado</option>
                  <option value="Proveedor">Proveedor</option>
                  <option value="Cliente">Cliente</option>
                  <option value="Otro">Otro</option>
                </select>

                <input
                  type="text"
                  placeholder="Nombre y cargo de la(s) persona(s) involucradas"
                  value={form.personas}
                  onChange={(e) => setForm({ ...form, personas: e.target.value })}
                  className={inputClass}
                />

                <textarea
                  required
                  rows={4}
                  placeholder="Descripción del hecho (obligatorio)*"
                  value={form.descripcion}
                  onChange={(e) => setForm({ ...form, descripcion: e.target.value })}
                  className={`${inputClass} resize-none`}
                />

                <div>
                  <label
                    htmlFor="denuncia-archivo"
                    className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-colbeef-green/40 bg-colbeef-green/5 px-4 py-6 text-center transition-colors hover:border-colbeef-green hover:bg-colbeef-green/10"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-colbeef-green text-white">
                      {archivo ? <FileUp className="h-5 w-5" /> : <Upload className="h-5 w-5" />}
                    </span>
                    <span className="text-sm font-semibold text-colbeef-green">
                      {archivo ? 'Archivo seleccionado' : 'Indicar evidencia (opcional)'}
                    </span>
                    <span className="text-xs text-colbeef-gray max-w-sm leading-relaxed">
                      {archivo
                        ? archivo.name
                        : `Puede indicar un archivo de referencia. Para enviar la evidencia, escríbala también a ${lineaEticaEmail}.`}
                    </span>
                  </label>
                  <input
                    id="denuncia-archivo"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                    className="sr-only"
                    onChange={(e) => setArchivo(e.target.files?.[0] ?? null)}
                  />
                  {archivo ? (
                    <button
                      type="button"
                      onClick={() => setArchivo(null)}
                      className="mt-2 text-xs text-colbeef-gray underline hover:text-colbeef-green"
                    >
                      Quitar archivo
                    </button>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="denuncia-fecha" className="mb-1.5 block text-xs font-semibold text-colbeef-dark">
                    Fecha del hecho
                  </label>
                  <input
                    id="denuncia-fecha"
                    type="date"
                    value={form.fecha}
                    onChange={(e) => setForm({ ...form, fecha: e.target.value })}
                    className={inputClass}
                  />
                </div>

                {status === 'error' && errorMessage && (
                  <p className="text-colbeef-red text-sm text-center" role="alert">
                    {errorMessage}
                  </p>
                )}

                <p className="text-colbeef-green text-xs text-center">
                  Gracias por su reporte. Será gestionado con total confidencialidad por el Oficial de
                  Cumplimiento.
                </p>

                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                  whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
                  className="mx-auto flex items-center gap-2 bg-colbeef-green text-white px-8 py-3 rounded-lg text-sm font-semibold tracking-widest uppercase disabled:opacity-60"
                >
                  {status === 'loading' ? 'Enviando...' : 'Enviar'}
                  {status !== 'loading' && <ArrowRight className="w-4 h-4" />}
                </motion.button>
              </form>
            )}
          </FadeIn>
        </div>
      </AnimatedSection>

      <AnimatedSection className="relative py-20 md:py-28 overflow-hidden">
        <img
          src={corporativo.gobierno.bannerCanales}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-colbeef-green-darker/75" />
        <div className="relative max-w-4xl mx-auto px-4 md:px-8 text-center">
          <FadeIn>
            <PillTitle className="mb-6">Canales de contacto de la línea ética</PillTitle>
            <p className="text-white/80 text-sm mb-8">
              En caso de preferir otros medios, también puede comunicarse a:
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {canales.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="bg-colbeef-green text-white px-5 py-3 rounded-lg text-xs font-semibold hover:bg-colbeef-green-light transition-colors"
                >
                  {c.label}
                </a>
              ))}
            </div>
            <p className="text-white font-bold text-sm md:text-base uppercase tracking-wide leading-relaxed">
              {gobiernoCorporativo.quote}
            </p>
          </FadeIn>
        </div>
      </AnimatedSection>
    </>
  )
}
