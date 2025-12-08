import React from "react";
import "../styles/businessinfo.css";

export default function BusinessInfoSection() {
  return (
    <div className="business-box">

      <div className="business-top">

  
        <div className="business-col">
          <div className="label-row">
            <span className="icon">✉</span>
            <h4 className="label-title">E-MAIL</h4>
          </div>
          <p className="email-text">support@luxewheels.com</p>
        </div>

   


      </div>
      <hr className="divider" />
      <h3 className="office-title">Our Offices</h3>
      <div className="office-grid">
        <div className="office">
          <h4>Jaipur Office</h4>
          <p>
            JTM, Model Town, Near Jagatpura Flyover<br />
            Jaipur - 302017
          </p>
        </div>

        <div className="office">
          <h4>Gurugram Office</h4>
          <p>
            9th Floor, M3M Financial Center,<br />
            Golf Course Ext. Rd, Sector 66,<br />
            Gurugram, Haryana 122002
          </p>
        </div>

        <div className="office">
          <h4>Mumbai Office</h4>
          <p>
            B Wing, 6th Floor, Akruti Trade Centre,<br />
            Andheri East, Mumbai - 400069
          </p>
        </div>

      </div>
    </div>
  );
}
