import { useEffect, useRef, useState } from 'react'

export function useInView() {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Double RAF: ensures the browser has painted the initial opacity:0
    // state before we start observing, so the CSS transition has something to animate from.
    let raf1 = requestAnimationFrame(() => {
      let raf2 = requestAnimationFrame(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setInView(true)
              observer.disconnect()
            }
          },
          { threshold: 0.08 }
        )
        observer.observe(el)
      })
      return () => cancelAnimationFrame(raf2)
    })

    return () => cancelAnimationFrame(raf1)
  }, [])

  return [ref, inView]
}
