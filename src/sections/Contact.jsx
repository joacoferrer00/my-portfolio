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
  {
    label: 'Email',
    href: 'mailto:joacoferrer00@gmail.com',
    description: 'joacoferrer00@gmail.com',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 border-t border-[#2a2d3a]">
      <div className="max-w-5xl mx-auto">
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
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="group bg-[#1a1d27] border-2 border-[#2a2d3a] rounded-xl p-5 hover:border-[#3A7A5A] hover:scale-[1.02] transition-all duration-300"
            >
              <p className="text-[#e2e8f0] font-semibold mb-1 group-hover:text-[#3A7A5A] transition-colors">
                {link.label}
              </p>
              <p className="text-xs text-[#64748b]">{link.description}</p>
            </a>
          ))}
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
