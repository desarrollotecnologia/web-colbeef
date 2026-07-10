export type CorteGrupo = 'delanteros' | 'traseros'

export interface CorteArea {
  id: string
  slug: string
  name: string
  grupo: CorteGrupo
  clipPath: string
  /** Ruta de la ficha. Si no se define, usa la imagen de ejemplo. */
  image?: string
}

/** Placeholder hasta reemplazar por foto real de cada corte. */
export const CORTE_FICHA_EJEMPLO = '/assets/images/cortes/fichas/corte-ejemplo.png'

export function getCorteFichaImage(area: CorteArea) {
  return area.image ?? CORTE_FICHA_EJEMPLO
}

/** Mapa interactivo de cortes (clip-paths del sitio Colbeef EN). */
export const cortesMapAreas: CorteArea[] = [
  {
    id: 'area-1',
    slug: 'punta-de-anca',
    name: 'Punta de anca',
    grupo: 'traseros',
    clipPath:
      'polygon(13% 14%,15% 11.5%,17% 10%,22.3% 8.6%,25.32% 27.4%,20.42% 22.67%,16% 20.54%,12.29% 19.27%,10.68% 17.00%)',
  },
  {
    id: 'area-2',
    slug: 'cadera-con-cola',
    name: 'Cadera con cola',
    grupo: 'traseros',
    clipPath: 'polygon(22.74% 8.51%,28.04% 8.05%,31.28% 19.94%,33.51% 32.85%,26.21% 33.43%)',
  },
  {
    id: 'area-3',
    slug: 'lomo-angosto',
    name: 'Lomo angosto',
    grupo: 'traseros',
    clipPath: 'polygon(28.48% 8.24%,34.75% 10.49%,47.56% 15.33%,48.3% 31.49%,32.07% 23.25%)',
  },
  {
    id: 'area-4',
    slug: 'lomo-ancho',
    name: 'Lomo ancho',
    grupo: 'traseros',
    clipPath: 'polygon(47.95% 15.7%,56.46% 17.01%,61.92% 15.6%,62.56% 31.9%,48.57% 31.8%)',
  },
  {
    id: 'area-5',
    slug: 'morro',
    name: 'Morro',
    grupo: 'delanteros',
    clipPath:
      'polygon(71.67% 3.08%,75.07% 4.17%,80.31% 9.39%,78.77% 11.79%,75.56% 13.81%,72.42% 17.57%,62.38% 14.11%,62.73% 8.87%,65.12% 5.99%,67.71% 4.13%)',
  },
  {
    id: 'area-6',
    slug: 'cascara-descargue',
    name: 'Descargue',
    grupo: 'delanteros',
    clipPath:
      'polygon(70.28% 19.24%,69.28% 20.42%,69.73% 21.93%,71.26% 22.78%,73.36% 22.73%,70.39% 31.92%,66.01% 32%,62.61% 31.78%,62.4% 14.76%,62.82% 14.59%,72.27% 17.77%)',
  },
  {
    id: 'area-7',
    slug: 'cogote',
    name: 'Cogote',
    grupo: 'delanteros',
    clipPath:
      'polygon(78.68% 19.76%,79.51% 16.38%,80.33% 20.73%,85.82% 34.5%,86.73% 40.47%,75.95% 50.59%,74.1% 47.89%,73.65% 45.49%,73.31% 41.79%,73.7% 37.65%,72.38% 36.23%,70.46% 32.42%,73.67% 22.55%,77.37% 21.78%)',
  },
  {
    id: 'area-8',
    slug: 'lomo-fino',
    name: 'Lomo fino',
    grupo: 'traseros',
    clipPath: 'polygon(33.31% 30.11%,32.22% 23.63%,48.23% 31.84%,33.66% 32.64%)',
  },
  {
    id: 'area-9',
    slug: 'centro-de-pierna',
    name: 'Centro de pierna',
    grupo: 'traseros',
    clipPath:
      'polygon(8.81% 49.2%,7.14% 46.7%,5.97% 42.92%,5.72% 37.56%,6.79% 30.05%,7.78% 24.83%,9.07% 20.54%,10.53% 17.49%,12.41% 19.33%,11.07% 24.27%,10.33% 32.88%,10.58% 43.40%,11.94% 52.68%,10.78% 52.8%)',
  },
  {
    id: 'area-10',
    slug: 'muchacho',
    name: 'Muchacho',
    grupo: 'traseros',
    clipPath:
      'polygon(11.87% 50.44%,11.1% 44.97%,10.56% 38.45%,10.77% 30.28%,11.38% 24.25%,12.3% 19.73%,14.02% 22.05%,15.32% 25.99%,16.74% 32.21%,16.74% 43.53%,15.96% 53.61%,12.19% 52.86%)',
  },
  {
    id: 'area-11',
    slug: 'bota',
    name: 'Bota',
    grupo: 'traseros',
    clipPath:
      'polygon(17.08% 35.29%,16.66% 30.58%,16.12% 27.22%,14.7% 23.2%,12.92% 19.78%,18.73% 21.96%,22.15% 24.69%,25.39% 27.74%,26.22% 36.05%,22.94% 36.44%,19.68% 37.82%,16.95% 40.51%)',
  },
  {
    id: 'area-12',
    slug: 'colita-de-cadera',
    name: 'Colita de cadera',
    grupo: 'traseros',
    clipPath:
      'polygon(27.68% 36.91%,26.29% 36.16%,26.34% 33.73%,33.43% 33.19%,33.96% 38.2%,33.43% 43.25%,32.09% 39.93%,30.85% 38.42%,29.28% 37.71%)',
  },
  {
    id: 'area-13',
    slug: 'bola-de-pierna',
    name: 'Bola de pierna',
    grupo: 'traseros',
    clipPath:
      'polygon(16.75% 46.19%,17.17% 40.61%,19.31% 38.42%,21.96% 37.11%,24.27% 36.35%,27.16% 36.9%,30.46% 38.5%,32.43% 40.83%,32.95% 43.87%,32.8% 46.83%,32.02% 49.23%,30.2% 51.97%,28.17% 53.01%,26.6% 53.71%,25.12% 54.22%,16.18% 53.55%)',
  },
  {
    id: 'area-14',
    slug: 'sobrebarriga-delgada',
    name: 'Sobrebarriga delgada',
    grupo: 'delanteros',
    clipPath:
      'polygon(32.13% 49.9%,33.83% 44.09%,34.18% 37.98%,33.84% 33.19%,42.77% 32.41%,43.23% 38.75%,43.64% 44.14%,44.57% 50.74%,45.7% 54.31%,47.03% 57.67%,38.88% 56.21%,33.84% 55.02%,28.88% 53.22%)',
  },
  {
    id: 'area-15',
    slug: 'costilla',
    name: 'Costilla',
    grupo: 'delanteros',
    clipPath:
      'polygon(43.07% 32.57%,54.98% 32.08%,54.64% 34.71%,54.8% 37.77%,55.42% 40.55%,56.08% 43.78%,57.32% 46.02%,59.12% 47.67%,58.63% 51.66%,57.52% 55.87%,47.24% 57.41%,45% 51.67%,43.52% 42.42%)',
  },
  {
    id: 'area-16',
    slug: 'bola-de-brazo',
    name: 'Bola de brazo',
    grupo: 'delanteros',
    clipPath:
      'polygon(57.66% 45.87%,55.99% 43.09%,55.23% 40.6%,54.89% 37.93%,55% 34.91%,54.91% 31.94%,60.25% 32.04%,63.5% 48.26%,61.05% 48.52%,59.16% 47.68%)',
  },
  {
    id: 'area-17',
    slug: 'lomo-de-brazo',
    name: 'Lomo de brazo',
    grupo: 'delanteros',
    clipPath: 'polygon(60.38% 32.32%,65.57% 32.42%,66.8% 47.82%,65.35% 48.25%,63.49% 48.71%)',
  },
  {
    id: 'area-18',
    slug: 'paletero-externo',
    name: 'Paletero externo',
    grupo: 'delanteros',
    clipPath:
      'polygon(70.32% 32.43%,69.54% 37.74%,69.35% 42.03%,69.92% 46.18%,67.09% 47.63%,65.89% 32.21%)',
  },
  {
    id: 'area-19',
    slug: 'paletero-interno',
    name: 'Paletero interno',
    grupo: 'delanteros',
    clipPath:
      'polygon(70.41% 32.97%,73.28% 37.84%,73.15% 40.51%,73.02% 42.72%,70.19% 45.89%,69.58% 39.01%)',
  },
  {
    id: 'area-20',
    slug: 'cogote-2',
    name: 'Cogote',
    grupo: 'delanteros',
    clipPath:
      'polygon(85.88% 34.83%,86% 36.23%,86.6% 40.91%,75.81% 50.69%,73.73% 46.8%,73.33% 41.92%,73.36% 37.45%,72.38% 36.25%,71.53% 34.53%,70.56% 32.11%,73.7% 22.52%,77.38% 21.97%,78.57% 20.12%,79.53% 16.35%,80.55% 21.55%,83.02% 27.84%,84.51% 31.29%,84.94% 33.11%)',
  },
  {
    id: 'area-21',
    slug: 'pecho',
    name: 'Pecho',
    grupo: 'delanteros',
    clipPath:
      'polygon(73.72% 46.71%,74.39% 49.2%,76.20% 51.13%,57.76% 56.66%,58.84% 52.05%,59.43% 48.13%,61.21% 48.78%,62.94% 48.78%,65.15% 48.67%,67.22% 48.05%,69.16% 47.03%,70.78% 45.23%,73.1% 43.11%,73.12% 44.68%)',
  },
  {
    id: 'area-22',
    slug: 'murillo-trasero',
    name: 'Murillo trasero',
    grupo: 'traseros',
    clipPath:
      'polygon(17.53% 65.13%,16.23% 67.73%,15.94% 70.69%,9.36% 69.7%,9.17% 67.53%,8.81% 64.48%,9.52% 62.4%,10.45% 59.02%,10.9% 57.45%,10.9% 53.15%,24.67% 54.73%,21.13% 57.33%,19.25% 59.91%)',
  },
  {
    id: 'area-23',
    slug: 'murillo-delantero',
    name: 'Murillo delantero',
    grupo: 'delanteros',
    clipPath:
      'polygon(71.43% 61.53%,71.12% 69.69%,64.39% 71.35%,63.40% 67.39%,62.32% 63.17%,61.17% 61%,60.09% 59.2%,58.36% 57.07%,74.12% 52.04%,72.75% 54.82%,71.71% 57.79%)',
  },
]

export const cortesPorGrupo = {
  delanteros: cortesMapAreas.filter((a) => a.grupo === 'delanteros'),
  traseros: cortesMapAreas.filter((a) => a.grupo === 'traseros'),
}
