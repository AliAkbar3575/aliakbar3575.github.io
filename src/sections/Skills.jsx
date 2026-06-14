import React from 'react'
import SectionTitle from '../components/SectionTitle'
import SkillCard from '../components/SkillCard'

export default function Skills({ skills }) {
  return (
    <section id="skills" className="container section">
      <SectionTitle>Technical Skills</SectionTitle>
      <div className="skills-grid">
        <SkillCard title="Programming Languages" items={skills.languages} />
        <SkillCard title="Frameworks" items={skills.frameworks} />
        <SkillCard title="Libraries & Tools" items={skills.libraries.concat(skills.aiTools)} />
        <SkillCard title="Databases & Research Tools" items={skills.databases.concat(skills.researchTools)} />
        <SkillCard title="Development Tools" items={skills.devTools} />
      </div>
    </section>
  )
}
