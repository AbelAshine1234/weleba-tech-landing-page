import React from 'react'
import useStore from '../store/useStore'
import logoPng from '../assets/logo.png'
import './Navbar.css'

const Navbar = () => {
  const { openDemoModal, isMenuOpen, toggleMenu, closeMenu } = useStore()
  const scrollY = useStore((state) => state.scrollY)

  const handleMarketingCrm = (e) => {
    if (e?.preventDefault) e.preventDefault()
    closeMenu()
    openDemoModal()
  }

  const handleLinkClick = (e) => {
    if (e.target.getAttribute('href')?.startsWith('#')) {
      closeMenu()
    }
  }

  return (
    <nav className={`navbar ${scrollY > 50 ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          <a href="/" className="navbar-logo">
            <img src={logoPng} alt="Weleba Tech" className="navbar-logo-image" />
            <span className="logo-text">Weleba Tech</span>
          </a>
          
          <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`} onClick={handleLinkClick}>
            <a href="#services" className="navbar-link">Services</a>
            <a href="#products" className="navbar-link">Products</a>
            <a href="#" className="navbar-link" onClick={handleMarketingCrm}>Marketing CRM Data (Desktop + Web)</a>
            <a href="#company" className="navbar-link">Company</a>
            <a href="#/blog" className="navbar-link">Blog</a>
            <div className="navbar-dropdown">
              <button type="button" className="navbar-link navbar-dropdown-trigger">
                More
              </button>
              <div className="dropdown-content">
                <a href="#company">About Us</a>
                <a href="/contact">Contact</a>
                <a href="https://www.youtube.com/@welebatech" target="_blank" rel="noopener noreferrer">YouTube</a>
                <a href="https://x.com/welebatech" target="_blank" rel="noopener noreferrer">X (Twitter)</a>
              </div>
            </div>
          </div>
          
          <button className="navbar-toggle" onClick={toggleMenu}>
            {isMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar


