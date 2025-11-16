import { useState } from 'react'
import { Menu, X, ShieldCheck, Flower2 } from 'lucide-react'

function NavLink({ href, children }) {
  return (
    <a href={href} className="text-sm md:text-base text-pink-900/80 hover:text-pink-900 transition-colors">
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
        <div className="backdrop-blur-xl bg-white/50 border border-white/40 shadow-sm rounded-2xl">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center shadow-inner shadow-white/60">
                <Flower2 className="h-5 w-5 text-white" />
              </div>
              <div className="leading-tight">
                <p className="text-pink-900 font-semibold tracking-tight">Flames Agency</p>
                <p className="text-xs text-pink-900/70">Automation • Systems • Brand</p>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              <NavLink href="#workflows">Automations</NavLink>
              <NavLink href="#dashboards">Dashboards</NavLink>
              <NavLink href="#web">Websites</NavLink>
              <NavLink href="#security" >Security</NavLink>
              <NavLink href="#brand">Branding</NavLink>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 text-white px-4 py-2 text-sm shadow-lg shadow-rose-300/40 hover:shadow-rose-400/50 transition-shadow">
                <ShieldCheck className="h-4 w-4" /> Start Secure
              </a>
            </nav>

            <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white/60 border border-white/50 backdrop-blur-xl text-pink-900" onClick={() => setOpen(!open)}>
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4">
              <div className="grid gap-3 rounded-xl p-3 backdrop-blur-xl bg-white/60 border border-white/50">
                <NavLink href="#workflows">Automations</NavLink>
                <NavLink href="#dashboards">Dashboards</NavLink>
                <NavLink href="#web">Websites</NavLink>
                <NavLink href="#security">Security</NavLink>
                <NavLink href="#brand">Branding</NavLink>
                <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 text-white px-4 py-2 text-sm shadow-lg shadow-rose-300/40">
                  <ShieldCheck className="h-4 w-4" /> Start Secure
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
