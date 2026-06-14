import React from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import ResearchInterest from './sections/ResearchInterest'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import AppliedProjects from './sections/AppliedProjects'
import Experience from './sections/Experience'
import Publications from './sections/Publications'
import Contact from './sections/Contact'
import data from './data/portfolioData'
import './index.css'

function App() {
  return (
    <div className="app-root">
      <Navbar />
      <AnimatePresence>
        <main>
          <Hero data={data.hero} />
          <About data={data.about} />
          <ResearchInterest items={data.researchInterests} />
          <Skills skills={data.skills} />
          <Projects items={data.projects} />
          <AppliedProjects items={data.appliedProjects} />
          <Experience items={data.researchExperience} />
          <Publications items={data.publications} />
          <Contact contact={data.contact} />
        </main>
      </AnimatePresence>
      <Footer contact={data.contact} />
    </div>
  )
}

export default App
