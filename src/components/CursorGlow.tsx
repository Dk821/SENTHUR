import { motion } from 'framer-motion'
import useMousePosition from '../hooks/useMousePosition'

export default function CursorGlow() {
  const { x, y } = useMousePosition()

  return (
    <motion.div
      className="fixed top-0 left-0 w-[600px] h-[600px] pointer-events-none z-30 mix-blend-screen hidden lg:block"
      style={{
        background: 'radial-gradient(circle at center, rgba(168,85,247,0.12) 0%, transparent 70%)',
      }}
      animate={{ x: x - 300, y: y - 300 }}
      transition={{ type: 'spring', damping: 30, stiffness: 100, mass: 0.5 }}
    />
  )
}
