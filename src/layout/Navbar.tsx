import { useNavScrolled } from "../hooks/useNavScrolled"

const navLinks = [
  { href: "#music", label: "Music" },
  { href: "#signup", label: "Newsletter" },
]

export function Navbar() {
  const scrolled = useNavScrolled(60)

  return (
    <nav className={`crawta-nav${scrolled ? " scrolled" : ""}`}>
      <a className="crawta-nav-logo" href="#home">
        Crawta
      </a>
      <div className="crawta-nav-links">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  )
}
