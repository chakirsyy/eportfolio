import { competences, stack } from '../data/content'
import { useReveal } from '../hooks/useReveal'
import './Competences.css'

export default function Competences() {
  return (
    <section className="section competences" id="competences">
      <div className="container">
        <div className="section-head">
          <p className="kicker">// compétences</p>
          <h2>Le référentiel, prouvé.</h2>
          <p className="lead">
            Les quatre compétences du BUT Science des Données (parcours VCOD), illustrées par
            mes réalisations plutôt que simplement déclarées.
          </p>
        </div>

        <div className="comp__grid">
          {competences.map((c, i) => (
            <CompCard key={c.id} comp={c} index={i} />
          ))}
        </div>

        <div className="stack">
          <h3 className="stack__title mono">// stack technique</h3>
          <div className="stack__cols">
            <StackCol label="Langages" items={stack.languages} />
            <StackCol label="Data / BI" items={stack.data} />
            <StackCol label="Web" items={stack.web} />
            <StackCol label="Outils" items={stack.tools} />
          </div>
        </div>
      </div>
    </section>
  )
}

function CompCard({ comp, index }: { comp: (typeof competences)[number]; index: number }) {
  const { ref, shown } = useReveal(0.2)
  return (
    <article
      ref={ref}
      className={`comp-card reveal ${shown ? 'is-shown' : ''}`}
      style={{ transitionDelay: `${(index % 2) * 0.1}s` }}
    >
      <div className="comp-card__id mono">{comp.id}</div>
      <h3 className="comp-card__title">{comp.title}</h3>
      <p className="comp-card__desc">{comp.desc}</p>
      <div className="comp-card__tools">
        {comp.tools.map((t) => (
          <span key={t} className="tag tag--mute">{t}</span>
        ))}
      </div>
    </article>
  )
}

function StackCol({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="stack__col">
      <span className="stack__label">{label}</span>
      <ul>
        {items.map((it) => (
          <li key={it}>{it}</li>
        ))}
      </ul>
    </div>
  )
}
