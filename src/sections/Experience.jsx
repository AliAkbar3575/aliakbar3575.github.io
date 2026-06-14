import React from 'react'
import SectionTitle from '../components/SectionTitle'
import ExperienceCard from '../components/ExperienceCard'

export default function Experience({ items }) {
  return (
    <section id="experience" className="container section">
      <SectionTitle>Research Experience</SectionTitle>
      <div className="exp-list">
        {items.map((it) => (
          <ExperienceCard key={it.role + it.organization} item={it} />
        ))}
      </div>
    </section>
  )
}
