import React from 'react'
import './Company.css'

const Company = () => {
  return (
    <section className="company section" id="company">
      <div className="container">
        <div className="company-header">
          <span className="section-label">About Weleba Tech</span>
          <h2>Empowering Ethiopian Businesses with Technology</h2>
        </div>

        <div className="company-content">
          <div className="company-text">
            <p className="lead-text">
              Weleba Tech is a leading Ethiopian software company dedicated to delivering innovative, custom-built technology solutions that drive business growth and digital transformation.
            </p>
            <p>
              Founded with a mission to bridge the technology gap in Ethiopia, we specialize in developing software solutions tailored specifically for the Ethiopian market. Our team of experienced developers, designers, and consultants work closely with businesses across various industries to understand their unique challenges and deliver solutions that make a real difference.
            </p>
            <p>
              From hotel booking systems with email integration to comprehensive ERP platforms, mobile applications, AI solutions, and drone services - we provide end-to-end technology services that help Ethiopian businesses compete and thrive in the digital economy.
            </p>
          </div>

          <div className="company-stats">
            <div className="stat-item">
              <div className="stat-number">200+</div>
              <div className="stat-label">Businesses Served</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Hotels Using Our Systems</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">30+</div>
              <div className="stat-label">Educational Institutions</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Custom Solutions</div>
            </div>
          </div>

          <div className="company-values">
            <h3>Our Values</h3>
            <div className="values-grid">
              <div className="value-item">
                <div className="value-icon">🎯</div>
                <h4>Customization</h4>
                <p>Every solution is tailored to your specific business needs</p>
              </div>
              <div className="value-item">
                <div className="value-icon">🇪🇹</div>
                <h4>Local Focus</h4>
                <p>Built for the Ethiopian market with local understanding</p>
              </div>
              <div className="value-item">
                <div className="value-icon">💡</div>
                <h4>Innovation</h4>
                <p>Cutting-edge technology solutions for modern businesses</p>
              </div>
              <div className="value-item">
                <div className="value-icon">🤝</div>
                <h4>Partnership</h4>
                <p>We work with you as partners in your success</p>
              </div>
            </div>
          </div>

          <div className="company-location">
            <h3>Located in the Heart of Ethiopia</h3>
            <p>Addis Ababa, Ethiopia</p>
            <p>Phone: +251 911 234 567</p>
            <p>Email: info@welebatech.et</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Company




