import "../styles/contact.css";

export default function Contact() {
  return (
    <section className="contact-wrapper">
      <h1 className="contact-title">Contact Us</h1>

      <div className="contact-box">

       
<div className="contact-left">
  <div className="contact-icon-row">
    <span className="email-icon">✉</span>
    <span className="contact-label">E-MAIL</span>
  </div>

  <div className="contact-email">support@luxewheels.com</div>
</div>


    
        <div className="contact-right">

  <div className="contact-field">
    <label>City</label>
    <input type="text" placeholder="Mumbai" />
  </div>

  <div className="contact-field">
    <label>Your Message</label>
    <textarea placeholder="Please share your feedback or query..." />
  </div>

  <div className="contact-field">
    <label>Upload File</label>
    <input type="file" />
  </div>

  <div className="contact-terms">
    <input type="checkbox" id="tc" />
    <label htmlFor="tc"> I agree to Terms & Conditions</label>
  </div>

  <button className="contact-submit">Submit</button>

</div>

      </div>

    </section>
  );
}
