import React from 'react'
import './Navbar.css'

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="brand-text">etail.me</span>
      </div>
      
      <div className="navbar-menu">
        <a href="#about" className="navbar-link">About</a>
        <a href="#features" className="navbar-link">Features</a>
        <a href="#pricing" className="navbar-link">Pricing</a>
      </div>
      
      <div className="navbar-actions">
        <button className="login-btn">Login</button>
        <button className="start-selling-btn">Start selling</button>
      </div>
    </nav>
  )
}
