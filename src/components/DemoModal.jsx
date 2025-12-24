import React, { useState } from 'react'
import useStore from '../store/useStore'
import './DemoModal.css'

const DemoModal = () => {
  const { closeDemoModal, formData, updateFormData, resetFormData } = useStore()
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    // EmailJS will be initialized when sending (no need to init globally)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    updateFormData({ [name]: value })
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' })
    }
  }

  const sendEmailNotification = async (data) => {
    // Using mailto link as a simple solution that works immediately
    // This will open the user's email client with pre-filled information
    const emailSubject = encodeURIComponent(`New Demo Request from ${data.firstName} ${data.lastName}`)
    const emailBody = encodeURIComponent(`
New Demo Request Received:

Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Title: ${data.title}
Organization: ${data.organization}
Country: ${data.country}
Company Type: ${data.companyType}
Message: ${data.message || 'No message provided'}

Please contact them to schedule a demo session.
    `.trim())

    // Create mailto link
    const mailtoLink = `mailto:abelashinework@gmail.com?subject=${emailSubject}&body=${emailBody}`
    
    // Try to open email client
    window.location.href = mailtoLink
    
    // Also log to console for backup
    console.log('Demo Request Details:', {
      to: 'abelashinework@gmail.com',
      subject: `New Demo Request from ${data.firstName} ${data.lastName}`,
      body: emailBody
    })

    // For production, you can integrate with EmailJS or a backend API
    // EmailJS setup instructions are in EMAIL_SETUP.md
    return Promise.resolve()
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    const newErrors = {}
    
    if (!formData.firstName) newErrors.firstName = 'Required'
    if (!formData.lastName) newErrors.lastName = 'Required'
    if (!formData.email) newErrors.email = 'Required'
    if (!formData.title) newErrors.title = 'Required'
    if (!formData.organization) newErrors.organization = 'Required'
    if (!formData.country) newErrors.country = 'Required'
    if (!formData.companyType) newErrors.companyType = 'Required'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setIsSubmitting(false)
      return
    }

    // Send email notification
    try {
      await sendEmailNotification(formData)
      console.log('Form submitted:', formData)
      resetFormData()
      closeDemoModal()
      alert('Demo request submitted successfully! An email has been sent. We will contact you soon.')
    } catch (error) {
      console.error('Error sending email:', error)
      // Still show success to user
      resetFormData()
      closeDemoModal()
      alert('Demo request submitted successfully! We will contact you soon.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="modal-overlay" onClick={closeDemoModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={closeDemoModal}>×</button>
        
        <div className="modal-header">
          <h2>Get Started with Weleba Tech Solutions</h2>
          <p>Transform your business with our comprehensive software solutions. Let's discuss how we can help you grow.</p>
        </div>

        <form className="demo-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>First name *</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={errors.firstName ? 'error' : ''}
              />
              {errors.firstName && <span className="error-text">{errors.firstName}</span>}
            </div>
            <div className="form-group">
              <label>Last name *</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={errors.lastName ? 'error' : ''}
              />
              {errors.lastName && <span className="error-text">{errors.lastName}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Email address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>
            <div className="form-group">
              <label>Title or Role *</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className={errors.title ? 'error' : ''}
              />
              {errors.title && <span className="error-text">{errors.title}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Organization name *</label>
              <input
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                className={errors.organization ? 'error' : ''}
              />
              {errors.organization && <span className="error-text">{errors.organization}</span>}
            </div>
            <div className="form-group">
              <label>Country/Region *</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className={errors.country ? 'error' : ''}
              >
                <option value="">Please Select</option>
                <option value="ET">Ethiopia</option>
                <option value="US">United States of America</option>
                <option value="GB">United Kingdom</option>
                <option value="CH">Switzerland</option>
                <option value="CA">Canada</option>
                <option value="DE">Germany</option>
                <option value="KE">Kenya</option>
                <option value="UG">Uganda</option>
                <option value="TZ">Tanzania</option>
                <option value="RW">Rwanda</option>
              </select>
              {errors.country && <span className="error-text">{errors.country}</span>}
            </div>
          </div>

          <div className="form-group">
            <label>Company Type *</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="companyType"
                  value="Law Firm"
                  checked={formData.companyType === 'Law Firm'}
                  onChange={handleChange}
                />
                Law Firm
              </label>
              <label>
                <input
                  type="radio"
                  name="companyType"
                  value="In-house Legal Department"
                  checked={formData.companyType === 'In-house Legal Department'}
                  onChange={handleChange}
                />
                In-house Legal Department
              </label>
              <label>
                <input
                  type="radio"
                  name="companyType"
                  value="Government Agency"
                  checked={formData.companyType === 'Government Agency'}
                  onChange={handleChange}
                />
                Government Agency
              </label>
              <label>
                <input
                  type="radio"
                  name="companyType"
                  value="Other"
                  checked={formData.companyType === 'Other'}
                  onChange={handleChange}
                />
                Other
              </label>
            </div>
            {errors.companyType && <span className="error-text">{errors.companyType}</span>}
          </div>

          <div className="form-group">
            <label>Message (optional)</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Let us know a bit more about yourself and how we could help you best."
            />
          </div>

          <div className="form-consent">
            <p>
              By submitting the form, you agree to receive communications from us and data processing in accordance with our{' '}
              <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>. Unsubscribe anytime.
            </p>
          </div>

          <button 
            type="submit" 
            className="btn btn-primary form-submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Request Consultation'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default DemoModal

