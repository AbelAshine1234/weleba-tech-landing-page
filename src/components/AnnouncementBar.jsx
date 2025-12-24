import React from 'react'
import useStore from '../store/useStore'
import './AnnouncementBar.css'

const AnnouncementBar = () => {
  const openDemoModal = useStore((state) => state.openDemoModal)
  const isMenuOpen = useStore((state) => state.isMenuOpen)

  if (isMenuOpen) return null

  return (
    <div className="announcement-bar">
      <a
        href="#"
        className="announcement-link"
        onClick={(e) => {
          e.preventDefault()
          openDemoModal()
        }}
      >
        <div className="announcement-text">
          🎉 New: Marketing CRM Data for Ethiopia (desktop + web app, mobile ready) with 10,000+ business records — request a preview!
        </div>
      </a>
    </div>
  )
}

export default AnnouncementBar


