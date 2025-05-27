import React from 'react';
import './AnatomySection.css';
import humanbody from '../../../assets/humanbody.png';
import heartIcon from '../../../assets/Heart.svg'; 
import legIcon from '../../../assets/leg.png'; 

const AnatomySection = () => {
  const healthIndicators = [
    {
      id: 'heart',
      label: 'Healthy Heart',
      status: 'healthy',
      position: { top: '22%', right: '1%' },
      icon: heartIcon
    },
    {
      id: 'leg',
      label: 'Healthy Leg',
      status: 'healthy',
      position: { bottom: '27%', left: '1%' },
      icon: legIcon
    }
  ];

  return (
    <>
      <div className="anatomy-header">
        <h2 className="anatomy-title">Dashboard</h2>
      </div>

      <div className="anatomy-body">
        <div className="human-body-container">
          <img 
            src={humanbody} 
            alt="Human Body" 
            className="human-body-image"
          />
          
          {/* Health Indicators */}
          {healthIndicators.map((indicator) => (
            <div
              key={indicator.id}
              className={`health-indicator ${indicator.id}-indicator`}
              style={indicator.position}
            >
              <img 
                src={indicator.icon} 
                alt={`${indicator.label} icon`}
                className="indicator-icon"
              />
              <span className="indicator-text">{indicator.label}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AnatomySection;