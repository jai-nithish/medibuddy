import React, { useEffect, useState } from "react";
import "./styles/FeaturedHealthCheckupRenderer.css"; // Import CSS for styling

const FeaturedHealthCheckupRenderer = ({ apiUrl }) => {
  const [packages, setPackages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); // Track the currently displayed package

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const pageConfig = data[0]?.page_config || [];
        const featuredHealthCheckupSection = pageConfig.find(
          (section) => section.id === "3"
        );

        if (featuredHealthCheckupSection) {
          const featuredPackages = featuredHealthCheckupSection.props[0]?.packages || [];
          setPackages(featuredPackages);
        }
      } catch (error) {
        console.error("Error fetching featured health checkup packages:", error);
      }
    };

    fetchPackages();
  }, [apiUrl]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % packages.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + packages.length) % packages.length
    );
  };

  return (
    <div className="featured-health-checkups">
      <h2 className="title">Featured Health Check-up Packages</h2>
      {packages.length > 0 ? (
        <div className="package-carousel">
          <div className="package-card">
            <h3>{packages[currentIndex].packageDisplayName}</h3>
            <p>{packages[currentIndex].description || "No description available."}</p>
            <ul>
              {packages[currentIndex].testsSummary.map((test, index) => (
                <li key={index}>{test}</li>
              ))}
            </ul>
            <p>
              Price: ₹{packages[currentIndex].price} (Discount: {packages[currentIndex].discount}% off)
            </p>
            <p>Available for: {packages[currentIndex].gender}</p>
            <p>
              <strong>Visit Type:</strong> {packages[currentIndex].currentVisitType}
            </p>
            <button>Book Now</button>
          </div>
          <div className="carousel-buttons">
            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleNext}>Next</button>
          </div>
        </div>
      ) : (
        <p>No featured health check-up packages available.</p>
      )}
    </div>
  );
};

export default FeaturedHealthCheckupRenderer;
