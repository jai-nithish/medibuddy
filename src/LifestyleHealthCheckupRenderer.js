import React, { useEffect, useState } from "react";
import "./styles/LifestyleHealthCheckupRenderer.css"; // Import CSS for styling

const LifestyleHealthCheckupRenderer = ({ apiUrl }) => {
  const [lifestylePackages, setLifestylePackages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); // Track the currently displayed package

  useEffect(() => {
    const fetchLifestylePackages = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Access the correct section based on the ID
        const pageConfig = data[0].page_config || []; // Array of configurations
        const lifestyleHealthCheckupSection = pageConfig.find(
          (section) => section.id === "4"
        ); // ID for Lifestyle Health Check-up Packages

        if (lifestyleHealthCheckupSection) {
          const lifestyleItems = lifestyleHealthCheckupSection.props || []; // The list of lifestyle packages
          setLifestylePackages(lifestyleItems); // Set the lifestyle packages in state
        }
      } catch (error) {
        console.error("Error fetching lifestyle health check-up packages:", error);
      }
    };

    fetchLifestylePackages();
  }, [apiUrl]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % lifestylePackages.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + lifestylePackages.length) % lifestylePackages.length
    );
  };

  return (
    <div className="lifestyle-health-checkups">
      <h2 className="title">LifeStyle Health Check Packages</h2>
      {lifestylePackages.length > 0 ? (
        <div className="lifestyle-carousel">
          <div className="lifestyle-package-card">
            <img
              src={lifestylePackages[currentIndex].imgSrc}
              alt={lifestylePackages[currentIndex].title}
              className="package-img"
            />
            <h3>{lifestylePackages[currentIndex].title}</h3>
            <button>Learn More</button>
          </div>
          <div className="carousel-buttons">
            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleNext}>Next</button>
          </div>
        </div>
      ) : (
        <p>No lifestyle health check-up packages available.</p>
      )}
    </div>
  );
};

export default LifestyleHealthCheckupRenderer;
