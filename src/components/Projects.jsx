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
      title: 'Self-Healing RAG Agent',
      domain: 'Generative AI · Agentic AI',
      description:
        'An intelligent self-healing Retrieval-Augmented Generation system that automatically detects retrieval failures, evaluates response quality, and improves answers through multi-agent workflows.',
      tech: [
        'Python',
        'LangGraph',
        'LangChain',
        'Groq LLM',
        'RAG',
        'Hybrid Search',
        'Reranking',
        'FastAPI',
        'React',
        'PostgreSQL',
      ],
      image: '/images/project-rag.webp',
      demoUrl: 'https://github.com/Jeeva1117',
      githubUrl: 'https://github.com/Jeeva1117',
      reverse: false,
      isFlagship: true,
    },
    {
      num: '02',
      title: 'AI Speech-to-Sign Language Translator',
      domain: 'Deep Learning · NLP · Computer Vision',
      description:
        'A real-time AI application that converts spoken language into sign-language sequences and generates corresponding 3D avatar animations to improve communication accessibility.',
      tech: [
        'Python',
        'Deep Learning',
        'NLP',
        'Speech Recognition',
        'WLASL',
        'Transformers',
        'Computer Vision',
        '3D Avatar Animation',
      ],
      image: '/images/project-sign.webp',
      demoUrl: 'https://github.com/Jeeva1117',
      githubUrl: 'https://github.com/Jeeva1117',
      reverse: true,
      isFlagship: false,
    },
    {
      num: '03',
      title: 'AI Data Analyst Agent',
      domain: 'Agentic AI · Data Science',
      description:
        'An intelligent AI data analyst that processes datasets, understands natural-language questions, performs automated analysis, generates visualizations, and delivers actionable business insights.',
      tech: [
        'Python',
        'LangGraph',
        'LLMs',
        'Pandas',
        'NumPy',
        'Scikit-learn',
        'Text-to-SQL',
        'FastAPI',
        'PostgreSQL',
      ],
      image: '/images/project-data-analyst.webp',
      demoUrl: 'https://github.com/Jeeva1117',
      githubUrl: 'https://github.com/Jeeva1117',
      reverse: false,
      isFlagship: false,
    },
    {
      num: '04',
      title: 'TubeNexa – AI-Powered YouTube Analytics',
      domain: 'AI Analytics · Machine Learning',
      description:
        'An AI-powered YouTube analytics platform that evaluates channel performance, analyzes video metrics, identifies growth opportunities, and provides intelligent recommendations for content creators.',
      tech: [
        'Python',
        'Machine Learning',
        'Data Analytics',
        'YouTube Data API',
        'LLMs',
        'Data Visualization',
      ],
      image: '/images/project-tubenexa.webp',
      demoUrl: 'https://github.com/Jeeva1117',
      githubUrl: 'https://github.com/Jeeva1117',
      reverse: true,
      isFlagship: false,
    },
    {
      num: '05',
      title: 'AgroNixa – AI-Powered Plant Disease Detection & Voice Assistant',
      domain: 'AI · Machine Learning · Voice AI',
      description:
        'An intelligent agricultural AI assistant that detects plant diseases from leaf images, identifies potential infections, and provides relevant treatment recommendations. It also allows farmers to interact through voice.',
      tech: [
        'Python',
        'Machine Learning',
        'Deep Learning',
        'CNN',
        'Computer Vision',
        'Image Classification',
        'Speech Recognition',
        'Text-to-Speech',
        'NLP',
        'FastAPI',
      ],
      image: '/images/project-agronixa.webp',
      demoUrl: 'https://github.com/Jeeva1117',
      githubUrl: 'https://github.com/Jeeva1117',
      reverse: false,
      isFlagship: false,
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header entrance animation
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

      // Smooth scroll-reveal for each project row
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
          { opacity: 0, y: 60, scale: 0.98 },
          { opacity: 1, y: 0, scale: 1, duration: 1.1, ease: 'power3.out' }
        ).fromTo(
          content,
          { opacity: 0, y: 35 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out' },
          '-=0.8'
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
      className="relative w-full bg-[#050505] text-white px-6 md:px-16 pt-24 md:pt-36 pb-28 md:pb-40 overflow-hidden"
    >
      {/* Background ambient lighting accent */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#CCFF00]/[0.02] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[600px] h-[600px] bg-[#10b981]/[0.02] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto">
        {/* Section Header: Two Columns */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-16 md:pb-24 border-b border-white/10"
        >
          {/* Left Giant Title */}
          <div>
            <span className="block text-xs font-mono uppercase tracking-widest text-[#CCFF00] mb-3">
              // ORIGINAL AI ARCHITECTURE &amp; SYSTEMS
            </span>
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
          <div className="max-w-[440px] flex flex-col items-start md:items-end text-left md:text-right">
            <p className="text-sm md:text-base text-[#9CA3AF] font-light leading-relaxed mb-4">
              Production-ready artificial intelligence systems, multi-agent frameworks, computer-vision models, and deep-learning pipelines engineered for real-world impact.
            </p>

            <button
              onClick={handleReadMore}
              className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#CCFF00] hover:bg-[#b8e600] text-black transition-all duration-300 shadow-[0_0_20px_rgba(204,255,0,0.3)]"
            >
              <span>Explore GitHub</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* 5 Original Projects Showcase */}
        <div className="mt-20 md:mt-28 space-y-28 md:space-y-40">
          {projectsData.map((project, index) => {
            return (
              <div
                key={project.num}
                ref={(el) => (projectRowsRef.current[index] = el)}
                className={`group relative ${
                  project.isFlagship
                    ? 'p-6 sm:p-8 md:p-12 rounded-[28px] md:rounded-[36px] bg-white/[0.02] border border-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.9)]'
                    : ''
                }`}
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
                    <div className="relative group/img overflow-hidden rounded-2xl md:rounded-[24px] bg-[#090b0e] border border-white/10 group-hover:border-white/30 transition-all duration-500 shadow-2xl">
                      {/* Ambient Image Glow on Hover */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-[#CCFF00]/10 to-[#10b981]/10 rounded-2xl blur-xl opacity-0 group-hover/img:opacity-100 transition-opacity duration-700 pointer-events-none" />

                      <div className="relative aspect-[16/9] w-full overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover opacity-90 group-hover/img:opacity-100 group-hover/img:scale-105 transition-all duration-700 ease-out"
                        />
                        {/* Subtle bottom vignette overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 pointer-events-none" />
                      </div>

                      {/* Flagship Tag Overlay on Visual if Flagship */}
                      {project.isFlagship && (
                        <div className="absolute top-4 left-4 py-1.5 px-3.5 rounded-full bg-black/80 backdrop-blur-md border border-[#CCFF00]/40 flex items-center gap-2 text-[11px] font-mono text-[#CCFF00] shadow-lg">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] animate-ping" />
                          <span>FLAGSHIP AGENTIC SYSTEM</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Text Details Column */}
                  <div
                    className={`lg:col-span-5 flex flex-col justify-center ${
                      project.reverse ? 'lg:col-start-1 lg:row-start-1' : 'lg:col-start-8'
                    }`}
                  >
                    {/* Domain Category Pill & Project Number */}
                    <div className="project-text-elem flex items-center justify-between gap-4 mb-3">
                      <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#CCFF00] bg-[#CCFF00]/10 px-3 py-1 rounded-full border border-[#CCFF00]/25">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00]" />
                        {project.domain}
                      </span>
                      <span className="text-[#CCFF00] font-mono text-xl md:text-2xl font-black tracking-widest">
                        {project.num}
                      </span>
                    </div>

                    {/* Project Title */}
                    <h3
                      className="project-text-elem font-black tracking-tight text-white mb-4"
                      style={{
                        fontSize: 'clamp(1.75rem, 2.6vw, 2.8rem)',
                        lineHeight: '1.1',
                      }}
                    >
                      {project.title}
                    </h3>

                    {/* Exact Project Description */}
                    <p className="project-text-elem text-sm md:text-base text-[#9CA3AF] font-light leading-relaxed max-w-[520px] mb-6">
                      {project.description}
                    </p>

                    {/* Technology Tags */}
                    <div className="project-text-elem flex flex-wrap gap-2 mb-8">
                      {project.tech.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white/85 transition-colors"
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
