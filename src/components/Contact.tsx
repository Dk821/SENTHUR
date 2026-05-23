import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  ArrowRight,
} from 'lucide-react'

const contactCards = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+91 75388 39307',
    subtext: 'Quick response',
    href: 'https://wa.me/917538839307?text=Hi%20Senthur%2C%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20project!',
    color: 'green',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'senthurkumaran03@gmail.com',
    subtext: 'Within 24 hours',
    href: 'mailto:senthurkumaran03@gmail.com',
    color: 'purple',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 75388 39307',
    subtext: 'Mon – Sat, 10am – 8pm',
    href: 'tel:+917538839307',
    color: 'cyan',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Bangalore, India',
    subtext: 'Available remotely',
    href: '#',
    color: 'pink',
  },
]

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:senthurkumaran03@gmail.com', label: 'Email' },
]

const colorMap: Record<string, { bg: string; border: string; text: string }> = {
  green: { bg: 'bg-green-500/10', border: 'border-green-500/20', text: 'text-green-400' },
  purple: { bg: 'bg-accent-purple/10', border: 'border-accent-purple/20', text: 'text-accent-purple' },
  cyan: { bg: 'bg-accent-cyan/10', border: 'border-accent-cyan/20', text: 'text-accent-cyan' },
  pink: { bg: 'bg-pink-500/10', border: 'border-pink-500/20', text: 'text-pink-400' },
}

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="contact"
      ref={ref}
      className="page-section relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-glow-purple opacity-40" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/8 blur-[180px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/8 blur-[180px] rounded-full" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-purple/30 to-transparent" />

      <div className="site-container relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-kicker text-accent-purple">
            Get In Touch
          </span>

          <h2 className="section-heading text-cinematic tracking-[-0.04em]">
            Let's Create{' '}
            <span className="text-gradient animate-gradient">
              Together
            </span>
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl leading-[1.8] tracking-wide text-gray-400">
            Have a project in mind? Let's collaborate and
            transform your vision into cinematic visual
            storytelling that stands out.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Grid Layout for Cards */}
          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            {contactCards.map((card, i) => {
              const colors = colorMap[card.color]
              return (
                <motion.a
                  key={card.label}
                  href={card.href}
                  target={card.href.startsWith('http') ? '_blank' : undefined}
                  rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group block glass rounded-2xl p-6 sm:p-8 hover:border-white/15 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                >
                  <div className="flex flex-col gap-5">
                    <div className="flex justify-between items-start">
                      <div
                        className={`w-14 h-14 rounded-2xl ${colors.bg} border ${colors.border} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <card.icon className={`w-6 h-6 ${colors.text}`} />
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-white -rotate-45 group-hover:rotate-0 transition-all duration-300" />
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-[0.15em] text-gray-500 mb-1.5">
                        {card.label}
                      </p>
                      <p className="text-white font-bold text-lg sm:text-xl truncate">
                        {card.value}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        {card.subtext}
                      </p>
                    </div>
                  </div>
                </motion.a>
              )
            })}
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {/* Social links */}
            <motion.div
              className="glass rounded-2xl p-6 sm:p-8 flex flex-col justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h4 className="text-sm uppercase tracking-[0.15em] text-gray-500 mb-5">
                Follow Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    whileHover={{ y: -4, scale: 1.08 }}
                    className="w-12 h-12 rounded-xl glass-light border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-accent-purple/40 hover:bg-accent-purple/10 transition-all duration-300"
                    aria-label={link.label}
                  >
                    <link.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability badge */}
            <motion.div
              className="glass rounded-2xl p-6 sm:p-8 flex items-center gap-5"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              whileHover={{ y: -4 }}
            >
              <div className="relative flex-shrink-0">
                <div className="w-4 h-4 rounded-full bg-green-400" />
                <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-50" />
              </div>
              <div>
                <p className="text-white font-bold text-lg">
                  Available for Freelance
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  Reels · Commercials · Films
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}