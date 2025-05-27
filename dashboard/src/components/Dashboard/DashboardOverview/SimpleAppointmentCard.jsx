import React from 'react';
import './SimpleAppointmentCard.css';

const SimpleAppointmentCard = ({ title, time, icon, bgColor, textColor }) => {
  return (
    <div
      className="simple-appointment-card"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      
      <div className="appointment-details">
        <div className="appointment-title">{title}</div>
        <div className="appointment-time">{time}</div>
      </div>
      <div className="appointment-icon">
        {icon}
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;