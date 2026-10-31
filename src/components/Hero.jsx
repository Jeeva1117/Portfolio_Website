import React, { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ArrowUpRight } from 'lucide-react'

export default function Hero() {
  const [displayText, setDisplayText] = useState('JEEVANANTHAM')
  const [imageLoaded, setImageLoaded] = useState(false)

  const sectionRef = useRef(null)
  const typographyRef = useRef(null)
  const personRef = useRef(null)
  const subtitleRef = useRef(null)
  const contactRef = useRef(null)
  const arrowIconRef = useRef(null)

  // Preload hero image
  useEffect(() => {
    const img = new Image()
    img.src = '/images/portrait-hero.png'
    img.onload = () => {
      setImageLoaded(true)
    }
    if (img.complete) {
      setImageLoaded(true)
    }
  }, [])

  useEffect(() => {
    if (!imageLoaded) return

    // Lock page scrolling during intro animation
    document.body.style.overflow = 'hidden'

    const targetWord = 'PORTFOLIO'
    const startWord = 'JEEVANANTHAM'
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*'
    let scrambleInterval = null
    let timeoutId = null

    // Master GSAP Timeline
    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = 'auto'
      },
    })

    // Set initial states
    gsap.set(personRef.current, { y: '100vh', opacity: 1 })
    gsap.set([subtitleRef.current, contactRef.current], { opacity: 0, y: 50 })

    // Step 1: Wait approx 1 second after page load
    timeoutId = setTimeout(() => {
      let iteration = 0
      const totalSteps = 20

      // Step 2: Progressive letter scramble effect
      scrambleInterval = setInterval(() => {
        iteration++
        const progress = iteration / totalSteps

        const scrambled = targetWord
          .split('')
          .map((char, index) => {
            const letterThreshold = index / targetWord.length
            if (progress > letterThreshold + 0.15) {
              return char
            }
            if (iteration % 2 === 0 && index < startWord.length) {
              return startWord[index]
            }
            return chars[Math.floor(Math.random() * chars.length)]
          })
          .join('')

        setDisplayText(scrambled)

        if (iteration >= totalSteps) {
          clearInterval(scrambleInterval)
          setDisplayText(targetWord)

          // Step 4 & 5: Coordinated upward animations
          const isMobile = window.innerWidth < 768

          tl.to(
            typographyRef.current,
            {
              y: isMobile ? '-18vh' : '-6vh',
              scale: isMobile ? 0.9 : 1,
              duration: 1.5,
              ease: 'power3.inOut',
            },
            '+=0.2'
          )
            // Step 6: Animate person upward from 100vh to 0
            .to(
              personRef.current,
              {
                y: 0,
                duration: 1.5,
                ease: 'power3.out',
              },
              '<' // synchronized with typography movement
            )
            // Step 7: Reveal subtitle and contact CTA
            .to(
              [subtitleRef.current, contactRef.current],
              {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: 'power3.out',
                stagger: 0.2,
              },
              '-=0.8'
            )
        }
      }, 50)
    }, 1000)

    return () => {
      if (timeoutId) clearTimeout(timeoutId)
      if (scrambleInterval) clearInterval(scrambleInterval)
      tl.kill()
      document.body.style.overflow = 'auto'
    }
  }, [imageLoaded])

  const scrollToContact = (e) => {
    e.preventDefault()
    const target = document.querySelector('#contact')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505] select-none"
      style={{
        background: 'radial-gradient(circle at 50% 50%, #151515 0%, #050505 65%, #000000 100%)',
      }}
    >
      {/* Very subtle dark overlay and 2px backdrop blur */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] pointer-events-none z-[1]" />

      {/* Layer 2: Massive Metallic Typography (Z-Index 10: Behind person) */}
      <div
        ref={typographyRef}
        className="absolute inset-x-0 flex items-center justify-center pointer-events-none z-10 transition-transform will-change-transform"
      >
        <h1
          className="font-black text-center tracking-tighter uppercase whitespace-nowrap drop-shadow-[0_25px_35px_rgba(0,0,0,0.9)]"
          style={{
            fontSize: 'clamp(3.8rem, 16vw, 15rem)',
            letterSpacing: '-0.06em',
            background: 'linear-gradient(180deg, #FFFFFF 0%, #E5E7EB 35%, #9CA3AF 65%, #374151 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {displayText}
        </h1>
      </div>

      {/* Layer 3: Person / Hero Cutout Image (Z-Index 20: Overlapping Typography) */}
      <div
        ref={personRef}
        className="relative z-20 flex items-end justify-center h-screen w-full pointer-events-none will-change-transform"
      >
        <div className="relative max-h-[88vh] md:max-h-[92vh] flex items-end justify-center">
          {/* Subtle bottom shadow vignette to blend feet/base seamlessly */}
          <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent z-10" />

          <img
            src="/images/portrait-hero.png"
            alt="Jeevanantham A — AI Engineer"
            className="w-[340px] sm:w-[440px] md:w-[540px] lg:w-[620px] max-h-[84vh] object-contain object-bottom drop-shadow-[0_25px_60px_rgba(0,0,0,0.98)]"
          />
        </div>
      </div>

      {/* Layer 4: Subtitle & Contact Controls (Z-Index 30: Forefront) */}
      <div className="absolute inset-x-0 bottom-8 md:bottom-12 z-30 max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Editorial Subtitle */}
        <div
          ref={subtitleRef}
          className="text-center md:text-left drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
        >
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white tracking-tight">
            <span className="font-extrabold uppercase">AI</span>{' '}
            <span className="font-light italic text-[#9CA3AF] editorial-serif">Engineer</span>
          </div>
          <p className="text-xs md:text-sm text-[#9CA3AF] tracking-wider uppercase mt-1 font-mono">
            Machine Learning · Generative AI · Agentic AI
          </p>
        </div>

        {/* Minimalist Contact CTA */}
        <div
          ref={contactRef}
          className="flex items-center gap-3"
        >
          {/* Circular arrow button */}
          <a
            href="#contact"
            onClick={scrollToContact}
            onMouseEnter={() => {
              if (arrowIconRef.current) {
                gsap.to(arrowIconRef.current, { rotation: 45, duration: 0.3, ease: 'power2.out' })
              }
            }}
            onMouseLeave={() => {
              if (arrowIconRef.current) {
                gsap.to(arrowIconRef.current, { rotation: 0, duration: 0.3, ease: 'power2.out' })
              }
            }}
            className="group flex items-center justify-center w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/20 hover:border-[#CCFF00] hover:bg-black/90 transition-all duration-300 shadow-xl"
            aria-label="Scroll to contact"
          >
            <div ref={arrowIconRef} className="will-change-transform">
              <ArrowUpRight className="w-5 h-5 text-white group-hover:text-[#CCFF00] transition-colors" />
            </div>
          </a>

          {/* Pill Contact Button */}
          <a
            href="#contact"
            onClick={scrollToContact}
            className="px-8 py-3 rounded-full text-sm font-semibold tracking-wider uppercase bg-black/60 hover:bg-white/10 text-white hover:text-[#CCFF00] border border-white/20 hover:border-[#CCFF00] backdrop-blur-md transition-all duration-300 shadow-xl"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  )
}
