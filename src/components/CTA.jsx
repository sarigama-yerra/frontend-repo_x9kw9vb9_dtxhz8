import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="relative py-16 md:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_50%_0%,rgba(255,240,245,0.8),transparent)]" />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[28px] border border-white/60 bg-white/70 backdrop-blur-2xl p-10 shadow-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-pink-950">
            Ready to build your growth engine?
          </h2>
          <p className="mt-3 text-pink-900/80">
            Tell us where you are and where you want to go. We’ll bring the systems, automations, security, and brand to get you there.
          </p>

          <form className="mt-8 grid gap-3 text-left">
            <input placeholder="Your name" className="rounded-xl bg-white/70 border border-white/60 px-4 py-3 outline-none focus:ring-2 ring-rose-300/70" />
            <input placeholder="Email" className="rounded-xl bg-white/70 border border-white/60 px-4 py-3 outline-none focus:ring-2 ring-rose-300/70" />
            <textarea placeholder="What do you want to build?" rows={4} className="rounded-xl bg-white/70 border border-white/60 px-4 py-3 outline-none focus:ring-2 ring-rose-300/70" />
            <button type="submit" className="mt-2 inline-flex justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 text-white px-6 py-3 text-sm font-semibold shadow-lg shadow-rose-300/40 hover:shadow-rose-400/60 transition-all">
              Send Request
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
