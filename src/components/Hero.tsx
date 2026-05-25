import { motion } from 'framer-motion'

const particles = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 4 + 1,
  duration: Math.random() * 6 + 4,
  delay: Math.random() * 4,
}))

const gradientBlobs = [
  { x: '10%', y: '20%', size: 500, color: 'rgba(168,85,247,0.12)', duration: 8, delay: 0 },
  { x: '70%', y: '60%', size: 400, color: 'rgba(6,182,212,0.08)', duration: 10, delay: 2 },
  { x: '40%', y: '80%', size: 350, color: 'rgba(59,130,246,0.08)', duration: 7, delay: 1 },
]

const staggerText = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
}

const letterReveal = {
  hidden: { y: 120, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const },
  },
}

const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const },
  },
}

export default function Hero() {
  const headingLines = [
    ['CINEMATIC'],
    ['STORYTELLING'],
    ['THROUGH', 'EDITING'],
  ]

  return (
    <section
      id="hero"
      className="relative min-h-svh flex items-center justify-center overflow-hidden px-4 pt-24 pb-16 sm:px-6 md:pb-20"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-dark-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(168,85,247,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(6,182,212,0.06),transparent_60%)]" />
      </div>

      {/* Gradient blobs */}
      {gradientBlobs.map((blob) => (
        <motion.div
          key={blob.color}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: blob.x,
            top: blob.y,
            width: blob.size,
            height: blob.size,
            background: `radial-gradient(circle, ${blob.color} 0%, transparent 70%)`,
          }}
          animate={{ x: [0, 30, -20, 0], y: [0, -30, 20, 0] }}
          transition={{ duration: blob.duration, repeat: Infinity, ease: 'easeInOut', delay: blob.delay }}
        />
      ))}

      {/* Floating particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white/20 pointer-events-none"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
        />
      ))}

      {/* Radial vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(0,0,0,0.6)_100%)]" />

      <div className="site-container relative z-10 text-center">
        <motion.div variants={staggerText} initial="hidden" animate="show">
          <motion.p
            variants={fadeUp}
            className="section-kicker text-gray-400"
          >
            Video Editor &amp; Visual Storyteller · Bangalore, India
          </motion.p>

          <h1 className="text-[clamp(2.6rem,12vw,7.5rem)] font-bold leading-[0.95] tracking-normal">
            {headingLines.map((line, lineIndex) => (
              <span key={lineIndex} className="block overflow-hidden py-1">
                {line.map((word, wordIndex) => (
                  <motion.span
                    key={`${word}-${wordIndex}`}
                    className="inline-block"
                    variants={letterReveal}
                  >
                    {word}{wordIndex < line.length - 1 ? '\u00A0' : ''}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed text-center"
          >
            Passionate video editor with 3+ years turning raw footage into cinematic
            masterpieces — from Instagram Reels to full commercial campaigns.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 md:mt-10 flex sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4"
          >
            <motion.a
              href="#portfolio"
              className="btn btn-primary px-8 py-4 sm:px-10 sm:py-4 text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>

            <motion.a
              href="#contact"
              className="btn btn-outline px-8 py-4 sm:px-10 sm:py-4 text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Me
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <span className="text-xs tracking-[0.2em] uppercase text-gray-500">Scroll</span>
        <motion.div
          className="w-[1px] h-12 bg-gradient-to-b from-accent-purple to-transparent"
          animate={{ scaleY: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: 'top' }}
        />
      </motion.div>
    </section>
  )
}
