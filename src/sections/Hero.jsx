import React from 'react'
import { motion } from 'framer-motion'

export default function Hero({ data }) {
  return (
    <section id="hero" className="hero-section container">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <h1>{data.fullName}</h1>
        <h3>{data.designation}</h3>
        <p className="tagline">{data.tagline}</p>
        <div className="cta">
          {data.ctas.map((c) => (
            <a key={c.label} href={c.href} className="btn">
              {c.label}
            </a>
          ))}
          <a className="btn outline" href={data.resume} target="_blank" rel="noreferrer">
            Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  )
}
