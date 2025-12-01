// ContactForm.jsx
import React, { useState } from 'react';
import '../styles/form.css';
import formImg from "../assets/images/form.jpg";


export default function Form() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-container">
  <div className="contact-card">

    {/* Illustration */}
    <div className="illustration-section">
      <img
        src={formImg}
        alt="Contact Illustration"
        className="illustration-img"
      />
    </div>

    {/* Form */}
    <div className="form-section">
      <h1 className="form-title">Let's talk.</h1>
      <p className="form-subtitle">
        The more we know about you and what you want, the closer we are to finding it.
      </p>

      <form onSubmit={handleSubmit} className="contact-form">

        <div className="form-row">
          <div className="form-group">
            <label>First Name</label>
            <input type="text" name="firstName" placeholder="First Name"
              value={formData.firstName} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input type="text" name="lastName" placeholder="Last Name"
              value={formData.lastName} onChange={handleChange} />
          </div>
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input type="tel" name="phone" placeholder="(123) 456-7890"
            value={formData.phone} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" placeholder="you@email.com"
            value={formData.email} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Subject</label>
          <select name="subject" value={formData.subject} onChange={handleChange}>
            <option value="">Select an option</option>
            <option value="finance">Finance</option>
            <option value="insurance">Insurance</option>
          </select>
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea name="message" placeholder="Hello..."
            value={formData.message} onChange={handleChange} />
        </div>

        <button className="submit-btn">Send Message</button>
      </form>
    </div>

  </div>
</div>

  );
}