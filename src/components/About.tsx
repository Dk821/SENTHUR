import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Film,
  Award,
  Clock,
  Users,
} from 'lucide-react'

const skills = [
  'Adobe Premiere Pro',
  'After Effects',
  'DaVinci Resolve',
  'Motion Graphics',
  'Color Grading',
  'Sound Design',
  'Instagram Reels',
  'YouTube Shorts',
  'Blender (Learning)',
  'LUTs & Color Science',
]

const stats = [
  {
    icon: Film,
    value: '50+',
    label: 'Projects Edited',
  },
  {
    icon: Award,
    value: '3+',
    label: 'Years Experience',
  },
  {
    icon: Clock,
    value: '11K+',
    label: 'Instagram Followers',
  },
  {
    icon: Users,
    value: '30+',
    label: 'Happy Clients',
  },
]

export default function About() {
  const sectionRef = useRef(null)

  const isInView = useInView(sectionRef, {
    once: true,
    margin: '-100px',
  })

  return (
    <section
      id="about"
      ref={sectionRef}
      className="page-section relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-glow-purple opacity-50" />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-purple/30 to-transparent" />

      {/* Floating Blur */}
      <div className="absolute top-20 left-[-120px] w-[350px] h-[350px] bg-purple-500/10 blur-[140px] rounded-full" />

      <div className="absolute bottom-0 right-[-120px] w-[350px] h-[350px] bg-cyan-500/10 blur-[140px] rounded-full" />

      <div className="site-container relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-14 md:mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-kicker text-accent-purple">
            About Me
          </span>

          <h2
            className="
            section-heading
            text-cinematic
            tracking-[-0.04em]
            "
          >
            The Vision{' '}
            <span className="text-gradient animate-gradient">
              Behind the Cut
            </span>
          </h2>

          <p
            className="
            max-w-2xl
            mx-auto
            mt-6
            text-gray-400
            leading-[1.9]
            tracking-wide
            "
          >
            A passionate cinematic editor focused on creating
            emotionally engaging visual experiences through
            storytelling, rhythm, color, and motion.
          </p>
        </motion.div>

        <motion.div
          className="
          mb-16
          md:mb-24
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-4
          sm:gap-6
          glass
          card-premium
          border-beam
          rounded-3xl
          p-5
          sm:p-8
          "
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="flex items-center gap-4 sm:gap-5 p-2 sm:p-3 text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.2 + i * 0.1,
              }}
            >
              <div className="flex-shrink-0">
                <div
                  className="
                  w-12
                  h-12
                  sm:w-14
                  sm:h-14
                  rounded-2xl
                  bg-gradient-to-br
                  from-accent-purple/20
                  to-accent-cyan/20
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  shadow-[0_0_30px_rgba(168,85,247,0.15)]
                  "
                >
                  <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent-purple" />
                </div>
              </div>

              <div>
                <span className="text-2xl md:text-3xl font-black text-white block tracking-[-0.04em]">
                  {stat.value}
                </span>

                <span className="text-[0.65rem] sm:text-xs text-gray-500 mt-1 block uppercase tracking-[0.1em]">
                  {stat.label}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left Visual */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.5,
            }}
            className="relative"
          >
            <div
              className="
              relative
              w-full
              max-w-xl
              mx-auto
              aspect-[4/5]
              lg:aspect-[3/4]
              rounded-[2rem]
              overflow-hidden
              glass
              card-premium
              border-beam
              "
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/20 via-transparent to-accent-cyan/20" />

              {/* Inner Content */}
              <div className="absolute inset-0 flex items-center justify-center bg-dark-800">
                <div className="text-center px-6">
                  {/* Initials */}
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="
                    w-32
                    h-32
                    sm:w-40
                    sm:h-40
                    rounded-full
                    bg-gradient-to-br
                    from-accent-purple
                    via-pink-500
                    to-accent-cyan
                    mx-auto
                    mb-6
                    flex
                    items-center
                    justify-center
                    text-white
                    text-5xl
                    font-black
                    tracking-[-0.04em]
                    shadow-[0_0_90px_rgba(168,85,247,0.45)]
                    animate-pulse-glow
                    "
                  >
                    SK
                  </motion.div>

                  <h3 className="text-3xl font-black tracking-[-0.04em] mb-2">
                    Senthur Kumaran
                  </h3>

                  <p className="text-gray-400 text-lg">
                    Video Editor & Visual Artist
                  </p>

                  <p className="text-gray-500 text-sm mt-2 tracking-wide">
                    Bangalore, India
                  </p>
                </div>
              </div>

              {/* Border */}
              <div className="absolute inset-0 border border-white/5 rounded-[2rem]" />
            </div>

            {/* Floating Badge */}
            <motion.div
              className="
              absolute
              bottom-6
              right-6
              glass
              rounded-2xl
              p-4
              hidden
              md:block
              "
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      scale: 1,
                    }
                  : {}
              }
              transition={{
                duration: 0.6,
                delay: 1,
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent-purple/20 flex items-center justify-center">
                  <Award className="w-6 h-6 text-accent-purple" />
                </div>

                <div>
                  <p className="text-sm font-semibold">
                    2022 – Present
                  </p>

                  <p className="text-xs text-gray-400">
                    Freelance Editor
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.7,
            }}
          >
            <h3
              className="
              text-3xl
              md:text-5xl
              font-black
              leading-tight
              tracking-[-0.04em]
              mb-6
              text-cinematic
              "
            >
              Crafting Stories Through the Lens
            </h3>

            <p
              className="
              text-gray-400
              leading-[1.9]
              tracking-wide
              text-lg
              mb-6
              "
            >
              Passionate and creative Video Editor with
              hands-on experience in cinematic storytelling,
              event highlights, and short-form social media
              content. Skilled in Adobe After Effects,
              Premiere Pro, and DaVinci Resolve for editing,
              motion graphics, color grading, and
              post-production workflows.
            </p>

            <p
              className="
              text-gray-500
              leading-[1.9]
              tracking-wide
              text-lg
              mb-10
              "
            >
              Grew a personal Instagram page to{' '}
              <span className="text-accent-purple font-semibold">
                11K+ followers
              </span>{' '}
              through self-produced cinematic content.
              Currently expanding into 3D motion and visual
              effects using Blender.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-3 mb-12">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={
                    isInView
                      ? {
                          opacity: 1,
                          y: 0,
                        }
                      : {}
                  }
                  transition={{
                    duration: 0.3,
                    delay: 1 + i * 0.05,
                  }}
                  whileHover={{
                    scale: 1.05,
                  }}
                  className="
                  px-4
                  sm:px-5
                  py-2.5
                  text-xs
                  sm:text-sm
                  rounded-full
                  glass-light
                  border
                  border-white/10
                  text-gray-300
                  hover:bg-accent-purple/10
                  hover:border-accent-purple/40
                  hover:text-white
                  transition-all
                  duration-300
                  "
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href="#contact"
              whileHover={{
                x: 5,
              }}
              className="
              inline-flex
              items-center
              gap-3
              text-accent-purple
              hover:text-white
              transition-all
              duration-300
              group
              text-sm
              tracking-[0.2em]
              uppercase
              "
            >
              <span>Let's Work Together</span>

              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}