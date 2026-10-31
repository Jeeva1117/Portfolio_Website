import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef(null)
  const headingDesktopRef = useRef(null)
  const headingMobileRef = useRef(null)
  const portraitRef = useRef(null)
  const cardRef = useRef(null)
  const paragraphsRef = useRef([])

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

      // Card entrance and paragraph stagger animation
      if (cardRef.current) {
        gsap.fromTo(
          cardRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardRef.current,
              start: 'top 85%',
              toggleActions: 'play reverse play reverse',
            },
          }
        )
      }

      // Subtle paragraph stagger entrance
      if (paragraphsRef.current.length > 0) {
        gsap.fromTo(
          paragraphsRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.18,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardRef.current,
              start: 'top 80%',
              toggleActions: 'play reverse play reverse',
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
          {/* Left Column: Developer Profile Portrait */}
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
                  alt="Jeevanantham"
                  className="w-full h-auto object-cover contrast-[1.02] group-hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Giant INTRO Heading & LinkedIn-Inspired Introduction Card */}
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

            {/* Clean Professional Glassmorphism Introduction Card */}
            <div
              ref={cardRef}
              id="about-card"
              className="relative p-7 sm:p-9 md:p-11 rounded-[28px] md:rounded-[32px] bg-white/[0.05] hover:bg-white/[0.07] backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-colors duration-500"
            >
              <div className="space-y-5 sm:space-y-6 text-[15.5px] sm:text-[17px] md:text-[18px] leading-[1.8] font-light text-gray-300">
                <p ref={(el) => (paragraphsRef.current[0] = el)}>
                  Hello! I'm <span className="text-white font-semibold">Jeevanantham</span>, an aspiring technology professional passionate about building intelligent solutions that solve real-world problems. I enjoy exploring <span className="text-[#CCFF00] font-medium">Artificial Intelligence</span>, <span className="text-white font-medium">Machine Learning</span>, <span className="text-[#CCFF00] font-medium">Generative AI</span>, and <span className="text-[#CCFF00] font-medium">Agentic AI</span>.
                </p>

                <p ref={(el) => (paragraphsRef.current[1] = el)}>
                  I'm particularly interested in developing <span className="text-white font-medium">LLM-powered applications</span>, <span className="text-[#CCFF00] font-medium">Retrieval-Augmented Generation (RAG)</span> systems, and <span className="text-white font-medium">intelligent AI agents</span>. Through hands-on projects, I continuously explore new technologies, strengthen my problem-solving skills, and turn innovative ideas into practical applications.
                </p>

                <p ref={(el) => (paragraphsRef.current[2] = el)}>
                  I believe in continuous learning, experimenting with emerging technologies, and building AI solutions that create meaningful impact.
                </p>
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
