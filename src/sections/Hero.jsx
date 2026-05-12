import cvPhoto from '../assets/cv.png'
import { smoothScrollTo } from '../utils/scroll'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-14">
      <div className="hero-grid-bg" aria-hidden="true" />

      <div className="max-w-5xl mx-auto w-full py-24 flex items-center justify-between gap-12">
        {/* Left: text content */}
        <div className="flex-1">
          <p
            className="anim-fade-up text-[#3A7A5A] text-base font-medium tracking-widest uppercase mb-6"
            style={{ animationDelay: '0ms' }}
          >
            Analytics Engineer
          </p>

          <h1
            className="anim-fade-up text-6xl md:text-8xl font-bold text-[#e2e8f0] leading-tight tracking-tight mb-6"
            style={{ animationDelay: '80ms' }}
          >
            Joaquín Ferrer
          </h1>

          <p
            className="anim-fade-up text-2xl md:text-3xl text-[#94a3b8] max-w-2xl mb-10 leading-relaxed"
            style={{ animationDelay: '180ms' }}
          >
            I build systems that make data{' '}
            <span className="text-[#3A7A5A]">useful, scalable, and automated</span>.
          </p>

          <div
            className="anim-fade-up flex flex-wrap gap-4"
            style={{ animationDelay: '300ms' }}
          >
            <button
              onClick={() => smoothScrollTo('projects')}
              className="px-6 py-3 bg-[#3A7A5A] hover:bg-[#2F6B4F] text-white font-medium rounded-lg transition-colors duration-200"
            >
              View Projects
            </button>
            <a
              href="https://drive.google.com/file/d/1iH_FYZtkNhHINkNI65pICpwkOV25cLqi/view"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-[#2a2d3a] hover:border-[#3A7A5A] text-[#94a3b8] hover:text-[#e2e8f0] font-medium rounded-lg transition-colors duration-200"
            >
              Download CV
            </a>
          </div>

          <div
            className="anim-fade-up flex gap-5 mt-12"
            style={{ animationDelay: '430ms' }}
          >
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
        <div
          className="anim-fade-up hidden md:block shrink-0"
          style={{ animationDelay: '200ms' }}
        >
          <img
            src={cvPhoto}
            alt="Joaquín Ferrer"
            className="w-80 h-80 rounded-full object-cover border-2 border-[#3A7A5A]"
          />
        </div>
      </div>

      {/* Scroll-down cue */}
      <div
        className="anim-fade-up absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{ animationDelay: '600ms' }}
        aria-hidden="true"
      >
        <div className="scroll-cue" />
      </div>
    </section>
  )
}
