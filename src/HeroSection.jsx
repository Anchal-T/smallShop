import React from 'react'
import './HeroSection.css'

export function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Register<br />
          your store<br />
          name now!
        </h1>
        
        <p className="hero-subtitle">
          With etail.me, anyone can earn their<br />
          first dollar online. Just start with what<br />
          you know: It's that easy.
        </p>
        
        <div className="store-input-container">
          <div className="input-wrapper">
            <span className="store-icon">🏪</span>
            <span className="input-label">My store</span>
            <input 
              type="text" 
              placeholder="Enter your store name"
              className="store-input"
            />
            <button className="submit-btn">→</button>
          </div>
        </div>
      </div>
    </div>
  )
}
