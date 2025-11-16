import { useMemo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

// Simple floating petals background using framer-motion
// Renders a bunch of soft pink petals that drift upward.
export default function BackgroundPetals() {
  const prefersReduced = useReducedMotion()
  const petals = useMemo(() => {
    return new Array(18).fill(0).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // vw
      size: 10 + Math.random() * 24, // px
      delay: Math.random() * 6,
      duration: 10 + Math.random() * 14,
      opacity: 0.35 + Math.random() * 0.4,
      rotate: (Math.random() * 40 - 20),
    }))
  }, [])

  if (prefersReduced) return null

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-white">
      {petals.map((p) => (
        <motion.span
          key={p.id}
          initial={{ y: '110%', opacity: 0 }}
          animate={{ y: '-10%', opacity: p.opacity, rotate: p.rotate }}
          transition={{ repeat: Infinity, repeatType: 'loop', ease: 'linear', delay: p.delay, duration: p.duration }}
          style={{ left: `${p.left}vw`, width: p.size, height: p.size * 0.7 }}
          className="absolute bottom-[-10%] rounded-[50%_50%_50%_50%/60%_40%_60%_40%] bg-pink-300/60 shadow-[0_2px_10px_rgba(244,114,182,0.25)] backdrop-blur-sm"
        />
      ))}
    </div>
  )
}
