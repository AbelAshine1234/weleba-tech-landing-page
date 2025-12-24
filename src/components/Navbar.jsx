import React from 'react'
import useStore from '../store/useStore'
import WelebaLogo from './WelebaLogo'
import './Navbar.css'

const Navbar = () => {
  const { openDemoModal, isMenuOpen, toggleMenu, closeMenu } = useStore()
  const scrollY = useStore((state) => state.scrollY)

  const handleLinkClick = (e) => {
    if (e.target.getAttribute('href')?.startsWith('#')) {
      closeMenu()
    }
  }

  return (
    <nav className={`navbar ${scrollY > 50 ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          <a href="/" className="navbar-logo">
            <WelebaLogo width={40} height={40} />
            <span className="logo-text">Weleba Tech</span>
          </a>
          
          <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`} onClick={handleLinkClick}>
            <a href="#services" className="navbar-link">Services</a>
            <a href="#products" className="navbar-link">Products</a>
            <a href="#company" className="navbar-link">Company</a>
            <div className="navbar-dropdown">
              <span className="navbar-link">More</span>
              <div className="dropdown-content">
                <a href="#company">About Us</a>
                <a href="/contact">Contact</a>
                <a href="/support">Support</a>
              </div>
            </div>
            <div className="navbar-dropdown">
              <span className="navbar-link">Resources</span>
              <div className="dropdown-content">
                <a href="/blog">Blog</a>
                <a href="/support">Support</a>
                <a href="/docs">Documentation</a>
              </div>
            </div>
          </div>
          
          <button className="btn btn-primary navbar-cta" onClick={openDemoModal}>
            Get Started
          </button>
          
          <button className="navbar-toggle" onClick={toggleMenu}>
            {isMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar


