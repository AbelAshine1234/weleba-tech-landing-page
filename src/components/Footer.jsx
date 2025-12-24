import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <a href="/">
              <span className="logo-text-footer">Weleba Tech</span>
            </a>
            <p className="footer-tagline">Empowering Ethiopian Businesses with Technology</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4>Solutions</h4>
              <a href="/hotel-software">Hotel Management</a>
              <a href="/booking-system">Email-Integrated Booking</a>
              <a href="/mobile-apps">Mobile Applications</a>
              <a href="/erp">ERP Systems</a>
              <a href="/education">Education Software</a>
              <a href="/ai-systems">AI Systems</a>
              <a href="/drones">Drone Services</a>
              <a href="/custom-software">Custom Software</a>
            </div>
            
            <div className="footer-column">
              <h4>Company</h4>
              <a href="/about">About Us</a>
              <a href="/contact">Contact</a>
              <a href="/support">Support</a>
              <a href="/careers">Careers</a>
            </div>
            
            <div className="footer-column">
              <h4>Connect</h4>
              <a href="/blog">Blog</a>
              <a href="tel:+251911234567">+251 911 234 567</a>
              <a href="mailto:info@welebatech.et">info@welebatech.et</a>
              <a href="/contact">Addis Ababa, Ethiopia</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2025 Weleba Tech. All rights reserved. | Addis Ababa, Ethiopia</p>
          <div className="footer-legal">
            <a href="/terms">Terms of Service</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/contact">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

