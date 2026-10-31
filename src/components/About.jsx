import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef(null)
  const headingDesktopRef = useRef(null)
  const headingMobileRef = useRef(null)
  const textWordsRef = useRef([])

  // The paragraph text broken into individual words for GSAP word-by-word scrub reveal
  const paragraphText = `An enthusiastic AI full-stack developer who loves to build state-of-the-art web and mobile applications. I love turning concepts into scalable products using tech stack like React, FastAPI, Node.js, and artificial intelligence technologies. I always strive to keep my code clean and design great user experience along with learning new technologies like LLMs, LangChain, and MCP.`

  const words = paragraphText.split(' ')

  const highlightedWords = ['React,', 'FastAPI,', 'Node.js,', 'LLMs,', 'LangChain,', 'MCP.', 'artificial', 'intelligence']

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro Heading animation for desktop
      if (headingDesktopRef.current) {
        gsap.fromTo(
          headingDesktopRef.current,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headingDesktopRef.current,
              start: 'top 85%',
              toggleActions: 'play reverse play reverse',
            },
          }
        )
      }

      // Intro Heading animation for mobile
      if (headingMobileRef.current) {
        gsap.fromTo(
          headingMobileRef.current,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headingMobileRef.current,
              start: 'top 85%',
              toggleActions: 'play reverse play reverse',
            },
          }
        )
      }

      // Word-by-word scroll reveal animation with GSAP ScrollTrigger
      if (textWordsRef.current.length > 0) {
        gsap.fromTo(
          textWordsRef.current,
          {
            color: '#52525b',
            opacity: 0.2,
          },
          {
            color: '#ffffff',
            opacity: 1,
            stagger: 0.1,
            ease: 'none',
            scrollTrigger: {
              trigger: '#about-card',
              start: 'top 85%',
              end: 'bottom 50%',
              scrub: true,
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const row1Frontend = [
    'React.js', 'Next.js', 'React Native', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Bootstrap', 'Material UI', 'HTML5'
  ]

  const row2Backend = [
    'Python', 'FastAPI', 'Node.js', 'Express.js', 'REST APIs', 'Database', 'MongoDB', 'PostgreSQL'
  ]

  const row3AI = [
    'ChatGPT', 'Claude', 'Cursor AI', 'GitHub Copilot', 'Google Gemini', 'LangChain', 'MCP', 'Prompt Engineering', 'Agentic AI'
  ]

  const row4Tools = [
    'Git', 'GitHub', 'Docker', 'Postman', 'VS Code', 'CI/CD'
  ]

  // Render seamless ticker row with continuous animation
  const renderTicker = (items, directionClass) => {
    const repeated = [...items, ...items, ...items, ...items]
    return (
      <div className="relative w-full overflow-hidden whitespace-nowrap py-3">
        <div className={`inline-flex items-center gap-6 ${directionClass} will-change-transform`}>
          {repeated.map((item, idx) => (
            <div key={idx} className="inline-flex items-center gap-6 text-[#9CA3AF] hover:text-white transition-colors">
              <span className="text-sm md:text-lg font-medium tracking-widest uppercase font-mono">
                {item}
              </span>
              <span className="text-xs text-[#CCFF00] font-bold">·</span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen w-full bg-[#050505] text-white pt-24 md:pt-32 pb-0 overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Mobile Heading */}
        <div className="block lg:hidden text-center mb-8">
          <h2
            ref={headingMobileRef}
            className="font-black uppercase tracking-tighter"
            style={{
              fontSize: 'clamp(3.5rem, 18vw, 8rem)',
              lineHeight: '0.85',
              background: 'linear-gradient(180deg, #FFFFFF 0%, #D1D5DB 45%, #4B5563 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 20px 30px rgba(0,0,0,0.8)',
            }}
          >
            Intro
          </h2>
        </div>

        {/* Desktop 2-Column Wireframe Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Developer Portrait */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <div className="relative group">
              {/* Subtle ambient glow behind portrait */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#CCFF00]/10 via-transparent to-white/5 rounded-3xl blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-700" />
              
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#080808] shadow-[0_25px_60px_rgba(0,0,0,0.9)]">
                <img
                  src="/images/portrait-studio.jpg"
                  alt="Jeevanantham A — Professional Studio Portrait"
                  className="w-[190px] sm:w-[220px] lg:w-[260px] h-auto object-cover grayscale contrast-110 hover:grayscale-0 transition-all duration-700"
                />
                
                {/* Tech badge overlay */}
                <div className="absolute bottom-3 inset-x-3 py-1.5 px-3 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 flex items-center justify-between text-[11px] text-[#9CA3AF]">
                  <span className="font-mono text-[#CCFF00]">● AI ENGINEER</span>
                  <span className="text-white/60">CHENNAI</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Giant INTRO Heading & Glassmorphism Card */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            {/* Giant INTRO Heading for Desktop */}
            <div className="hidden lg:block mb-4">
              <h2
                ref={headingDesktopRef}
                className="font-black uppercase tracking-tighter"
                style={{
                  fontSize: 'clamp(7rem, 11rem, 12rem)',
                  lineHeight: '0.85',
                  letterSpacing: '-0.07em',
                  background: 'linear-gradient(180deg, #FFFFFF 0%, #D1D5DB 40%, #4B5563 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: '0 25px 40px rgba(0,0,0,0.9)',
                }}
              >
                Intro
              </h2>
            </div>

            {/* Premium Glassmorphism Description Card */}
            <div
              id="about-card"
              className="relative p-6 sm:p-8 md:p-10 rounded-[28px] md:rounded-[32px] bg-white/[0.05] hover:bg-white/[0.07] backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-colors duration-500"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-4 tracking-tight">
                Hey, I'm <span className="text-[#CCFF00]">Jeevanantham A</span> (Jeeva).
              </h3>

              <p className="text-base sm:text-lg md:text-[20px] leading-relaxed font-light text-left md:text-left flex flex-wrap gap-x-1.5 gap-y-1">
                {words.map((word, index) => {
                  const isHighlighted = highlightedWords.some((hw) =>
                    word.toLowerCase().includes(hw.toLowerCase().replace(/[.,]/g, ''))
                  )
                  return (
                    <span
                      key={index}
                      ref={(el) => (textWordsRef.current[index] = el)}
                      className={`transition-colors duration-200 ${
                        isHighlighted ? 'font-semibold text-white' : ''
                      }`}
                    >
                      {word}
                    </span>
                  )
                })}
              </p>

              {/* Education & Experience Highlights Pill Bar */}
              <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div>
                  <span className="text-[#9CA3AF] block mb-1 uppercase tracking-wider">Education</span>
                  <p className="text-white font-medium">B.Tech AI & Data Science (2023–2027)</p>
                  <p className="text-[#CCFF00]">CGPA: 8.7 / 10.0 · Gojan SET</p>
                </div>
                <div>
                  <span className="text-[#9CA3AF] block mb-1 uppercase tracking-wider">Experience</span>
                  <p className="text-white font-medium">AI/ML Intern @ VIP.S Tech</p>
                  <p className="text-[#9CA3AF]">Data Analyst Intern @ Pro Codework</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Skills Marquee Ticker */}
      <div className="mt-20 md:mt-28 w-full bg-[#030303] border-t border-white/5 py-6">
        <div className="max-w-[1440px] mx-auto px-6 mb-3 flex items-center justify-between text-xs font-mono text-[#9CA3AF] uppercase tracking-widest">
          <span>// CORE TECHNICAL CAPABILITIES</span>
          <span className="text-[#CCFF00]">CONTINUOUS STREAM</span>
        </div>

        {/* Row 1 — Frontend (Left -> Right) */}
        {renderTicker(row1Frontend, 'animate-marquee-right')}

        {/* Row 2 — Backend (Right -> Left) */}
        {renderTicker(row2Backend, 'animate-marquee-left')}

        {/* Row 3 — AI (Left -> Right) */}
        {renderTicker(row3AI, 'animate-marquee-right-fast')}

        {/* Row 4 — Tools (Right -> Left) */}
        {renderTicker(row4Tools, 'animate-marquee-left-fast')}
      </div>
    </section>
  )
}
