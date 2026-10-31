import React, { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Services() {
  const [expandedIndex, setExpandedIndex] = useState(0) // Default first item expanded
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const headerRef = useRef(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { y: -100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const services = [
    {
      num: '01',
      title: 'AI FULL STACK DEVELOPMENT',
      description:
        'I build scalable, high-performance web applications by combining modern frontend frameworks, robust backend systems, and AI-powered solutions. From planning and architecture to deployment, I create secure, responsive, and production-ready digital experiences.',
      capabilities: [
        'Develop responsive web applications with React.js & Next.js',
        'Build secure REST APIs using FastAPI & Node.js',
        'Design scalable backend architecture and databases',
        'Integrate AI-powered features and automation',
        'Deliver clean, maintainable, production-ready code',
      ],
      hasCta: true,
      ctaText: 'VIEW PROJECTS',
    },
    {
      num: '02',
      title: 'FRONTEND DEVELOPMENT',
      description:
        'I create fast, responsive, and visually engaging user interfaces that provide seamless user experiences across desktop, tablet, and mobile devices.',
      capabilities: [
        'React.js',
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'GSAP Animations',
        'Responsive Design',
      ],
      hasCta: false,
    },
    {
      num: '03',
      title: 'BACKEND & API DEVELOPMENT',
      description:
        'I develop secure and scalable backend systems with well-structured APIs, efficient databases, and authentication mechanisms to power modern web applications.',
      capabilities: [
        'FastAPI',
        'Node.js',
        'Express.js',
        'MongoDB',
        'PostgreSQL',
        'JWT Authentication',
      ],
      hasCta: false,
    },
    {
      num: '04',
      title: 'AI & AUTOMATION',
      description:
        'I integrate artificial intelligence into applications to automate workflows, improve productivity, and create intelligent user experiences using modern AI technologies.',
      capabilities: [
        'OpenAI & Gemini API Integration',
        'LangChain & LangGraph',
        'MCP (Model Context Protocol)',
        'Prompt Engineering & Agentic Workflows',
        'AI Chatbots & RAG Systems',
        'Autonomous Workflow Automation',
      ],
      hasCta: false,
    },
    {
      num: '05',
      title: 'MOBILE DEVELOPMENT',
      description:
        'I build responsive cross-platform mobile applications with smooth performance, intuitive interfaces, and seamless integration with backend services.',
      capabilities: [
        'React Native',
        'API Integration',
        'Responsive UI',
        'State Management',
        'Performance Optimization',
      ],
      hasCta: false,
    },
    {
      num: '06',
      title: 'DEVOPS & TOOLS',
      description:
        'I streamline development workflows with modern tools for version control, deployment, testing, and collaboration, ensuring reliable and efficient software delivery.',
      capabilities: [
        'Git & GitHub',
        'Docker',
        'Postman',
        'CI/CD Pipelines',
        'VS Code & Terminal Tooling',
        'Cloud Deployment & Monitoring',
      ],
      hasCta: false,
    },
  ]

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  const handleViewProjects = (e) => {
    e.stopPropagation()
    const target = document.querySelector('#projects')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative w-full bg-[#050505] text-white pt-24 md:pt-36 pb-24 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Giant Top-Right Heading */}
        <div className="flex justify-end mb-16 md:mb-24">
          <h2
            ref={headerRef}
            className="text-right font-black uppercase tracking-tighter"
            style={{
              fontSize: 'clamp(2.5rem, 7.5vw, 8rem)',
              lineHeight: '0.88',
              letterSpacing: '-0.05em',
              background: 'linear-gradient(180deg, #FFFFFF 0%, #D1D5DB 40%, #4B5563 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 20px 40px rgba(0,0,0,0.9)',
            }}
          >
            WHAT WE
            <br />
            CAN DO
          </h2>
        </div>

        {/* Services Accordion List */}
        <div className="border-b border-white/20">
          {services.map((service, index) => {
            const isExpanded = expandedIndex === index
            const isHovered = hoveredIndex === index

            return (
              <div
                key={service.num}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleToggle(index)}
                className={`relative border-t border-white/20 cursor-pointer transition-colors duration-300 select-none ${
                  isHovered ? 'bg-[#CCFF00] text-black' : 'bg-transparent text-white'
                }`}
              >
                {/* Main Accordion Row Header */}
                <div className="py-6 md:py-10 px-4 md:px-8 flex items-center justify-between">
                  <div className="flex items-center gap-6 md:gap-16">
                    {/* Service Number */}
                    <span
                      className={`text-lg md:text-2xl font-mono font-bold tracking-widest transition-colors duration-300 ${
                        isHovered ? 'text-black' : 'text-[#CCFF00]'
                      }`}
                    >
                      {service.num}
                    </span>

                    {/* Service Title */}
                    <h3
                      className={`text-lg sm:text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight transition-colors duration-300 ${
                        isHovered ? 'text-black' : 'text-white'
                      }`}
                    >
                      {service.title}
                    </h3>
                  </div>

                  {/* Arrow Indicator */}
                  <div className="flex items-center">
                    <svg
                      className={`w-7 h-7 md:w-10 md:h-10 transition-transform duration-300 ${
                        isExpanded ? 'rotate-[-45deg]' : 'rotate-45'
                      } ${isHovered ? 'text-black' : 'text-[#CCFF00]'}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>

                {/* Expanded Content Drawer */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isExpanded ? 'max-h-[800px] opacity-100 pb-10 px-4 md:px-8' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pt-4 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 border-t border-black/10">
                    {/* Left Column: Capabilities List */}
                    <div className="lg:col-span-6 pl-0 md:pl-20">
                      <h4
                        className={`text-xs font-mono uppercase tracking-widest mb-4 ${
                          isHovered ? 'text-black/70' : 'text-[#9CA3AF]'
                        }`}
                      >
                        // KEY CAPABILITIES
                      </h4>
                      <ul className="space-y-3">
                        {service.capabilities.map((cap, capIdx) => (
                          <li
                            key={capIdx}
                            className={`flex items-start gap-3 text-sm md:text-base leading-relaxed ${
                              isHovered ? 'text-black font-medium' : 'text-[#D1D5DB]'
                            }`}
                          >
                            <span
                              className={`mt-1.5 w-2 h-2 shrink-0 ${
                                isHovered ? 'bg-black' : 'bg-[#CCFF00]'
                              }`}
                            ></span>
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right Column: Description & View Projects CTA */}
                    <div className="lg:col-span-6 flex flex-col justify-between">
                      <p
                        className={`text-base md:text-lg leading-relaxed font-light mb-6 ${
                          isHovered ? 'text-black/90 font-normal' : 'text-[#9CA3AF]'
                        }`}
                      >
                        {service.description}
                      </p>

                      {service.hasCta && (
                        <div className="mt-4">
                          <button
                            onClick={handleViewProjects}
                            className={`relative group inline-flex items-center gap-3 px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                              isHovered
                                ? 'bg-black text-[#CCFF00] hover:bg-neutral-900 border border-black'
                                : 'bg-[#CCFF00] text-black hover:bg-white border border-[#CCFF00]'
                            }`}
                          >
                            {/* Technical Interface Corner Accents */}
                            <span className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-current"></span>
                            <span className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-current"></span>
                            <span className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-current"></span>
                            <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-current"></span>

                            <span>{service.ctaText}</span>
                            <span className="font-mono text-sm group-hover:translate-x-1 transition-transform">
                              →
                            </span>
                          </button>
                        </div>
                      )}
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

