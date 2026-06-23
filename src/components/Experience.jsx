import React from 'react'
import { motion } from 'framer-motion'
import './ExperienceStyle.css'

const BriefcaseIcon = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
  </svg>
)

const MapPinIcon = () => (
  <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
  </svg>
)

const experiences = [
  {
    id: 'exp-1',
    role: 'Full Stack Developer',
    company: 'Freelance / Self-Employed',
    date: '2022 – Present',
    location: 'Aurangabad, India (Remote)',
    description:
      'Designing and developing end-to-end web applications for clients across healthcare, education and media industries. Managing complete project lifecycles from requirement gathering to deployment.',
    bullets: [
      'Built 6+ production-grade web applications serving 10,000+ users',
      'Delivered HealthRx AI, a machine-learning diagnostic platform for healthcare providers',
      'Developed admission and CRM platforms for education institutes, increasing enrollment by 45%',
      'Maintained 100% client satisfaction across all delivered projects',
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'AWS', 'Python', 'PostgreSQL'],
  },
  {
    id: 'exp-2',
    role: 'React Developer (Internship)',
    company: 'SkillHub Institute',
    date: '2021 – 2022',
    location: 'Aurangabad, India',
    description:
      'Completed an intensive full-stack development programme, building real-world projects and gaining hands-on experience with modern JavaScript frameworks and backend technologies.',
    bullets: [
      'Developed progressive web applications using React and Redux',
      'Built RESTful APIs with Node.js and Express connected to MongoDB',
      'Implemented responsive, mobile-first UI designs with CSS3 and Tailwind',
      'Collaborated with cross-functional teams using Git and Agile methodologies',
    ],
    tech: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'Git'],
  },
]

const Experience = () => {
  return (
    <section className="section experience-section" id="experience" aria-label="Work Experience">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Career</span>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            My professional journey building scalable digital products for real-world clients.
          </p>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, i) => (
            <motion.div
              className="exp-item"
              key={exp.id}
              id={exp.id}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Timeline dot */}
              <div className="exp-dot-wrap">
                <div className="exp-dot" aria-hidden="true"><BriefcaseIcon /></div>
              </div>

              {/* Content */}
              <div className="exp-body">
                <div className="exp-meta">
                  <div>
                    <div className="exp-role">{exp.role}</div>
                    <div className="exp-company">{exp.company}</div>
                  </div>
                  <span className="exp-date">{exp.date}</span>
                </div>

                <div className="exp-location">
                  <MapPinIcon /> {exp.location}
                </div>

                <p className="exp-desc">{exp.description}</p>

                <ul className="exp-bullets" aria-label="Key achievements">
                  {exp.bullets.map((b, j) => (
                    <li className="exp-bullet" key={j}>{b}</li>
                  ))}
                </ul>

                <div className="exp-tech" aria-label="Technologies used">
                  {exp.tech.map(t => (
                    <span className="tech-tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
