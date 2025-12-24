import React from 'react'
import useStore from '../store/useStore'
import './SuccessPopup.css'

const SuccessPopup = () => {
  const { closeSuccessPopup } = useStore()

  return (
    <div className="success-popup-overlay" onClick={closeSuccessPopup}>
      <div className="success-popup-content" onClick={(e) => e.stopPropagation()}>
        <div className="success-icon">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
            <path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h2>Request Submitted Successfully!</h2>
        <p>We have received your demo request. Our team will contact you soon.</p>
        <button className="btn btn-primary success-popup-button" onClick={closeSuccessPopup}>
          Got it
        </button>
      </div>
    </div>
  )
}

export default SuccessPopup




