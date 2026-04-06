import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

export default function Projects() {
  const [openId, setOpenId] = useState(null)

  function handleToggle(id) {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <section id="projects" className="py-24 px-6 border-t border-[#2a2d3a]">
      <div className="max-w-5xl mx-auto">
        <p className="text-[#3A7A5A] text-sm font-medium tracking-widest uppercase mb-4">
          Projects
        </p>
        <h2 className="text-3xl font-bold text-[#e2e8f0] tracking-tight mb-3">
          End-to-end work
        </h2>
        <p className="text-[#94a3b8] mb-12 max-w-xl">
          From production data pipelines to business dashboards — each project built to solve a real problem.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              expanded={openId === project.id}
              onToggle={() => handleToggle(project.id)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
