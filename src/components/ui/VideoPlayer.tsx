import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { useState } from 'react'

interface VideoPlayerProps {
  thumbnail: string
  title?: string
  subtitle?: string
  videoUrl?: string
  className?: string
}

export function VideoPlayer({
  thumbnail,
  title,
  subtitle,
  videoUrl,
  className = '',
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className={`relative overflow-hidden group ${className}`}>
      {!isPlaying || !videoUrl ? (
        <>
          <motion.img
            src={thumbnail}
            alt={title ?? 'Video Colbeef'}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute inset-0 overlay-dark" />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            {(title || subtitle) && (
              <div className="text-center mb-6 px-4">
                {subtitle && (
                  <p className="text-colbeef-gold text-xs tracking-[0.3em] uppercase mb-2">
                    {subtitle}
                  </p>
                )}
                {title && (
                  <h3 className="text-white text-2xl md:text-3xl font-display font-bold">
                    {title}
                  </h3>
                )}
              </div>
            )}
            <motion.button
              type="button"
              onClick={() => videoUrl && setIsPlaying(true)}
              className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-colbeef-red flex items-center justify-center text-white shadow-2xl"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Reproducir video"
            >
              <Play className="w-7 h-7 ml-1" fill="currentColor" />
            </motion.button>
            <p className="text-white/80 text-xs tracking-[0.3em] uppercase mt-4">
              REPRODUCIR
            </p>
          </div>
        </>
      ) : (
        <div className="aspect-video w-full">
          <iframe
            src={videoUrl}
            title={title ?? 'Video Colbeef'}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
    </div>
  )
}
