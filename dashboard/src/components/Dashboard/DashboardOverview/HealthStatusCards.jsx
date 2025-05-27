import React from 'react';
import { healthStatusData } from '../../../data/mockdata';
import './HealthStatusCards.css';
import lungs from '../../../assets/lungs.webp';

const HealthStatusCards = () => {
  return (
    <>
      <div className="healthcare-header">
        <h2 className="healthcare-title">This week</h2>
      </div>
      <div className="health-status-container">
        {healthStatusData.map((item, index) => (
          <div key={index} className="health-status-card">
            <div className="status-header">
              <div className="status-icon-container">
                {item.type === 'Lungs' && <span className="status-emoji">🔴</span>}
                {item.type === 'Teeth' && <span className="status-emoji">🦷</span>}
                {item.type === 'Bone' && <span className="status-emoji">🦴</span>}
              </div>
              <span className="status-title">{item.type}</span>
            </div>
            <p className="date">Date: {item.date}</p>
            <div className="progress-container">
              <div
                className="progress-bar"
                style={{
                  backgroundColor: item.color,
                  width: `${item.progress}%`
                }} />
            </div>
          </div>
        ))}

        <div className="healthcare-header">
        <h2 className="healthcare-title"> Details →</h2>
      </div>
      </div></>
  );
};

export default HealthStatusCards;