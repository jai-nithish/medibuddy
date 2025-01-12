// App.js
import React from "react";
import DynamicIconRenderer from "./DynamicIconRenderer"; // Import the icon component
import DynamicBannerRenderer from "./DynamicBannerRenderer"; // Import the banner component
import FeaturedHealthCheckupRenderer from "./FeaturedHealthCheckupRenderer"; // Import the health checkup renderer
import LifestyleHealthCheckupRenderer from "./LifestyleHealthCheckupRenderer";
import BengaluruHealthCheckPackages from "./BengaluruHealthCheckPackages";
import UserFeedback from './UserFeedback';
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions";
import ServiceCards from "./ServiceCards";
import SearchBar from "./SearchBar";

const App = () => {
  // Replace with actual API URLs for icons, banners, and health check-ups
  const iconApiUrl = "https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config"; 
  const bannerApiUrl = "https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config";
  const healthCheckupApiUrl = "https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config";
  const lifestyleApiUrl = "https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config";
  const healthapiUrl ="https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config";
  const userapiUrl ="https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config";
  const faqapiurl="https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config";
  const serviceapiurl="https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config";
  return (
    <div className="App">
      <SearchBar />
      <DynamicIconRenderer apiUrl={iconApiUrl} /> {/* Render Dynamic Icons */}

    
      <DynamicBannerRenderer apiUrl={bannerApiUrl} /> {/* Render Dynamic Banners */}

   
      <FeaturedHealthCheckupRenderer apiUrl={healthCheckupApiUrl} /> {/* Render Featured Health Check-ups */}

      <LifestyleHealthCheckupRenderer apiUrl={lifestyleApiUrl} /> {/* Render Lifestyle Health Check-ups */}
      <BengaluruHealthCheckPackages apiUrl={healthapiUrl} />
     <UserFeedback apiUrl={userapiUrl} />
     <FrequentlyAskedQuestions apiUrl={faqapiurl}/>
     <ServiceCards apiUrl={serviceapiurl}/>
    </div>
  );
};

export default App;
