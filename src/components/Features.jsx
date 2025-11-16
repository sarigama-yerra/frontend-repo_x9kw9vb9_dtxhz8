import { motion } from 'framer-motion'
import { Shield, Palette, BarChart3, Gauge, Bot, LayoutDashboard } from 'lucide-react'

const features = [
  {
    icon: Bot,
    title: 'Automated Workflows',
    desc: 'Zapier/Make, custom scripts, and microservices that eliminate manual work.'
  },
  {
    icon: LayoutDashboard,
    title: 'Custom Dashboards',
    desc: 'Operational visibility with metrics, alerts, and role-based access.'
  },
  {
    icon: Gauge,
    title: 'High‑Performance Sites',
    desc: 'Fast, SEO‑friendly websites and apps with modern stacks.'
  },
  {
    icon: Shield,
    title: 'Security by Design',
    desc: 'Zero‑trust patterns, audits, and continuous monitoring out of the box.'
  },
  {
    icon: Palette,
    title: 'Brand Identity',
    desc: 'Logos, design systems, and guidelines that scale with you.'
  },
  {
    icon: BarChart3,
    title: 'Scale Smoothly',
    desc: 'Architecture that supports growth without chaos.'
  },
]

export default function Features() {
  return (
    <section id="work" className="relative py-16 md:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_500px_at_10%_10%,rgba(255,182,193,0.18),transparent),radial-gradient(800px_400px_at_90%_70%,rgba(255,240,245,0.6),transparent)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const Icon = f?.icon || Shield
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="rounded-2xl p-5 border border-white/60 bg-white/70 backdrop-blur-xl shadow-sm hover:shadow-rose-200/60 transition-shadow"
              >
                <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-pink-400 to-rose-500 text-white flex items-center justify-center shadow-md shadow-rose-300/50">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-pink-950">{f.title}</h3>
                <p className="mt-1 text-pink-900/80 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
