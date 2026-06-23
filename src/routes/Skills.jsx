import React from 'react'
import Navbar from '../components/Navbar'
import HeroImage2 from '../components/HeroImage2'
import Skill from '../components/Skill'
import TechStack from '../components/TechStack'
import Footer from '../components/Footer'

const Skills = () => (
  <>
    <Navbar />
    <HeroImage2
      heading="Skills & Technologies"
      text="A curated overview of the tools, frameworks and platforms I use to build production-grade applications."
      label="Expertise"
      breadcrumb="Skills"
    />
    <TechStack />
    <Skill />
    <Footer />
  </>
)

export default Skills