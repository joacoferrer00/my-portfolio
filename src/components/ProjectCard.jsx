import { useState } from 'react'

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

export default function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false)
  const typeClass = typeColors[project.type] || 'bg-[#222533] text-[#94a3b8] border-[#2a2d3a]'

  return (
    <article className="bg-[#1a1d27] border border-[#2a2d3a] rounded-xl overflow-hidden hover:border-[#3A7A5A]/40 transition-colors duration-300">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text-[#e2e8f0] font-semibold text-lg leading-tight">
            {project.title}
          </h3>
          <span className="text-xs text-[#64748b] whitespace-nowrap mt-1">
            {project.date}
          </span>
        </div>

        {/* Type badge */}
        <span className={`inline-block text-xs font-medium px-2.5 py-1 rounded-md border mb-4 ${typeClass}`}>
          {project.type}
        </span>

        {/* Summary */}
        <p className="text-[#94a3b8] text-sm leading-relaxed mb-4">
          {project.summary}
        </p>

        {/* Expandable highlights */}
        {expanded && (
          <ul className="space-y-2 mb-4">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-[#94a3b8]">
                <span className="text-[#3A7A5A] mt-0.5 shrink-0">→</span>
                {h}
              </li>
            ))}
          </ul>
        )}

        {/* Tools */}
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

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-sm text-[#3A7A5A] hover:text-[#4a9a70] transition-colors"
          >
            {expanded ? '↑ Less' : '↓ Details'}
          </button>
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#64748b] hover:text-[#e2e8f0] transition-colors"
          >
            GitHub →
          </a>
        </div>
      </div>
    </article>
  )
}
