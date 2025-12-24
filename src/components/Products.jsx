import React, { useState } from 'react'
import useStore from '../store/useStore'
import './Products.css'

const Products = () => {
  const { openDemoModal } = useStore()
  const [selectedProduct, setSelectedProduct] = useState(null)

  const products = [
    {
      id: 'booking-system',
      title: 'Email-Integrated Booking System',
      description: 'Smart booking platform seamlessly connected with your email. Receive instant notifications and manage reservations automatically.',
      category: 'Booking Solutions',
      requiresBooking: true
    },
    {
      id: 'erp-system',
      title: 'Custom ERP System',
      description: 'Enterprise Resource Planning system tailored to your business processes, inventory, and operations.',
      category: 'Enterprise Software',
      requiresBooking: true
    },
    {
      id: 'hotel-management',
      title: 'Hotel Management Platform',
      description: 'Complete hotel management solution with booking, guest services, and operations management.',
      category: 'Hospitality',
      requiresBooking: true
    },
    {
      id: 'education-platform',
      title: 'Education Management Platform',
      description: 'Comprehensive system for managing students, courses, grades, and administrative tasks.',
      category: 'Education',
      requiresBooking: true
    },
    {
      id: 'mobile-app',
      title: 'Custom Mobile Application',
      description: 'Native mobile apps for iOS and Android designed specifically for your business needs.',
      category: 'Mobile Solutions',
      requiresBooking: true
    },
    {
      id: 'ai-platform',
      title: 'AI-Powered Business Platform',
      description: 'Intelligent automation and analytics platform powered by artificial intelligence.',
      category: 'AI Solutions',
      requiresBooking: true
    },
    {
      id: 'nfc-solution',
      title: 'NFC Payment & Access System',
      description: 'Contactless payment and access control solutions using NFC technology.',
      category: 'Payment Solutions',
      requiresBooking: true
    },
    {
      id: 'data-analytics',
      title: 'Business Analytics Dashboard',
      description: 'Real-time data analytics and reporting platform for informed decision-making.',
      category: 'Analytics',
      requiresBooking: true
    }
  ]

  const handlePreview = (product) => {
    setSelectedProduct(product)
    openDemoModal()
  }

  return (
    <section className="products section" id="products">
      <div className="container">
        <div className="products-header">
          <span className="section-label">Our Products</span>
          <h2>Custom Software Products</h2>
          <p className="section-description">
            All our products are custom-built for your business. Booking is required to preview product demos and access detailed information.
          </p>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-badge">{product.category}</div>
              <h3>{product.title}</h3>
              <p className="product-description">{product.description}</p>
              <div className="product-overlay">
                <div className="overlay-content">
                  <div className="booking-required">
                    <span className="lock-icon">🔒</span>
                    <p>Booking required to preview</p>
                  </div>
                  <button 
                    className="btn btn-primary"
                    onClick={() => handlePreview(product)}
                  >
                    Book Demo Session
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="products-cta">
          <p>All products are custom-developed. Need something specific?</p>
          <button className="btn btn-secondary" onClick={openDemoModal}>
            Request Custom Solution
          </button>
        </div>
      </div>
    </section>
  )
}

export default Products




