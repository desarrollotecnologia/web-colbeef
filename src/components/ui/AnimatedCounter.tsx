import { useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

function parseDottedNumber(value: string): number {
  return Number(value.replace(/\./g, '')) || 0
}

function formatDottedNumber(value: number): string {
  return Math.round(value)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

interface AnimatedCounterProps {
  value: string
  className?: string
  duration?: number
}

export function AnimatedCounter({
  value,
  className = '',
  duration = 1400,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const target = parseDottedNumber(value)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const startTime = performance.now()
    let frameId = 0

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - (1 - progress) ** 3
      setCurrent(target * eased)

      if (progress < 1) {
        frameId = requestAnimationFrame(tick)
      } else {
        setCurrent(target)
      }
    }

    frameId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameId)
  }, [isInView, target, duration])

  return (
    <span ref={ref} className={className}>
      {formatDottedNumber(current)}
    </span>
  )
}
