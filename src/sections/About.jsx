export default function About() {
  return (
    <section id="about" className="py-24 px-6 border-t border-[#2a2d3a]">
      <div className="max-w-5xl mx-auto">
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
              I'm an Industrial Engineer working as a Business Intelligence Consultant,
              transitioning toward Analytics Engineering. My work sits at the intersection
              of data engineering and BI: I design the systems that make data useful —
              from ingestion pipelines and data models to automated reports and interactive dashboards.
            </p>
            <p className="text-[#94a3b8] leading-relaxed">
              I work end-to-end across the data stack. I connect to source systems,
              model the data, apply business logic, and deliver insights through Power BI
              or direct SQL endpoints. My focus is always on automation, reliability,
              and solutions that scale and stay maintainable beyond the initial delivery.
            </p>
            <p className="text-[#94a3b8] leading-relaxed">
              Based in Córdoba, Argentina. Open to international opportunities and remote work.
            </p>
          </div>

          {/* Info card */}
          <div className="space-y-6">
            <div className="bg-[#1a1d27] border border-[#2a2d3a] rounded-xl p-6 space-y-4">
              <div>
                <p className="text-xs text-[#64748b] uppercase tracking-wider mb-1">Background</p>
                <p className="text-[#e2e8f0] text-sm">Industrial Engineering</p>
              </div>
              <div>
                <p className="text-xs text-[#64748b] uppercase tracking-wider mb-1">Current Role</p>
                <p className="text-[#e2e8f0] text-sm">BI Consultant</p>
              </div>
              <div>
                <p className="text-xs text-[#64748b] uppercase tracking-wider mb-1">Direction</p>
                <p className="text-[#e2e8f0] text-sm">Analytics Engineer</p>
              </div>
              <div>
                <p className="text-xs text-[#64748b] uppercase tracking-wider mb-1">Stack</p>
                <p className="text-[#e2e8f0] text-sm">SQL · Python · Power BI · Spark · Fabric</p>
              </div>
            </div>

            <div className="bg-[#1a1d27] border border-[#2a2d3a] rounded-xl p-6 space-y-3">
              <p className="text-xs text-[#64748b] uppercase tracking-wider mb-2">CV</p>
              <a
                href="https://drive.google.com"
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
