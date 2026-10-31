import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef(null)
  const headingDesktopRef = useRef(null)
  const headingMobileRef = useRef(null)
  const portraitRef = useRef(null)
  const textWordsRef = useRef([])

  // Exact requested introduction quote
  const paragraphText = `I'm Jeevanantham, an AI Engineer passionate about building intelligent applications using Artificial Intelligence, Machine Learning, Generative AI, and Agentic AI. I enjoy developing practical AI solutions, intelligent agents, RAG systems, and real-world automation applications.`

  const words = paragraphText.split(' ')

  const highlightedWords = [
    'Jeevanantham,',
    'AI',
    'Engineer',
    'Artificial',
    'Intelligence,',
    'Machine',
    'Learning,',
    'Generative',
    'Agentic',
    'AI.',
    'intelligent',
    'agents,',
    'RAG',
    'systems,',
    'automation',
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Portrait entrance animation
      if (portraitRef.current) {
        gsap.fromTo(
          portraitRef.current,
          { opacity: 0, y: 60, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: portraitRef.current,
              start: 'top 85%',
              toggleActions: 'play reverse play reverse',
            },
          }
        )
      }

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
    'ChatGPT', 'Claude', 'Cursor AI', 'GitHub Copilot', 'Google Gemini', 'LangChain', 'LangGraph', 'MCP', 'Prompt Engineering', 'Agentic AI'
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Developer Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div
              ref={portraitRef}
              className="relative group w-full max-w-[340px] sm:max-w-[360px] lg:max-w-[390px]"
            >
              {/* Soft Ambient Glow behind portrait */}
              <div className="absolute -inset-2 md:-inset-3 bg-gradient-to-tr from-[#CCFF00]/15 via-white/5 to-[#10b981]/15 rounded-3xl blur-2xl opacity-60 group-hover:opacity-95 transition-opacity duration-700 pointer-events-none" />

              <div className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-white/10 group-hover:border-white/25 bg-[#09090b] shadow-[0_25px_60px_rgba(0,0,0,0.9)] transition-all duration-500">
                <img
                  src="/images/about-portrait.jpg"
                  alt="Jeevanantham A — AI Engineer"
                  className="w-full h-auto object-cover contrast-[1.02] group-hover:scale-[1.02] transition-transform duration-700"
                />

                {/* Tech badge overlay */}
                <div className="absolute bottom-3 inset-x-3 py-2 px-3.5 rounded-xl bg-black/75 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs text-[#9CA3AF] shadow-lg">
                  <span className="font-mono text-[#CCFF00] font-semibold tracking-wider">● AI ENGINEER</span>
                  <span className="text-white/60 font-mono text-[11px]">CHENNAI, INDIA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Giant INTRO Heading & Glassmorphism Card */}
          <div className="lg:col-span-7 flex flex-col justify-center">
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
                Hey, I'm <span className="text-[#CCFF00]">Jeevanantham A</span>.
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

              {/* Personal Details & Live Profile Links Bar */}
              <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-5 text-xs font-mono">
                <div>
                  <span className="text-[#9CA3AF] block mb-1 uppercase tracking-wider font-semibold">Location &amp; Role</span>
                  <div className="flex items-center gap-1.5 text-white font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#CCFF00]" />
                    <span>Chennai, Tamil Nadu, India</span>
                  </div>
                  <p className="text-[#CCFF00] font-semibold mt-0.5">Role: AI Engineer</p>
                </div>

                <div>
                  <span className="text-[#9CA3AF] block mb-1 uppercase tracking-wider font-semibold">Direct Contact</span>
                  <a
                    href="mailto:arjunjeeva33@gmail.com"
                    className="flex items-center gap-1.5 text-white/90 hover:text-[#CCFF00] transition-colors break-all"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#CCFF00] shrink-0" />
                    <span>arjunjeeva33@gmail.com</span>
                  </a>
                  <a
                    href="tel:+917418573315"
                    className="flex items-center gap-1.5 text-white/90 hover:text-[#CCFF00] transition-colors mt-0.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#CCFF00] shrink-0" />
                    <span>+91 74185 73315</span>
                  </a>
                </div>
              </div>

              {/* Verified Online Profiles */}
              <div className="mt-5 pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                <span className="text-[#71717a]">PROFILES:</span>
                <div className="flex items-center gap-4">
                  <a
                    href="https://linkedin.com/in/jeevanantham-arjunkumar-33aj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#9CA3AF] hover:text-[#CCFF00] transition-colors flex items-center gap-1"
                  >
                    <span>LinkedIn: Jeevanantham -aj</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <span className="text-white/20">·</span>
                  <a
                    href="https://github.com/Jeeva1117"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#9CA3AF] hover:text-[#CCFF00] transition-colors flex items-center gap-1"
                  >
                    <span>GitHub: Jeeva1117</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Skills Marquee Ticker (Anchored with id="skills") */}
      <div id="skills" className="mt-20 md:mt-28 w-full bg-[#030303] border-t border-white/5 py-6">
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
