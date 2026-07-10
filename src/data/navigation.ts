export const navLinks = [
  { label: 'INICIO', href: '/' },
  { label: 'PRODUCTOS', href: '/productos' },
  { label: 'SERVICIOS', href: '/servicios', dropdownOnly: true },
  { label: 'SOSTENIBILIDAD', href: '/sostenibilidad' },
  { label: 'CORPORATIVO', href: '/corporativo', dropdownOnly: true },
  { label: 'CONTACTO', href: '/contacto' },
] as const

export type NavLink = (typeof navLinks)[number]

export const dropdownOnlyNavHrefs = new Set<string>(
  navLinks.filter((link) => 'dropdownOnly' in link && link.dropdownOnly).map((link) => link.href),
)

export const defaultServiceHref = '/servicios/pesaje-de-ganado'
export const defaultCorporativoHref = '/corporativo/filosofia'

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
  '/corporativo': [
    { label: 'Filosofía', href: '/corporativo/filosofia' },
    { label: 'Historia', href: '/corporativo/historia' },
    { label: 'Certificaciones', href: '/corporativo/certificaciones' },
    { label: 'Gobierno corporativo', href: '/corporativo/gobierno-corporativo' },
  ],
  '/contacto': [
    { label: 'PQR', href: '/contacto/pqr' },
    { label: 'Trabaje con nosotros', href: '/contacto/trabaje-con-nosotros' },
  ],
}

export const footerCorporativo = navDropdowns['/corporativo']
export const footerProductos = navDropdowns['/productos']
export const footerServiciosNav = navDropdowns['/servicios']
export const footerSostenibilidad = [{ label: 'Sostenibilidad', href: '/sostenibilidad' }]
export const footerContacto = [
  { label: 'Contáctenos', href: '/contacto' },
  ...navDropdowns['/contacto'],
]

export function isNavActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/'
  if (dropdownOnlyNavHrefs.has(href)) {
    return pathname.startsWith(`${href}/`)
  }
  return pathname === href || pathname.startsWith(`${href}/`)
}
