import { certifications, contact, profile } from '../data/profile'
import './Hero.css'

const stats = [
  { value: `${profile.age}`, label: 'anos' },
  { value: `${certifications.length}`, label: 'certificações' },
  { value: '600+', label: 'chamados analisados em SLA' },
  { value: 'R$ 1,3 Bi', label: 'em faturamento analisado' },
]

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <div className="hero__copy">
          <span className="eyebrow">Portfólio · Dados &amp; BI</span>
          <h1 className="hero__title">
            Olá, eu sou <span className="hero__name">{profile.name}</span>
          </h1>
          <p className="hero__headline">{profile.headline}</p>
          <p className="hero__tagline">{profile.tagline}</p>
          <div className="hero__actions">
            <a className="btn btn-primary" href="#projetos">
              Ver projetos
            </a>
            <a className="btn btn-ghost" href={contact.linkedin} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
          </div>
        </div>

        <div className="hero__panel card">
          <div className="hero__panel-head">
            <span className="tag">painel · visão geral</span>
            <span className="hero__live">
              <span className="hero__live-dot" /> disponível para novas oportunidades
            </span>
          </div>
          <div className="hero__stats">
            {stats.map((stat) => (
              <div className="hero__stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
