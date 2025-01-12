// App.js
import React from "react";
import DynamicIconRenderer from "./components/DynamicIconRenderer"; // Import the icon component
import DynamicBannerRenderer from "./components/DynamicBannerRenderer"; // Import the banner component
import FeaturedHealthCheckupRenderer from "./components/FeaturedHealthCheckupRenderer"; // Import the health checkup renderer
import LifestyleHealthCheckupRenderer from "./components/LifestyleHealthCheckupRenderer";
import BengaluruHealthCheckPackages from "./components/BengaluruHealthCheckPackages";
import UserFeedback from './components/UserFeedback';
import FrequentlyAskedQuestions from "./components/FrequentlyAskedQuestions";
import ServiceCards from "./components/ServiceCards";
import SearchBar from "./components/SearchBar";
import TrustedBySection from "./components/TrustedBySection";
import LabSafetyFeatures from "./components/LabSafetyFeatures";
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
     <TrustedBySection />
     <LabSafetyFeatures/>
     <FrequentlyAskedQuestions apiUrl={faqapiurl}/>
     <ServiceCards apiUrl={serviceapiurl}/>
    </div>
  );
};

export default App;
