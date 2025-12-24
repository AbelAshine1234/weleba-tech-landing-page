import React from 'react'
import './AnnouncementBar.css'

const AnnouncementBar = () => {
  return (
    <div className="announcement-bar">
      <a href="/news" className="announcement-link">
        <div className="announcement-text">
          🎉 New: Email-Integrated Booking System Now Available - Seamlessly Connect Your Reservations with Email!
        </div>
      </a>
    </div>
  )
}

export default AnnouncementBar


