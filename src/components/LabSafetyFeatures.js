import React from 'react';

const LabSafetyFeatures = () => {
  const features = [
    {
      icon: "🧪", // Replace with an actual icon/image in a real project
      title: "Gov. Approved Diagnostic Centres",
    },
    {
      icon: "🌡️", // Replace with an actual icon/image
      title: "Daily Temperature Check of all Technicians",
    },
    {
      icon: "😷", // Replace with an actual icon/image
      title: "Mandatory use of Mask & Sanitizers",
    },
    {
      icon: "🧴", // Replace with an actual icon/image
      title: "Regular Disinfection of Labs",
    },
  ];

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2 style={{
          fontFamily: "'Lexend Deca',san-serif",
          fontStyle: "normal",
          fontWeight: "1000",
          fontSize: "40px",
          lineHeight: "50px",
          color: "#050A4E",
          textAlign: "center",
          margin: "20px 0", // Space around the title
        }}>100% Safe & Secure Lab Tests</h2>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
        {features.map((feature, index) => (
          <div
            key={index}
            style={{
              width: "250px",
              padding: "15px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "40px", marginBottom: "10px" }}>{feature.icon}</div>
            <p style={{ fontSize: "16px", fontWeight: "bold" }}>{feature.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LabSafetyFeatures;
