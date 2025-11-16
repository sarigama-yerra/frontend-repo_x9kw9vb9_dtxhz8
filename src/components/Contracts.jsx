import { motion } from 'framer-motion'

const contracts = [
  { title: 'Automation Sprint', detail: '2-week engagement to scope and ship 5-8 high-leverage automations.' },
  { title: 'Brand System Pack', detail: 'Logo suite, tokens, components, and usage docs delivered in 10 days.' },
  { title: 'Security Hardening', detail: 'Zero-trust review, MFA/SSO rollout, backup and monitoring setup.' },
]

export default function Contracts() {
  return (
    <section id="contracts" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-pink-950">Contracts</h2>
          <p className="mt-2 text-pink-900/80">Clear, outcome-focused packages tailored for momentum.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {contracts.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-[24px] border border-white/60 bg-white/70 backdrop-blur-2xl p-6 shadow-xl overflow-hidden"
            >
              <div className="absolute -top-24 -left-20 h-56 w-56 rounded-full bg-pink-200/60 blur-3xl" />
              <h3 className="text-xl font-semibold text-pink-950">{c.title}</h3>
              <p className="mt-2 text-sm text-pink-900/80">{c.detail}</p>
              <div className="mt-6 inline-flex items-center rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 text-white px-4 py-2 text-xs shadow-lg shadow-rose-300/40 group-hover:shadow-rose-400/60 transition-shadow">Select</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
