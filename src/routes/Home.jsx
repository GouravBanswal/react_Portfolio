import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import HeroImage from '../components/HeroImage'
import TechStack from '../components/TechStack'
import Work from '../components/Work'
import Services from '../components/Services'
import Footer from '../components/Footer'

const ArrowRight = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)

/* Contact CTA strip */
const ContactCTA = () => (
  <section style={{
    background: 'var(--primary)',
    padding: '72px 0',
  }}>
    <div className="container" style={{ textAlign: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 style={{
          fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
          fontWeight: 800,
          color: '#fff',
          letterSpacing: '-0.03em',
          marginBottom: '16px',
          lineHeight: 1.2,
        }}>
          Ready to build something great?
        </h2>
        <p style={{ color: 'rgba(255,255,255,.8)', fontSize: '1.0625rem', marginBottom: '36px', maxWidth: '480px', margin: '0 auto 36px' }}>
          Let's discuss your project and see how I can help you ship it.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/contact" className="btn btn-lg" id="home-cta-contact"
            style={{ background: 'var(--cta-btn-white-bg)', color: 'var(--primary)', fontWeight: 600 }}>
            Start a Conversation <ArrowRight />
          </Link>
          <Link to="/project" className="btn btn-lg" id="home-cta-projects"
            style={{ background: 'rgba(255,255,255,.15)', color: '#fff', border: '1px solid rgba(255,255,255,.3)', fontWeight: 500 }}>
            View Projects
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
)

const Home = () => (
  <>
    <Navbar />

    {/* Hero */}
    <HeroImage />

    {/* Tech Stack marquee */}
    <TechStack />

    {/* Featured Projects (3 cards) */}
    <section className="section" style={{ background: 'var(--bg)' }} id="featured-projects">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of production applications I've built for real clients.
          </p>
        </div>
        <Work limit={4} />
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link to="/project" className="btn btn-secondary btn-lg" id="home-view-all-projects">
            View All Projects <ArrowRight />
          </Link>
        </div>
      </div>
    </section>

    {/* Services */}
    <Services />

    {/* CTA strip */}
    <ContactCTA />

    <Footer />
  </>
)

export default Home