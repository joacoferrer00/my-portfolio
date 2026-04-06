import { skillGroups } from '../data/skills'
import { useInView } from '../hooks/useInView'

const levelColor = {
  Advanced: 'text-[#3A7A5A]',
  Intermediate: 'text-[#3A7A5A]',
  Proficient: 'text-[#94a3b8]',
}

export default function Skills() {
  const [ref, inView] = useInView()
  return (
    <section id="skills" className="py-24 px-6 border-t border-[#2a2d3a]">
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
          Skills
        </p>
        <h2 className="text-3xl font-bold text-[#e2e8f0] tracking-tight mb-12">
          Technical stack
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="bg-[#1a1d27] border border-[#2a2d3a] rounded-xl p-6"
            >
              <h3 className="text-base font-semibold text-[#e2e8f0] uppercase tracking-wider mb-4">
                {group.category}
              </h3>
              <ul className="space-y-3">
                {group.skills.map((skill) => (
                  <li key={skill.name} className="flex items-center justify-between">
                    <span className="text-base text-[#94a3b8]">{skill.name}</span>
                    <span className={`text-sm font-medium ${levelColor[skill.level]}`}>
                      {skill.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
