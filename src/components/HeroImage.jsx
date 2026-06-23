import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './HeroImage.css'

const ArrowRight = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)

const DownloadIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
  </svg>
)

const ChevronDown = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
)

const fadeUp = (delay = 0) => ({
  initial:   { opacity: 0, y: 28 },
  animate:   { opacity: 1, y: 0  },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

const HeroImage = () => {
  return (
    <section className="hero" id="home" aria-label="Introduction">
      {/* Background */}
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-grid" />
        <div className="hero-glow" />
      </div>

      <div className="container">
        <div className="hero-inner">

          {/* Availability badge */}
          <motion.div className="hero-badge" {...fadeUp(0)}>
            <span className="hero-badge-dot" aria-hidden="true" />
            Available for new opportunities
          </motion.div>

          {/* Headline */}
          <motion.h1 className="hero-title" {...fadeUp(0.08)}>
            Building digital products{' '}
            <span className="hero-title-accent">people love</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p className="hero-subtitle" {...fadeUp(0.16)}>
            I'm <strong>Gourav Banswal</strong>, a Full Stack Developer from Aurangabad, India.
            I craft scalable web applications with React, Node.js and modern AI&nbsp;tools.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div className="hero-cta" {...fadeUp(0.24)}>
            <Link to="/project" className="btn btn-primary btn-lg" id="hero-cta-projects">
              View My Projects <ArrowRight />
            </Link>
            <a
              href="/Resume.pdf"
              download="Gourav_Banswal_Resume.pdf"
              className="btn btn-secondary btn-lg"
              id="hero-cta-resume"
            >
              Download Resume <DownloadIcon />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div className="hero-stats" {...fadeUp(0.32)} aria-label="Key statistics">
            <div className="hero-stat">
              <span className="hero-stat-number">6+</span>
              <span className="hero-stat-label">Projects Shipped</span>
            </div>
            <div className="hero-stat-sep" aria-hidden="true" />
            <div className="hero-stat">
              <span className="hero-stat-number">3+</span>
              <span className="hero-stat-label">Years Experience</span>
            </div>
            <div className="hero-stat-sep" aria-hidden="true" />
            <div className="hero-stat">
              <span className="hero-stat-number">10k+</span>
              <span className="hero-stat-label">Users Impacted</span>
            </div>
            <div className="hero-stat-sep" aria-hidden="true" />
            <div className="hero-stat">
              <span className="hero-stat-number">100%</span>
              <span className="hero-stat-label">Client Satisfaction</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero-scroll-hint" aria-hidden="true">
        <span>Scroll</span>
        <ChevronDown />
      </div>
    </section>
  )
}

export default HeroImage