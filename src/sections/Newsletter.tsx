import { useState, type FormEvent } from "react"
import { useRevealOnScroll } from "../hooks/useRevealOnScroll"

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

function SoundCloudIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M1.175 12.225c-.050 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.051.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c-.009-.06-.05-.1-.1-.1zm-.899.828c-.06 0-.109.05-.116.112l-.16 1.326.16 1.29c.007.063.055.11.116.11.06 0 .11-.047.116-.11l.184-1.29-.184-1.326c-.007-.063-.057-.112-.116-.112zm1.81-.474c-.064 0-.12.057-.127.125l-.204 1.8.204 1.74c.007.07.063.124.127.124.063 0 .12-.055.126-.124l.233-1.74-.233-1.8c-.007-.068-.063-.125-.126-.125zm.907-.295c-.077 0-.143.066-.15.146l-.176 2.095.176 2.016c.007.082.073.145.15.145.078 0 .144-.063.15-.145l.2-2.016-.2-2.095c-.006-.08-.072-.146-.15-.146zm.93-.176c-.09 0-.166.076-.172.17l-.15 2.27.15 2.168c.006.094.082.168.172.168.09 0 .167-.074.172-.168l.17-2.168-.17-2.27c-.005-.094-.082-.17-.172-.17zm.937-.105c-.102 0-.188.086-.194.193l-.125 2.375.125 2.258c.006.108.092.19.194.19.103 0 .189-.082.194-.19l.14-2.258-.14-2.375c-.005-.107-.09-.193-.194-.193zm.958-.05c-.115 0-.212.098-.217.217l-.1 2.425.1 2.318c.005.12.102.215.217.215.116 0 .212-.096.217-.215l.115-2.318-.115-2.425c-.005-.12-.1-.217-.217-.217zm.96-.02c-.128 0-.236.108-.24.24l-.077 2.445.077 2.356c.004.133.112.238.24.238.13 0 .237-.105.24-.238l.088-2.356-.088-2.444c-.003-.133-.11-.24-.24-.24zm.966-.004c-.142 0-.262.12-.265.265l-.052 2.45.052 2.37c.003.145.123.262.265.262.143 0 .262-.117.265-.262l.058-2.37-.058-2.45c-.003-.145-.122-.265-.265-.265zm.97.022c-.155 0-.283.13-.285.288l-.03 2.427.03 2.38c.002.158.13.285.285.285.157 0 .284-.127.285-.285l.033-2.38-.033-2.427c-.001-.158-.128-.288-.285-.288zm.972.056c-.17 0-.31.14-.31.313l-.006 2.37.006 2.384c0 .172.14.31.31.31.173 0 .312-.138.312-.31l.007-2.384-.007-2.37c0-.172-.14-.313-.312-.313zM20.3 8.498c-.343 0-.674.07-.975.195-.203-2.336-2.137-4.16-4.52-4.16-1.154 0-2.208.43-3.003 1.134v9.568l.003.095c.007.452.374.813.827.813H20.3c.93 0 1.685-.756 1.685-1.686V10.184c0-.93-.755-1.686-1.685-1.686z" />
    </svg>
  )
}

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [invalid, setInvalid] = useState(false)
  const [innerRevealRef, innerRevealVisible] = useRevealOnScroll(0)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!email.includes("@")) {
      setInvalid(true)
      window.setTimeout(() => setInvalid(false), 1200)
      return
    }
    setSubmitted(true)
  }

  return (
    <section id="signup" className="crawta-section crawta-signup-section">
      <div
        ref={innerRevealRef}
        className={`crawta-signup-inner crawta-reveal${innerRevealVisible ? " visible" : ""}`}
      >
        <div className="crawta-signup-text">
          <p className="crawta-section-label">Stay in the loop</p>
          <h2 className="crawta-section-title">
            New music.
            <br />
            First.
          </h2>
          <p className="crawta-signup-desc">
            Join the list for early track drops, behind-the-scenes, and show
            announcements — no noise, just signal.
          </p>
          <div className="crawta-social-row">
            <a
              className="crawta-social-btn"
              href="https://instagram.com/crawta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
              Instagram
            </a>
            <a
              className="crawta-social-btn"
              href="https://soundcloud.com/crawta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SoundCloudIcon />
              SoundCloud
            </a>
          </div>
        </div>

        <div className="crawta-signup-form">
          {submitted ? (
            <p className="crawta-success-msg" role="status">
              ✦ You&apos;re in. Thanks for joining.
            </p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="crawta-form-row">
                <input
                  className="crawta-form-input"
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-invalid={invalid}
                  style={
                    invalid
                      ? { borderColor: "rgba(255,100,100,0.5)" }
                      : undefined
                  }
                />
                <button type="submit" className="crawta-form-btn">
                  Subscribe
                </button>
              </div>
              <p className="crawta-form-note">
                No spam, unsubscribe anytime. Promise.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
