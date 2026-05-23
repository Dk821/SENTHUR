import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Play, X } from 'lucide-react'
import fashionVideo from '../assets/video/Fashion&Clothing.mp4'
import realEstateVideo from '../assets/video/Real_estate.mp4'
import appleVideo from '../assets/video/Animated-Apple.mp4'
import day2MotionVideo from '../assets/video/Day2Motion_Animation.mp4'
import iphoneVideo from '../assets/video/Iphone_Animateion.mp4'
import motionVideo from '../assets/video/Motion_Animation.mp4'
import spotifyVideo from '../assets/video/spotify.mp4'

const categories = ['All', 'Commercial', 'Reels', 'Animation']

const projects = [
  {
    id: 1,
    title: 'Real Estate Cinematic Tour',
    category: 'Commercial',
    color: 'from-blue-900/80 to-dark-900',
    desc: 'Immersive cinematic property tour with professional color grading and smooth transitions.',
    videoSrc: realEstateVideo,
  },
  {
    id: 2,
    title: 'Fashion & Clothing Promo',
    category: 'Reels',
    color: 'from-pink-900/80 to-dark-900',
    desc: 'High-energy fashion promotional reel optimized for social media engagement.',
    videoSrc: fashionVideo,
  },
  {
    id: 3,
    title: 'Spotify UI/UX Motion',
    category: 'Animation',
    color: 'from-green-900/80 to-dark-900',
    desc: 'Smooth UI/UX motion graphics and animation for a Spotify interface concept.',
    videoSrc: spotifyVideo,
  },
  {
    id: 4,
    title: 'Animated Apple Product',
    category: 'Animation',
    color: 'from-red-900/80 to-dark-900',
    desc: 'Sleek motion graphics commercial highlighting product features dynamically.',
    videoSrc: appleVideo,
  },
  {
    id: 5,
    title: 'iPhone Promo Animation',
    category: 'Animation',
    color: 'from-purple-900/80 to-dark-900',
    desc: 'Dynamic product animation focusing on device design and fluid camera movement.',
    videoSrc: iphoneVideo,
  },
  {
    id: 6,
    title: 'Kinetic Typography',
    category: 'Animation',
    color: 'from-emerald-900/80 to-dark-900',
    desc: 'Fast-paced kinetic typography and abstract motion animation sequence.',
    videoSrc: motionVideo,
  },
  {
    id: 7,
    title: 'Abstract Motion Design',
    category: 'Animation',
    color: 'from-amber-900/80 to-dark-900',
    desc: 'Creative motion design exploration focusing on fluid easing and shape morphing.',
    videoSrc: day2MotionVideo,
  },
]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const filtered =
    activeCategory === 'All' ? projects : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="portfolio" ref={ref} className="page-section">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.03),transparent_50%)]" />

      <div className="site-container relative z-10">
        <motion.div
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-kicker text-accent-red">
            My Work
          </span>
          <h2 className="section-heading">
            Featured{' '}
            <span className="text-gradient-red">Projects</span>
          </h2>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-center">
            A selection of 50+ editing projects spanning cinematic films, brand commercials, and viral reels.
          </p>
        </motion.div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 md:mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 sm:px-6 py-2.5 text-xs sm:text-sm font-medium rounded-full tracking-wider uppercase transition-all duration-300 ${activeCategory === cat
                ? 'bg-accent-purple text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]'
                : 'bg-white/5 text-gray-400 border border-white/10 hover:border-accent-purple/30 hover:text-white hover:bg-white/10'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div className="portfolio-grid" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer bg-dark-900 border border-white/5"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Thumbnail */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color}`}>
                  {'videoSrc' in project && project.videoSrc ? (
                    <video
                      src={project.videoSrc}
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                      onMouseEnter={(e) => e.currentTarget.play()}
                      onMouseLeave={(e) => {
                        e.currentTarget.pause()
                        e.currentTarget.currentTime = 0
                      }}
                    />
                  ) : (
                    <div className="absolute inset-0 bg-dark-800/50" />
                  )}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                    <div className="w-16 h-16 mx-auto rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-accent-purple/30 group-hover:border-accent-purple/50 transition-all duration-500">
                      <Play className="w-6 h-6 text-white ml-0.5" />
                    </div>
                  </div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 z-20">
                  <span className="text-xs font-bold text-accent-purple tracking-wider uppercase">{project.category}</span>
                  <h3 className="text-lg font-bold mt-1 text-white">{project.title}</h3>
                  <p className="text-sm text-gray-300 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">{project.desc}</p>
                </div>

                {/* Play overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none">
                  <div className="w-16 h-16 rounded-full bg-accent-purple/90 flex items-center justify-center backdrop-blur-sm shadow-[0_0_30px_rgba(168,85,247,0.5)]">
                    <Play className="w-6 h-6 text-white ml-0.5" fill="white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-dark-900/90 backdrop-blur-xl"
              onClick={() => setSelectedProject(null)}
            />
            <motion.div
              className="relative w-full max-w-5xl glass rounded-2xl overflow-hidden border border-white/10"
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 40 }}
              transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center hover:bg-accent-purple/80 transition-colors border border-white/10"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              <div className={`relative w-full bg-black flex items-center justify-center ${'videoSrc' in selectedProject && selectedProject.videoSrc ? 'max-h-[75vh]' : 'aspect-video bg-gradient-to-br ' + selectedProject.color}`}>
                {'videoSrc' in selectedProject && selectedProject.videoSrc ? (
                  <video
                    src={selectedProject.videoSrc}
                    controls
                    autoPlay
                    className="w-full max-h-[75vh] object-contain"
                  />
                ) : (
                  <div className="text-center z-10">
                    <div className="w-20 h-20 mx-auto rounded-full bg-white/20 border border-white/30 flex items-center justify-center cursor-pointer hover:bg-accent-purple/40 transition-colors">
                      <Play className="w-8 h-8 text-white ml-1" fill="white" />
                    </div>
                    <p className="mt-4 text-white/60 text-sm">Preview coming soon</p>
                  </div>
                )}
              </div>

              <div className="p-5 sm:p-8 bg-dark-800/50 backdrop-blur-md border-t border-white/5">
                <span className="text-sm font-bold text-accent-purple tracking-wider uppercase">{selectedProject.category}</span>
                <h3 className="text-2xl md:text-3xl font-bold mt-2 text-white">{selectedProject.title}</h3>
                <p className="text-gray-400 mt-3 text-base md:text-lg leading-relaxed">{selectedProject.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
