import React from 'react'

export default function Footer({ contact }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="contact">
          <div>{contact.email}</div>
          <div>{contact.phone}</div>
        </div>
        <div className="credit">© {new Date().getFullYear()} Ali Akbar</div>
      </div>
    </footer>
  )
}
