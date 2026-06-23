import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './HeroImage2Style.css'

const HeroImage2 = ({ heading, text, label, breadcrumb }) => {
  return (
    <section className="page-header" aria-label={`${heading} page header`}>
      <div className="container">
        <motion.div
          className="page-header-inner"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Breadcrumb */}
          {breadcrumb && (
            <nav className="page-header-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span className="page-header-breadcrumb-sep" aria-hidden="true">/</span>
              <span>{breadcrumb}</span>
            </nav>
          )}

          {/* Label */}
          {label && <span className="page-header-label">{label}</span>}

          {/* Title */}
          <h1 className="page-header-title">{heading}</h1>

          {/* Subtitle */}
          {text && <p className="page-header-subtitle">{text}</p>}
        </motion.div>
      </div>
    </section>
  )
}

export default HeroImage2