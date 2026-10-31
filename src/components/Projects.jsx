import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight } from 'lucide-react'
import { GithubIcon } from './Icons'

gsap.registerPlugin(ScrollTrigger)

export default function Projects() {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const projectRowsRef = useRef([])

  const projectsData = [
    {
      num: '01',
      titleMain: 'SELF-HEALING',
      titleAccent: 'rag',
      titleEnd: 'AGENT',
      description:
        'An enterprise-grade Retrieval-Augmented Generation (RAG) agent built with FastAPI, LangGraph, and PostgreSQL. Features an autonomous self-healing feedback loop that dynamically detects hallucination, validates retrieved semantic chunks, and re-queries for zero-defect knowledge synthesis.',
      tech: ['Python', 'FastAPI', 'LangGraph', 'LLMs', 'PostgreSQL'],
      image: '/images/project-rag.jpg',
      demoUrl: 'https://github.com/Jeeva1117',
      githubUrl: 'https://github.com/Jeeva1117',
      reverse: false,
    },
    {
      num: '02',
      titleMain: 'AI SPEECH-TO-SIGN',
      titleAccent: 'language',
      titleEnd: 'TRANSLATOR',
      description:
        'A real-time accessibility pipeline that captures continuous spoken audio, extracts high-fidelity linguistic phonemes via Whisper NLP, and renders fluid 3D sign-language skeletal representations with ultra-low latency for seamless deaf-mute communication.',
      tech: ['Python', 'Speech Recognition', 'NLP', 'Computer Vision'],
      image: '/images/project-sign.jpg',
      demoUrl: 'https://github.com/Jeeva1117',
      githubUrl: 'https://github.com/Jeeva1117',
      reverse: true,
    },
    {
      num: '03',
      titleMain: 'INSTAGRAM',
      titleAccent: 'ai',
      titleEnd: 'AUTOMATION PLATFORM',
      description:
        'An AI-powered social chat automation engine that instantly responds to customer direct messages, qualifies inbound enterprise leads, automates multi-turn conversations, and syncs seamlessly with CRM pipelines to skyrocket engagement.',
      tech: ['React.js', 'FastAPI', 'LangChain', 'OpenAI', 'Redis'],
      image: '/images/project-insta.jpg',
      demoUrl: 'https://github.com/Jeeva1117',
      githubUrl: 'https://github.com/Jeeva1117',
      reverse: false,
    },
    {
      num: '04',
      titleMain: 'JARVIS',
      titleAccent: 'ai',
      titleEnd: 'DESKTOP ASSISTANT',
      description:
        'A futuristic hands-free desktop voice assistant powered by local speech models and LLMs. Enables zero-touch OS control, automated multi-app execution, code generation, and intelligent system telemetry with high-precision natural language understanding.',
      tech: ['Python', 'Whisper', 'Gemini API', 'System Automation'],
      image: '/images/project-jarvis.svg',
      demoUrl: 'https://github.com/Jeeva1117',
      githubUrl: 'https://github.com/Jeeva1117',
      reverse: true,
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 85%',
            },
          }
        )
      }

      // Project row animations
      projectRowsRef.current.forEach((row) => {
        if (!row) return
        const img = row.querySelector('.project-img-wrapper')
        const content = row.querySelectorAll('.project-text-elem')

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        })

        tl.fromTo(
          img,
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
        ).fromTo(
          content,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' },
          '-=0.7'
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleReadMore = (e) => {
    e.preventDefault()
    window.open('https://github.com/Jeeva1117', '_blank', 'noopener,noreferrer')
  }

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative w-full bg-[#050505] text-white px-6 md:px-16 pt-20 md:pt-32 pb-24 md:pb-36 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header: Two Columns */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-16 md:pb-24 border-b border-white/10"
        >
          {/* Left Giant Title */}
          <div>
            <h2
              className="tracking-tighter uppercase font-black"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 6rem)',
                lineHeight: '0.9',
              }}
            >
              <span
                style={{
                  background: 'linear-gradient(180deg, #FFFFFF 0%, #D1D5DB 45%, #4B5563 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                SELECTED
              </span>{' '}
              <span className="editorial-serif font-light lowercase text-[#9CA3AF]">
                work
              </span>
            </h2>
          </div>

          {/* Right Editorial Description & Read More CTA */}
          <div className="max-w-[420px] flex flex-col items-start md:items-end text-left md:text-right">
            <p className="text-sm md:text-base text-[#9CA3AF] font-light leading-relaxed mb-4">
              As an AI Engineer using modern ideas, simplicity in design and universal visual identification tailored to dedicated and current market demands.
            </p>

            <button
              onClick={handleReadMore}
              className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#CCFF00] hover:bg-[#b8e600] text-black transition-all duration-300 shadow-[0_0_20px_rgba(204,255,0,0.3)]"
            >
              <span>Read More</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* Alternating Editorial Project List */}
        <div className="mt-16 md:mt-24 space-y-28 md:space-y-40">
          {projectsData.map((project, index) => {
            return (
              <div
                key={project.num}
                ref={(el) => (projectRowsRef.current[index] = el)}
                className="group relative"
              >
                {/* Desktop 2-Column Alternating Grid */}
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                    project.reverse ? 'lg:grid-flow-dense' : ''
                  }`}
                >
                  {/* Image Column */}
                  <div
                    className={`project-img-wrapper lg:col-span-7 ${
                      project.reverse ? 'lg:col-start-6' : 'lg:col-start-1'
                    }`}
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[4px] bg-[#0c0c0e] border border-white/10 group-hover:border-white/30 transition-all duration-500 shadow-2xl">
                      <img
                        src={project.image}
                        alt={`${project.titleMain} ${project.titleEnd}`}
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 pointer-events-none" />
                    </div>
                  </div>

                  {/* Text Details Column */}
                  <div
                    className={`lg:col-span-5 flex flex-col justify-center ${
                      project.reverse ? 'lg:col-start-1 lg:row-start-1' : 'lg:col-start-8'
                    }`}
                  >
                    {/* Project Number */}
                    <div className="project-text-elem text-[#CCFF00] font-mono text-sm md:text-base font-bold uppercase tracking-widest mb-3">
                      {project.num}
                    </div>

                    {/* Editorial Title */}
                    <h3
                      className="project-text-elem font-black tracking-tight uppercase text-white mb-4"
                      style={{
                        fontSize: 'clamp(1.8rem, 3.2vw, 3.6rem)',
                        lineHeight: '1.05',
                      }}
                    >
                      {project.titleMain}{' '}
                      <span className="editorial-serif font-light lowercase text-[#9CA3AF]">
                        {project.titleAccent}
                      </span>{' '}
                      {project.titleEnd}
                    </h3>

                    {/* Project Description */}
                    <p className="project-text-elem text-sm md:text-base text-[#9CA3AF] font-light leading-relaxed max-w-[500px] mb-6">
                      {project.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="project-text-elem flex flex-wrap gap-2 mb-8">
                      {project.tech.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-white/80"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action CTAs */}
                    <div className="project-text-elem flex items-center gap-4">
                      {/* Live Demo Button */}
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#CCFF00] hover:bg-[#b8e600] text-black border border-[#CCFF00] transition-all duration-300 shadow-md"
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>

                      {/* GitHub Button */}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-transparent hover:bg-white text-white hover:text-black border border-white/30 hover:border-white transition-all duration-300"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>GitHub</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
