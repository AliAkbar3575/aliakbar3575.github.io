import React from 'react'
import SectionTitle from '../components/SectionTitle'
import ProjectCard from '../components/ProjectCard'

export default function AppliedProjects({ items }) {
  return (
    <section id="applied-projects" className="container section">
      <SectionTitle>Applied ML Projects & Research</SectionTitle>
      <div className="card-grid">
        {items.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  )
}
