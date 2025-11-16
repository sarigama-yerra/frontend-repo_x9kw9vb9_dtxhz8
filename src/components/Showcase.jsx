import { motion } from 'framer-motion'

const cards = [
  {
    title: 'Operations OS',
    desc: 'Your single pane of glass: dashboards, alerts, and automations.',
    stat: '99.9% uptime'
  },
  {
    title: 'Brand Kits',
    desc: 'Typography, palettes, and logos packaged for scale.',
    stat: 'Under 7 days'
  },
  {
    title: 'Security Hardening',
    desc: 'SSO, secrets, compliance, backups, and monitoring by default.',
    stat: 'ISO-first'
  },
]

export default function Showcase() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16, rotateX: -12 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="relative rounded-[24px] border border-white/60 bg-white/70 backdrop-blur-2xl p-6 overflow-hidden shadow-xl"
            >
              <div className="absolute -top-24 -right-20 h-56 w-56 rounded-full bg-pink-200/60 blur-3xl" />
              <div className="relative">
                <h3 className="text-xl font-semibold text-pink-950">{c.title}</h3>
                <p className="mt-2 text-pink-900/80 text-sm leading-relaxed">{c.desc}</p>
                <div className="mt-6 inline-flex items-center rounded-xl bg-white/70 border border-white/60 px-3 py-1 text-xs text-pink-900/80 backdrop-blur-xl">
                  {c.stat}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
