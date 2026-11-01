import React, { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Loader2, Mail, Phone, MapPin, Send } from 'lucide-react'
import { LinkedinIcon, GithubIcon, LeetcodeIcon } from './Icons'
import Globe from './Globe'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef(null)
  const leftColRef = useRef(null)
  const formRef = useRef(null)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (leftColRef.current) {
        gsap.fromTo(
          leftColRef.current.children,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
            },
          }
        )
      }

      if (formRef.current) {
        gsap.fromTo(
          formRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: formRef.current,
              start: 'top 85%',
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    if (errorMessage) setErrorMessage('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // 1. Validate required fields
    const name = formData.name.trim()
    const email = formData.email.trim()
    const message = formData.message.trim()
    const phone = formData.phone.trim()
    const subject = formData.subject.trim()

    if (!name) {
      setErrorMessage('Please provide your name.')
      return
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || !emailPattern.test(email)) {
      setErrorMessage('Please provide a valid email address.')
      return
    }

    if (!message) {
      setErrorMessage('Please enter your message.')
      return
    }

    setErrorMessage('')
    setStatus('sending')

    // 2. Generate WhatsApp formatted enquiry message
    const whatsappNumber = '917418573315'
    const whatsappMessage = `Hello Jeevanantham!
I am contacting you through your portfolio website.

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Subject: ${subject || 'Not provided'}

Message:
${message}

Thank you!`

    // 3. Construct click-to-chat URL with URL-encoded message
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

    // 4. Open WhatsApp in new tab (with direct fallback if popups are blocked)
    const newTab = window.open(whatsappURL, '_blank', 'noopener,noreferrer')
    if (!newTab || newTab.closed || typeof newTab.closed === 'undefined') {
      window.location.href = whatsappURL
    }

    // 5. Reset sending state smoothly
    setTimeout(() => {
      setStatus('idle')
    }, 1200)
  }

  const socialLinks = [
    {
      name: 'LinkedIn',
      label: 'Jeevanantham -aj',
      icon: LinkedinIcon,
      url: 'https://linkedin.com/in/jeevanantham-arjunkumar-33aj',
    },
    {
      name: 'Email',
      label: 'arjunjeeva33@gmail.com',
      icon: Mail,
      url: 'mailto:arjunjeeva33@gmail.com',
    },
    {
      name: 'GitHub',
      label: 'Jeeva1117',
      icon: GithubIcon,
      url: 'https://github.com/Jeeva1117',
    },
    {
      name: 'LeetCode',
      label: 'arjunjeeva17',
      icon: LeetcodeIcon,
      url: 'https://leetcode.com/u/arjunjeeva17/',
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative min-h-screen w-full bg-[#050505] text-white pt-24 md:pt-36 pb-24 overflow-hidden flex items-center"
    >
      {/* 3D Animated Rotating Digital Globe Background (Three.js WebGL) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <div className="w-[380px] h-[380px] sm:w-[550px] sm:h-[550px] md:w-[750px] md:h-[750px] lg:w-[900px] lg:h-[900px] opacity-40 md:opacity-60 transition-opacity">
          <Globe className="w-full h-full" />
        </div>
      </div>

      {/* Dark vignette gradient overlay to ensure text stays crystal clear */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/90 via-[#050505]/60 to-[#050505]/90 pointer-events-none z-[1]" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-16 w-full">
        {/* Desktop 2-Column Grid: Left 40% / Right 60% */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column (approx 40% -> 5 cols) */}
          <div ref={leftColRef} className="lg:col-span-5 space-y-10">
            {/* Giant Heading */}
            <div>
              <span className="block text-xs font-mono uppercase tracking-widest text-[#CCFF00] mb-3">
                // GET IN TOUCH
              </span>
              <h2
                className="font-black uppercase tracking-tighter"
                style={{
                  fontSize: 'clamp(2.8rem, 5.5vw, 5.5rem)',
                  lineHeight: '0.9',
                  letterSpacing: '-0.06em',
                  background: 'linear-gradient(180deg, #FFFFFF 0%, #D1D5DB 45%, #4B5563 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: '0 15px 30px rgba(0,0,0,0.9)',
                }}
              >
                GET IN
                <br />
                TOUCH
              </h2>
            </div>

            {/* Contact Details */}
            <div className="space-y-6 pt-4 border-t border-white/10">
              {/* Identity & Role */}
              <div>
                <span className="block text-xs uppercase tracking-widest text-[#9CA3AF] mb-1 font-mono">
                  Full Name &amp; Title:
                </span>
                <p className="text-xl md:text-2xl font-bold text-white">
                  Jeevanantham A
                </p>
                <p className="text-sm font-mono text-[#CCFF00] font-semibold">
                  AI ENGINEER
                </p>
              </div>

              {/* Email */}
              <div>
                <span className="block text-xs uppercase tracking-widest text-[#9CA3AF] mb-1 font-mono">
                  Email:
                </span>
                <a
                  href="mailto:arjunjeeva33@gmail.com"
                  className="text-lg md:text-2xl font-medium text-white hover:text-[#CCFF00] transition-colors break-all"
                >
                  arjunjeeva33@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div>
                <span className="block text-xs uppercase tracking-widest text-[#9CA3AF] mb-1 font-mono">
                  Phone:
                </span>
                <a
                  href="tel:+917418573315"
                  className="text-lg md:text-2xl font-medium text-white hover:text-[#CCFF00] transition-colors"
                >
                  +91 74185 73315
                </a>
              </div>

              {/* Location */}
              <div>
                <span className="block text-xs uppercase tracking-widest text-[#9CA3AF] mb-1 font-mono">
                  Location:
                </span>
                <div className="flex items-center gap-2 text-base md:text-xl text-white/90">
                  <MapPin className="w-5 h-5 text-[#CCFF00] shrink-0" />
                  <span>Chennai, Tamil Nadu, India</span>
                </div>
              </div>
            </div>

            {/* Circular Social Media Icon Buttons */}
            <div className="pt-2">
              <span className="block text-xs uppercase tracking-widest text-[#9CA3AF] mb-4 font-mono">
                Connect Directly
              </span>

              <div className="flex items-center gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  const isMail = social.url.startsWith('mailto:')
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target={isMail ? undefined : '_blank'}
                      rel={isMail ? undefined : 'noopener noreferrer'}
                      className="group flex items-center justify-center w-12 h-12 rounded-full bg-white/[0.06] hover:bg-[#CCFF00] border border-white/15 hover:border-[#CCFF00] transition-all duration-300 shadow-xl hover:scale-105"
                      aria-label={social.name}
                      title={`${social.name} - ${social.label}`}
                    >
                      <Icon className="w-5 h-5 text-white group-hover:text-black transition-colors" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right Column (approx 60% -> 7 cols) Contact Form */}
          <div className="lg:col-span-7">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              noValidate
              className="p-8 sm:p-10 md:p-12 rounded-2xl md:rounded-3xl bg-[#0c0c0e]/85 backdrop-blur-xl border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.9)] space-y-6"
            >
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-[#9CA3AF] mb-2 font-medium">
                    Name <span className="text-[#CCFF00]">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#141416] border border-white/10 focus:border-[#CCFF00] text-white placeholder-[#52525b] text-sm focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-[#9CA3AF] mb-2 font-medium">
                    Email <span className="text-[#CCFF00]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your email address"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#141416] border border-white/10 focus:border-[#CCFF00] text-white placeholder-[#52525b] text-sm focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Phone & Subject */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-[#9CA3AF] mb-2 font-medium">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#141416] border border-white/10 focus:border-[#CCFF00] text-white placeholder-[#52525b] text-sm focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-[#9CA3AF] mb-2 font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project inquiry / Collaboration"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#141416] border border-white/10 focus:border-[#CCFF00] text-white placeholder-[#52525b] text-sm focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Row 3: Message */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-[#9CA3AF] mb-2 font-medium">
                  Message <span className="text-[#CCFF00]">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your AI project requirements or engineering role..."
                  className="w-full px-4 py-3.5 rounded-xl bg-[#141416] border border-white/10 focus:border-[#CCFF00] text-white placeholder-[#52525b] text-sm focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Validation Error Banner */}
              {errorMessage && (
                <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono">
                  ⚠️ {errorMessage}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-4 rounded-xl font-bold text-xs sm:text-sm tracking-widest uppercase bg-white text-black hover:bg-[#CCFF00] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2.5 shadow-xl disabled:opacity-50 cursor-pointer"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Opening WhatsApp...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
