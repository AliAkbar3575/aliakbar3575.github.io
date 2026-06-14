import React from 'react'
import SectionTitle from '../components/SectionTitle'

export default function ResearchInterest({ items }) {
  return (
    <section id="research" className="container section">
      <SectionTitle>Research Interests</SectionTitle>
      <div className="tags">
        {items.map((r) => (
          <span key={r} className="tag">
            {r}
          </span>
        ))}
      </div>
    </section>
  )
}
