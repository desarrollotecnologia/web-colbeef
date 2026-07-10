import type { PageHeroContent } from '../types/pageHero'

export const serviciosHero: PageHeroContent = {
  badge: 'SERVICIOS',
  headline: 'Soluciones integrales para la industria cárnica.',
  features: 'Pesaje • Beneficio • Desposte • Porcionado',
}

export const productosHero: PageHeroContent = {
  badge: 'PRODUCTOS',
  headline: 'Soluciones cárnicas para cada necesidad.',
  features: 'Cortes premium • Subproductos • Calidad certificada • Trazabilidad',
}

export const cortesHero: PageHeroContent = {
  badge: 'CORTES',
  headline: 'Cortes de alta calidad para el mercado.',
  features: 'Selección premium • Procesos certificados • Inocuidad garantizada',
}

export const subproductosHero: PageHeroContent = {
  badge: 'SUBPRODUCTOS',
  headline: 'Valor agregado en cada subproducto.',
  features: 'Canales • Vísceras • Subproductos • Estándares de exportación',
}

export const historiaHero: PageHeroContent = {
  badge: 'HISTORIA',
  headline: 'Más de una década impulsando el sector cárnico.',
  features: 'Trayectoria • Crecimiento • Certificaciones • Desarrollo regional',
}

export const filosofiaHero: PageHeroContent = {
  badge: 'FILOSOFÍA',
  headline: 'Nuestros valores guían cada decisión.',
  features: 'Integridad • Excelencia • Responsabilidad • Trabajo en equipo',
}

export const certificacionesHero: PageHeroContent = {
  badge: 'CERTIFICACIONES',
  headline: 'Respaldados por los más altos estándares.',
  features: 'INVIMA • HACCP • Trazabilidad • Cumplimiento normativo',
}

export const gobiernoHero: PageHeroContent = {
  badge: 'GOBIERNO CORPORATIVO',
  headline: 'Transparencia y ética en nuestra gestión.',
  features: 'Integridad • Buen gobierno • Línea ética • Cumplimiento legal',
}

export const sostenibilidadHero: PageHeroContent = {
  badge: 'SOSTENIBILIDAD',
  headline: 'Sostenibilidad que se demuestra con acciones',
  features:
    'En COLBEEF operamos con responsabilidad, tecnología e innovación para fortalecer una industria cárnica más eficiente y consciente con el medio ambiente',
}

export const contactoHero: PageHeroContent = {
  badge: 'CONTACTO',
  headline: 'Estamos listos para atenderle.',
  features: 'Asesoría comercial • Información • Soporte • Atención personalizada',
}

export function getSostenibilidadPillarHero(label: string, description: string): PageHeroContent {
  return {
    badge: label.toUpperCase(),
    headline: label,
    features: description,
  }
}

export function heroFromTitle(title: string, headline: string, features: string): PageHeroContent {
  return {
    badge: title.toUpperCase(),
    headline,
    features,
  }
}

export const corporativoHeroByLabel: Record<string, PageHeroContent> = {
  Historia: historiaHero,
  Filosofía: filosofiaHero,
  Certificaciones: certificacionesHero,
  'Gobierno corporativo': gobiernoHero,
  Sostenibilidad: sostenibilidadHero,
}
