import React from 'react'
import { ArrowUpRight } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
  ]

  const socialLinks = [
    { name: 'Instagram', url: 'https://instagram.com' },
    { name: 'Youtube', url: 'https://youtube.com' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/jeevanantham-arjunkumar-33aj' },
    { name: 'Github', url: 'https://github.com/Jeeva1117' },
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
          {/* Left Side: Connect With Me & Email */}
          <div className="md:col-span-7 space-y-6">
            <span className="block text-xs uppercase tracking-widest text-[#9CA3AF] font-mono">
              Connect with me
            </span>

            <a
              href="mailto:arjunjeeva33@gmail.com"
              className="inline-block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white hover:text-[#CCFF00] transition-colors duration-300 break-all"
            >
              arjunjeeva33@gmail.com
            </a>

            {/* Quick Navigation Links */}
            <nav className="flex flex-wrap items-center gap-6 pt-2">
              {navLinks.map((link, idx) => (
                <React.Fragment key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-xs sm:text-sm font-mono uppercase tracking-wider text-[#9CA3AF] hover:text-white transition-colors"
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
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Let's build something
            </h3>
            <p className="text-sm text-[#9CA3AF] font-light max-w-[340px]">
              Open for freelance opportunities, high-impact AI collaborations, and engineering roles.
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
        <div className="my-12 pt-8 border-t border-white/10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group py-2 text-sm md:text-base font-semibold uppercase tracking-wider text-[#9CA3AF] hover:text-[#CCFF00] transition-colors flex items-center justify-center gap-1.5"
              >
                <span>{social.name}</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        </div>

        {/* Huge Central Brand Typography: "JEEVANANTHAM" / "JEEVA" */}
        <div className="py-6 md:py-10 flex items-center justify-center pointer-events-none select-none">
          <h1
            className="font-black text-center tracking-tighter uppercase text-white whitespace-nowrap drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
            style={{
              fontSize: 'clamp(3rem, 13vw, 13.5rem)',
              lineHeight: '0.85',
              letterSpacing: '-0.07em',
            }}
          >
            JEEVA
          </h1>
        </div>

        {/* Bottom Section: Copyright & Legal */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#71717a]">
          <p>© {currentYear} Jeevanantham A. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
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

