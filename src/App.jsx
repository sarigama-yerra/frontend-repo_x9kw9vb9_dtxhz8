import LiquidNav from './components/LiquidNav'
import BackgroundPetals from './components/BackgroundPetals'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import Projects from './components/Projects'
import Contracts from './components/Contracts'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-pink-950">
      <BackgroundPetals />
      <LiquidNav brand="Dexter" />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <Projects />
        <Contracts />
        <CTA />
      </main>
      <footer className="py-10 text-center text-sm text-pink-900/70">
        © {new Date().getFullYear()} Dexter — Crafted with care.
      </footer>
    </div>
  )
}

export default App
