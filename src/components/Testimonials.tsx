import { useState, useRef, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Creative Director, Luxe Studio',
    avatar: 'SM',
    content: 'Absolutely phenomenal work. The attention to detail and cinematic quality exceeded our expectations. Every frame was perfectly crafted.',
    rating: 5,
  },
  {
    id: 2,
    name: 'James Wilson',
    role: 'YouTuber, 2M+ Subscribers',
    avatar: 'JW',
    content: 'My videos have never looked better. The editing style perfectly matches my brand and retention has improved dramatically since we started working together.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    role: 'Marketing Manager, TechBrand',
    avatar: 'ER',
    content: 'Professional, creative, and incredibly reliable. Our commercial campaign received widespread acclaim thanks to the stunning visual storytelling.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Marcus Chen',
    role: 'Film Director',
    avatar: 'MC',
    content: 'One of the most talented editors I\'ve worked with. The color grading and pacing were absolutely spot-on. Highly recommend for any cinematic project.',
    rating: 5,
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const intervalRef = useRef<ReturnType<typeof setInterval>>()

  const next = () => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    intervalRef.current = setInterval(next, 5000)
    return () => clearInterval(intervalRef.current)
  }, [])

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  }

  return (
    <section id="testimonials" ref={ref} className="page-section">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/30 to-transparent" />

      <div className="site-container-narrow">
        <motion.div
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-kicker text-accent-cyan">
            Testimonials
          </span>
          <h2 className="section-heading">
            What{' '}
            <span className="text-gradient">Clients Say</span>
          </h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
              className="glass rounded-2xl p-5 sm:p-8 md:p-12"
            >
              <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-accent-purple/30 mb-5 md:mb-6" />

              <p className="text-base sm:text-xl md:text-2xl text-gray-200 leading-relaxed mb-6 md:mb-8">
                "{testimonials[current].content}"
              </p>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-purple to-accent-cyan flex items-center justify-center text-sm font-bold">
                  {testimonials[current].avatar}
                </div>
                <div>
                  <h4 className="font-semibold">{testimonials[current].name}</h4>
                  <p className="text-sm text-gray-400">{testimonials[current].role}</p>
                </div>
                <div className="ml-0 sm:ml-auto flex gap-1">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full glass flex items-center justify-center hover:border-accent-purple/30 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-gray-400" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full glass flex items-center justify-center hover:border-accent-purple/30 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current ? 'bg-accent-purple w-6' : 'bg-dark-500 hover:bg-dark-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
