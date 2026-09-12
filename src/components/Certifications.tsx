import { certifications } from '../data/profile'
import './Certifications.css'

function Certifications() {
  return (
    <section id="certificacoes" className="section certifications">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Formação contínua</span>
          <h2>Certificações</h2>
          <p>{certifications.length} cursos concluídos entre 2023 e 2025, cobrindo dados, cloud e front-end.</p>
        </div>
        <div className="certifications__grid">
          {certifications.map((cert) => (
            <div className="certifications__item" key={cert.name}>
              <span className="certifications__year">{cert.year}</span>
              <div>
                <strong>{cert.name}</strong>
                <span className="certifications__institution">{cert.institution}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
