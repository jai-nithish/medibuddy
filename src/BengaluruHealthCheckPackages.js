import React, { useState, useEffect } from "react";
import "./styles/BengaluruHealthCheckPackages.css"; // Import CSS for styling

const BengaluruHealthCheckPackages = ({ apiUrl }) => {
  const [bengaluruPackages, setBengaluruPackages] = useState([]); // State to store the fetched packages

  useEffect(() => {
    const fetchBengaluruPackages = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        // Access the correct section using the ID from page_config
        const pageConfig = data[0].page_config; // Array of configurations
        const bengaluruHealthCheckupSection = pageConfig.find((section) => section.id === "5"); // ID for Bengaluru Health Check-up Packages
        
        if (bengaluruHealthCheckupSection) {
          const bengaluruItems = bengaluruHealthCheckupSection.props; // The list of Bengaluru packages
          setBengaluruPackages(bengaluruItems); // Set the Bengaluru health check-up packages in state
        }
      } catch (error) {
        console.error("Error fetching Bengaluru health check-up packages:", error);
      }
    };

    fetchBengaluruPackages();
  }, [apiUrl]);

  return (
    <div className="bengaluru-health-checkups">
      <h2>Book Health Check Packages in Bengaluru</h2>
      {bengaluruPackages.length > 0 ? (
        <div className="bengaluru-packages-list">
          {bengaluruPackages.map((pkg) => (
            <div
              key={pkg.value}
              className="bengaluru-package-card"
              style={{ borderColor: pkg.color }}
            >
              <img
                src={pkg.imgSrc}
                alt={pkg.label}
                className="package-img"
                onError={(e) => {
                  e.target.src = "/assets/images/placeholder.png"; // Fallback image
                }}
              />
              <div className="package-info">
                <span className="package-label">{pkg.label}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No Bengaluru health check-up packages available.</p>
      )}
    </div>
  );
};

export default BengaluruHealthCheckPackages;
