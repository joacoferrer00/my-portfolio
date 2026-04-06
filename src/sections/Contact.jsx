import { useState } from 'react'
import { useInView } from '../hooks/useInView'

const EMAIL = 'joacoferrer00@gmail.com'

const links = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/joaquínferrer',
    description: 'Connect professionally',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/joacoferrer00',
    description: 'See the code',
  },
  {
    label: 'Kaggle',
    href: 'https://www.kaggle.com/joaqunferrer',
    description: 'Notebooks & datasets',
  },
]

export default function Contact() {
  const [ref, inView] = useInView()
  const [copied, setCopied] = useState(false)

  function handleCopyEmail() {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <section id="contact" className="py-24 px-6 border-t border-[#2a2d3a]">
      <div
        ref={ref}
        className="max-w-5xl mx-auto"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(60px)',
          transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
        }}
      >
        <p className="text-[#3A7A5A] text-sm font-medium tracking-widest uppercase mb-4">
          Contact
        </p>
        <h2 className="text-3xl font-bold text-[#e2e8f0] tracking-tight mb-3">
          Let's talk
        </h2>
        <p className="text-[#94a3b8] mb-12 max-w-md">
          Open to new opportunities, collaborations, and interesting data problems.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#1a1d27] border-2 border-[#2a2d3a] rounded-xl p-5 hover:border-[#3A7A5A] hover:scale-[1.02] transition-all duration-300"
            >
              <p className="text-[#e2e8f0] font-semibold mb-1 group-hover:text-[#3A7A5A] transition-colors">
                {link.label}
              </p>
              <p className="text-xs text-[#64748b]">{link.description}</p>
            </a>
          ))}

          {/* Email — clipboard copy */}
          <button
            onClick={handleCopyEmail}
            className="group relative bg-[#1a1d27] border-2 border-[#2a2d3a] rounded-xl p-5 hover:border-[#3A7A5A] hover:scale-[1.02] transition-all duration-300 text-left"
          >
            <p className="text-[#e2e8f0] font-semibold mb-1 group-hover:text-[#3A7A5A] transition-colors">
              Email
            </p>
            <p className="text-xs text-[#64748b]">{EMAIL}</p>

            {/* Copied toast */}
            <span
              className={`absolute -top-8 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded bg-[#3A7A5A] text-white text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                copied ? 'opacity-100 -translate-y-1' : 'opacity-0 translate-y-0 pointer-events-none'
              }`}
            >
              Copied!
            </span>
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-20 pt-8 border-t border-[#2a2d3a]">
        <p className="text-xs text-[#64748b]">
          Joaquín Ferrer · Córdoba, Argentina · {new Date().getFullYear()}
        </p>
      </div>
    </section>
  )
}
