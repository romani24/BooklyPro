import { useState } from 'react'
import { ArrowRight, Menu, Scissors, X } from 'lucide-react'

type SiteHeaderProps = { onBook: () => void }

export function SiteHeader({ onBook }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="nav-wrap">
      <a className="brand" href="#top" aria-label="Atelier 22 home"><span className="brand-mark"><Scissors size={19} /></span><span>ATELIER <b>22</b></span></a>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
        <a href="#services" onClick={() => setMenuOpen(false)}>Services</a><a href="#team" onClick={() => setMenuOpen(false)}>Team</a><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
        <button className="nav-cta" onClick={onBook}>Book now <ArrowRight size={16} /></button>
      </nav>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">{menuOpen ? <X /> : <Menu />}</button>
    </header>
  )
}
