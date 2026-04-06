const typeColors = {
  'Data Engineering': 'bg-[#1a2e24] text-[#3A7A5A] border-[#2F6B4F]',
  'End-to-End Analytics': 'bg-[#1a2e24] text-[#3A7A5A] border-[#2F6B4F]',
  'Power BI — ETL + Dashboard': 'bg-[#1e2433] text-[#6b8cda] border-[#3a4a7a]',
  'Power BI — Commercial Analytics': 'bg-[#1e2433] text-[#6b8cda] border-[#3a4a7a]',
  'Power BI — Marketing Analytics': 'bg-[#1e2433] text-[#6b8cda] border-[#3a4a7a]',
  'Power BI — Personal Project': 'bg-[#222533] text-[#94a3b8] border-[#2a2d3a]',
  'Exploratory Data Analysis': 'bg-[#2a1e33] text-[#a78bda] border-[#4a3a7a]',
  'Data Engineering + Visualization': 'bg-[#1a2e24] text-[#3A7A5A] border-[#2F6B4F]',
}

export default function ProjectCard({ project, expanded, onToggle }) {
  const typeClass = typeColors[project.type] || 'bg-[#222533] text-[#94a3b8] border-[#2a2d3a]'

  return (
    <article className="flex flex-col bg-[#1a1d27] border-2 border-[#2a2d3a] rounded-xl overflow-hidden hover:border-[#3A7A5A] hover:scale-[1.02] transition-all duration-300">
      {/* Top content — grows to fill available height */}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text-[#e2e8f0] font-semibold text-xl leading-tight">
            {project.title}
          </h3>
          <span className="text-sm text-[#64748b] whitespace-nowrap mt-1">
            {project.date}
          </span>
        </div>

        <span className={`inline-block text-xs font-medium px-2.5 py-1 rounded-md border mb-4 ${typeClass}`}>
          {project.type}
        </span>

        <p className="text-[#94a3b8] text-base leading-relaxed flex-1">
          {project.summary}
        </p>
      </div>

      {/* Crack panel — expands from vertical center */}
      <div
        style={{
          maxHeight: expanded ? '600px' : '0',
          opacity: expanded ? 1 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.45s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.35s ease',
        }}
      >
        <div
          style={{
            transform: expanded ? 'scaleY(1)' : 'scaleY(0.7)',
            transformOrigin: 'center',
            transition: 'transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          <div className="bg-[#2F6B4F] border-y border-[#3A7A5A]/40">
            {project.image && (
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="w-full object-cover max-h-52 border-b border-[#3A7A5A]/40"
              />
            )}
            <ul className="p-6 space-y-3">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-[#cbd5e1]">
                  <span className="text-[#a7f3d0] mt-0.5 shrink-0 font-semibold">→</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer — always pinned to bottom */}
      <div className="px-6 pb-6 pt-4">
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="text-xs px-2 py-0.5 rounded bg-[#222533] text-[#64748b] border border-[#2a2d3a]"
            >
              {tool}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={onToggle}
            className="text-base text-[#e2e8f0] hover:text-[#3A7A5A] active:text-[#2F6B4F] transition-colors duration-200"
          >
            {expanded ? '↑ Less' : '↓ Details'}
          </button>
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base text-[#e2e8f0] hover:text-[#3A7A5A] active:text-[#2F6B4F] transition-colors duration-200"
          >
            GitHub →
          </a>
        </div>
      </div>
    </article>
  )
}
