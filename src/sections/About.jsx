import React from 'react'
import SectionTitle from '../components/SectionTitle'

export default function About({ data }) {
  return (
    <section id="about" className="container section about-section">
      <SectionTitle>About</SectionTitle>
      <p className="lead">{data.summary}</p>
      <div className="about-grid">
        <div>
          <h4>Education</h4>
          <div>{data.education.institution}</div>
          <div>{data.education.degree}</div>
          <div>{data.education.period}</div>
          <div>CGPA: {data.education.cgpa}</div>
        </div>
        <div>
          <h4>Research Focus</h4>
          <p>{data.researchFocus}</p>
          <h4>Career Objective</h4>
          <p>{data.careerObjective}</p>
        </div>
      </div>
    </section>
  )
}
