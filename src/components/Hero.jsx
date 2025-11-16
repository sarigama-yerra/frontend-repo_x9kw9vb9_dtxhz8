import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -right-20 h-96 w-96 rounded-full bg-pink-200/60 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-[28rem] w-[28rem] rounded-full bg-rose-100/70 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,182,193,0.25),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(255,240,245,0.8),transparent_40%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative z-10"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/60 backdrop-blur-xl px-3 py-1 text-xs text-pink-900/80 shadow-sm">
              <span className="inline-block h-2 w-2 rounded-full bg-rose-400 animate-pulse" />
              Cherry-blossom aesthetic • Light & Airy • Glassmorphism
            </div>

            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-pink-950">
              Systems, Automations, Security — Beautifully Crafted
            </h1>
            <p className="mt-4 text-pink-900/80 text-lg leading-relaxed">
              We build the operational engine of modern businesses: automated workflows, custom dashboards, high‑performance websites, secure architectures, and brand identities that bloom.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contact" className="rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 text-white px-5 py-3 text-sm font-semibold shadow-lg shadow-rose-300/40 hover:shadow-rose-400/60 transition-all">
                Start a project
              </a>
              <a href="#work" className="rounded-2xl bg-white/60 backdrop-blur-xl border border-white/50 text-pink-900 px-5 py-3 text-sm font-semibold hover:bg-white/80 transition-colors">
                See capabilities
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 max-w-lg">
              <div className="rounded-2xl bg-white/60 backdrop-blur-xl border border-white/50 p-4">
                <p className="text-2xl font-bold text-pink-950">+40%</p>
                <p className="text-sm text-pink-900/70">Efficiency gains via automation</p>
              </div>
              <div className="rounded-2xl bg-white/60 backdrop-blur-xl border border-white/50 p-4">
                <p className="text-2xl font-bold text-pink-950">24/7</p>
                <p className="text-sm text-pink-900/70">Security monitoring baked in</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative rounded-[28px] overflow-hidden border border-white/40 bg-white/30 backdrop-blur-2xl shadow-2xl">
              <div className="aspect-[4/3]">
                <Spline scene="https://prod.spline.design/dmI8cRa4YJ8oJUwX/scene.splinecode" />
              </div>
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/10 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
