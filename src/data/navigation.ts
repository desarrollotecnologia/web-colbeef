export const navLinks = [
  { label: 'INICIO', href: '/' },
  { label: 'PRODUCTOS', href: '/productos' },
  { label: 'SERVICIOS', href: '/servicios' },
  { label: 'SOSTENIBILIDAD', href: '/sostenibilidad' },
  { label: 'CORPORATIVO', href: '/corporativo' },
  { label: 'CONTACTO', href: '/contacto' },
] as const

export const navDropdowns: Record<string, { label: string; href: string }[]> = {
  '/productos': [
    { label: 'Cortes', href: '/productos/cortes' },
    { label: 'Subproductos', href: '/productos/subproductos' },
  ],
  '/servicios': [
    { label: 'Pesaje de ganado', href: '/servicios/pesaje-de-ganado' },
    { label: 'Beneficio', href: '/servicios/beneficio' },
    { label: 'Desposte', href: '/servicios/desposte' },
    { label: 'Porcionado', href: '/servicios/porcionado' },
  ],
  '/sostenibilidad': [
    { label: 'Energía solar', href: '/sostenibilidad/energia-solar' },
    { label: 'PTAR', href: '/sostenibilidad/ptar' },
    { label: 'Comunidad', href: '/sostenibilidad/comunidad' },
  ],
  '/corporativo': [
    { label: 'Nosotros', href: '/corporativo/nosotros' },
    { label: 'Filosofía', href: '/corporativo/filosofia' },
    { label: 'Historia', href: '/corporativo/historia' },
    { label: 'Certificaciones', href: '/corporativo/certificaciones' },
    { label: 'Gobierno corporativo', href: '/corporativo/gobierno-corporativo' },
  ],
}

export const footerCorporativo = navDropdowns['/corporativo']
export const footerProductos = navDropdowns['/productos']
export const footerServiciosNav = navDropdowns['/servicios']
export const footerSostenibilidad = navDropdowns['/sostenibilidad']

export function isNavActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(`${href}/`)
}
