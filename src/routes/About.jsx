import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import HeroImage2 from '../components/HeroImage2'
import Experience from '../components/Experience'
import Certifications from '../components/Certifications'
import Footer from '../components/Footer'

const AboutContent = () => (
  <section className="section" style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border)' }}>
    <div className="container">
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '48px',
        alignItems: 'center',
      }}>
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-label">About Me</span>
          <h2 className="section-title">Hi, I'm Gourav Banswal 👋</h2>
          <p style={{ color: 'var(--text-2)', lineHeight: 1.8, marginBottom: '16px' }}>
            I'm a Full Stack Developer based in Aurangabad, India, with a passion for building
            digital products that solve real-world problems. I specialise in React and Node.js
            ecosystems, crafting everything from marketing websites to enterprise-grade SaaS platforms.
          </p>
          <p style={{ color: 'var(--text-2)', lineHeight: 1.8, marginBottom: '24px' }}>
            I thrive at the intersection of design and engineering — writing clean, performant code
            while keeping user experience at the centre of every decision. When I'm not coding, I'm
            learning about AI/ML applications and exploring how technology can reshape industries.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href="mailto:gouravbanswal@gmail.com" className="btn btn-primary" id="about-contact-btn">
              Get in Touch
            </a>
            <a href="/Resume.pdf" download="Gourav_Banswal_Resume.pdf" className="btn btn-secondary" id="about-resume-btn">
              Download CV
            </a>
          </div>
        </motion.div>

        {/* Stats/info panel */}
        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px',
          }}
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          {[
            { label: 'Projects Shipped', value: '6+' },
            { label: 'Years Experience', value: '3+' },
            { label: 'Users Impacted', value: '10k+' },
            { label: 'Client Satisfaction', value: '100%' },
            { label: 'Location', value: 'India 🇮🇳' },
            { label: 'Open to Work', value: 'Yes ✅' },
          ].map(item => (
            <div key={item.label} style={{
              background: 'var(--bg)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-md)',
              padding: '20px',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-1)', letterSpacing: '-0.03em' }}>{item.value}</div>
              <div style={{ fontSize: '.75rem', fontWeight: 500, color: 'var(--text-4)', textTransform: 'uppercase', letterSpacing: '.08em', marginTop: '4px' }}>{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
)

const About = () => (
  <>
    <Navbar />
    <HeroImage2
      heading="About Me"
      text="Full Stack Developer passionate about building scalable web applications and AI-powered products."
      label="About"
      breadcrumb="About"
    />
    <AboutContent />
    <Experience />
    <Certifications />
    <Footer />
  </>
)

export default About