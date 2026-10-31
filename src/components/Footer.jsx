import React from 'react'
import { ArrowUpRight, Mail, Phone, MapPin, ExternalLink } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      label: 'Jeeva1117',
      url: 'https://github.com/Jeeva1117',
      icon: GithubIcon,
    },
    {
      name: 'LinkedIn',
      label: 'Jeevanantham -aj',
      url: 'https://linkedin.com/in/jeevanantham-arjunkumar-33aj',
      icon: LinkedinIcon,
    },
    {
      name: 'Portfolio',
      label: 'jeevanantham3.netlify.app',
      url: 'https://jeevanantham3.netlify.app/',
      icon: ArrowUpRight,
    },
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative min-h-screen w-full bg-[#000000] text-white flex flex-col justify-between overflow-hidden pt-20 pb-8">
      {/* Cinematic Luminous Green Curved Horizon Background at the Bottom */}
      <div
        className="absolute inset-x-0 bottom-0 h-[70vh] pointer-events-none select-none z-0"
        style={{
          backgroundImage: "url('/images/footer-glow.jpg')",
          backgroundPosition: 'bottom center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          opacity: 0.85,
        }}
      />

      {/* Multi-tier Black Gradient Overlay to blend flawlessly with upper page */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-[#000000]/75 to-transparent pointer-events-none z-[1]" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-16 w-full flex-1 flex flex-col justify-between">
        {/* Top Content: Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-start pt-6">
          {/* Left Side: Connect With Me & Contact Details */}
          <div className="md:col-span-7 space-y-6">
            <span className="block text-xs uppercase tracking-widest text-[#9CA3AF] font-mono">
              Connect with me
            </span>

            {/* Email */}
            <a
              href="mailto:arjunjeeva33@gmail.com"
              className="inline-block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white hover:text-[#CCFF00] transition-colors duration-300 break-all"
            >
              arjunjeeva33@gmail.com
            </a>

            {/* Phone & Location info */}
            <div className="flex flex-wrap items-center gap-6 text-sm font-mono text-[#D1D5DB] pt-1">
              <a
                href="tel:+917418573315"
                className="flex items-center gap-2 hover:text-[#CCFF00] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#CCFF00]" />
                <span>+91 74185 73315</span>
              </a>
              <span className="text-white/20">|</span>
              <div className="flex items-center gap-2 text-[#9CA3AF]">
                <MapPin className="w-4 h-4 text-[#CCFF00]" />
                <span>Chennai, Tamil Nadu, India</span>
              </div>
            </div>

            {/* Navigation Links: Home, About, Skills, Projects, Contact */}
            <nav className="flex flex-wrap items-center gap-6 pt-4">
              {navLinks.map((link, idx) => (
                <React.Fragment key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-xs sm:text-sm font-mono uppercase tracking-wider text-[#9CA3AF] hover:text-[#CCFF00] transition-colors"
                  >
                    {link.name}
                  </a>
                  {idx < navLinks.length - 1 && (
                    <span className="text-[#52525b] text-xs">·</span>
                  )}
                </React.Fragment>
              ))}
            </nav>
          </div>

          {/* Right Side: Let's Build Something & CTA */}
          <div className="md:col-span-5 flex flex-col md:items-end text-left md:text-right space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CCFF00]/10 border border-[#CCFF00]/30 text-xs font-mono text-[#CCFF00]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] animate-pulse"></span>
              <span>OPEN FOR NEW OPPORTUNITIES</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Let's build something intelligent
            </h3>
            <p className="text-sm text-[#9CA3AF] font-light max-w-[360px]">
              Available for full-time engineering roles, AI system architecture, and machine learning consulting.
            </p>
            <div className="pt-2">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest bg-white hover:bg-[#CCFF00] text-black transition-all duration-300 shadow-xl"
              >
                <span>Get in touch</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Social Links Row with Thin Divider */}
        <div className="my-10 pt-8 border-t border-white/10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-[#CCFF00] transition-all duration-300 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4 text-[#CCFF00] group-hover:scale-110 transition-transform" />
                    <div className="text-left font-mono">
                      <span className="block text-[10px] text-[#9CA3AF] uppercase">{social.name}</span>
                      <span className="text-xs text-white font-medium group-hover:text-[#CCFF00] transition-colors">{social.label}</span>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#9CA3AF] group-hover:text-[#CCFF00] opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
              )
            })}
          </div>
        </div>

        {/* Huge Brand Typography & Professional Title */}
        <div className="py-6 md:py-10 flex flex-col items-center justify-center pointer-events-none select-none text-center">
          {/* Main Footer Name */}
          <h1
            className="font-black text-center tracking-tighter uppercase text-white whitespace-nowrap drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
            style={{
              fontSize: 'clamp(2.5rem, 9.5vw, 10.5rem)',
              lineHeight: '0.85',
              letterSpacing: '-0.07em',
            }}
          >
            JEEVANANTHAM
          </h1>
          {/* Professional Title */}
          <p className="mt-3 font-mono text-sm sm:text-base md:text-xl font-bold uppercase tracking-[0.3em] text-[#CCFF00] drop-shadow-[0_0_15px_rgba(204,255,0,0.4)]">
            AI ENGINEER
          </p>
        </div>

        {/* Bottom Section: Copyright & Legal */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#71717a]">
          <p>© {currentYear} JEEVANANTHAM A. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <a
              href="https://jeevanantham3.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9CA3AF] hover:text-[#CCFF00] transition-colors"
            >
              jeevanantham3.netlify.app
            </a>
            <span>·</span>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span>·</span>
            <a href="#" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
