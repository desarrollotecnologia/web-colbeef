import { motion } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { mainServices, servicesIntroParagraphs } from '../../data/services'
import { AnimatedSection, FadeIn } from '../ui/AnimatedSection'

export function MainServicesSection() {
  return (
    <AnimatedSection className="py-16 md:py-20 bg-colbeef-green-darker">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <FadeIn className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-8">
          <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
            <button
              type="button"
              className="w-9 h-9 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white/10"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              className="w-9 h-9 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white/10"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold tracking-wide uppercase">
              Nuestros servicios
            </h2>
          </div>
          <div className="text-white/65 text-sm max-w-xl leading-relaxed space-y-4">
            {servicesIntroParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {mainServices.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col"
            >
              <div className="relative flex-1 min-h-[260px] sm:min-h-[300px] md:min-h-[320px] rounded-t-xl overflow-hidden group">
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute bottom-0 left-0 right-0 mx-3 mb-3 bg-white rounded-lg p-4 shadow-lg">
                  <h3 className="text-colbeef-green font-bold text-sm tracking-wider mb-2">
                    {service.title}
                  </h3>
                  <p className="text-colbeef-gray text-xs leading-relaxed line-clamp-4">
                    {service.description}
                  </p>
                </div>
              </div>

              <Link
                to={service.href}
                className="mt-3 bg-colbeef-green text-white text-xs font-semibold tracking-widest uppercase py-3 text-center hover:bg-colbeef-green-light transition-colors flex items-center justify-center gap-2"
              >
                VER MÁS <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
