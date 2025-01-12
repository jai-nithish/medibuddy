import React, { useState, useEffect } from "react";
import "./styles/Banner.css"; // Import the CSS file for the banner styles

const DynamicBannerRenderer = ({ apiUrl }) => {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0); // Track the current banner to show

  useEffect(() => {
    const fetchPageConfig = async () => {
      try {
        setLoading(true);
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.status}`);
        }
        const data = await response.json();

        // Extract banners from page_config
        const extractedBanners =
          data[0]?.page_config?.[1]?.props?.filter((banner) => banner.isActive) || [];

        setBanners(extractedBanners);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPageConfig();
  }, [apiUrl]);

  const nextBanner = () => {
    setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const prevBanner = () => {
    setCurrentBannerIndex((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  };

  if (loading) return <p>Loading banners...</p>;
  if (error) return <p>Error: {error}</p>;

  if (!banners.length) {
    return <p>No active banners available to display.</p>;
  }

  return (
    <div className="banner-container">
      {/* Display the current banner */}
      <div className="banner">
        <a
          href={banners[currentBannerIndex].deeplink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block",
            textAlign: "center",
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "10px",
            textDecoration: "none",
          }}
        >
          <img
            src={banners[currentBannerIndex].bannerUrl}
            alt={`Banner ${currentBannerIndex + 1}`}
            style={{ width: "100%", height: "auto", borderRadius: "8px" }}
          />
        </a>
      </div>

      {/* Navigation controls */}
      <div className="navigation-controls">
        <button onClick={prevBanner} disabled={banners.length <= 1}>Previous</button>
        <button onClick={nextBanner} disabled={banners.length <= 1}>Next</button>
      </div>
    </div>
  );
};

export default DynamicBannerRenderer;
