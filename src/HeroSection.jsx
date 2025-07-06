import React from 'react'
import './HeroSection.css'

export function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Get<br />
          your data<br />
          generated now!
        </h1>
        
        <p className="hero-subtitle">
          With DataLoom, generate Data<br />
          No more tension of finding the right data<br />
          you know: It's that easy.
        </p>
        
        <div className="store-input-container">
          <div className="input-wrapper">
            <span className="store-icon">🏪</span>
            <span className="input-label">My prompt</span>
            <input 
              type="text" 
              placeholder="your prompt"
              className="store-input"
            />
            <button className="submit-btn">→</button>
          </div>
        </div>
      </div>
    </div>
  )
}
