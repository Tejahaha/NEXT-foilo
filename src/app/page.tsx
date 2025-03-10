import type { Metadata } from "next"
import Hero from "../components/hero"
import About from "../components/about"
import TechStack from "../components/tech-stack"
import Projects from "../components/projects"
import Contact from "../components/contact"
import Footer from "../components/footer"
import Navbar from "../components/navbar"

export const metadata: Metadata = {
  title: "Dev.Teja | Portfolio",
  description: "Professional portfolio of Teja Kanchipamu, a web developer based in India.",
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

