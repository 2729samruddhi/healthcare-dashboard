import React from 'react';
import { upcomingAppointments1, upcomingAppointments2 } from '../../../data/mockdata';
import SimpleAppointmentCard from './SimpleAppointmentCard';
import './UpcomingSchedule.css';

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule-section">
      <div className="schedule-header">
        <h3 className="schedule-title">The Upcoming Schedule</h3>
      </div>
      
      <div className="schedule-content">
        <div className="schedule-day">
          <div className="day-label">On Thursday</div>
          <div className="appointment-grid">
            {upcomingAppointments1.thursday.map((appointments, index) => (
              <SimpleAppointmentCard
                key={index}
                title={appointments.title}
                time={appointments.time}
                icon={appointments.icon}
                bgColor={appointments.bgColor}
                textColor={appointments.textColor}
              />
            ))}
          </div>
        </div>
        
        <div className="schedule-day">
          <div className="day-label">On Saturday</div>
          <div className="appointment-grid">
            {upcomingAppointments2.saturday.map((appointments, index) => (
              <SimpleAppointmentCard
                key={index}
                title={appointments.title}
                time={appointments.time}
                icon={appointments.icon}
                bgColor={appointments.bgColor}
                textColor={appointments.textColor}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingSchedule;