import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home    from './routes/Home'
import Project from './routes/Project'
import About   from './routes/About'
import Contact from './routes/Contact'
import Resume  from './routes/Resume'
import Skills  from './routes/Skills'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/"        element={<Home    />} />
      <Route path="/project" element={<Project />} />
      <Route path="/about"   element={<About   />} />
      <Route path="/skills"  element={<Skills  />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/resume"  element={<Resume  />} />
    </Routes>
  </BrowserRouter>
)

export default App