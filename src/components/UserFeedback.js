import React, { useState, useEffect } from "react";
import "../styles/UserFeedback.css"; // Import CSS for styling

const UserFeedback = ({ apiUrl }) => {
  const [userFeedbacks, setUserFeedbacks] = useState([]); // State to store user feedback data

  useEffect(() => {
    const fetchUserFeedback = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Access the correct section using the ID
        const pageConfig = data[0].page_config; // Array of configurations
        const userFeedbackSection = pageConfig.find((section) => section.id === "6"); // ID for User Feedback Section
        
        if (userFeedbackSection) {
          const feedbackItems = userFeedbackSection.props; // The list of user feedbacks
          setUserFeedbacks(feedbackItems); // Set the user feedback data in state
        }
      } catch (error) {
        console.error("Error fetching user feedback:", error);
      }
    };

    fetchUserFeedback();
  }, [apiUrl]);

  return (
    <div className="user-feedback">
      <h2>What our Users Say</h2>
      {userFeedbacks.length > 0 ? (
        <div className="feedback-list">
          {userFeedbacks.map((feedback, index) => (
            <div key={index} className="feedback-card">
              <div className="rating">
                {"★".repeat(feedback.rating)} {/* Display the star rating */}
              </div>
              <p className="content">{feedback.content}</p>
              <div className="user-info">
                <span className="name">{feedback.name}</span>
                <span className="days">{feedback.days} ago</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No user feedback available.</p>
      )}
    </div>
  );
};

export default UserFeedback;
