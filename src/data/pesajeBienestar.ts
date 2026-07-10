import type { LucideIcon } from 'lucide-react'
import {
  CornerDownRight,
  Droplets,
  Grid3x3,
  Layers,
  Maximize2,
  Sun,
} from 'lucide-react'

export interface BienestarFeature {
  id: string
  number: string
  title: string
  description: string
  image: string
  icon: LucideIcon
}

const pesajeGanadoImage = '/assets/images/servicios/pesaje-ganado.jpg'
const pesajeBasculaImage = '/assets/images/servicios/pesaje-bascula.jpg'

export const bienestarAnimalContent = {
  label: 'Bienestar animal',
  title: 'Infraestructura diseñada para su bienestar',
  intro:
    'Nuestras instalaciones cumplen altos estándares de bienestar animal, reduciendo el estrés, previniendo lesiones y asegurando la calidad del producto final.',
  features: [
    {
      id: 'espacio',
      number: '01',
      title: 'Espacio adecuado',
      description:
        'Capacidad de almacenamiento de 2 m² por animal. Espacio correcto para manifestar su comportamiento normal y fácil movimiento.',
      image: pesajeGanadoImage,
      icon: Maximize2,
    },
    {
      id: 'agua',
      number: '02',
      title: 'Agua potable a voluntad',
      description:
        'Agua en condiciones de potabilización disponible para el consumo de los animales, reduciendo el estrés y cumpliendo la primera libertad: libres de hambre y sed.',
      image: pesajeGanadoImage,
      icon: Droplets,
    },
    {
      id: 'espina',
      number: '03',
      title: 'Diseño espina de pescado',
      description:
        'Corrales con ángulos de 60°, que permiten la normal movilidad de los animales y evita amontonamientos dentro de los mismos.',
      image: pesajeBasculaImage,
      icon: CornerDownRight,
    },
    {
      id: 'escalinatas',
      number: '04',
      title: 'Escalinatas seguras',
      description:
        'Rampas y escalinatas diseñadas para facilitar el ingreso y movimiento del ganado, reduciendo el riesgo de caídas y lesiones.',
      image: pesajeGanadoImage,
      icon: Layers,
    },
    {
      id: 'pisos',
      number: '05',
      title: 'Pisos antideslizantes',
      description:
        'Superficies con acabado antideslizante que garantizan estabilidad y seguridad durante el tránsito de los animales.',
      image: pesajeGanadoImage,
      icon: Grid3x3,
    },
    {
      id: 'polisombras',
      number: '06',
      title: 'Polisombras',
      description:
        'Coberturas que protegen al ganado del sol directo, mejorando su confort y bienestar durante la estancia en corrales.',
      image: pesajeGanadoImage,
      icon: Sun,
    },
  ] satisfies BienestarFeature[],
}
