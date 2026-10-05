import { useState } from 'react'
import { projects, type ProjectItem } from '../data/profile'
import './Projects.css'

const imageModules = import.meta.glob('../assets/projects/*.png', {
  eager: true,
  import: 'default',
}) as Record<string, string>

function resolveImage(fileName: string): string {
  const match = Object.entries(imageModules).find(([path]) => path.endsWith(fileName))
  return match ? match[1] : ''
}

const liveStats = [
  { label: 'chamados', value: '600' },
  { label: 'taxa de encerramento', value: '71,5%' },
  { label: 'satisfação média', value: '3,79/5' },
  { label: 'tempo médio (h)', value: '7,7' },
]

function ProjectGallery({ project }: { project: ProjectItem }) {
  const images = project.images ?? []
  const [active, setActive] = useState(0)

  if (images.length === 0) return null

  return (
    <div className="project-gallery">
      <div className="project-gallery__frame">
        <img src={resolveImage(images[active].src)} alt={images[active].alt} />
      </div>
      <div className="project-gallery__tabs">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            className={`project-gallery__tab ${index === active ? 'is-active' : ''}`}
            onClick={() => setActive(index)}
          >
            {image.label}
          </button>
        ))}
      </div>
    </div>
  )
}

function ProjectMiniDashboard() {
  return (
    <div className="mini-dashboard">
      <div className="mini-dashboard__head">
        <span className="tag">workflow · knime</span>
        <span className="mini-dashboard__live">
          <span className="mini-dashboard__dot" /> dados reais do projeto
        </span>
      </div>
      <div className="mini-dashboard__stats">
        {liveStats.map((stat) => (
          <div key={stat.label} className="mini-dashboard__stat">
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
      <div className="mini-dashboard__bars">
        <div className="mini-dashboard__bar-row">
          <span>Crítica</span>
          <div className="mini-dashboard__track">
            <div className="mini-dashboard__fill" style={{ width: '18%', background: 'var(--danger)' }} />
          </div>
          <span>2,3h</span>
        </div>
        <div className="mini-dashboard__bar-row">
          <span>Alta</span>
          <div className="mini-dashboard__track">
            <div className="mini-dashboard__fill" style={{ width: '32%', background: 'var(--accent-2)' }} />
          </div>
          <span>4,0h</span>
        </div>
        <div className="mini-dashboard__bar-row">
          <span>Média</span>
          <div className="mini-dashboard__track">
            <div className="mini-dashboard__fill" style={{ width: '66%', background: 'var(--accent)' }} />
          </div>
          <span>8,2h</span>
        </div>
        <div className="mini-dashboard__bar-row">
          <span>Baixa</span>
          <div className="mini-dashboard__track">
            <div className="mini-dashboard__fill" style={{ width: '100%', background: 'var(--text-muted)' }} />
          </div>
          <span>12,4h</span>
        </div>
      </div>
      <span className="mini-dashboard__caption">Tempo médio de resolução por prioridade</span>
    </div>
  )
}

function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <article className="card project">
      <div className="project__visual">
        {project.kind === 'dashboard' ? <ProjectGallery project={project} /> : <ProjectMiniDashboard />}
      </div>
      <div className="project__body">
        <div className="project__heading">
          <span className="tag">{project.tool}</span>
          <h3>{project.title}</h3>
        </div>
        <p className="project__summary">{project.summary}</p>
        <ul className="project__bullets">
          {project.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
        <div className="project__tags">
          {project.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

function Projects() {
  return (
    <section id="projetos" className="section projects">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Projetos</span>
          <h2>O dado em ação</h2>
          <p>Dois projetos reais: um dashboard comercial em Power BI e um pipeline de indicadores de suporte no KNIME.</p>
        </div>
        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
