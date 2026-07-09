import { motion } from 'framer-motion'

interface Carousel3DItem {
  src: string
  alt: string
}

interface Carousel3DProps {
  items: readonly Carousel3DItem[]
}

export function Carousel3D({ items }: Carousel3DProps) {
  const count = items.length
  const angleStep = 360 / count

  return (
    <div
      className="carousel-3d-scene relative mx-auto w-full max-w-6xl"
      aria-label="Carrusel de cortes premium"
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[min(90%,36rem)] h-[clamp(5rem,22vw,10rem)] rounded-full bg-colbeef-green/25 blur-3xl opacity-60" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="carousel-3d-ring relative w-0 h-0" aria-live="polite">
          {items.map((item, index) => (
            <div
              key={item.src}
              className="carousel-3d-face absolute left-1/2 top-1/2"
              style={{
                width: 'var(--carousel-card-w)',
                height: 'var(--carousel-card-h)',
                marginLeft: 'calc(var(--carousel-card-w) / -2)',
                marginTop: 'calc(var(--carousel-card-h) / -2)',
                transform: `rotateY(${index * angleStep}deg) translateZ(var(--carousel-radius))`,
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.88 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="group relative h-full w-full rounded-xl sm:rounded-2xl overflow-hidden border border-colbeef-green-light/25 shadow-[0_20px_50px_rgba(0,0,0,0.55)] transition-[box-shadow,border-color] duration-500 hover:border-colbeef-green-light/60 hover:shadow-[0_24px_60px_rgba(46,157,82,0.35)]"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-colbeef-green-darker/80 via-transparent to-transparent opacity-70" />
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-colbeef-green to-transparent opacity-80" />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
