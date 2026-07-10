import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navDropdowns, navLinks, isNavActive, dropdownOnlyNavHrefs } from '../../data/navigation'
import { socialLinks } from '../../data/site'
import { Logo } from '../ui/Logo'
import { HeaderSearch } from './HeaderSearch'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [mobileOpenMenu, setMobileOpenMenu] = useState<string | null>(null)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileOpen(false)
    setMobileOpenMenu(null)
    setOpenDropdown(null)
  }, [location.pathname])

  useEffect(() => {
    if (!isMobileOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isMobileOpen])

  const showSolid = isScrolled || !isHome

  return (
    <motion.header
      id="site-header"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showSolid ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between gap-2 sm:gap-4">
        <div className="shrink-0 min-w-0">
          <Logo size="sm" />
        </div>

        <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
          {navLinks.map((link) => {
            const isActive = isNavActive(location.pathname, link.href)
            const children = navDropdowns[link.href]

            if (children) {
              const isDropdownOnly = dropdownOnlyNavHrefs.has(link.href)
              const triggerClassName = `flex items-center gap-1 text-[10px] xl:text-xs font-semibold tracking-[0.12em] uppercase transition-colors relative pb-1 ${
                isActive ? 'text-colbeef-green' : 'text-colbeef-green/80 hover:text-colbeef-green'
              }`

              return (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.href)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {isDropdownOnly ? (
                    <button
                      type="button"
                      aria-expanded={openDropdown === link.href}
                      aria-haspopup="true"
                      onClick={() =>
                        setOpenDropdown(openDropdown === link.href ? null : link.href)
                      }
                      className={triggerClassName}
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-3 h-3 opacity-60 transition-transform duration-200 ${
                          openDropdown === link.href ? 'rotate-180' : ''
                        }`}
                      />
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-colbeef-red"
                        />
                      )}
                    </button>
                  ) : (
                    <Link to={link.href} className={triggerClassName}>
                      {link.label}
                      <ChevronDown
                        className={`w-3 h-3 opacity-60 transition-transform duration-200 ${
                          openDropdown === link.href ? 'rotate-180' : ''
                        }`}
                      />
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-colbeef-red"
                        />
                      )}
                    </Link>
                  )}

                  <AnimatePresence>
                    {openDropdown === link.href && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-3 min-w-[220px]"
                      >
                        <div className="bg-white rounded-lg shadow-xl border border-colbeef-green/10 py-2 overflow-hidden">
                          {children.map((child) => (
                            <Link
                              key={child.href}
                              to={child.href}
                              className={`block px-5 py-3 text-xs font-semibold tracking-wider uppercase transition-colors ${
                                location.pathname === child.href
                                  ? 'bg-colbeef-green text-white'
                                  : 'text-colbeef-green hover:bg-colbeef-green-pale'
                              }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            }

            return (
              <Link
                key={link.href}
                to={link.href}
                className={`text-[10px] xl:text-xs font-semibold tracking-[0.12em] uppercase transition-colors relative pb-1 ${
                  isActive ? 'text-colbeef-green' : 'text-colbeef-green/80 hover:text-colbeef-green'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-colbeef-red"
                  />
                )}
              </Link>
            )
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <HeaderSearch />
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center hover:scale-105 transition-transform"
              aria-label={social.label}
            >
              <img src={social.icon} alt={social.label} className="w-9 h-9 object-contain" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-1 shrink-0 lg:hidden">
          <HeaderSearch onNavigate={() => setIsMobileOpen(false)} />
          <button
            type="button"
            className="text-colbeef-green p-2 shrink-0"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Menú"
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 max-h-[calc(100dvh-var(--header-height))] overflow-y-auto overscroll-contain"
          >
            <nav className="flex flex-col px-4 py-4">
              {navLinks.map((link) => {
                const children = navDropdowns[link.href]

                if (children) {
                  const isDropdownOnly = dropdownOnlyNavHrefs.has(link.href)
                  const isOpen = mobileOpenMenu === link.href
                  return (
                    <div key={link.href} className="border-b border-gray-50">
                      <button
                        type="button"
                        onClick={() => setMobileOpenMenu(isOpen ? null : link.href)}
                        className="w-full flex items-center justify-between py-3 text-sm font-semibold tracking-widest text-colbeef-green uppercase"
                        aria-expanded={isOpen}
                      >
                        {link.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                      {isOpen && (
                        <div className="pb-3 pl-4 space-y-1">
                          {children.map((child) => (
                            <Link
                              key={child.href}
                              to={child.href}
                              onClick={() => isDropdownOnly && setIsMobileOpen(false)}
                              className="block py-2 text-xs font-semibold text-colbeef-green uppercase tracking-wider"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                }

                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="py-3 text-sm font-semibold tracking-widest text-colbeef-green uppercase border-b border-gray-50"
                  >
                    {link.label}
                  </Link>
                )
              })}

              <div className="flex items-center gap-3 pt-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center"
                    aria-label={social.label}
                  >
                    <img src={social.icon} alt={social.label} className="w-9 h-9 object-contain" />
                  </a>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
