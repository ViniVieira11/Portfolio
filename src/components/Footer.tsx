import { profile } from '../data/profile'
import './Footer.css'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Construído com React + TypeScript + Vite</span>
      </div>
    </footer>
  )
}

export default Footer
