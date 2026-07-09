import { Link } from 'react-router-dom'
import {
  contactInfo,
  footerNosotros,
  footerProducts,
  footerServices,
  socialLinks,
} from '../../data/site'
import { FadeIn } from '../ui/AnimatedSection'
import { Logo } from '../ui/Logo'

export function Footer() {
  return (
    <footer className="relative bg-colbeef-green-darker text-white">
      <div className="h-6 bg-white torn-edge-top" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <FadeIn>
            <h4 className="text-colbeef-green-light text-xs font-bold tracking-[0.25em] uppercase mb-5">
              Contacto
            </h4>
            <div className="space-y-3 text-white/75 text-sm leading-relaxed">
              <p>{contactInfo.address}</p>
              <p>{contactInfo.phone}</p>
              <a href={`mailto:${contactInfo.email}`} className="block hover:text-white transition-colors">
                {contactInfo.email}
              </a>
              <p>{contactInfo.hours}</p>
            </div>
            <div className="flex gap-2 mt-5">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center hover:scale-105 transition-transform"
                  aria-label={s.label}
                >
                  <img src={s.icon} alt={s.label} className="w-8 h-8 object-contain" />
                </a>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h4 className="text-colbeef-green-light text-xs font-bold tracking-[0.25em] uppercase mb-5">
              Productos
            </h4>
            <ul className="space-y-2">
              {footerProducts.map((item) => (
                <li key={item}>
                  <Link to="/productos" className="text-white/65 text-sm hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h4 className="text-colbeef-green-light text-xs font-bold tracking-[0.25em] uppercase mb-5">
              Corporativo
            </h4>
            <ul className="space-y-2">
              {footerNosotros.map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="text-white/65 text-sm hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.3}>
            <h4 className="text-colbeef-green-light text-xs font-bold tracking-[0.25em] uppercase mb-5">
              Servicios
            </h4>
            <ul className="space-y-2">
              {footerServices.map((item) => (
                <li key={item}>
                  <Link to="/servicios" className="text-white/65 text-sm hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>

        <div className="mt-14 flex justify-center">
          <Logo variant="white" size="lg" />
        </div>
      </div>

      <div className="h-8 bg-white torn-edge-bottom" />
    </footer>
  )
}
