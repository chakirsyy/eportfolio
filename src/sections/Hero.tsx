import { useEffect, useState } from 'react'
import { profile, intro } from '../data/content'
import './Hero.css'

const ROLES = [
  'Data Science · VCOD',
  'Analyse & visualisation',
  'Outils décisionnels',
  'Futur Data Scientist',
]

function Typewriter() {
  const [i, setI] = useState(0)
  const [txt, setTxt] = useState('')
  const [del, setDel] = useState(false)

  useEffect(() => {
    const full = ROLES[i]
    let timeout: number

    if (!del && txt === full) {
      timeout = window.setTimeout(() => setDel(true), 1600)
    } else if (del && txt === '') {
      setDel(false)
      setI((p) => (p + 1) % ROLES.length)
    } else {
      timeout = window.setTimeout(
        () => setTxt(full.slice(0, del ? txt.length - 1 : txt.length + 1)),
        del ? 40 : 75,
      )
    }
    return () => clearTimeout(timeout)
  }, [txt, del, i])

  return (
    <span className="hero__type">
      {txt}
      <span className="cursor" />
    </span>
  )
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__grid container">
        <div className="hero__main">
          <p className="kicker">e-portfolio · BUT2 Science des Données</p>

          <h1 className="hero__title">
            Je transforme la<br />
            <span className="acc">donnée brute</span> en<br />
            décisions claires.
          </h1>

          <div className="hero__role mono">
            <span className="hero__prompt">~/chakir $</span> <Typewriter />
          </div>

          <p className="hero__lead">{intro}</p>

          <div className="hero__actions">
            <a href="#projets" className="btn btn--primary">
              Voir mes réalisations ↓
            </a>
            <a href="#contact" className="btn btn--ghost">
              Me contacter
            </a>
          </div>

          <div className="hero__status mono">
            <span className="hero__dot" />
            {profile.status}
          </div>
        </div>

        {/* Carte « identité » façon fiche système */}
        <aside className="hero__card">
          <div className="hero__card-head mono">
            <span className="hero__card-dots">
              <i /><i /><i />
            </span>
            <span>identity.json</span>
          </div>
          <div className="hero__card-body mono">
            <p><span className="k">name</span>: <span className="s">"{profile.name}"</span>,</p>
            <p><span className="k">role</span>: <span className="s">"Data Scientist (jr)"</span>,</p>
            <p><span className="k">school</span>: <span className="s">"IUT Paris Rives de Seine"</span>,</p>
            <p><span className="k">work</span>: <span className="s">"Médiamétrie"</span>,</p>
            <p><span className="k">track</span>: <span className="s">"VCOD"</span>,</p>
            <p><span className="k">loc</span>: <span className="s">"Argenteuil, FR"</span>,</p>
            <p><span className="k">stack</span>: [<span className="s">"Python"</span>, <span className="s">"SQL"</span>, <span className="s">"R"</span>, <span className="s">"PowerBI"</span>],</p>
            <p><span className="k">focus</span>: <span className="s">"data · décisionnel"</span></p>
          </div>
        </aside>
      </div>

      {/* Bandeau défilant de compétences */}
      <div className="hero__marquee" aria-hidden="true">
        <div className="hero__marquee-track">
          {[...Array(2)].map((_, k) => (
            <span key={k} className="hero__marquee-group">
              {['PYTHON', 'SQL', 'R · SAS', 'POWER BI · DAX', 'REACT · NODE', 'DATAVIZ', 'STATISTIQUES', 'ORACLE', 'EXCEL · VBA'].map((t) => (
                <span key={t} className="hero__marquee-item">
                  {t} <em>/</em>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
