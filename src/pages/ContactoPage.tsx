import { useState } from 'react'
import { motion } from 'framer-motion'
import { images } from '../data/assets'
import { contactInfo } from '../data/site'
import { AnimatedSection, FadeIn } from '../components/ui/AnimatedSection'
import { ArrowRight } from 'lucide-react'

export function ContactoPage() {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    empresa: '',
    telefono: '',
    mensaje: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Formulario listo — conectar con backend o servicio de email.')
  }

  return (
    <>
      <section className="relative min-h-[60vh] sm:min-h-[70vh] pt-header flex items-center justify-center sm:justify-end overflow-hidden">
        <img
          src={images.panoramica}
          alt="Contacto"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <FadeIn className="relative z-10 w-full max-w-lg mx-auto sm:mx-4 md:mx-12 my-8 sm:my-12 px-4 sm:px-0">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl p-5 sm:p-8 shadow-2xl"
          >
            <h2 className="text-colbeef-green text-xl sm:text-2xl font-bold mb-2">Get in touch</h2>
            <p className="text-colbeef-gray text-xs mb-6 leading-relaxed">
              Complete el formulario y nuestro equipo se pondrá en contacto con usted lo antes posible.
            </p>

            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={form.nombre}
                  onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 text-sm focus:border-colbeef-green focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 text-sm focus:border-colbeef-green focus:outline-none"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Company Name"
                  value={form.empresa}
                  onChange={(e) => setForm({ ...form, empresa: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 text-sm focus:border-colbeef-green focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={form.telefono}
                  onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 text-sm focus:border-colbeef-green focus:outline-none"
                />
              </div>
              <textarea
                placeholder="Cuéntenos sobre su negocio o consulta..."
                required
                rows={4}
                value={form.mensaje}
                onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 text-sm focus:border-colbeef-green focus:outline-none resize-none"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-colbeef-green text-white py-3 text-sm font-semibold tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-colbeef-green-dark transition-colors"
              >
                Submit Request <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </form>
        </FadeIn>
      </section>

      <AnimatedSection className="py-12 bg-colbeef-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-8 text-sm text-colbeef-gray">
          <div>
            <h3 className="text-colbeef-green font-bold uppercase tracking-wider mb-3">Contacto</h3>
            <p>{contactInfo.address}</p>
            <p>{contactInfo.phone}</p>
            <p>{contactInfo.email}</p>
            <p>{contactInfo.hours}</p>
          </div>
          <div className="h-48 bg-white border border-gray-200 rounded-xl flex items-center justify-center text-center px-4">
            <p className="text-colbeef-gray text-sm italic">
              Mapa de ubicación — reemplazar con Google Maps embed
            </p>
          </div>
        </div>
      </AnimatedSection>
    </>
  )
}
