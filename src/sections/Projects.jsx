import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'
import { useInView } from '../hooks/useInView'

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const secondary = projects.filter((p) => !p.featured)
  const [openId, setOpenId] = useState(null)
  const [ref, inView] = useInView()

  function handleToggle(id) {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <section id="projects" className="py-24 px-6 border-t border-[#2a2d3a]">
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
          Projects
        </p>
        <h2 className="text-3xl font-bold text-[#e2e8f0] tracking-tight mb-3">
          End-to-end work
        </h2>
        <p className="text-[#94a3b8] mb-12 max-w-xl">
          From production data pipelines to business dashboards — each project built to solve a real problem.
        </p>

        {/* Featured — 2-column, full cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {featured.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              expanded={openId === project.id}
              onToggle={() => handleToggle(project.id)}
            />
          ))}
        </div>

        {/* Secondary — compact list */}
        <p className="text-xs text-[#64748b] uppercase tracking-widest mb-5">More projects</p>
        <div className="flex flex-col gap-3">
          {secondary.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              expanded={openId === project.id}
              onToggle={() => handleToggle(project.id)}
              minimal
            />
          ))}
        </div>
      </div>
    </section>
  )
}
