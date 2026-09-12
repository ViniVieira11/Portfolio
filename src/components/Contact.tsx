import { contact } from '../data/profile'
import './Contact.css'

function Contact() {
  return (
    <section id="contato" className="section contact">
      <div className="container">
        <div className="card contact__panel">
          <div>
            <span className="eyebrow">Contato</span>
            <h2 className="contact__title">Vamos conversar sobre dados?</h2>
            <p className="contact__text">
              Aberto a oportunidades em Análise de Dados, BI e Planejamento. Respondo rápido pelo WhatsApp ou e-mail.
            </p>
          </div>
          <div className="contact__links">
            <a className="btn btn-primary" href={contact.whatsappLink} target="_blank" rel="noreferrer">
              WhatsApp · {contact.phone}
            </a>
            <a className="btn btn-ghost" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
            <a className="btn btn-ghost" href={contact.linkedin} target="_blank" rel="noreferrer">
              {contact.linkedinLabel}
            </a>
          </div>
          <span className="contact__location">{contact.location}</span>
        </div>
      </div>
    </section>
  )
}

export default Contact
