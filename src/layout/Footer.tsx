export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="crawta-footer">
      <span className="crawta-footer-logo">Crawta</span>
      <span className="crawta-footer-copy">
        © {year} Crawta. All rights reserved.
      </span>
    </footer>
  )
}
