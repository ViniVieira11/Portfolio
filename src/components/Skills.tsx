import { skills } from '../data/profile'
import './Skills.css'

function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Competências</span>
          <h2>Ferramentas que uso no dia a dia</h2>
          <p>Da modelagem de dados no Excel/SQL à construção de dashboards e telas — do dado bruto até a decisão.</p>
        </div>
        <div className="skills__grid">
          {skills.map((group) => (
            <div className="card skills__group" key={group.category}>
              <h3>{group.category}</h3>
              <div className="skills__chips">
                {group.items.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
