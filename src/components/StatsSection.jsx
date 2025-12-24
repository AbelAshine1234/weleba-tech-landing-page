import React from 'react'
import './StatsSection.css'

const StatsSection = () => {
  const stats = [
    { value: '200+', label: 'Businesses powered by our custom solutions' },
    { value: '50+', label: 'Hotels using our booking systems' },
    { value: '30+', label: 'Schools with our education software' },
    { value: '100', unit: '%', label: 'Custom software - built for you' },
    { value: '95', unit: '%', label: 'Customer satisfaction rate' },
    { value: '24/7', label: 'Support for all our clients' }
  ]

  const companies = [
    'Addis Ababa Hotels', 'Ethiopian Universities', 'Local Restaurants', 'Retail Chains',
    'Tourism Companies', 'Private Schools', 'Healthcare Facilities', 'Government Agencies',
    'NGOs', 'Startups', 'Manufacturing', 'Agriculture',
    'Financial Services', 'Transportation'
  ]

  return (
    <section className="stats-section section">
      <div className="container">
        <h2 className="stats-title">Trusted by businesses across Ethiopia</h2>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-value">
                <span className="value">{stat.value}</span>
                {stat.unit && <span className="unit">{stat.unit}</span>}
              </div>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
        
        <div className="companies-section">
          <h3 className="companies-title">Serving diverse industries across Ethiopia</h3>
          <div className="companies-grid">
            {companies.map((company, index) => (
              <div key={index} className="company-logo">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsSection


