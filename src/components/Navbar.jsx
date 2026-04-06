import { useState, useEffect } from 'react'

const links = ['About', 'Projects', 'Skills', 'Contact']

function easeInOut(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
}

function smoothScrollTo(id) {
  const start = window.scrollY
  const target = id
    ? document.getElementById(id).getBoundingClientRect().top + window.scrollY - 56
    : 0
  const distance = target - start
  const duration = 700
  let startTime = null

  function step(timestamp) {
    if (!startTime) startTime = timestamp
    const progress = Math.min((timestamp - startTime) / duration, 1)
    window.scrollTo(0, start + distance * easeInOut(progress))
    if (progress < 1) requestAnimationFrame(step)
  }

  requestAnimationFrame(step)
}

export default function Navbar() {
  const [active, setActive] = useState('hero')

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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#2a2d3a] bg-[#0f1117]/90 backdrop-blur-sm">
      <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <button
          onClick={() => smoothScrollTo(null)}
          className={`text-lg font-semibold tracking-tight transition-colors duration-200 ${
            active === 'hero' ? 'text-[#3A7A5A]' : 'text-[#e2e8f0] hover:text-[#3A7A5A]'
          }`}
        >
          Joaquín Ferrer
        </button>
        <ul className="flex items-center gap-6">
          {links.map((link) => {
            const isActive = active === link.toLowerCase()
            return (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault()
                    smoothScrollTo(link.toLowerCase())
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
      </nav>
    </header>
  )
}
