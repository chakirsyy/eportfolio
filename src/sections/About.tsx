import { about, profile } from '../data/content'
import { useReveal } from '../hooks/useReveal'
import './About.css'

export default function About() {
  const { ref, shown } = useReveal()

  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="section-head">
          <p className="kicker">// à propos</p>
          <h2>De la curiosité des chiffres<br />au métier de la donnée.</h2>
        </div>

        <div ref={ref} className={`about__grid reveal ${shown ? 'is-shown' : ''}`}>
          <div className="about__text">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <aside className="about__side">
            <div className="about__block">
              <h3 className="about__block-title mono">// langues</h3>
              <ul className="about__langs">
                {about.languages.map((l) => (
                  <li key={l.label}>
                    <span>{l.label}</span>
                    <span className="tag tag--mute">{l.level}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="about__block">
              <h3 className="about__block-title mono">// savoir-être</h3>
              <div className="about__soft">
                {about.softSkills.map((s) => (
                  <span key={s} className="tag">{s}</span>
                ))}
              </div>
            </div>

            <div className="about__block about__contact-mini mono">
              <a href={profile.linkedin} target="_blank" rel="noreferrer">→ LinkedIn</a>
              <a href={profile.github} target="_blank" rel="noreferrer">→ GitHub</a>
              <a href={`mailto:${profile.email}`}>→ {profile.email}</a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
