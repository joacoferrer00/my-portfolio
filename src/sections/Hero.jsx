export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-14">
      <div className="max-w-5xl mx-auto w-full py-24">
        <p className="text-[#3A7A5A] text-sm font-medium tracking-widest uppercase mb-6">
          Analytics Engineer & BI Consultant
        </p>

        <h1 className="text-5xl md:text-7xl font-bold text-[#e2e8f0] leading-tight tracking-tight mb-6">
          Joaquín Ferrer
        </h1>

        <p className="text-xl md:text-2xl text-[#94a3b8] max-w-2xl mb-10 leading-relaxed">
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
            href="https://drive.google.com"
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
            href="https://kaggle.com/joaquinferrer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#64748b] hover:text-[#3A7A5A] transition-colors duration-200 text-sm"
          >
            Kaggle
          </a>
        </div>
      </div>
    </section>
  )
}
