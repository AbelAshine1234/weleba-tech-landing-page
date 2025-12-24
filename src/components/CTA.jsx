import React from 'react'
import useStore from '../store/useStore'
import './CTA.css'

const CTA = () => {
  const openDemoModal = useStore((state) => state.openDemoModal)

  return (
    <section className="cta section">
      <div className="container">
        <div className="cta-content">
          <span className="cta-label">get started</span>
          <h2>Transform your business with Weleba Tech</h2>
          <div className="cta-buttons">
            <a href="/solutions" className="btn btn-secondary">explore solutions</a>
            <button className="btn btn-primary" onClick={openDemoModal}>
              request a demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
