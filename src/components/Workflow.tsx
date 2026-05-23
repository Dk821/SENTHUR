import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MessageCircle, ClipboardList, Scissors, RefreshCw, CheckCircle } from 'lucide-react'

const steps = [
  { icon: MessageCircle, title: 'Discussion', desc: 'We discuss your vision, goals, and creative direction to understand the project requirements.' },
  { icon: ClipboardList, title: 'Planning', desc: 'I create a detailed plan with timeline, milestones, and creative concepts for your approval.' },
  { icon: Scissors, title: 'Editing', desc: 'Raw footage is transformed with precision editing, color grading, sound design, and effects.' },
  { icon: RefreshCw, title: 'Revision', desc: 'We refine the edit based on your feedback until every detail meets your expectations.' },
  { icon: CheckCircle, title: 'Final Delivery', desc: 'The polished masterpiece is delivered in your preferred format, ready to publish.' },
]

export default function Workflow() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="workflow" ref={ref} className="page-section">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.03),transparent_50%)]" />

      <div className="site-container-narrow">
        <motion.div
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-kicker text-accent-blue">
            How It Works
          </span>
          <h2 className="section-heading">
            Creative{' '}
            <span className="text-gradient">Workflow</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-accent-purple via-accent-cyan to-accent-blue md:-translate-x-1/2" />

          <div className="space-y-10 md:space-y-16">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                className="relative grid grid-cols-[4rem_1fr] items-start gap-4 sm:gap-6 md:grid-cols-[1fr_4rem_1fr] md:gap-10"
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <div
                  className={`hidden md:block ${
                    i % 2 === 0 ? 'md:col-start-1 md:row-start-1' : 'md:col-start-3 md:row-start-1'
                  }`}
                >
                  <div className={`glass rounded-xl p-6 md:p-8 max-w-md ${i % 2 === 0 ? 'ml-auto text-right' : 'mr-auto text-left'}`}>
                    <h3 className="text-lg sm:text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                  </div>
                </div>

                {/* Icon */}
                <div className="relative z-10 col-start-1 md:col-start-2 md:row-start-1 overflow-visible">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full glass flex items-center justify-center border border-accent-purple/20 mx-auto">
                    <step.icon className="w-6 h-6 sm:w-7 sm:h-7 text-accent-purple" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-accent-purple text-xs flex items-center justify-center font-bold">
                    {i + 1}
                  </div>
                </div>

                {/* Mobile content */}
                <div className="col-start-2 md:hidden">
                  <div className="glass rounded-xl p-5 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
