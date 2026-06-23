import React from 'react'
import { motion } from 'framer-motion'
import './WorkCardStyle.css'

const GitHubIcon = () => (
  <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const ExternalIcon = () => (
  <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
  </svg>
)

const StarIcon = () => (
  <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

const WorkCard = ({ project }) => {
  const {
    id, imgsrc, category, badgeColor, title, tagline,
    problem, solution, impact, techStack,
    github, live, featured,
  } = project

  return (
    <motion.article
      className="project-card"
      id={`project-${id}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      aria-label={`Project: ${title}`}
    >
      {/* ── Visual Header ── */}
      <div className="project-img-wrap">
        <img src={imgsrc} alt={`${title} preview`} loading="lazy" />
        <span className={`badge ${badgeColor} project-category-badge`}>{category}</span>

        {/* Overlay links on hover */}
        <div className="project-links-overlay">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="project-overlay-btn" aria-label="View on GitHub">
              <GitHubIcon /> GitHub
            </a>
          )}
          {live && live !== '#' && (
            <a href={live} target="_blank" rel="noopener noreferrer" className="project-overlay-btn" aria-label="View live demo">
              <ExternalIcon /> Live
            </a>
          )}
        </div>
      </div>

      {/* ── Card Body ── */}
      <div className="project-body">
        {/* Title + Tagline */}
        <header className="project-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <h2 className="project-title">{title}</h2>
            {featured && (
              <span className="project-featured-tag">
                <StarIcon /> Featured
              </span>
            )}
          </div>
          <p className="project-tagline">{tagline}</p>
        </header>

        {/* Case Study */}
        <div className="project-case-study">
          <div className="cs-block">
            <span className="cs-label">Problem</span>
            <p className="cs-text">{problem}</p>
          </div>
          <div className="cs-block">
            <span className="cs-label">Solution</span>
            <p className="cs-text">{solution}</p>
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="project-impact" aria-label="Project impact metrics">
          {impact.map((item, i) => (
            <div className="impact-item" key={i}>
              <span className="impact-metric">{item.metric}</span>
              <span className="impact-label">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="project-tech">
          <span className="project-tech-label">Tech Stack</span>
          <div className="tag-list">
            {techStack.map(tech => (
              <span className="tech-tag" key={tech}>{tech}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Card Footer ── */}
      <footer className="project-footer">
        <div className="project-footer-links">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link-btn project-link-btn-outline"
              id={`project-${id}-github`}
            >
              <GitHubIcon /> View Code
            </a>
          )}
          {live && live !== '#' && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link-btn project-link-btn-primary"
              id={`project-${id}-live`}
            >
              Live Demo <ExternalIcon />
            </a>
          )}
        </div>
        <span className={`badge ${badgeColor}`}>{category}</span>
      </footer>
    </motion.article>
  )
}

export default WorkCard