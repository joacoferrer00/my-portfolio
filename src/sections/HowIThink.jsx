const principles = [
  'I build systems, not one-off solutions.',
  'If a process is repeated, it should be automated.',
  'If data is not reliable, it is not useful.',
  'If a solution does not scale, it is not finished.',
  'Business impact is the metric. Everything else is a means.',
]

export default function HowIThink() {
  return (
    <section className="py-24 px-6 border-t border-[#2a2d3a]">
      <div className="max-w-5xl mx-auto">
        <p className="text-[#3A7A5A] text-sm font-medium tracking-widest uppercase mb-4">
          Mindset
        </p>
        <h2 className="text-3xl font-bold text-[#e2e8f0] tracking-tight mb-12">
          How I think
        </h2>

        <ul className="space-y-5">
          {principles.map((p, i) => (
            <li key={i} className="flex items-start gap-4">
              <span className="text-[#3A7A5A] font-semibold text-lg mt-0.5 shrink-0">—</span>
              <p className="text-[#e2e8f0] text-lg leading-snug">{p}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
