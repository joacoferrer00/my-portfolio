function easeInOut(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
}

export function smoothScrollTo(id) {
  const start = window.scrollY
  const target = id
    ? document.getElementById(id).getBoundingClientRect().top + window.scrollY - 56
    : 0
  const distance = target - start
  const duration = 700
  let startTime = null

  function step(timestamp) {
    if (!startTime) startTime = timestamp
    const progress = Math.min((timestamp - startTime) / duration, 1)
    window.scrollTo({ top: start + distance * easeInOut(progress), behavior: 'instant' })
    if (progress < 1) requestAnimationFrame(step)
  }

  requestAnimationFrame(step)
}
