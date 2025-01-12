import React from "react";
import "../styles/TrustedBySection.css"; // Import the CSS file for styling

const TrustedBySection = () => {
  return (
    <div className="trusted-section">
      <div className="trusted-header">
        <h2>
          Trusted by <span className="highlight">20,00,000+</span> Users Every Month
        </h2>
        <img
          src="shield-icon.png" /* Replace with the actual path to your shield icon */
          alt="Shield Icon"
          className="shield-icon"
        />
      </div>
      <div className="trusted-stats">
        <div className="stat-item">
          <img
            src="microscope-icon.png" /* Replace with the actual path to your microscope icon */
            alt="Microscope"
          />
          <p>200+ Approved Diagnostic Centres</p>
        </div>
        <div className="stat-item">
          <img
            src="test-icon.png" /* Replace with the actual path to your test icon */
            alt="Lab Test"
          />
          <p>1200+ Lab Tests Offered</p>
        </div>
        <div className="stat-item">
          <img
            src="location-icon.png" /* Replace with the actual path to your location icon */
            alt="Pincode"
          />
          <p>1200+ Pincodes Covered</p>
        </div>
      </div>
    </div>
  );
};

export default TrustedBySection;
