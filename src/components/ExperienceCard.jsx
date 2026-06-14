import React from 'react'

export default function ExperienceCard({ item }) {
  return (
    <div className="card exp-card">
      <h4>{item.role}</h4>
      <div className="org">{item.organization}</div>
      {item.periods && <div className="periods">{item.periods.join(' • ')}</div>}
      <p>{item.description}</p>
    </div>
  )
}
