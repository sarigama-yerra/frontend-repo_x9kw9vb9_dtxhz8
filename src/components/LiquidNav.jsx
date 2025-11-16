import { useState, useEffect, useRef } from 'react'
import { Menu, X } from 'lucide-react'

// Liquid glass nav with subtle wobble when opening
export default function LiquidNav({ brand = 'Dexter' }) {
  const [open, setOpen] = useState(false)
  const blobRef = useRef(null)

  useEffect(() => {
    if (!blobRef.current) return
    blobRef.current.animate(
      [
        { borderRadius: '28px', filter: 'blur(0px)' },
        { borderRadius: '34px', filter: 'blur(1px)' },
        { borderRadius: '28px', filter: 'blur(0px)' },
      ],
      { duration: 900, easing: 'ease', iterations: 1 }
    )
  }, [open])

  return (
    <header className="fixed top-3 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={blobRef} className="relative overflow-hidden rounded-[28px] border border-white/60 bg-white/60 backdrop-blur-2xl shadow-lg">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-16 -left-10 h-36 w-36 rounded-full bg-white/40 blur-2xl" />
            <div className="absolute -bottom-16 -right-10 h-40 w-40 rounded-full bg-rose-100/70 blur-2xl" />
          </div>

          <div className="flex items-center justify-between px-4 py-3 relative">
            <a href="#" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center shadow-inner shadow-white/60" />
              <div className="leading-tight">
                <p className="text-pink-900 font-semibold tracking-tight">{brand}</p>
                <p className="text-xs text-pink-900/70">Automation • Systems • Brand</p>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              <a className="text-pink-900/80 hover:text-pink-900" href="#projects">Projects</a>
              <a className="text-pink-900/80 hover:text-pink-900" href="#contracts">Contracts</a>
              <a className="text-pink-900/80 hover:text-pink-900" href="#contact">Contact</a>
              <a href="#start" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 text-white px-4 py-2 text-sm shadow-lg shadow-rose-300/40 hover:shadow-rose-400/60 transition-shadow">Start</a>
            </nav>

            <button aria-label="Toggle menu" className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white/60 border border-white/50 backdrop-blur-xl text-pink-900" onClick={() => setOpen(!open)}>
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4">
              <div className="grid gap-3 rounded-2xl p-3 backdrop-blur-xl bg-white/70 border border-white/60">
                <a className="text-pink-900/80 hover:text-pink-900" href="#projects" onClick={() => setOpen(false)}>Projects</a>
                <a className="text-pink-900/80 hover:text-pink-900" href="#contracts" onClick={() => setOpen(false)}>Contracts</a>
                <a className="text-pink-900/80 hover:text-pink-900" href="#contact" onClick={() => setOpen(false)}>Contact</a>
                <a href="#start" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 text-white px-4 py-2 text-sm shadow-lg shadow-rose-300/40">Start</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
