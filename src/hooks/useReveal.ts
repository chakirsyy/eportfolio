import { useEffect, useRef, useState } from 'react'

/**
 * Révèle un élément quand il entre dans le viewport.
 * Usage : const { ref, shown } = useReveal()
 *         <div ref={ref} className={shown ? 'is-shown' : ''}>
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(threshold = 0.15) {
  const ref = useRef<T>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true)
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  return { ref, shown }
}
