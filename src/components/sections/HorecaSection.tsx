import { useState } from 'react'
import { motion } from 'framer-motion'
import { Award, Send, Shield, Snowflake, Truck } from 'lucide-react'
import { images } from '../../data/assets'
import {
  horecaBusinessTypes,
  horecaConsumptionOptions,
  horecaFeatures,
  horecaIntroText,
  horecaProductOptions,
  type HorecaFormData,
} from '../../data/horeca'
import { locationLabel } from '../../data/site'
import { submitHorecaForm } from '../../utils/submitHorecaForm'
import { AnimatedSection, FadeIn } from '../ui/AnimatedSection'
import { Logo } from '../ui/Logo'

const featureIcons = [Shield, Snowflake, Award, Truck]

const emptyForm: HorecaFormData = {
  nombre: '',
  empresa: '',
  cargo: '',
  tipoNegocio: '',
  ciudad: '',
  departamento: '',
  email: '',
  telefono: '',
  consumoMensual: '',
  productos: [],
}

const inputClass =
  'w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-colbeef-dark placeholder:text-colbeef-gray/70 focus:border-colbeef-green focus:outline-none focus:ring-1 focus:ring-colbeef-green/30 transition-colors'

const labelClass = 'block text-sm font-semibold text-colbeef-dark mb-1.5'

