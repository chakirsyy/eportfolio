import { timeline } from '../data/content'
import { useReveal } from '../hooks/useReveal'
import './Parcours.css'

export default function Parcours() {
  return (
    <section className="section parcours" id="parcours">
      <div className="container">
        <div className="section-head">
          <p className="kicker">// parcours</p>
          <h2>Formation &amp; expériences.</h2>
          <p className="lead">
            Un chemin qui mêle la data, le développement et des expériences humaines —
            de l’animation à la scène musicale.
          </p>
        </div>

        <div className="timeline">
          {timeline.map((item, i) => (
            <TimelineRow key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TimelineRow({
  item,
  index,
}: {
  item: (typeof timeline)[number]
  index: number
}) {
  const { ref, shown } = useReveal(0.2)
  return (
    <article
      ref={ref}
      className={`tl-row reveal ${shown ? 'is-shown' : ''} ${item.featured ? 'tl-row--featured' : ''}`}
      style={{ transitionDelay: `${(index % 3) * 0.08}s` }}
    >
      <div className="tl-row__period mono">{item.period}</div>

      <div className="tl-row__marker">
        <span className={`tl-row__dot tl-row__dot--${item.kind}`} />
        <span className="tl-row__line" />
      </div>

      <div className="tl-row__body">
        <div className="tl-row__top">
          <h3>{item.title}</h3>
          {item.featured ? (
            <span className="tl-row__badge tl-row__badge--feat">★ projet phare</span>
          ) : (
            <span className={`tl-row__badge tl-row__badge--${item.kind}`}>
              {item.kind === 'edu' ? 'formation' : 'expérience'}
            </span>
          )}
        </div>
        <p className="tl-row__org">
          {item.org}
          {item.location && <span className="tl-row__loc"> · {item.location}</span>}
        </p>
        {item.points && (
          <ul className="tl-row__points">
            {item.points.map((p, k) => (
              <li key={k}>{p}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  )
}
