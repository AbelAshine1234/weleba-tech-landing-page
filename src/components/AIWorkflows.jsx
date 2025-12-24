import React from 'react'
import './AIWorkflows.css'

const AIWorkflows = () => {
  const workflows = [
    {
      title: 'Custom Software Development',
      description: 'Tailored software solutions built specifically for your business needs. From booking platforms to complete enterprise applications, we deliver custom software that fits perfectly.'
    },
    {
      title: 'Marketing CRM Data for Ethiopia',
      description: 'A marketing CRM data platform for Ethiopia with 10,000+ business records delivered via desktop and web apps with a mobile-friendly experience to power targeting, outreach, and reporting.'
    },
    {
      title: 'AI Systems & Solutions',
      description: 'Intelligent AI-powered systems for automation, data analysis, customer service, and business intelligence. Leverage artificial intelligence to transform your operations and decision-making.'
    },
    {
      title: 'Drone Technology Services',
      description: 'Professional drone solutions for surveying, mapping, inspection, delivery, and aerial photography. Advanced drone technology services tailored for Ethiopian businesses and industries.'
    }
  ]

  return (
    <section className="ai-workflows section">
      <div className="container">
        <div className="workflows-intro">
          <p className="intro-text">
            Every business needs the right technology to thrive in today's digital economy
          </p>
          <h2>Complete Software Solutions for Every Industry</h2>
          <p className="intro-description">
            Weleba Tech delivers integrated software solutions that transform how Ethiopian businesses operate, from hotels and restaurants to schools and enterprises.
          </p>
        </div>
        <div className="workflows-grid">
          {workflows.map((workflow, index) => (
            <div key={index} className="workflow-card">
              <h3>{workflow.title}</h3>
              <p>{workflow.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AIWorkflows


