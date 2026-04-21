import { useEffect, useState } from "react"

export function Hero() {
  const [bgLoaded, setBgLoaded] = useState(false)

  useEffect(() => {
    const id = requestAnimationFrame(() => setBgLoaded(true))
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <div id="home" className="crawta-hero">
      <div
        className={`crawta-hero-bg${bgLoaded ? " loaded" : ""}`}
        aria-hidden
      />
      <div className="crawta-hero-fade" aria-hidden />
      <div className="crawta-hero-content">
        <h1 className="crawta-hero-name">Crawta</h1>
        <p className="crawta-hero-sub">
          Grunge &nbsp;·&nbsp; Indie &nbsp;·&nbsp; Electronic
        </p>
        <div className="crawta-hero-scroll">
          <div className="crawta-scroll-line" />
        </div>
      </div>
    </div>
  )
}
