import { motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-white/5 py-10 md:py-12">
      <div className="site-container flex flex-col md:flex-row items-center justify-between gap-6">
        <motion.a
          href="#hero"
          className="text-xl font-bold tracking-widest text-gradient"
          whileHover={{ scale: 1.05 }}
        >
          SENTHUR.VFX
        </motion.a>

        <p className="text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} Senthur Kumaran. All rights reserved.
          <span className="block text-xs mt-1 text-gray-600">Bangalore, India · senthurkumaran03@gmail.com</span>
        </p>

        <motion.button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full glass flex items-center justify-center hover:border-accent-purple/30 transition-colors"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4 text-gray-400" />
        </motion.button>
      </div>
    </footer>
  )
}
