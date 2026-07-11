import { Link } from 'react-router-dom'
import { footerAssets } from '../../data/assets'
import { contactInfo, socialLinks } from '../../data/site'
import { FadeIn } from '../ui/AnimatedSection'

const legalLinks = [
  {
    label: 'Línea ética y canal de denuncias',
    href: '/corporativo/gobierno-corporativo',
  },
  {
    label: 'Aviso de privacidad',
    href: '/corporativo/gobierno-corporativo',
  },
  {
    label: 'Declaratoria cero tolerancia a la corrupción',
    href: '/corporativo/gobierno-corporativo',
  },
  {
    label: 'Políticas de tratamiento de información personal',
    href: '/corporativo/gobierno-corporativo',
  },
] as const

export function Footer() {
  return (
    <footer className="relative bg-colbeef-green-darker text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-6 lg:gap-12 items-center">
          {/* Contacto — en móvil debajo de la marca */}
          <FadeIn className="order-2 md:order-1 text-center md:text-left">
            <h4 className="text-white text-[11px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.25em] uppercase mb-4 sm:mb-5">
              Contacto
            </h4>
            <div className="space-y-2.5 sm:space-y-3 text-white text-xs sm:text-sm leading-relaxed break-words">
              <p className="max-w-xs mx-auto md:mx-0 md:max-w-none">
                {contactInfo.address}
              </p>
              <p>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                  className="text-white hover:text-white/80 transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </p>
              <a
                href={`mailto:${contactInfo.email}`}
                className="block text-white hover:text-white/80 transition-colors break-all"
              >
                {contactInfo.email}
              </a>
              <p>{contactInfo.hours}</p>
            </div>
            <div className="flex gap-2.5 sm:gap-3 mt-4 sm:mt-5 justify-center md:justify-start">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-8 sm:h-8 flex items-center justify-center hover:scale-105 transition-transform brightness-0 invert"
                  aria-label={s.label}
                >
                  <img src={s.icon} alt="" className="w-8 h-8 object-contain" />
                </a>
              ))}
            </div>
          </FadeIn>

          {/* Asesora + logo — primero en móvil */}
          <FadeIn
            delay={0.1}
            className="order-1 md:order-2 flex flex-col items-center justify-center gap-3 sm:gap-4"
          >
            <div className="w-28 h-28 sm:w-40 sm:h-40 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-full overflow-hidden border-2 border-white/20 shadow-lg bg-black shrink-0">
              <img
                src={footerAssets.asesora}
                alt="Atención Colbeef"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <Link to="/" className="inline-block" aria-label="Colbeef inicio">
              <img
                src={footerAssets.logoWhite}
                alt="Colbeef"
                className="h-8 sm:h-10 md:h-11 lg:h-12 w-auto max-w-[180px] sm:max-w-none object-contain"
              />
            </Link>
          </FadeIn>

          {/* Enlaces legales */}
          <FadeIn delay={0.2} className="order-3">
            <ul className="space-y-2.5 sm:space-y-3 text-center md:text-right">
              {legalLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="inline-flex items-start gap-2 text-white text-[10px] sm:text-xs font-semibold tracking-wide uppercase leading-snug hover:text-white/80 transition-colors max-w-[18rem] sm:max-w-md md:max-w-none mx-auto md:ml-auto md:mr-0 md:justify-end"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white shrink-0 md:order-2" />
                    <span className="md:order-1 text-balance">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </footer>
  )
}
