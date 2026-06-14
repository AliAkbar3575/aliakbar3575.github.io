import React from 'react'
import SectionTitle from '../components/SectionTitle'
import ProjectCard from '../components/ProjectCard'

export default function Projects({ items }) {
  return (
    <section id="projects" className="container section">
      <SectionTitle>Projects</SectionTitle>
      <div className="card-grid">
        {items.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  )
}
