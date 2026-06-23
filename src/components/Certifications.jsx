import React from 'react'
import { motion } from 'framer-motion'
import './CertificationsStyle.css'

const ExternalIcon = () => (
  <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
  </svg>
)

const certifications = [
  {
    id: 'cert-1',
    issuer: 'Meta',
    title: 'Meta Front-End Developer Professional Certificate',
    desc: 'Comprehensive programme covering HTML, CSS, JavaScript, React, UX/UI design, and version control.',
    year: '2023',
    type: 'Professional',
    link: '#',
  },
  {
    id: 'cert-2',
    issuer: 'Google',
    title: 'Google UX Design Professional Certificate',
    desc: 'User experience design fundamentals including empathy mapping, wireframing, prototyping, and usability testing.',
    year: '2023',
    type: 'Professional',
    link: '#',
  },
  {
    id: 'cert-3',
    issuer: 'MongoDB',
    title: 'MongoDB Node.js Developer Path',
    desc: 'Advanced MongoDB usage with Node.js — schema design, aggregation pipeline, Atlas, and performance optimization.',
    year: '2022',
    type: 'Technical',
    link: '#',
  },
  {
    id: 'cert-4',
    issuer: 'AWS',
    title: 'AWS Cloud Practitioner Essentials',
    desc: 'Foundational cloud concepts, AWS core services, security, architecture, pricing, and support models.',
    year: '2022',
    type: 'Cloud',
    link: '#',
  },
  {
    id: 'cert-5',
    issuer: 'Coursera',
    title: 'Machine Learning Specialization',
    desc: 'Supervised and unsupervised learning, neural networks, and practical ML applications using Python and TensorFlow.',
    year: '2023',
    type: 'AI / ML',
    link: '#',
  },
  {
    id: 'cert-6',
    issuer: 'SkillHub',
    title: 'Full Stack JavaScript Development',
    desc: 'Intensive bootcamp covering React, Node.js, Express, MongoDB, REST APIs, and deployment best practices.',
    year: '2022',
    type: 'Bootcamp',
    link: '#',
  },
]

const Certifications = () => {
  return (
    <section className="section certs-section" id="certifications" aria-label="Certifications">
      <div className="container">
        <div className="section-header-center">
          <span className="section-label">Credentials</span>
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">
            Verified credentials from industry-leading platforms, demonstrating commitment to continuous learning.
          </p>
        </div>

        <div className="certs-grid">
          {certifications.map((cert, i) => (
            <motion.div
              className="cert-card"
              key={cert.id}
              id={cert.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Issuer row */}
              <div className="cert-issuer-row">
                <span className="cert-issuer-badge" aria-label={`Issued by ${cert.issuer}`}>
                  {cert.issuer}
                </span>
                <span className="cert-year">{cert.year}</span>
              </div>

              {/* Title */}
              <h3 className="cert-title">{cert.title}</h3>

              {/* Description */}
              <p className="cert-desc">{cert.desc}</p>

              {/* Footer */}
              <div className="cert-footer">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-verify-link"
                  id={`${cert.id}-verify`}
                  aria-label={`Verify ${cert.title} certificate`}
                >
                  Verify Credential <ExternalIcon />
                </a>
                <span className="cert-type-tag">{cert.type}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
