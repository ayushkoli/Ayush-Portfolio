import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "@/components/header"
import Hero from "@/sections/hero"
import Projects from "@/sections/projects"
import Contact from "@/sections/contact"
import Footer from "@/components/footer"
import SkillsGrid from "@/sections/skill-grid"
import Experience from "@/sections/experience"
import { Particles } from "@/components/ui/particles"


function HomePage() {
  return (
    <main className="relative">
      {/* Ambient animated background container */}
      <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden">
        {/* Particles behind all content */}
        <Particles className="absolute inset-0 w-full h-full" quantity={100} ease={80} />
      </div>

      <Header />
      <Hero />
      <Experience />
      <Projects />
      <SkillsGrid />
      <Contact />
      <Footer />
    </main>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  )
}

export default App
