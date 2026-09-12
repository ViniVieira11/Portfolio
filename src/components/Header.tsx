import { useEffect, useState } from 'react'
import { contact, profile } from '../data/profile'
import './Header.css'

const NAV_LINKS = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#skills', label: 'Skills' },
  { href: '#experiencia', label: 'Experiência' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#certificacoes', label: 'Certificações' },
  { href: '#contato', label: 'Contato' },
]

function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container site-header__inner">
        <a href="#top" className="site-header__brand">
          <span className="site-header__dot" />
          {profile.name}
        </a>
        <nav className="site-header__nav">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <a className="btn btn-primary site-header__cta" href={contact.whatsappLink} target="_blank" rel="noreferrer">
          Fale comigo
        </a>
      </div>
    </header>
  )
}

export default Header
