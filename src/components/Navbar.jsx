import React, { useState, useEffect } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY
        if (currentScrollY > lastScrollY && currentScrollY > 80) {
          setVisible(false) // Hide on scroll down
        } else {
          setVisible(true) // Show on scroll up
        }
        setLastScrollY(currentScrollY)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [mobileMenuOpen])

  const navLinks = [
    { name: 'HOME', href: '#hero' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SERVICES', href: '#services' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'CONTACT', href: '#contact' },
  ]

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-5 md:px-12 md:py-6 transition-all duration-500 ease-in-out ${
          visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        } ${lastScrollY > 30 ? 'bg-[#050505]/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}
      >
        {/* Brand Name on the Left */}
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, '#hero')}
          className="text-white font-black text-xl md:text-2xl tracking-widest uppercase cursor-pointer relative z-50 hover:text-[#CCFF00] transition-colors"
        >
          JEEVANANTHAM
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-gray-300 text-sm hover:text-[#CCFF00] transition-colors uppercase tracking-wider font-mono font-medium relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#CCFF00] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right CTA Actions: LET'S TALK */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="group flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#CCFF00] hover:bg-[#b8e600] text-black transition-all duration-300 shadow-[0_0_15px_rgba(204,255,0,0.25)] cursor-pointer"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Menu Hamburger Button */}
        <div
          className="md:hidden text-white cursor-pointer hover:text-[#CCFF00] transition-colors relative z-50 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? (
            <X className="w-7 h-7" />
          ) : (
            <Menu className="w-7 h-7" />
          )}
        </div>
      </nav>

      {/* Fullscreen Mobile Menu Overlay matching Reference */}
      <div
        className={`fixed inset-0 z-40 bg-[#0a0a0a]/98 backdrop-blur-2xl flex flex-col items-center justify-center transition-all duration-500 ease-in-out md:hidden ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`text-white text-3xl font-black uppercase tracking-widest hover:text-[#CCFF00] transition-all duration-500 ${
                mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${idx * 70}ms` }}
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="flex items-center justify-center gap-2 mt-4 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#CCFF00] text-black transition-all cursor-pointer"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </>
  )
}
