import {
  useEffect,
  useRef,
  useState,
  type RefObject,
} from "react"

export function useRevealOnScroll<T extends HTMLElement = HTMLDivElement>(
  staggerIndex = 0,
): readonly [RefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || visible) return

    const delay = (staggerIndex % 3) * 80
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            window.setTimeout(() => setVisible(true), delay)
            observer.unobserve(e.target)
            break
          }
        }
      },
      { threshold: 0.12 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [staggerIndex, visible])

  return [ref, visible] as const
}
