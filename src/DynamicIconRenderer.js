import React, { useState, useEffect } from "react";
import "./styles/DynamicIconRenderer.css";
const DynamicIconRenderer = ({ apiUrl }) => {
  const [icons, setIcons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPageConfig = async () => {
      try {
        setLoading(true);
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.status}`);
        }
        const data = await response.json();

        // Access the nested structure and extract the props array
        const extractedIcons =
          data[0]?.page_config?.[0]?.props?.filter((icon) => icon.isActive) || [];

        setIcons(extractedIcons);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPageConfig();
  }, [apiUrl]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  if (!icons.length) {
    return <p>No active icons available to display.</p>;
  }

  return (
    <div className="icons-container">
      {icons
        .sort((a, b) => a.order - b.order)
        .map((icon, index) => (
          <div className="icon-card" key={index}>
            <a href={icon.deeplink} target="_blank" rel="noopener noreferrer">
              <img src={icon.iconUrl} alt={icon.iconText} />
              <p>{icon.iconText}</p>
            </a>
          </div>
        ))}
    </div>
  );
};

export default DynamicIconRenderer;
