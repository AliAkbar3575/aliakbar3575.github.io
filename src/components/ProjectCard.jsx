import React from 'react'
import { motion } from 'framer-motion'

export default function ProjectCard({ project }) {
  return (
    <motion.article whileHover={{ y: -6 }} className="card project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="tech">
        {project.technologies.map((t) => (
          <span key={t} className="badge">
            {t}
          </span>
        ))}
      </div>
      <div className="card-actions">
        {project.github ? (
          <a href={project.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        ) : (
          <button disabled>GitHub</button>
        )}
      </div>
    </motion.article>
  )
}
