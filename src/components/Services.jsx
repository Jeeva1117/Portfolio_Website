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
      title: 'GENERATIVE AI & LLM DEVELOPMENT',
      description:
        'LLM-powered applications, prompt engineering, model integration, and intelligent AI solutions.',
      capabilities: [
        'Custom Large Language Model (LLM) Integration',
        'Advanced Prompt Engineering & Chain-of-Thought',
        'OpenAI, Anthropic Claude & Gemini API Pipelines',
        'Fine-Tuning & Quantization Architectures',
        'Multi-Modal Reasoning (Text, Audio, Vision)',
        'Guardrails, Safety Alignment & Output Structuring',
      ],
      techTags: ['OpenAI', 'Gemini API', 'Claude', 'Groq', 'LangChain', 'Prompt Engineering'],
      hasCta: true,
      ctaText: 'EXPLORE AI PROJECTS',
    },
    {
      num: '02',
      title: 'AGENTIC AI & MULTI-AGENT SYSTEMS',
      description:
        'Autonomous AI agents, LangGraph workflows, tool calling, planning, and multi-agent orchestration.',
      capabilities: [
        'Stateful Multi-Agent Orchestration via LangGraph',
        'Autonomous Decision-Making & Dynamic Replanning',
        'Tool Calling, Function Calling & MCP Protocols',
        'Self-Reflection, Verification & Critique Loops',
        'Memory Persistence & Multi-Turn Context Store',
        'Human-in-the-Loop Governance & Supervision',
      ],
      techTags: ['LangGraph', 'Agentic AI', 'MCP Protocol', 'Multi-Agent', 'Memory Management'],
      hasCta: false,
    },
    {
      num: '03',
      title: 'RAG & KNOWLEDGE SYSTEMS',
      description:
        'Advanced RAG pipelines, document intelligence, embeddings, vector databases, hybrid search, reranking, and self-healing retrieval systems.',
      capabilities: [
        'Hybrid Search Architecture (Dense Vector + BM25 Sparse)',
        'Cross-Encoder Reranking (Cohere, BGE Reranker)',
        'Self-Healing & Self-Corrective Retrieval Loops',
        'Document Intelligence & Structural Chunking Strategies',
        'High-Performance Vector DBs (Chroma, PostgreSQL pgvector)',
        'Hallucination Detection & Grounded Answer Synthesis',
      ],
      techTags: ['Hybrid Search', 'pgvector', 'Reranking', 'Embeddings', 'Knowledge Graphs'],
      hasCta: false,
    },
    {
      num: '04',
      title: 'MACHINE LEARNING & DEEP LEARNING',
      description:
        'Predictive models, classification, neural networks, model training, evaluation, and optimization.',
      capabilities: [
        'Supervised & Unsupervised Machine Learning',
        'Classification, Regression & Clustering Pipelines',
        'Deep Neural Networks & Convolutional Architectures',
        'Hyperparameter Tuning & Cross-Validation',
        'Model Evaluation (ROC-AUC, Precision, Recall, F1)',
        'Feature Engineering, Selection & Dimensionality Reduction',
      ],
      techTags: ['Scikit-learn', 'PyTorch', 'TensorFlow', 'Pandas', 'NumPy', 'Model Tuning'],
      hasCta: false,
    },
    {
      num: '05',
      title: 'NLP & COMPUTER VISION',
      description:
        'Natural language processing, speech recognition, image classification, and intelligent visual applications.',
      capabilities: [
        'Speech-to-Text Phoneme Extraction with Whisper',
        'Convolutional Neural Networks (CNNs) & ResNet',
        '3D Gesture Tracking, Skeletal Landmarks & Pose Mesh',
        'Image Classification & Defect Detection (OpenCV)',
        'Tokenization, Named Entity Recognition & Sentiment',
        'Transformer Attention Models & Vision Transformers',
      ],
      techTags: ['Whisper NLP', 'Computer Vision', 'OpenCV', 'CNN', 'Transformers', 'Pose Tracking'],
      hasCta: false,
    },
    {
      num: '06',
      title: 'AI AUTOMATION & VOICE ASSISTANTS',
      description:
        'AI-powered automation, voice interfaces, speech-to-text, text-to-speech, and intelligent assistants.',
      capabilities: [
        'Real-time Voice Interfaces & Streaming Audio Pipelines',
        'Hands-free OS System Control & Script Automation',
        'Low-Latency Speech-to-Text & Neural Text-to-Speech',
        'Multi-lingual Conversational Voice Bots',
        'Task Scheduling, Cron Automations & Web Scraping',
        'Enterprise Workflow Integration & Realtime Telemetry',
      ],
      techTags: ['Voice AI', 'Whisper', 'TTS Engine', 'FastAPI', 'Automation', 'System Controls'],
      hasCta: false,
    },
    {
      num: '07',
      title: 'FULL-STACK AI APPLICATION DEVELOPMENT',
      description:
        'Python, FastAPI, React, PostgreSQL, API integration, and deployment of end-to-end AI applications.',
      capabilities: [
        'High-Performance Asynchronous APIs with FastAPI',
        'Responsive Modern Web Interfaces with React & Tailwind CSS',
        'Relational Database Modeling with PostgreSQL & SQLAlchemy',
        'Docker Containerization, Swarm & CI/CD Delivery',
        'JWT Authentication, Secure Role-Based Access Control',
        'End-to-End Production Deployment & Cloud Monitoring',
      ],
      techTags: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'Docker', 'REST APIs', 'Tailwind CSS'],
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
          <div className="text-right">
            <span className="block text-xs font-mono uppercase tracking-widest text-[#CCFF00] mb-3">
              // EXPERTISE &amp; CAPABILITIES
            </span>
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
              WHAT I
              <br />
              CAN DO
            </h2>
          </div>
        </div>

        {/* Services Accordion List: 01 to 07 */}
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
                      className={`text-base sm:text-xl md:text-2xl lg:text-3xl font-black uppercase tracking-tight transition-colors duration-300 ${
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
                    isExpanded ? 'max-h-[850px] opacity-100 pb-10 px-4 md:px-8' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pt-4 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 border-t border-black/10">
                    {/* Left Column: Capabilities List */}
                    <div className="lg:col-span-6 pl-0 md:pl-20">
                      <h4
                        className={`text-xs font-mono uppercase tracking-widest mb-4 font-bold ${
                          isHovered ? 'text-black/80' : 'text-[#CCFF00]'
                        }`}
                      >
                        // ARCHITECTURAL CAPABILITIES
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

                    {/* Right Column: Description, Tech Tags & CTA */}
                    <div className="lg:col-span-6 flex flex-col justify-between">
                      <div>
                        <h4
                          className={`text-xs font-mono uppercase tracking-widest mb-3 font-bold ${
                            isHovered ? 'text-black/80' : 'text-[#9CA3AF]'
                          }`}
                        >
                          // SCOPE &amp; APPLICATION
                        </h4>
                        <p
                          className={`text-base md:text-lg leading-relaxed font-light mb-6 ${
                            isHovered ? 'text-black/95 font-medium' : 'text-[#9CA3AF]'
                          }`}
                        >
                          {service.description}
                        </p>

                        {/* Technology Badges */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {service.techTags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className={`px-3 py-1 rounded-full text-xs font-mono border transition-colors ${
                                isHovered
                                  ? 'bg-black/10 text-black border-black/20 font-semibold'
                                  : 'bg-white/5 text-white/80 border-white/10'
                              }`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {service.hasCta && (
                        <div className="mt-2">
                          <button
                            onClick={handleViewProjects}
                            className={`relative group inline-flex items-center gap-3 px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                              isHovered
                                ? 'bg-black text-[#CCFF00] hover:bg-neutral-900 border border-black'
                                : 'bg-[#CCFF00] text-black hover:bg-white border border-[#CCFF00]'
                            }`}
                          >
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
