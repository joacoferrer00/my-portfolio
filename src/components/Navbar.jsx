import { useState, useEffect } from 'react'
import { smoothScrollTo } from '../utils/scroll'

const links = ['About', 'Projects', 'Skills', 'Contact']

export default function Navbar() {
  const [active, setActive] = useState('hero')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const sectionIds = links.map((l) => l.toLowerCase())

    function onScroll() {
      if (window.scrollY < 80) {
        setActive('hero')
        return
      }
      let current = 'hero'
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 80) {
          current = id
        }
      }
      setActive(current)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function handleNavClick(id) {
    setMenuOpen(false)
    smoothScrollTo(id)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#2a2d3a] bg-[#0f1117]/90 backdrop-blur-sm">
      <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <button
          onClick={() => handleNavClick(null)}
          className={`text-lg font-semibold tracking-tight transition-colors duration-200 ${
            active === 'hero' ? 'text-[#3A7A5A]' : 'text-[#e2e8f0] hover:text-[#3A7A5A]'
          }`}
        >
          Joaquín Ferrer
        </button>

        {/* Desktop links */}
        <ul className="hidden sm:flex items-center gap-6">
          {links.map((link) => {
            const isActive = active === link.toLowerCase()
            return (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link.toLowerCase())
                  }}
                  className={`text-base transition-colors duration-200 ${
                    isActive ? 'text-[#3A7A5A]' : 'text-[#94a3b8] hover:text-[#3A7A5A]'
                  }`}
                >
                  {link}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="sm:hidden flex flex-col justify-center gap-1.5 w-8 h-8 shrink-0"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-px bg-[#94a3b8] transition-all duration-300 origin-center ${
              menuOpen ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />
          <span
            className={`block h-px bg-[#94a3b8] transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-px bg-[#94a3b8] transition-all duration-300 origin-center ${
              menuOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={`sm:hidden border-t border-[#2a2d3a] bg-[#0f1117]/95 overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="px-6 py-4 flex flex-col gap-4">
          {links.map((link) => {
            const isActive = active === link.toLowerCase()
            return (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link.toLowerCase())
                  }}
                  className={`text-base transition-colors duration-200 ${
                    isActive ? 'text-[#3A7A5A]' : 'text-[#94a3b8] hover:text-[#3A7A5A]'
                  }`}
                >
                  {link}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </header>
  )
}
