import { experience } from '../data/profile'
import './Experience.css'

function Experience() {
  return (
    <section id="experiencia" className="section experience">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Trajetória</span>
          <h2>Experiência profissional</h2>
          <p>Do atendimento ao público à análise de dados: uma base sólida de organização, comunicação e resolução de problemas.</p>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <div className="timeline__item" key={item.role + item.company}>
              <div className="timeline__marker">
                <span className={`timeline__dot ${item.current ? 'is-current' : ''}`} />
                <span className="timeline__line" />
              </div>
              <div className="card timeline__content">
                <div className="timeline__top">
                  <div>
                    <h3>{item.role}</h3>
                    <span className="timeline__company">{item.company}</span>
                  </div>
                  {item.current && <span className="tag timeline__badge">atual</span>}
                </div>
                <div className="timeline__meta">
                  <span>{item.period}</span>
                  <span>{item.location}</span>
                </div>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
