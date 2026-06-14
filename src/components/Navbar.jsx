import React from 'react'
import { Sun, Moon } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="nav container">
        <a href="#hero" className="brand">Ali Akbar</a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#research">Research</a>
          <a href="#publications">Publications</a>
          <a href="#contact">Contact</a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
