import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-white text-pink-950">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <CTA />
      </main>
      <footer className="py-10 text-center text-sm text-pink-900/70">
        © {new Date().getFullYear()} Flames Agency — Crafted with care.
      </footer>
    </div>
  )
}

export default App
