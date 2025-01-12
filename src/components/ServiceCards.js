import React, { useState, useEffect } from "react";
import "../styles/ServiceCards.css";

const ServiceCards = ({ apiUrl }) => {
  const [services, setServices] = useState([]); // State to store the services data

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Access the correct section using the ID
        const pageConfig = data[0].page_config; // Array of configurations
        const serviceSection = pageConfig.find((section) => section.id === "8"); // ID for Service Cards Section
        
        if (serviceSection) {
          const serviceItems = serviceSection.props; // List of services (each with img, title, subTitle, subText)
          setServices(serviceItems); // Set the services data in state
        }
      } catch (error) {
        console.error("Error fetching service cards data:", error);
      }
    };

    fetchServices();
  }, [apiUrl]);

  return (
    <div className="service-cards">
      <h2 className="title">Our Services</h2> 
      {services.length > 0 ? (
        <div className="service-cards-list">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <img
                src={service.img}
                alt={service.title}
                className="service-card-img"
              />
              <div className="service-card-content">
                <h3>{service.title}</h3>
                <h4>{service.subTitle}</h4>
                <p>{service.subText}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No services available.</p>
      )}
    </div>
  );
};

export default ServiceCards;