export function HorecaSection() {
  const [form, setForm] = useState<HorecaFormData>(emptyForm)
  const [privacyAccepted, setPrivacyAccepted] = useState(false)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const toggleProduct = (product: string) => {
    setForm((prev) => ({
      ...prev,
      productos: prev.productos.includes(product)
        ? prev.productos.filter((p) => p !== product)
        : [...prev.productos, product],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!privacyAccepted) {
      setErrorMessage('Debes autorizar el tratamiento de datos personales para continuar.')
      setStatus('error')
      return
    }

    setStatus('loading')
    setErrorMessage('')

    try {
      await submitHorecaForm(form)
      setStatus('success')
      setForm(emptyForm)
      setPrivacyAccepted(false)
    } catch {
      setStatus('error')
      setErrorMessage(
        'No pudimos enviar tu solicitud en este momento. Intenta de nuevo o escríbenos a jefe.mercadeo@colbeef.com',
      )
    }
  }

  return (
    <AnimatedSection className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12 md:space-y-16">
        <FadeIn>
          <div className="rounded-2xl md:rounded-3xl overflow-hidden bg-colbeef-green-darker border border-colbeef-green-light/20 shadow-2xl">
            <div className="grid lg:grid-cols-2 min-h-[420px]">
              <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                <Logo size="md" className="mb-6" />

                <p className="text-white/60 text-[10px] font-bold tracking-[0.2em] uppercase mb-3">
                  {locationLabel}
                </p>

                <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold uppercase leading-tight mb-2">
                  Soluciones cárnicas para el canal
                </h2>
                <p className="text-colbeef-green-light text-3xl sm:text-4xl md:text-5xl font-bold uppercase mb-4">
                  Horeca
                </p>
                <p className="text-white/75 text-sm md:text-base leading-relaxed mb-8 max-w-lg">
                  Calidad, rendimiento y servicio para hoteles, restaurantes, cafeterías y catering de alto nivel.
                </p>

                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {horecaFeatures.map((feature, i) => {
                    const Icon = featureIcons[i]

                    return (
                      <div
                        key={feature.id}
                        className="flex items-start gap-2 sm:gap-3 rounded-xl bg-white/5 border border-white/10 p-3 sm:p-4"
                      >
                        <Icon className="w-5 h-5 text-colbeef-green-light shrink-0 mt-0.5" />
                        <span className="text-white text-[10px] sm:text-xs font-semibold uppercase leading-snug">
                          {feature.label}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="relative min-h-[240px] lg:min-h-0">
                <img
                  src={images.horecaBanner}
                  alt="Chef profesional preparando carne Colbeef"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-colbeef-green-darker/80 via-colbeef-green-darker/20 to-transparent lg:from-colbeef-green-darker/60 lg:via-transparent" />
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8 md:mb-10">
              <h3 className="text-colbeef-green text-xl sm:text-2xl font-bold uppercase tracking-wide mb-5">
                Solicita información para el canal Horeca
              </h3>
              <p className="text-colbeef-gray text-sm md:text-base leading-relaxed text-left sm:text-center">
                {horecaIntroText}
              </p>
            </div>

            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-2xl border border-colbeef-green/30 bg-colbeef-green-pale p-8 text-center"
              >
                <p className="text-colbeef-green font-bold text-lg mb-2">¡Solicitud enviada!</p>
                <p className="text-colbeef-gray text-sm leading-relaxed">
                  Hemos recibido tu información. Un asesor de Colbeef se comunicará contigo pronto.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-colbeef-green text-xs font-semibold uppercase tracking-widest hover:underline"
                >
                  Enviar otra solicitud
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
                  <div>
                    <label htmlFor="horeca-nombre" className={labelClass}>
                      Nombre completo <span className="text-colbeef-red">*</span>
                    </label>
                    <input
                      id="horeca-nombre"
                      type="text"
                      required
                      value={form.nombre}
                      onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="horeca-empresa" className={labelClass}>
                      Empresa o establecimiento <span className="text-colbeef-red">*</span>
                    </label>
                    <input
                      id="horeca-empresa"
                      type="text"
                      required
                      value={form.empresa}
                      onChange={(e) => setForm({ ...form, empresa: e.target.value })}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="horeca-cargo" className={labelClass}>
                      Cargo
                    </label>
                    <input
                      id="horeca-cargo"
                      type="text"
                      value={form.cargo}
                      onChange={(e) => setForm({ ...form, cargo: e.target.value })}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="horeca-tipo" className={labelClass}>
                      Tipo de negocio
                    </label>
                    <select
                      id="horeca-tipo"
                      value={form.tipoNegocio}
                      onChange={(e) => setForm({ ...form, tipoNegocio: e.target.value })}
                      className={`${inputClass} bg-white`}
                    >
                      <option value="">Seleccione una opción</option>
                      {horecaBusinessTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="horeca-ciudad" className={labelClass}>
                      Ciudad <span className="text-colbeef-red">*</span>
                    </label>
                    <input
                      id="horeca-ciudad"
                      type="text"
                      required
                      value={form.ciudad}
                      onChange={(e) => setForm({ ...form, ciudad: e.target.value })}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="horeca-departamento" className={labelClass}>
                      Departamento
                    </label>
                    <input
                      id="horeca-departamento"
                      type="text"
                      value={form.departamento}
                      onChange={(e) => setForm({ ...form, departamento: e.target.value })}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="horeca-email" className={labelClass}>
                      Correo electrónico <span className="text-colbeef-red">*</span>
                    </label>
                    <input
                      id="horeca-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="horeca-telefono" className={labelClass}>
                      Teléfono / WhatsApp <span className="text-colbeef-red">*</span>
                    </label>
                    <input
                      id="horeca-telefono"
                      type="tel"
                      required
                      value={form.telefono}
                      onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="horeca-consumo" className={labelClass}>
                    Número aproximado de porciones o consumo mensual
                  </label>
                  <select
                    id="horeca-consumo"
                    value={form.consumoMensual}
                    onChange={(e) => setForm({ ...form, consumoMensual: e.target.value })}
                    className={`${inputClass} bg-white`}
                  >
                    <option value="">Seleccione una opción</option>
                    {horecaConsumptionOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <fieldset>
                  <legend className={`${labelClass} mb-3`}>
                    ¿Qué productos o servicios le interesan?
                  </legend>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {horecaProductOptions.map((product) => (
                      <label
                        key={product}
                        className="flex items-center gap-3 rounded-lg border border-gray-200 px-4 py-3 cursor-pointer hover:border-colbeef-green/40 transition-colors has-[:checked]:border-colbeef-green has-[:checked]:bg-colbeef-green-pale/50"
                      >
                        <input
                          type="checkbox"
                          checked={form.productos.includes(product)}
                          onChange={() => toggleProduct(product)}
                          className="w-4 h-4 accent-colbeef-green"
                        />
                        <span className="text-sm text-colbeef-dark">{product}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={privacyAccepted}
                    onChange={(e) => setPrivacyAccepted(e.target.checked)}
                    className="w-4 h-4 mt-0.5 accent-colbeef-green shrink-0"
                  />
                  <span className="text-sm text-colbeef-gray leading-relaxed">
                    Autorizo el tratamiento de mis datos personales conforme a la{' '}
                    <a href="/corporativo/gobierno-corporativo" className="text-colbeef-green font-semibold underline">
                      Política de Tratamiento de Datos de COLBEEF
                    </a>
                    .
                  </span>
                </label>

                {status === 'error' && errorMessage && (
                  <p className="text-colbeef-red text-sm text-center" role="alert">
                    {errorMessage}
                  </p>
                )}

                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                  whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
                  className="w-full bg-colbeef-green text-white py-3.5 text-sm font-semibold tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-colbeef-green-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed rounded-lg shadow-lg shadow-colbeef-green/15"
                >
                  {status === 'loading' ? 'Enviando...' : 'Enviar solicitud'}
                  <Send className="w-4 h-4" />
                </motion.button>
              </form>
            )}
          </div>
        </FadeIn>
      </div>
    </AnimatedSection>
  )
}
