import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Film,
  Video,
  Megaphone,
  Clapperboard,
  Heart,
  Sparkles,
  Palette,
  Share2,
} from 'lucide-react'

const services = [
  {
    icon: Film,
    title: 'Video Editing',
    desc: 'End-to-end professional editing — footage review, cuts, audio sync, color correction, and export-ready delivery.',
  },
  {
    icon: Video,
    title: 'Reels Editing',
    desc: 'High-retention Instagram Reels and YouTube Shorts with strategic pacing, smooth transitions, and trending audio.',
  },
  {
    icon: Megaphone,
    title: 'Commercial Ads',
    desc: 'High-impact commercial edits with polished motion graphics that capture attention and drive conversions.',
  },
  {
    icon: Clapperboard,
    title: 'Short Films',
    desc: 'Cinematic short film editing with multi-camera sync, narrative pacing, and professional color grading.',
  },
  {
    icon: Heart,
    title: 'Event Highlights',
    desc: 'Memorable event and wedding highlight reels that preserve your most important moments forever.',
  },
  {
    icon: Sparkles,
    title: 'Motion Graphics',
    desc: 'Custom text animations, kinetic typography, SaaS explainers, and UI animations in After Effects.',
  },
  {
    icon: Palette,
    title: 'Color Grading',
    desc: 'Professional DaVinci Resolve color grading with custom LUTs for a consistent cinematic look.',
  },
  {
    icon: Share2,
    title: 'Social Content',
    desc: 'Platform-optimized content for Instagram, YouTube, and TikTok — built for maximum organic reach.',
  },
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] as const },
  },
}

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" ref={ref} className="page-section">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.03),transparent_60%)]" />

      <div className="site-container">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-kicker text-accent-cyan">
            What I Do
          </span>
          <h2 className="section-heading">
            Premium{' '}
            <span className="text-gradient">Services</span>
          </h2>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto leading-relaxed">
            From concept to final cut, I deliver high-quality video editing services
            that elevate your brand and captivate your audience.
          </p>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              className="group relative glass rounded-2xl p-6 md:p-8 cursor-default overflow-hidden"
              variants={cardVariants}
              whileHover={{ y: -8 }}
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/5 via-transparent to-accent-cyan/5" />
              </div>

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center mb-6 group-hover:bg-accent-purple/20 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-accent-purple" />
                </div>
                <h3 className="text-lg font-bold mb-3 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  {service.desc}
                </p>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20">
                <div className="absolute top-0 right-0 w-[1px] h-8 bg-gradient-to-b from-accent-purple/50 to-transparent" />
                <div className="absolute top-0 right-0 h-[1px] w-8 bg-gradient-to-l from-accent-purple/50 to-transparent" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
