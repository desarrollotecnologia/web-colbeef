import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { familiaColbeef, filosofiaTabs, valoresCorporativos } from '../../data/nosotros'
import { corporativo, brand } from '../../data/assets'
import { AnimatedSection, FadeIn } from '../ui/AnimatedSection'

export function FilosofiaSection() {
  const [openId, setOpenId] = useState<string>('mision')
  const [activeSidebar, setActiveSidebar] = useState<string>('mision')

  const scrollToAccordion = (id: string) => {
    setActiveSidebar(id)
    setOpenId(id)
    const el = document.getElementById(`filosofia-${id}`)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 120
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <AnimatedSection className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-12 gap-10">
          <FadeIn className="lg:col-span-3 hidden lg:block">
            <div className="bg-gray-100 rounded-2xl p-6 sticky top-28">
              <h3 className="text-colbeef-green font-bold text-sm tracking-widest uppercase mb-6">
                Filosofía
              </h3>
              <nav className="space-y-3">
                {filosofiaTabs.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => scrollToAccordion(tab.id)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold tracking-wider uppercase transition-all ${
                      activeSidebar === tab.id
                        ? 'bg-colbeef-green text-white'
                        : 'bg-colbeef-green-darker text-white/80 hover:bg-colbeef-green'
                    }`}
                  >
                    {tab.label}
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ))}
              </nav>
            </div>
          </FadeIn>

          <div className="lg:col-span-9 space-y-4">
            {filosofiaTabs.map((tab, i) => (
              <div key={tab.id} id={`filosofia-${tab.id}`}>
                <FadeIn delay={i * 0.08}>
                <div className="border border-colbeef-green/10 rounded-2xl overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenId(openId === tab.id ? '' : tab.id)}
                    className="w-full flex items-center justify-between bg-colbeef-green text-white px-6 py-4 text-left"
                  >
                    <span className="font-bold text-sm md:text-base break-words pr-2">{tab.title}</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${openId === tab.id ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {openId === tab.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 py-5 text-colbeef-gray text-sm md:text-base leading-relaxed bg-white">
                          {tab.content}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <div
            className="relative rounded-2xl overflow-hidden p-6 md:p-10 mb-8"
            style={{
              backgroundImage: `url(${corporativo.filosofia.fondoValores})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {valoresCorporativos.map((valor, i) => (
                <FadeIn key={valor.name} delay={i * 0.05}>
                  <div className="bg-colbeef-green/85 backdrop-blur-sm border border-white/30 rounded-xl p-5 text-white h-full">
                    <h4 className="font-bold text-xs tracking-wider uppercase mb-2">{valor.name}</h4>
                    <p className="text-white/80 text-xs leading-relaxed">{valor.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 rounded-2xl overflow-hidden shadow-lg">
            <div className="bg-colbeef-green-darker p-8 md:p-12 flex flex-col justify-center">
              <img
                src={brand.logo}
                alt="Colbeef"
                className="h-12 md:h-14 w-auto object-contain mb-4"
              />
              <p className="text-white font-bold text-sm md:text-base tracking-wide uppercase leading-relaxed">
                Trabajamos unidos para generar{' '}
                <span className="text-colbeef-green-light">confianza, calidad y progreso.</span>
              </p>
            </div>
            <div className="bg-colbeef-green p-8 md:p-12 space-y-4">
              <p className="text-white/90 text-sm leading-relaxed">{familiaColbeef.intro}</p>
              {familiaColbeef.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="text-white/80 text-sm leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
