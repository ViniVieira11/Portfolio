import { education, profile } from '../data/profile'
import './About.css'

function About() {
  return (
    <section id="sobre" className="section about">
      <div className="container about__inner">
        <div>
          <span className="eyebrow">Sobre</span>
          <h2 className="about__title">Perfil</h2>
          <p className="about__text">{profile.about}</p>
        </div>
        <div className="card about__card">
          <span className="tag">objetivo profissional</span>
          <p className="about__objective">{profile.objective}</p>
          <div className="about__education">
            <span className="about__education-label">Formação</span>
            {education.map((item) => (
              <div key={item.course} className="about__education-item">
                <strong>{item.course}</strong>
                <span>
                  {item.institution} · {item.period}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
