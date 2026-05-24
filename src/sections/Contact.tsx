import { useState } from 'react'
import { profile } from '../data/content'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = () => {
    if (!form.name || !form.email || !form.message) return
    // Ouvre le client mail pré-rempli (pas de back-end requis pour l'hébergement statique)
    const subject = encodeURIComponent(`Contact portfolio — ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="contact__grid">
          <div className="contact__left">
            <p className="kicker">// contact</p>
            <h2 className="contact__title">
              On construit<br />quelque chose<br />ensemble ?
            </h2>
            <p className="contact__lead">
              Recruteurs, enseignants, ou simple curieux — n’hésitez pas à m’écrire.
            </p>

            <div className="contact__links mono">
              <a href={`mailto:${profile.email}`} className="contact__link">
                <span className="contact__link-label">email</span>
                <span className="contact__link-val">{profile.email}</span>
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact__link">
                <span className="contact__link-label">linkedin</span>
                <span className="contact__link-val">/chakir-sayyouri</span>
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="contact__link">
                <span className="contact__link-label">github</span>
                <span className="contact__link-val">/chakirsyy</span>
              </a>
              <a href={profile.cvFr} className="contact__link" download>
                <span className="contact__link-label">cv</span>
                <span className="contact__link-val">télécharger (PDF) ↓</span>
              </a>
            </div>
          </div>

          <div className="contact__form">
            <div className="field">
              <label className="mono">nom</label>
              <input type="text" value={form.name} onChange={update('name')} placeholder="Votre nom" />
            </div>
            <div className="field">
              <label className="mono">email</label>
              <input type="email" value={form.email} onChange={update('email')} placeholder="vous@exemple.com" />
            </div>
            <div className="field">
              <label className="mono">message</label>
              <textarea rows={5} value={form.message} onChange={update('message')} placeholder="Votre message…" />
            </div>
            <button className="btn btn--primary contact__submit" onClick={submit}>
              {sent ? 'Client mail ouvert ✓' : 'Envoyer le message →'}
            </button>
            <p className="contact__note mono">
              Le formulaire ouvre votre logiciel de messagerie avec le message pré-rempli.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
