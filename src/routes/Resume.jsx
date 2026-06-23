import React from 'react'
import Navbar from '../components/Navbar'
import HeroImage2 from '../components/HeroImage2'
import Footer from '../components/Footer'
import resumePdf from "../assets/Gourav-Sanjay-Banswal-dot-net.pdf";

const DownloadIcon = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
  </svg>
)

const ExternalIcon = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
  </svg>
)

const Resume = () => (
  <>
    <Navbar />
    <HeroImage2
      heading="Resume"
      text="My professional resume — download or view online."
      label="CV"
      breadcrumb="Resume"
    />

    <section className="section" style={{ background: 'var(--bg)' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        {/* Action buttons */}
        <div style={{
          display: 'flex',
          gap: '12px',
          justifyContent: 'center',
          marginBottom: '36px',
          flexWrap: 'wrap',
        }}>
        <a
  href={resumePdf}
  download="Gourav-Banswal-Resume.pdf"
  className="btn btn-primary btn-lg"
>
  <DownloadIcon />
  Download PDF
</a>
          <a
            href="https://drive.google.com/file/d/16YzFZyJA18UbYsZNM6QMXqhL-LWUSYPG/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-lg"
            id="resume-gdrive-btn"
          >
            <ExternalIcon /> View on Google Drive
          </a>
        </div>

        {/* Resume preview */}
        <div style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-xl)',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-xl)',
        }}>
          <img
            src="/src/assets/resume1part.png"
            alt="Gourav Banswal Resume"
            style={{ width: '100%', display: 'block' }}
            loading="lazy"
          />
          <img
            src="/src/assets/resume2part.png"
            alt="Gourav Banswal Resume"
            style={{ width: '100%', display: 'block' }}
            loading="lazy"
          />
        </div>
      </div>
    </section>

    <Footer />
  </>
)

export default Resume