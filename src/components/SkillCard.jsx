import React from 'react'

export default function SkillCard({ title, items }) {
  return (
    <div className="card skill-card">
      <h4>{title}</h4>
      <div className="skill-list">
        {items.map((s) => (
          <span key={s} className="skill-item">
            {s}
          </span>
        ))}
      </div>
    </div>
  )
}
