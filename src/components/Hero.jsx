import React from 'react'
import useStore from '../store/useStore'
import './Hero.css'

const Hero = () => {
  const openDemoModal = useStore((state) => state.openDemoModal)

  return (
    <section className="hero section">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Empowering Ethiopian Businesses with Innovative Software Solutions
          </h1>
          <p className="hero-description">
            Weleba Tech delivers custom software solutions including ERP systems, Marketing CRM Data for Ethiopia (desktop + web application with mobile experience), mobile applications, hotel booking platforms, education management systems, AI systems, drone services, and NFC solutions - all tailored for the Ethiopian market. Every solution is custom-built to fit your exact business needs.
          </p>
          <div className="hero-features">
            <div className="feature-box">🏨 Hotel Management & Booking Systems</div>
            <div className="feature-box">📱 Custom Mobile Applications</div>
            <div className="feature-box">💼 Enterprise Resource Planning (ERP)</div>
            <div className="feature-box">🎓 Education Management Systems</div>
            <div className="feature-box">🤖 AI Systems & Solutions</div>
            <div className="feature-box">📊 Market & Data Analytics Software</div>
            <div className="feature-box">📡 NFC Technology Solutions</div>
            <div className="feature-box">🚁 Drone Technology & Services</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero


