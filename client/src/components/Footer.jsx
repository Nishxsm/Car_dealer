import React from "react";
import "../styles/footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

      
        <div className="footer-col">
          <h4>Company</h4>
          <a href="#">About Us</a>
          <a href="#">Blog</a>
          <a href="#">Services</a>
          <a href="#">FAQs</a>
          <a href="#">Terms</a>
          <a href="#">Contact Us</a>
        </div>


        <div className="footer-col">
          <h4>Quick Links</h4>
          <a href="#">Get in Touch</a>
          <a href="#">Help center</a>
          <a href="#">Live chat</a>
          <a href="#">How it works</a>
        </div>

   
        <div className="footer-col">
          <h4>Our Brands</h4>
          <a href="#">Toyota</a>
          <a href="#">Porsche</a>
          <a href="#">Audi</a>
          <a href="#">BMW</a>
          <a href="#">Ford</a>
          <a href="#">Nissan</a>
          <a href="#">Peugeot</a>
          <a href="#">Volkswagen</a>
        </div>

   
        <div className="footer-col">
          <h4>Vehicles Type</h4>
          <a href="#">Sedan</a>
          <a href="#">Hatchback</a>
          <a href="#">SUV</a>
          <a href="#">Hybrid</a>
          <a href="#">Electric</a>
          <a href="#">Coupe</a>
          <a href="#">Truck</a>
          <a href="#">Convertible</a>
        </div>


        <div className="footer-col">
          <h4>Sale Hours</h4>
          <p>Monday – Friday: 09:00AM – 09:00 PM</p>
          <p>Saturday: 09:00AM – 07:00PM</p>
          <p>Sunday: Closed</p>

          <h4 className="connect-title">Connect With Us</h4>
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>

      </div>


      <div className="footer-bottom">
        <p>© 2025 Luxe Wheels. All rights reserved.</p>

        <div className="footer-links">
          <a href="#">Terms & Conditions</a>
          <span>•</span>
          <a href="#">Privacy Notice</a>
        </div>
      </div>

    </footer>
  );
}
