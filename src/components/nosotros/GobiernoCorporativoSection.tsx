import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { gobiernoCorporativo } from '../../data/nosotros'
import { corporativo } from '../../data/assets'
import { AnimatedSection, FadeIn } from '../ui/AnimatedSection'
import { PillTitle } from '../ui/DesignAssets'

export function GobiernoCorporativoSection() {
  const [form, setForm] = useState({
    nombre: '',
    relacion: 'Empleado',
    personas: '',
    descripcion: '',
    fecha: '',
    anonimo: 'no',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Denuncia registrada — conectar con backend de línea ética.')
  }

  const canales = [
    { label: 'linea.etica@colbeef.com', href: 'mailto:linea.etica@colbeef.com' },
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
                  Este canal protege tu identidad y prohíbe cualquier tipo de represalia contra quien
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

            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-200 space-y-4"
            >
              <div className="bg-colbeef-green text-white rounded-xl px-5 py-4 flex flex-wrap items-center justify-between gap-3 text-sm">
                <span>¿Deseas que tu denuncia sea anónima?</span>
                <div className="flex gap-4">
                  {['si', 'no'].map((opt) => (
                    <label key={opt} className="flex items-center gap-2 cursor-pointer uppercase text-xs font-bold">
                      <input
                        type="radio"
                        name="anonimo"
                        value={opt}
                        checked={form.anonimo === opt}
                        onChange={(e) => setForm({ ...form, anonimo: e.target.value })}
                        className="accent-white"
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>

              <input
                type="text"
                placeholder="Nombre completo (opcional)"
                value={form.nombre}
                onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm bg-white focus:border-colbeef-green focus:outline-none"
              />
              <select
                value={form.relacion}
                onChange={(e) => setForm({ ...form, relacion: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm bg-white focus:border-colbeef-green focus:outline-none"
              >
                <option>Empleado</option>
                <option>Proveedor</option>
                <option>Cliente</option>
                <option>Otro</option>
              </select>
              <input
                type="text"
                placeholder="Nombre y cargo de la(s) persona(s) involucradas"
                value={form.personas}
                onChange={(e) => setForm({ ...form, personas: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm bg-white focus:border-colbeef-green focus:outline-none"
              />
              <textarea
                required
                rows={4}
                placeholder="Descripción del hecho (obligatorio)"
                value={form.descripcion}
                onChange={(e) => setForm({ ...form, descripcion: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm bg-white focus:border-colbeef-green focus:outline-none resize-none"
              />
              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                className="w-full text-sm text-colbeef-gray"
              />
              <input
                type="date"
                value={form.fecha}
                onChange={(e) => setForm({ ...form, fecha: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm bg-white focus:border-colbeef-green focus:outline-none"
              />

              <p className="text-colbeef-green text-xs text-center">
                Gracias por tu reporte. Será gestionado con total confidencialidad por el Oficial de
                Cumplimiento.
              </p>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mx-auto flex items-center gap-2 bg-colbeef-green text-white px-8 py-3 rounded-lg text-sm font-semibold tracking-widest uppercase"
              >
                Enviar <ArrowRight className="w-4 h-4" />
              </motion.button>
            </form>
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
              En caso de preferir otros medios, también puedes comunicarte a:
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
