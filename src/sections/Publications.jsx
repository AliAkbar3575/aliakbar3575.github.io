import React from 'react'
import SectionTitle from '../components/SectionTitle'
import PublicationCard from '../components/PublicationCard'

export default function Publications({ items }) {
  return (
    <section id="publications" className="container section">
      <SectionTitle>Publications</SectionTitle>
      <div className="pub-list">
        {items.map((p, i) => (
          <PublicationCard key={i} pub={p} />
        ))}
      </div>
    </section>
  )
}
