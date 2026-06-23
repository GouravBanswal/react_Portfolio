import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './FormStyles.css'

const MailIcon = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
  </svg>
)
const PhoneIcon = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .948.684l1.498 4.493a1 1 0 0 1-.502 1.21l-2.257 1.13a11.042 11.042 0 0 0 5.516 5.516l1.13-2.257a1 1 0 0 1 1.21-.502l4.493 1.498a1 1 0 0 1 .684.949V19a2 2 0 0 1-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
)
const MapIcon = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
  </svg>
)
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
const CheckIcon = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
)
const SendIcon = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
  </svg>
)

const Form = () => {
  const [form, setForm]       = useState({ name: '', email: '', subject: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent]       = useState(false)

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setSending(true)
    // Simulate submission (replace with EmailJS / backend call)
    await new Promise(r => setTimeout(r, 1400))
    setSending(false)
    setSent(true)
  }

  return (
    <section className="section contact-section" id="contact" aria-label="Contact">
      <div className="container">
        <div className="contact-layout">

          {/* ── Left: Info ── */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <span className="section-label">Get in Touch</span>
              <h2 className="contact-intro-title">Let's build something great together</h2>
              <p className="contact-intro-text">
                Whether you have a project idea, need a full-stack developer, or just want to say hello —
                I'd love to hear from you. I typically respond within 24 hours.
              </p>
            </div>

            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="contact-detail-icon"><MailIcon /></div>
                <div>
                  <div className="contact-detail-label">Email</div>
                  <a href="mailto:gouravbanswal@gmail.com" className="contact-detail-value">gouravbanswal@gmail.com</a>
                </div>
              </div>
              <div className="contact-detail-item">
                <div className="contact-detail-icon"><PhoneIcon /></div>
                <div>
                  <div className="contact-detail-label">Phone</div>
                  <a href="tel:+919370424437" className="contact-detail-value">+91 9370 424 437</a>
                </div>
              </div>
              <div className="contact-detail-item">
                <div className="contact-detail-icon"><MapIcon /></div>
                <div>
                  <div className="contact-detail-label">Location</div>
                  <span className="contact-detail-value">Aurangabad, Maharashtra, India</span>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              <span className="contact-socials-label">Find me on</span>
              <div className="contact-social-row">
                <a href="https://github.com/gouravbanswal" target="_blank" rel="noopener noreferrer" className="contact-social-btn" id="contact-github-link">
                  <GHIcon /> GitHub
                </a>
                <a href="https://linkedin.com/in/gouravbanswal" target="_blank" rel="noopener noreferrer" className="contact-social-btn" id="contact-linkedin-link">
                  <LIIcon /> LinkedIn
                </a>
                <a href="/Resume.pdf" download="Gourav_Banswal_Resume.pdf" className="contact-social-btn" id="contact-resume-download">
                  ↓ Resume
                </a>
              </div>
            </div>
          </motion.div>

          {/* ── Right: Form ── */}
          <motion.div
            className="contact-form-card"
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            {sent ? (
              <div className="form-success" role="alert">
                <CheckIcon />
                Message sent! I'll get back to you shortly.
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-name">
                      Your Name <span className="form-required" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-name"
                      className="form-input"
                      type="text"
                      name="name"
                      placeholder="Rahul Sharma"
                      value={form.name}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-email">
                      Email Address <span className="form-required" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-email"
                      className="form-input"
                      type="email"
                      name="email"
                      placeholder="rahul@company.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-subject">
                    Subject <span className="form-required" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    className="form-input"
                    type="text"
                    name="subject"
                    placeholder="Project inquiry / Hiring / Collaboration"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-message">
                    Message <span className="form-required" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    className="form-textarea"
                    name="message"
                    placeholder="Tell me about your project, timeline, and budget..."
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={6}
                  />
                </div>

                <button
                  type="submit"
                  className="form-submit-btn"
                  id="contact-submit-btn"
                  disabled={sending}
                >
                  {sending ? 'Sending…' : <><SendIcon /> Send Message</>}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Form