import React, { useState } from 'react'
import useStore from '../store/useStore'
import './Services.css'

const Services = () => {
  const { openDemoModal } = useStore()
  const [selectedService, setSelectedService] = useState(null)

  const services = [
    {
      id: 'custom-software',
      title: 'Custom Software Development',
      description: 'Tailored software solutions built specifically for your business needs. From booking systems to enterprise applications.',
      features: ['Custom ERP Systems', 'Booking Platforms', 'Web Applications', 'API Integration'],
      requiresBooking: true
    },
    {
      id: 'mobile-apps',
      title: 'Mobile Application Development',
      description: 'Native and cross-platform mobile apps for iOS and Android designed to engage customers and streamline operations.',
      features: ['iOS Development', 'Android Development', 'Cross-Platform', 'App Store Optimization'],
      requiresBooking: true
    },
    {
      id: 'hotel-booking',
      title: 'Hotel Booking Systems',
      description: 'Complete reservation systems with real-time availability, payment processing, and guest management.',
      features: ['Real-time Availability', 'Payment Processing', 'Guest Management', 'Reservations Dashboard'],
      requiresBooking: true
    },
    {
      id: 'ai-systems',
      title: 'AI Systems & Solutions',
      description: 'Intelligent AI-powered systems for automation, data analysis, and business intelligence.',
      features: ['Machine Learning', 'Data Analytics', 'Automation', 'Chatbots'],
      requiresBooking: true
    },
    {
      id: 'drone-services',
      title: 'Drone Technology Services',
      description: 'Professional drone solutions for surveying, mapping, inspection, and aerial photography.',
      features: ['Aerial Surveying', 'Mapping Services', 'Inspection', 'Delivery Solutions'],
      requiresBooking: true
    },
    {
      id: 'education-software',
      title: 'Education Management Systems',
      description: 'Comprehensive platforms for schools and universities to manage students, courses, and administration.',
      features: ['Student Management', 'Course Management', 'Grade Tracking', 'Attendance System'],
      requiresBooking: true
    }
  ]

  const handlePreview = (service) => {
    setSelectedService(service)
    openDemoModal()
  }

  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="services-header">
          <span className="section-label">Our Services</span>
          <h2>Comprehensive Software Solutions</h2>
          <p className="section-description">
            All our services require booking for preview. Request a preview of the app to explore detailed features.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.id === 'custom-software' ? '💼' : service.id === 'mobile-apps' ? '📱' : service.id === 'hotel-booking' ? '🏨' : service.id === 'ai-systems' ? '🤖' : service.id === 'drone-services' ? '🚁' : '🎓'}</div>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-features">
                {service.features.map((feature, index) => (
                  <span key={index} className="feature-tag">{feature}</span>
                ))}
              </div>
              <div className="service-actions">
                {service.requiresBooking && (
                  <div className="booking-notice">
                    <span className="lock-icon">🔒</span>
                    <span>Booking required for preview</span>
                  </div>
                )}
                <button 
                  className="btn btn-primary service-preview-btn"
                  onClick={() => handlePreview(service)}
                >
                  Request Preview of the App
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services




