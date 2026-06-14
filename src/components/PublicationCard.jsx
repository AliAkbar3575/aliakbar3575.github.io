import React from 'react'

export default function PublicationCard({ pub }) {
  return (
    <div className="card pub-card">
      <p>{pub.citation}</p>
    </div>
  )
}
