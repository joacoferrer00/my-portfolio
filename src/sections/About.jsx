import { useInView } from '../hooks/useInView'

export default function About() {
  const [ref, inView] = useInView()
  return (
    <section id="about" className="py-24 px-6 border-t border-[#2a2d3a]">
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
          About
        </p>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Bio */}
          <div className="md:col-span-2 space-y-5">
            <h2 className="text-3xl font-bold text-[#e2e8f0] tracking-tight">
              Building data systems,<br />not just dashboards.
            </h2>
            <p className="text-[#94a3b8] leading-relaxed">
              My background is Industrial Engineering. I work as an Analytics Engineer —
              building the systems behind the data, not just the outputs on top of it.
              My foundation in BI consulting means I design end-to-end: from the pipeline
              to the business decision it feeds.
            </p>
            <p className="text-[#94a3b8] leading-relaxed">
              I work end-to-end: source systems, ingestion, transformation, modeling, and delivery —
              through Power BI dashboards or direct SQL endpoints. My focus is automation,
              reliability, and solutions that scale past the initial delivery.
            </p>
            <p className="text-[#94a3b8] leading-relaxed">
              Based in Córdoba, Argentina. Open to international and remote opportunities.
            </p>

            <div className="pt-4 border-t border-[#2a2d3a] space-y-3">
              <h3 className="text-2xl font-bold text-[#e2e8f0] tracking-tight mb-4">How I think</h3>
              {[
                'I build systems, not one-off solutions.',
                'If a process is repeated, it should be automated.',
                'If data is not reliable, it is not useful.',
                'If a solution does not scale, it is not finished.',
                'Business impact is the metric. Everything else is a means.',
              ].map((p, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-[#3A7A5A] font-semibold shrink-0 mt-0.5">—</span>
                  <p className="text-[#94a3b8] leading-relaxed">{p}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Info card */}
          <div className="space-y-6">
            <div className="bg-[#1a1d27] border border-[#2a2d3a] rounded-xl p-6 space-y-4">
              <div>
                <p className="text-xs text-[#64748b] uppercase tracking-wider mb-1">Background</p>
                <p className="text-[#e2e8f0] text-sm">Industrial Engineering</p>
              </div>
              <div>
                <p className="text-xs text-[#64748b] uppercase tracking-wider mb-1">Role</p>
                <p className="text-[#e2e8f0] text-sm">Analytics Engineer</p>
              </div>
              <div>
                <p className="text-xs text-[#64748b] uppercase tracking-wider mb-1">Focus</p>
                <p className="text-[#e2e8f0] text-sm">Data Products & Pipeline Design</p>
              </div>
              <div>
                <p className="text-xs text-[#64748b] uppercase tracking-wider mb-1">Stack</p>
                <p className="text-[#e2e8f0] text-sm">SQL · Python · Power BI · Spark · Fabric</p>
              </div>
            </div>

            <div className="bg-[#1a1d27] border border-[#2a2d3a] rounded-xl p-6 space-y-3">
              <p className="text-xs text-[#64748b] uppercase tracking-wider mb-2">CV</p>
              <a
                href="https://drive.google.com/file/d/1iH_FYZtkNhHINkNI65pICpwkOV25cLqi/view"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#3A7A5A] hover:text-[#4a9a70] transition-colors"
              >
                ↓ Download (English)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
