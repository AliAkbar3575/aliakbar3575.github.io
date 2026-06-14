import React from 'react'
import SectionTitle from '../components/SectionTitle'

export default function Contact({ contact }) {
  return (
    <section id="contact" className="container section">
      <SectionTitle>Contact</SectionTitle>
      <div className="contact-grid">
        <div>
          <p>Email: {contact.email}</p>
          <p>Phone: {contact.phone}</p>
          <p>Address: {contact.address}</p>
          <p>Website: <a href={contact.website} target="_blank" rel="noreferrer">{contact.website}</a></p>
        </div>
        <form className="contact-form" onSubmit={(e)=>e.preventDefault()}>
          <label>Name</label>
          <input name="name" />
          <label>Email</label>
          <input name="email" />
          <label>Subject</label>
          <input name="subject" />
          <label>Message</label>
          <textarea name="message" rows={5}></textarea>
          <button className="btn" type="submit">Send Message</button>
        </form>
      </div>
    </section>
  )
}
