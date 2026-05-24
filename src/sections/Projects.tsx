import { useState } from 'react'
import { projects, competences, type Project } from '../data/content'
import { useReveal } from '../hooks/useReveal'
import './Projects.css'

const FILTERS = [
  { id: 'all', label: 'Tout' },
  { id: 'BUT2', label: 'BUT2' },
  { id: 'BUT1', label: 'BUT1' },
  { id: 'PRO', label: 'Pro' },
] as const

const compById = (id: string) => competences.find((c) => c.id === id)

export default function Projects() {
  const [filter, setFilter] = useState<string>('all')
  const [active, setActive] = useState<Project | null>(null)

  const list = projects.filter((p) => filter === 'all' || p.year === filter)

  return (
    <section className="section projects" id="projets">
      <div className="container">
        <div className="section-head">
          <p className="kicker">// réalisations</p>
          <h2>Mes projets &amp; analyses.</h2>
          <p className="lead">
            Six réalisations issues du BUT et du monde professionnel. Clique sur une carte
            marquée <span className="acc">analyse</span> pour lire l’étude détaillée :
            contexte, objectifs, démarche, difficultés et résultats.
          </p>
        </div>

        <div className="projects__filters mono">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              className={`projects__filter ${filter === f.id ? 'is-active' : ''}`}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
              <span className="projects__filter-count">
                {f.id === 'all'
                  ? projects.length
                  : projects.filter((p) => p.year === f.id).length}
              </span>
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {list.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} onOpen={() => setActive(p)} />
          ))}
        </div>
      </div>

      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </section>
  )
}

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project
  index: number
  onOpen: () => void
}) {
  const { ref, shown } = useReveal(0.15)
  const clickable = !!project.reflective

  return (
    <article
      ref={ref}
      className={`pcard reveal ${shown ? 'is-shown' : ''} ${clickable ? 'pcard--clickable' : ''}`}
      style={{ transitionDelay: `${(index % 3) * 0.09}s` }}
      onClick={clickable ? onOpen : undefined}
    >
      <div className="pcard__head">
        <span className={`pcard__year pcard__year--${project.year}`}>{project.yearLabel}</span>
        {project.featured && <span className="pcard__star mono">★ analyse</span>}
        {project.todo && <span className="pcard__todo mono">à compléter</span>}
      </div>

      <h3 className="pcard__title">{project.title}</h3>
      <p className="pcard__summary">{project.summary}</p>

      {project.competences.length > 0 && (
        <div className="pcard__comps">
          {project.competences.map((cid) => (
            <span key={cid} className="pcard__comp" title={compById(cid)?.title}>
              {cid}
            </span>
          ))}
        </div>
      )}

      <div className="pcard__tools">
        {project.tools.map((t) => (
          <span key={t} className="tag tag--mute">{t}</span>
        ))}
      </div>

      {project.assets && project.assets.length > 0 && (
        <div className="pcard__assets">
          {project.assets.map((a) => (
            <a
              key={a.label}
              href={a.url}
              className="pcard__asset mono"
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              {...(a.type === 'pdf' ? { download: true } : {})}
            >
              <span className="pcard__asset-icon">{assetIcon(a.type)}</span>
              {a.label}
            </a>
          ))}
        </div>
      )}

      {clickable && (
        <span className="pcard__cta mono">Lire l’analyse →</span>
      )}
    </article>
  )
}

function assetIcon(type: string) {
  switch (type) {
    case 'pdf': return '↓'
    case 'image': return '◫'
    case 'code': return '</>'
    default: return '↗'
  }
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const r = project.reflective
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal__panel" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Fermer">✕</button>

        <div className="modal__head">
          <span className={`pcard__year pcard__year--${project.year}`}>{project.yearLabel}</span>
          <h3>{project.title}</h3>
          <p className="modal__context">{project.context}</p>
          <div className="modal__comps">
            {project.competences.map((cid) => {
              const c = compById(cid)
              return (
                <span key={cid} className="modal__comp">
                  <strong>{cid}</strong> {c?.title}
                </span>
              )
            })}
          </div>
        </div>

        {project.todo && (
          <p className="modal__warn mono">
            ⚠ Cette analyse contient des emplacements « À COMPLÉTER » : remplace-les par tes
            vraies infos avant la soutenance.
          </p>
        )}

        {r && (
          <div className="modal__sections">
            <ModalBlock n="01" title="Preuve" text={r.proof} />
            <ModalBlock n="02" title="Objectifs & contraintes" text={r.objectives} />
            <ModalBlock n="03" title="Ma démarche" text={r.approach} />
            <ModalBlock n="04" title="Difficultés surmontées" text={r.difficulties} />
            <ModalBlock n="05" title="Résultats obtenus" text={r.results} />
            <ModalBlock n="06" title="Montée en compétence" text={r.learning} highlight />
          </div>
        )}

        {project.assets && project.assets.length > 0 && (
          <div className="modal__links">
            {project.assets.map((a) => (
              <a
                key={a.label}
                href={a.url}
                className="btn btn--ghost"
                target="_blank"
                rel="noreferrer"
                {...(a.type === 'pdf' ? { download: true } : {})}
              >
                {assetIcon(a.type)} {a.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function ModalBlock({
  n,
  title,
  text,
  highlight,
}: {
  n: string
  title: string
  text: string
  highlight?: boolean
}) {
  return (
    <div className={`mblock ${highlight ? 'mblock--hl' : ''}`}>
      <div className="mblock__n mono">{n}</div>
      <div className="mblock__content">
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  )
}
