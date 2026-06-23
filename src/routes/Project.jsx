import React from 'react'
import Navbar from '../components/Navbar'
import HeroImage2 from '../components/HeroImage2'
import Work from '../components/Work'
import Footer from '../components/Footer'

const Project = () => (
  <>
    <Navbar />
    <HeroImage2
      heading="Featured Projects"
      text="End-to-end case studies covering problem, solution, impact metrics, and tech stack for every project."
      label="Portfolio"
      breadcrumb="Projects"
    />
    <section className="section" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <Work />
      </div>
    </section>
    <Footer />
  </>
)

export default Project