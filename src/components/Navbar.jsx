const links = ['About', 'Projects', 'Skills', 'Contact']

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#2a2d3a] bg-[#0f1117]/90 backdrop-blur-sm">
      <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="text-[#e2e8f0] font-semibold tracking-tight">
          Joaquín Ferrer
        </span>
        <ul className="flex items-center gap-6">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm text-[#94a3b8] hover:text-[#3A7A5A] transition-colors duration-200"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
