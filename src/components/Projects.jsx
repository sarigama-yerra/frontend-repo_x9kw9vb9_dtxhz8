import { motion } from 'framer-motion'

const projects = [
  {
    name: 'Dexter Automations',
    summary: 'Company-wide workflow engine integrating CRM, billing, and Slack with 120+ zaps.',
    tags: ['Automation', 'Ops', 'APIs'],
  },
  {
    name: 'Dexter Dashboards',
    summary: 'Executive dashboard for KPIs, alerts, uptime, and forecasting.',
    tags: ['Dashboards', 'Data', 'BI'],
  },
  {
    name: 'Dexter Brand System',
    summary: 'Modular design kit with tokens, components, and brand guidelines.',
    tags: ['Brand', 'Design System'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-pink-950">Mock Projects</h2>
          <p className="mt-2 text-pink-900/80">A sampling of recent work showing systems, automation, security, and brand in harmony.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative rounded-2xl border border-white/60 bg-white/70 backdrop-blur-2xl p-6 shadow-xl"
            >
              <div className="absolute -top-20 -right-16 h-40 w-40 rounded-full bg-rose-100 blur-3xl" />
              <h3 className="text-lg font-semibold text-pink-950">{p.name}</h3>
              <p className="mt-2 text-sm text-pink-900/80">{p.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="inline-flex items-center rounded-full bg-white/70 border border-white/60 px-3 py-1 text-xs text-pink-900/80 backdrop-blur-xl">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
