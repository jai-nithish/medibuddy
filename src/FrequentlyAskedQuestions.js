import React, { useState, useEffect } from "react";
import "./styles/FrequentlyAskedQuestions.css";

const FrequentlyAskedQuestions = ({ apiUrl }) => {
  const [faqs, setFaqs] = useState([]); // State to store FAQ data

  const toggleFaq = (id) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq) =>
        faq.id === id ? { ...faq, isExpanded: !faq.isExpanded } : faq
      )
    );
  };

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Access the correct section using the ID
        const pageConfig = data[0].page_config; // Array of configurations
        const faqSection = pageConfig.find((section) => section.id === "7"); // ID for FAQ Section

        if (faqSection) {
          const faqItems = faqSection.props.map((item) => ({
            ...item,
            isExpanded: false, // Add `isExpanded` property for toggling
          }));
          setFaqs(faqItems); // Set the FAQ data in state
        }
      } catch (error) {
        console.error("Error fetching FAQ data:", error);
      }
    };

    fetchFaqs();
  }, [apiUrl]);

  return (
    <div className="frequently-asked-questions">
      <h2>Frequently Asked Questions</h2>
      {faqs.length > 0 ? (
        <div className="faq-list">
          {faqs.map((faq) => (
            <div key={faq.id} className="faq-item">
              <div
                className="faq-question"
                onClick={() => toggleFaq(faq.id)}
              >
                <h3>{faq.question}</h3>
                <img
                  src={faq.icon}
                  alt="toggle icon"
                  className={`question-icon ${faq.isExpanded ? "rotated" : ""}`}
                />
              </div>
              {faq.isExpanded && (
                <div className="faq-answer">
                  <p className="answer-text">{faq.answer}</p>
                  {faq.points.map((point, index) => (
                    <div key={index} className="faq-point">
                      {point.img && (
                        <img
                          src={point.img}
                          alt="point icon"
                          className="point-icon"
                        />
                      )}
                      <p>{point.pnt}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p>No FAQs available.</p>
      )}
    </div>
  );
};

export default FrequentlyAskedQuestions;
