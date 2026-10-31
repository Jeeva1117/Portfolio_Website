import React, { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CheckCircle2, Loader2, Mail, Phone, MapPin, ExternalLink, Globe } from 'lucide-react'
import { LinkedinIcon, GithubIcon } from './Icons'

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
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in your name, email, and message.')
      return
    }

    setStatus('sending')

    // Simulate reliable API message dispatch
    setTimeout(() => {
      setStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      })
      setTimeout(() => setStatus('idle'), 6000)
    }, 1200)
  }

  const socialLinks = [
    {
      name: 'GitHub',
      label: 'Jeeva1117',
      icon: GithubIcon,
      url: 'https://github.com/Jeeva1117',
    },
    {
      name: 'LinkedIn',
      label: 'Jeevanantham -aj',
      icon: LinkedinIcon,
      url: 'https://linkedin.com/in/jeevanantham-arjunkumar-33aj',
    },
    {
      name: 'Portfolio',
      label: 'jeevanantham3.netlify.app',
      icon: Globe,
      url: 'https://jeevanantham3.netlify.app/',
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative min-h-screen w-full bg-[#050505] text-white pt-24 md:pt-36 pb-24 overflow-hidden flex items-center"
    >
      {/* Subtle diffused neon-green horizon illumination at lower-center */}
      <div
        className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[700px] md:w-[1100px] h-[350px] rounded-full pointer-events-none opacity-20 blur-[130px]"
        style={{
          background: 'radial-gradient(circle, #CCFF00 0%, #10b981 40%, transparent 80%)',
        }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-16 w-full">
        {/* Desktop 2-Column Grid: Left 40% / Right 60% */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column (approx 40% -> 5 cols) */}
          <div ref={leftColRef} className="lg:col-span-5 space-y-10">
            {/* Giant Heading */}
            <div>
              <span className="block text-xs font-mono uppercase tracking-widest text-[#CCFF00] mb-3">
                // CONNECT &amp; COLLABORATE
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
                Get in
                <br />
                touch
              </h2>
            </div>

            {/* Contact Details */}
            <div className="space-y-6 pt-4 border-t border-white/10">
              {/* Full Name & Role */}
              <div>
                <span className="block text-xs uppercase tracking-widest text-[#9CA3AF] mb-1 font-mono">
                  Identity:
                </span>
                <p className="text-xl md:text-2xl font-bold text-white">
                  Jeevanantham A
                </p>
                <p className="text-sm font-mono text-[#CCFF00]">
                  AI Engineer
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
                <p className="text-base md:text-xl text-white/90">
                  Chennai, Tamil Nadu, India
                </p>
              </div>
            </div>

            {/* Social & Developer Profiles */}
            <div className="pt-2">
              <span className="block text-xs uppercase tracking-widest text-[#9CA3AF] mb-4 font-mono">
                Developer Profiles
              </span>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 hover:border-[#CCFF00] transition-all duration-300 shadow-lg"
                      aria-label={social.name}
                    >
                      <Icon className="w-4 h-4 text-[#CCFF00] group-hover:scale-110 transition-transform" />
                      <div className="text-left font-mono">
                        <span className="block text-[10px] text-[#9CA3AF] uppercase">{social.name}</span>
                        <span className="text-xs text-white font-medium group-hover:text-[#CCFF00] transition-colors">{social.label}</span>
                      </div>
                      <ExternalLink className="w-3 h-3 text-[#9CA3AF] group-hover:text-[#CCFF00] opacity-50 group-hover:opacity-100 ml-auto" />
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
              className="p-8 sm:p-10 md:p-12 rounded-2xl md:rounded-3xl bg-[#0c0c0e]/80 backdrop-blur-xl border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.9)] space-y-6"
            >
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-[#9CA3AF] mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#141416] border border-white/5 focus:border-[#CCFF00]/50 text-white placeholder-[#52525b] text-sm focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-[#9CA3AF] mb-2">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your email address"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#141416] border border-white/5 focus:border-[#CCFF00]/50 text-white placeholder-[#52525b] text-sm focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Phone & Subject */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-[#9CA3AF] mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#141416] border border-white/5 focus:border-[#CCFF00]/50 text-white placeholder-[#52525b] text-sm focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-[#9CA3AF] mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#141416] border border-white/5 focus:border-[#CCFF00]/50 text-white placeholder-[#52525b] text-sm focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Row 3: Message */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-[#9CA3AF] mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Write something...."
                  className="w-full px-4 py-3.5 rounded-xl bg-[#141416] border border-white/5 focus:border-[#CCFF00]/50 text-white placeholder-[#52525b] text-sm focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-4 rounded-xl font-semibold text-sm tracking-wider uppercase bg-white text-black hover:bg-[#CCFF00] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 shadow-xl disabled:opacity-50"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <span>Send Message</span>
                )}
              </button>

              {/* Status feedback alerts */}
              {status === 'success' && (
                <div className="p-4 rounded-xl bg-[#CCFF00]/10 border border-[#CCFF00]/30 flex items-center gap-3 text-[#CCFF00] text-sm">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>Message sent successfully! I will get back to you shortly.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
