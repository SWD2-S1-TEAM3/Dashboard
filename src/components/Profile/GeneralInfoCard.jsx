import React from "react";
import "./GeneralInfoCard.css";

const generalInfo = [
  { label: "Education", value: "Stanford University" },
  { label: "Languages", value: "English, Spanish, Italian" },
  { label: "Department", value: "Product Design" },
  { label: "Work History", value: "English, Spanish, Italian" },
  { label: "Organization", value: "Simmmple Web LLC" },
  { label: "Birthday", value: "20 July 1986" },
];

function GeneralInfoCard() {
  return (
    <div className="general-info-card">
      <h2 className="general-info-title">General Information</h2>
      <p className="general-info-desc">
        As we live, our hearts turn colder. Cause pain is what we go through as
        we become older. We get insulted by others, lose trust for those others.
        We get back stabbed by friends. It becomes harder for us to give others
        a hand. We get our heart broken by people we love, even that we give
        them all...
      </p>
      <div className="general-info-grid">
        {generalInfo.map((item, idx) => (
          <div className="general-info-item" key={idx}>
            <div className="general-info-label">{item.label}</div>
            <div className="general-info-value">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GeneralInfoCard;
