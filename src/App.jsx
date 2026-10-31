import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#CCFF00] selection:text-black">
      {/* Sleek Floating Navbar */}
      <Navbar />

      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About / Introduction Section */}
        <About />

        {/* 3. Services Section */}
        <Services />

        {/* 4. Projects / Selected Work Section */}
        <Projects />

        {/* 5. Contact Section */}
        <Contact />
      </main>

      {/* 6. Footer Section */}
      <Footer />
    </div>
  )
}

