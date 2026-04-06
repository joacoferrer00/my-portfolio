import cvPhoto from '../assets/cv.png'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-14">
      <div className="max-w-5xl mx-auto w-full py-24 flex items-center justify-between gap-12">
        {/* Left: text content */}
        <div className="flex-1">
          <p className="text-[#3A7A5A] text-base font-medium tracking-widest uppercase mb-6">
            Analytics Engineer & BI Consultant
          </p>

          <h1 className="text-6xl md:text-8xl font-bold text-[#e2e8f0] leading-tight tracking-tight mb-6">
            Joaquín Ferrer
          </h1>

          <p className="text-2xl md:text-3xl text-[#94a3b8] max-w-2xl mb-10 leading-relaxed">
            I build systems that make data{' '}
            <span className="text-[#3A7A5A]">useful, scalable, and automated</span>.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-[#3A7A5A] hover:bg-[#2F6B4F] text-white font-medium rounded-lg transition-colors duration-200"
            >
              View Projects
            </a>
            <a
              href="https://drive.google.com/file/d/1iH_FYZtkNhHINkNI65pICpwkOV25cLqi/view"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-[#2a2d3a] hover:border-[#3A7A5A] text-[#94a3b8] hover:text-[#e2e8f0] font-medium rounded-lg transition-colors duration-200"
            >
              Download CV
            </a>
          </div>

          <div className="flex gap-5 mt-12">
            <a
              href="https://linkedin.com/in/joaquínferrer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#64748b] hover:text-[#3A7A5A] transition-colors duration-200 text-sm"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/joacoferrer00"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#64748b] hover:text-[#3A7A5A] transition-colors duration-200 text-sm"
            >
              GitHub
            </a>
            <a
              href="https://www.kaggle.com/joaqunferrer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#64748b] hover:text-[#3A7A5A] transition-colors duration-200 text-sm"
            >
              Kaggle
            </a>
          </div>
        </div>

        {/* Right: profile photo */}
        <div className="hidden md:block shrink-0">
          <img
            src={cvPhoto}
            alt="Joaquín Ferrer"
            className="w-80 h-80 rounded-full object-cover border-2 border-[#3A7A5A]"
          />
        </div>
      </div>
    </section>
  )
}
