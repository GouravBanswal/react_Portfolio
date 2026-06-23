import React from 'react'
import { motion } from 'framer-motion'
import './ServicesStyle.css'

const services = [
  {
    id: 'web-dev',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'Full Stack Web Development',
    desc: 'End-to-end web applications built with React and Node.js — fast, scalable, and production-ready.',
    features: ['React / Next.js frontends', 'Node.js + Express APIs', 'MongoDB / PostgreSQL databases', 'Cloud deployment (AWS / Vercel)'],
    color: '#2563EB',
    bg: '#EFF6FF',
  },
  {
    id: 'saas',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4m0 0h18" />
      </svg>
    ),
    title: 'SaaS Product Development',
    desc: 'Multi-tenant SaaS platforms with subscription billing, role-based access, and admin dashboards.',
    features: ['Multi-tenant architecture', 'Stripe / Razorpay billing', 'Role-based permissions', 'Analytics dashboards'],
    color: '#8B5CF6',
    bg: '#F5F3FF',
  },
  {
    id: 'ai-ml',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-2" />
      </svg>
    ),
    title: 'AI-Powered Applications',
    desc: 'Integrating machine learning and AI APIs to build intelligent features that automate and accelerate workflows.',
    features: ['ML model integration', 'OpenAI / TensorFlow', 'Data processing pipelines', 'Predictive analytics'],
    color: '#10B981',
    bg: '#ECFDF5',
  },
  {
    id: 'crm',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 0 0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
      </svg>
    ),
    title: 'CRM & ERP Systems',
    desc: 'Custom CRM and ERP platforms tailored to your business workflows — lead tracking, inventory, reporting.',
    features: ['Lead & pipeline management', 'Automated follow-ups', 'Custom reporting', 'Team collaboration tools'],
    color: '#F59E0B',
    bg: '#FFFBEB',
  },
  {
    id: 'edtech',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 0 1 .665 6.479A11.952 11.952 0 0 0 12 20.055a11.952 11.952 0 0 0-6.824-2.998 12.078 12.078 0 0 1 .665-6.479L12 14z" />
      </svg>
    ),
    title: 'EdTech Platforms',
    desc: 'Digital admission portals, LMS integrations, and student management systems for educational institutions.',
    features: ['Online admission portals', 'Student record management', 'Payment integrations', 'Automated notifications'],
    color: '#EF4444',
    bg: '#FEF2F2',
  },
  {
    id: 'web-design',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 0 1-4-4V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12a4 4 0 0 1-4 4zm0 0h12a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 0 1 2.828 0l2.829 2.829a2 2 0 0 1 0 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: 'UI/UX Design & Branding',
    desc: 'Clean, conversion-focused interfaces designed in Figma with a focus on usability and modern aesthetics.',
    features: ['Figma design systems', 'Responsive UI/UX', 'Brand identity design', 'Prototype & user testing'],
    color: '#6366F1',
    bg: '#EEF2FF',
  },
]

const Services = () => {
  return (
    <section className="section services-section" id="services" aria-label="Services">
      <div className="container">
        <div className="section-header-center">
          <span className="section-label">What I Do</span>
          <h2 className="section-title">Services</h2>
          <p className="section-subtitle">
            From idea to deployment — I offer end-to-end development services for startups, agencies and enterprises.
          </p>
        </div>

        <div className="services-grid">
          {services.map((svc, i) => (
            <motion.div
              className="service-card"
              key={svc.id}
              id={`service-${svc.id}`}
              style={{ '--service-color': svc.color, '--service-bg': svc.bg }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="service-icon-wrap" aria-hidden="true">{svc.icon}</div>
              <div>
                <div className="service-title">{svc.title}</div>
              </div>
              <p className="service-desc">{svc.desc}</p>
              <ul className="service-features" aria-label={`${svc.title} features`}>
                {svc.features.map(f => (
                  <li className="service-feature" key={f}>
                    <span className="service-feature-dot" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
