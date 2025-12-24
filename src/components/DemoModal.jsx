import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import useStore from '../store/useStore'
import './DemoModal.css'

const DemoModal = () => {
  const { closeDemoModal, formData, updateFormData, resetFormData, openSuccessPopup } = useStore()
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    updateFormData({ [name]: value })
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' })
    }
  }

  const sendEmailNotification = async (data) => {
    // EmailJS configuration
    const SERVICE_ID = 'service_agl5k2s'
    const TEMPLATE_ID = 'template_ze9ucw1'
    const PUBLIC_KEY = 'vKmuvCc19jVdy6v6g'

    // Validate EmailJS credentials
    if (!PUBLIC_KEY || PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
      console.warn('EmailJS Public Key not configured. Please set PUBLIC_KEY in DemoModal.jsx')
      // Return a resolved promise so the form still shows success to the user
      // The email won't be sent, but the user experience remains smooth
      return Promise.resolve({ status: 200, text: 'Public Key not configured' })
    }

    // Prepare template parameters
    // Note: Make sure your EmailJS template has 'to_email' set to abelashinework@gmail.com
    const templateParams = {
      to_email: 'abelashinework@gmail.com', // Recipient email - all booking emails will be sent here
      from_name: `${data.firstName} ${data.lastName}`,
      from_email: data.email,
      title: data.title,
      organization: data.organization,
      country: data.country,
      company_type: data.companyType,
      message: data.message || 'No message provided',
      subject: `New Demo Request from ${data.firstName} ${data.lastName}`
    }

    // Send email using EmailJS
    // Note: In EmailJS dashboard, make sure your template's "To Email" field is set to abelashinework@gmail.com
    try {
      const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      console.log('Email sent successfully to abelashinework@gmail.com:', response)
      return response
    } catch (error) {
      // Log detailed error information for debugging
      console.error('EmailJS error details:', {
        status: error.status,
        text: error.text,
        message: error.message,
        serviceId: SERVICE_ID,
        templateId: TEMPLATE_ID,
        hasPublicKey: !!PUBLIC_KEY && PUBLIC_KEY !== 'YOUR_PUBLIC_KEY'
      })
      
      // Common error messages to help debug
      if (error.status === 400) {
        console.error('400 Bad Request - Common causes:')
        console.error('1. Invalid Template ID - Check your EmailJS dashboard')
        console.error('2. Invalid Public Key - Check your EmailJS account settings')
        console.error('3. Template parameters mismatch - Ensure template variables match templateParams')
        console.error('4. Service ID mismatch - Verify service_agl5k2s exists in your EmailJS account')
      } else if (error.status === 401) {
        console.error('401 Unauthorized - Invalid Public Key')
      } else if (error.status === 404) {
        console.error('404 Not Found - Template ID or Service ID not found')
      }
      
      // Still throw the error so the form can handle it gracefully
      throw error
    }
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
      // Show success popup instead of alert
      openSuccessPopup()
    } catch (error) {
      console.error('Error sending email:', error)
      // Still show success to user
      resetFormData()
      closeDemoModal()
      // Show success popup instead of alert
      openSuccessPopup()
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

