import React from 'react'
import WorkCard from './WorkCard'
import './WorkCardStyle.css'

const Work = ({ limit, showHeading = false }) => {
  // Lazy-load project data to avoid top-level import issues
  const [projects, setProjects] = React.useState([])

  React.useEffect(() => {
    import('./WorkCardData').then(m => {
      const data = m.default
      setProjects(limit ? data.slice(0, limit) : data)
    })
  }, [limit])

  return (
    <div className="projects-grid">
      {projects.map(project => (
        <WorkCard key={project.id} project={project} />
      ))}
    </div>
  )
}

export default Work