import React, { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ArrowUpRight } from 'lucide-react'

export default function Hero({ onPreloadComplete }) {
  const [displayText, setDisplayText] = useState('JEEVANANTHAM')
  const titleContainerRef = useRef(null)
  const titleTextRef = useRef(null)
  const subtitleRef = useRef(null)
  const actionsRef = useRef(null)
  const personRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    document.body.style.overflow = 'hidden'

    const targetWord = 'PORTFOLIO'
    const initialWord = 'JEEVANANTHAM'
    let iteration = 0
    let intervalId = null
    let timeoutId = null
    let isCancelled = false

    const imagePromise = new Promise((resolve) => {
      const img = new window.Image()
      img.src = '/images/portrait-hero.png'
      if (img.complete) {
        resolve()
      } else {
        img.onload = resolve
        img.onerror = resolve
      }
    })

    const delayPromise = new Promise((resolve) => {
      timeoutId = setTimeout(resolve, 800)
    })

    Promise.all([imagePromise, delayPromise]).then(() => {
      if (isCancelled) return

      intervalId = setInterval(() => {
        setDisplayText(() =>
          targetWord
            .split('')
            .map((char, index) => {
              if (index < Math.floor(iteration)) {
                return targetWord[index]
              }
              if (index < initialWord.length) {
                return initialWord[index]
              }
              return ''
            })
            .join('')
        )

        if (iteration >= 9) {
          clearInterval(intervalId)
          setDisplayText(targetWord)

          const isMobile = window.innerWidth < 768
          const tl = gsap.timeline({
            onComplete: () => {
              document.body.style.overflow = 'auto'
              if (onPreloadComplete) onPreloadComplete()
            },
          })

          // Smooth coordinate animation strictly adhering to reference proportions
          tl.to(
            titleContainerRef.current,
            {
              top: isMobile ? '24%' : '45%',
              duration: 1.5,
              ease: 'power3.inOut',
            },
            '+=0.15'
          )

          tl.fromTo(
            [subtitleRef.current, actionsRef.current],
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1.2,
              stagger: 0.18,
              ease: 'power3.out',
            },
            '-=1.0'
          )

          tl.fromTo(
            personRef.current,
            { y: '100vh' },
            {
              y: 0,
              duration: 1.5,
              ease: 'power3.out',
            },
            '-=1.2'
          )
        }

        iteration += 1 / 3
      }, 50)
    })

    return () => {
      isCancelled = true
      document.body.style.overflow = 'auto'
      if (timeoutId) clearTimeout(timeoutId)
      if (intervalId) clearInterval(intervalId)
    }
  }, [onPreloadComplete])

  const scrollToContact = (e) => {
    e.preventDefault()
    const target = document.querySelector('#contact')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-end justify-center bg-[#000000] overflow-hidden select-none"
    >
      {/* Layer 1: Metallic Title & Attached Controls (Positioned Behind Portrait) */}
      <div
        ref={titleContainerRef}
        className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none select-none flex flex-col items-start w-max will-change-transform"
      >
        {/* Exact Reference Sized Metallic Typography */}
        <h1
          ref={titleTextRef}
          className="text-[15vw] sm:text-[14vw] md:text-[10rem] lg:text-[13rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-800 drop-shadow-2xl pr-3 md:pr-8 leading-none uppercase"
          style={{
            fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          }}
        >
          {displayText}
        </h1>

        {/* Subtitle: Left Aligned Under Typography */}
        <div
          ref={subtitleRef}
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 md:translate-x-0 md:-bottom-14 md:left-6 text-white drop-shadow-md z-10 opacity-0 w-max text-center md:text-left pointer-events-auto"
        >
          <p className="text-sm sm:text-lg md:text-2xl lg:text-3xl tracking-tight">
            <span className="font-extrabold uppercase text-white">AI</span>{' '}
            <span className="font-light italic text-gray-300">Engineer</span>
          </p>
          <span className="block text-[10px] sm:text-xs md:text-xs font-mono text-[#CCFF00] tracking-wider mt-1 uppercase font-semibold">
            Machine Learning · Generative AI · Agentic AI
          </span>
        </div>

        {/* Action Buttons: Right Aligned Under Typography */}
        <div
          ref={actionsRef}
          className="absolute -bottom-20 left-1/2 -translate-x-1/2 md:translate-x-0 md:-bottom-14 md:left-auto md:right-8 flex items-center gap-2 md:gap-3 pointer-events-auto z-10 opacity-0 w-max"
        >
          {/* Circular Arrow Button */}
          <a
            href="#contact"
            onClick={scrollToContact}
            className="group w-8 h-8 md:w-11 md:h-11 rounded-full border border-gray-400/30 flex items-center justify-center backdrop-blur-md bg-black/40 hover:bg-white/10 hover:border-[#CCFF00] transition-all duration-300 cursor-pointer shadow-lg"
            aria-label="Scroll to contact section"
          >
            <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-gray-300 group-hover:text-[#CCFF00] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Contact Button */}
          <a
            href="#contact"
            onClick={scrollToContact}
            className="px-4 py-1.5 md:px-5 md:py-2.5 rounded-full border border-gray-400/30 flex items-center justify-center backdrop-blur-md bg-black/40 hover:bg-white/10 hover:border-gray-300 text-gray-300 hover:text-white transition-all duration-300 cursor-pointer shadow-lg"
          >
            <span className="text-xs md:text-sm italic font-light tracking-wider">
              Contact
            </span>
          </a>

          {/* Live Portfolio Button */}
          <a
            href="https://jeevanantham3.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 md:px-4 md:py-2.5 rounded-full border border-[#CCFF00]/40 flex items-center gap-1.5 backdrop-blur-md bg-black/40 hover:bg-[#CCFF00]/10 hover:border-[#CCFF00] text-[#CCFF00] transition-all duration-300 cursor-pointer shadow-lg"
          >
            <span className="text-[11px] md:text-xs font-mono tracking-wider font-medium uppercase">
              Live
            </span>
            <ArrowUpRight className="w-3 h-3 text-[#CCFF00]" />
          </a>
        </div>
      </div>

      {/* Layer 2: Authentic Professional Portrait Cutout (Positioned in Front of PORTFOLIO Typography) */}
      <div
        ref={personRef}
        className="relative z-10 text-center text-white flex flex-col items-center w-full pointer-events-none translate-y-[100vh] will-change-transform"
      >
        <div
          className="relative w-full max-w-[340px] sm:max-w-[420px] md:max-w-[500px] lg:max-w-[560px] xl:max-w-[600px] flex items-end justify-center"
          style={{
            maskImage: 'linear-gradient(to bottom, black 88%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 88%, transparent 100%)',
          }}
        >
          <img
            src="/images/portrait-hero.png"
            alt="Jeevanantham A — AI Engineer"
            className="w-full h-auto object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  )
}
