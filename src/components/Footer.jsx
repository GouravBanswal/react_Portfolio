import React from 'react'
import { Link } from 'react-router-dom'
import './FooterStyle.css'

const GHIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
)
const LIIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)
const MailIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
  </svg>
)

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo" aria-label="Gourav Banswal Home">
              <span className="footer-logo-mark">G</span>
              <span className="footer-logo-text">Gourav Banswal</span>
            </Link>
            <p className="footer-tagline">
              Full Stack Developer building scalable digital products with React, Node.js and modern AI tools.
            </p>
            <div className="footer-socials">
              <a href="https://github.com/gouravbanswal" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="GitHub">
                <GHIcon />
              </a>
              <a href="https://linkedin.com/in/gouravbanswal" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="LinkedIn">
                <LIIcon />
              </a>
              <a href="mailto:gouravbanswal@gmail.com" className="footer-social-btn" aria-label="Email">
                <MailIcon />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="footer-col-title">Navigation</h3>
            <nav className="footer-links" aria-label="Footer navigation">
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/project" className="footer-link">Projects</Link>
              <Link to="/about" className="footer-link">About</Link>
              <Link to="/skills" className="footer-link">Skills</Link>
              <Link to="/resume" className="footer-link">Resume</Link>
            </nav>
          </div>

          {/* Projects */}
          <div>
            <h3 className="footer-col-title">Projects</h3>
            <div className="footer-links">
              <a href="/project#project-healthrx-ai" className="footer-link">HealthRx AI</a>
              <a href="/project#project-ratnaparkkhi-admission" className="footer-link">Ratnaparkkhi Admission</a>
              <a href="/project#project-everglobe-visa" className="footer-link">Everglobe Visa</a>
              <a href="/project#project-groundupmedia" className="footer-link">GroundUpMedia</a>
              <a href="/project#project-hospital-dashboard" className="footer-link">Hospital Dashboard</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="footer-col-title">Contact</h3>
            <div className="footer-links">
              <a href="mailto:gouravbanswal@gmail.com" className="footer-link">gouravbanswal@gmail.com</a>
              <a href="tel:+919370424437" className="footer-link">+91 9370 424 437</a>
              <span className="footer-link" style={{cursor:'default'}}>Aurangabad, India</span>
              <Link to="/contact" className="footer-link">Send a Message →</Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {year} <span>Gourav Banswal</span>. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="/Resume.pdf" download className="footer-bottom-link">Download Resume</a>
            <Link to="/contact" className="footer-bottom-link">Hire Me</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer