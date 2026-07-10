import { defaultServiceHref } from './navigation'
import { productCategories, beefCuts, desposteSections } from './products'
import { servicePages, complementaryServices, serviciosPageContent } from './services'
import { navLinks, footerProducts, footerServices, aboutParagraphs, certificationText } from './site'
import {
  nosotrosDropdown,
  somosContent,
  filosofiaTabs,
  sostenibilidadContent,
  certificacionesContent,
  gobiernoCorporativo,
  valoresCorporativos,
} from './nosotros'

export interface SearchEntry {
  id: string
  title: string
  excerpt: string
  href: string
  terms: string
}

function entry(
  id: string,
  title: string,
  excerpt: string,
  href: string,
  extraTerms = '',
): SearchEntry {
  return {
    id,
    title,
    excerpt,
    href,
    terms: `${title} ${excerpt} ${extraTerms}`.toLowerCase(),
  }
}

export const searchIndex: SearchEntry[] = [
  ...navLinks.map((link) =>
    entry(
      link.href,
      link.label,
      `Página ${link.label} de Colbeef`,
      link.href === '/servicios' ? defaultServiceHref : link.href,
    ),
  ),
  entry('home-about', 'Quiénes somos', aboutParagraphs.join(' '), '/'),
  entry('home-cert', 'Certificaciones', certificationText, '/'),
  ...Object.entries(servicePages).map(([slug, s]) =>
    entry(`service-page-${slug}`, s.shortTitle, s.description, `/servicios/${slug}`, s.title),
  ),
  ...complementaryServices.map((s) =>
    entry(`comp-${s.id}`, s.shortTitle, s.description, s.href, s.tags.join(' ')),
  ),
  ...serviciosPageContent.map((s, i) =>
    entry(`serv-content-${i}`, s.title, s.description, defaultServiceHref),
  ),
  ...productCategories.map((p) =>
    entry(`product-${p.id}`, p.title, p.description, `/productos/${p.id === 'canales' ? 'subproductos' : p.id}`),
  ),
  ...desposteSections.map((title, i) =>
    entry(`desposte-${i}`, title, 'Cortes y desposte bovino Colbeef', '/productos/cortes', title),
  ),
  ...beefCuts.delanteros.map((cut) =>
    entry(`cut-del-${cut}`, cut, 'Corte delantero bovino', '/productos/cortes', 'desposte cortes'),
  ),
  ...beefCuts.traseros.map((cut) =>
    entry(`cut-tra-${cut}`, cut, 'Corte trasero bovino', '/productos/cortes', 'desposte cortes'),
  ),
  ...footerProducts.map((p) => entry(`fp-${p}`, p, 'Productos Colbeef', '/productos')),
  ...footerServices.map((s) => entry(`fs-${s}`, s, 'Servicios Colbeef', defaultServiceHref)),
  entry('nosotros', 'Nosotros', somosContent.boldParagraphs.join(' '), '/corporativo/nosotros', 'somos historia'),
  ...somosContent.paragraphs.map((p, i) =>
    entry(`somos-${i}`, 'Somos Colbeef', p, '/corporativo/nosotros'),
  ),
  ...nosotrosDropdown.map((item) =>
    entry(item.href, item.label, `Sección ${item.label} — Corporativo`, item.href),
  ),
  ...filosofiaTabs.map((tab) =>
    entry(`fil-${tab.id}`, tab.title, tab.content, '/corporativo/filosofia', 'filosofía misión visión valores'),
  ),
  ...valoresCorporativos.map((v) =>
    entry(`valor-${v.name}`, v.name, v.description, '/corporativo/filosofia', 'valores corporativos'),
  ),
  entry(
    'sost-intro',
    'Sostenibilidad',
    sostenibilidadContent.intro,
    '/sostenibilidad',
    sostenibilidadContent.management,
  ),
  ...sostenibilidadContent.pillars.map((p) =>
    entry(`sost-${p.id}`, p.title, p.description, '/sostenibilidad', 'sostenibilidad ambiental'),
  ),
  entry(
    'cert-invima',
    certificacionesContent.invima.title,
    certificacionesContent.invima.paragraphs.join(' '),
    '/corporativo/certificaciones',
    'invima haccp certificaciones',
  ),
  entry(
    'cert-pol',
    'Políticas de calidad',
    certificacionesContent.politicaCalidad,
    '/corporativo/certificaciones',
  ),
  entry(
    'cert-amb',
    'Política ambiental',
    certificacionesContent.politicaAmbiental,
    '/corporativo/certificaciones',
  ),
  entry(
    'gob-intro',
    'Gobierno corporativo',
    gobiernoCorporativo.intro,
    '/corporativo/gobierno-corporativo',
    'línea ética denuncias',
  ),
  entry(
    'gob-etica',
    gobiernoCorporativo.queEs,
    gobiernoCorporativo.lineaEtica,
    '/corporativo/gobierno-corporativo',
    gobiernoCorporativo.reportes.join(' '),
  ),
  entry('contacto', 'Contacto', 'Información de contacto Colbeef Floridablanca', '/contacto', 'teléfono email'),
]

function normalize(text: string) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}

export function searchSite(query: string, limit = 8): SearchEntry[] {
  const q = normalize(query.trim())
  if (!q) return []

  const words = q.split(/\s+/).filter(Boolean)

  const scored = searchIndex
    .map((item) => {
      const haystack = normalize(item.terms)
      let score = 0
      for (const word of words) {
        if (haystack.includes(word)) score += word.length
        if (normalize(item.title).includes(word)) score += 10
      }
      return { item, score }
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)

  const seen = new Set<string>()
  const results: SearchEntry[] = []
  for (const { item } of scored) {
    if (seen.has(item.href)) continue
    seen.add(item.href)
    results.push(item)
    if (results.length >= limit) break
  }

  return results
}
