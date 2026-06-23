import React from 'react'
import Navbar from '../components/Navbar'
import HeroImage2 from '../components/HeroImage2'
import Form from '../components/Form'
import Footer from '../components/Footer'

const Contact = () => (
  <>
    <Navbar />
    <HeroImage2
      heading="Let's Work Together"
      text="Have a project in mind? I'd love to hear about it. Get in touch and let's create something great."
      label="Contact"
      breadcrumb="Contact"
    />
    <Form />
    <Footer />
  </>
)

export default Contact