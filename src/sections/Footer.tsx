import { profile } from '../data/content'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand mono">
          <span className="footer__mark">CS</span>
          Chakir Sayyouri — e-portfolio
        </div>
        <div className="footer__links mono">
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
        <p className="footer__copy mono">
          © {year} · BUT Science des Données · IUT Paris Rives de Seine
        </p>
      </div>
    </footer>
  )
}
