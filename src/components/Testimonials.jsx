import React from 'react'
import './Testimonials.css'

const Testimonials = () => {
  const testimonials = [
    {
      company: 'Grand Hotel Addis',
      quote: "Weleba Tech's hotel booking system transformed our reservation management. We've seen a 40% increase in online bookings and our staff can now focus on guest service instead of manual paperwork.",
      author: 'Alemayehu Bekele',
      role: 'General Manager'
    },
    {
      company: 'Ethiopian University',
      quote: "The education management system from Weleba Tech has streamlined our entire administrative process. Student registration, grade management, and attendance tracking are now seamless and efficient.",
      author: 'Dr. Mesfin Tadesse',
      role: 'Academic Director'
    },
    {
      company: 'Local Restaurant Chain',
      quote: "Their mobile app and NFC payment solutions have revolutionized how we serve customers. Orders are faster, payments are secure, and customer satisfaction has significantly improved.",
      author: 'Sara Mengistu',
      role: 'Operations Manager'
    }
  ]

  return (
    <section className="testimonials section">
      <div className="container">
        <h2 className="testimonials-title">What our clients say about Weleba Tech</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <h3>{testimonial.company}</h3>
              <p className="quote">"{testimonial.quote}"</p>
              <div className="author">
                <div className="author-name">{testimonial.author}</div>
                <div className="author-role">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials


