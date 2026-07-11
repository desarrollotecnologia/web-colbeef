import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { mainServices } from '../../data/services'
import { AnimatedSection, FadeIn } from '../ui/AnimatedSection'

export function MainServicesSection() {
  return (
    <AnimatedSection className="py-12 sm:py-16 md:py-20 bg-colbeef-green-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <FadeIn className="mb-6 sm:mb-8">
          <h2 className="text-white text-lg sm:text-2xl md:text-3xl font-bold tracking-wide uppercase">
            Nuestros servicios
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {mainServices.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col"
            >
              <div className="relative flex-1 min-h-[240px] sm:min-h-[280px] md:min-h-[320px] rounded-t-xl overflow-hidden group">
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute bottom-0 left-0 right-0 mx-2.5 sm:mx-3 mb-2.5 sm:mb-3 bg-white rounded-lg p-3 sm:p-4 shadow-lg">
                  <h3 className="text-colbeef-green font-bold text-xs sm:text-sm tracking-wider mb-1.5 sm:mb-2">
                    {service.title}
                  </h3>
                  <p className="text-colbeef-gray text-[11px] sm:text-xs leading-relaxed line-clamp-3 sm:line-clamp-4">
                    {service.description}
                  </p>
                </div>
              </div>

              <Link
                to={service.href}
                className="mt-3 bg-colbeef-green text-white text-[11px] sm:text-xs font-semibold tracking-widest uppercase py-2.5 sm:py-3 text-center hover:bg-colbeef-green-light transition-colors flex items-center justify-center gap-2"
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
