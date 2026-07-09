import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { complementaryServices } from '../../data/services'
import { AnimatedSection, FadeIn } from '../ui/AnimatedSection'
import { BrandIcon } from '../ui/BrandIcon'
import { Button } from '../ui/Button'
import { ArrowRight, Play } from 'lucide-react'

export function ComplementaryServicesSection() {
  const [active, setActive] = useState(0)
  const service = complementaryServices[active]

  return (
    <AnimatedSection className="py-16 md:py-24 bg-colbeef-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <FadeIn className="text-center mb-12">
          <p className="text-colbeef-green text-[10px] sm:text-xs font-semibold tracking-[0.15em] sm:tracking-[0.25em] uppercase mb-3">
            FLORIDABLANCA / SANTANDER / COLOMBIA
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-colbeef-green uppercase tracking-wide">
            Explore otros servicios complementarios
          </h2>
          <div className="flex justify-center mt-4">
            <BrandIcon variant="badge" className="w-8 h-8" />
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-5 mb-8">
          {complementaryServices.map((item, i) => (
            <motion.button
              key={item.id}
              type="button"
              onClick={() => setActive(i)}
              className={`relative rounded-xl overflow-hidden text-left group h-[280px] sm:h-[320px] md:h-[380px] ${
                active === i ? 'ring-4 ring-colbeef-green' : ''
              } ${i !== active ? 'hidden md:block' : ''}`}
              whileHover={{ y: -4 }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40" />

              <div className="absolute top-4 left-4 right-4">
                <h3 className="text-white font-bold text-sm tracking-wider mb-2">
                  {item.title}
                </h3>
                <div className="flex flex-wrap gap-1">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-colbeef-green/90 text-white text-[10px] font-semibold tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-colbeef-green/90 flex items-center justify-center text-white">
                  <Play className="w-6 h-6 ml-1" fill="currentColor" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 flex">
                <div className="flex-1 bg-white m-3 mr-0 p-4 rounded-l-lg">
                  <p className="text-colbeef-gray text-xs leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>
                <div className="w-10 bg-colbeef-green m-3 ml-0 rounded-r-lg flex items-center justify-center text-white">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        <div className="flex justify-center gap-2 mb-6">
          {complementaryServices.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              className={`h-1 transition-all ${
                i === active ? 'w-8 bg-colbeef-green' : 'w-4 bg-colbeef-green/30'
              }`}
              aria-label={`Servicio ${i + 1}`}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-center"
          >
            <Button variant="primary" showArrow>
              Reproducir
            </Button>
          </motion.div>
        </AnimatePresence>
      </div>
    </AnimatedSection>
  )
}
