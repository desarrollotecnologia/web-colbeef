import type { LucideIcon } from 'lucide-react'
import {
  Award,
  BarChart3,
  ClipboardCheck,
  Eye,
  Handshake,
  Scale,
} from 'lucide-react'

export interface NegocioBeneficio {
  id: string
  label: string
  icon: LucideIcon
}

export const beneficiosNegocioContent = {
  title: 'Beneficios para el negocio',
  items: [
    {
      id: 'rendimiento',
      label: 'Mejor rendimiento de la canal',
      icon: BarChart3,
    },
    {
      id: 'calidad',
      label: 'Calidad superior',
      icon: Award,
    },
    {
      id: 'normativo',
      label: 'Cumplimiento normativo',
      icon: Scale,
    },
    {
      id: 'confianza',
      label: 'Confianza para productores y clientes',
      icon: Handshake,
    },
    {
      id: 'transparencia',
      label: 'Transparencia en la comercialización',
      icon: Eye,
    },
    {
      id: 'trazabilidad',
      label: 'Procesos auditables y trazables',
      icon: ClipboardCheck,
    },
  ] satisfies NegocioBeneficio[],
}
