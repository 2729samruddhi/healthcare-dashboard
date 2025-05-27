import React from 'react';
import { calendarViewData } from '../../../data/mockdata';
import './CalendarView.css';
import UpcomingSchedule from './UpcomingSchedule';

const CalendarView = () => {
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
   <div className="calendar-section">
      <div className="calendar-header">
        <h3 className="calendar-title">October 2021</h3>
        <div className="calendar-nav">
          <button className="nav-button">◀</button>
          <button className="nav-button">▶</button>
        </div>
      </div>

      <div className="calendar-grid">
        <div className="calendar-days">
          {daysOfWeek.map(day => (
            <div key={day} className="day-header">
              {day}
            </div>
          ))}
        </div>

        <div className="calendar-dates">
          {calendarViewData.map((date, index) => (
            <div key={index} className={`calendar-date ${date.day === 26 ? 'today' : ''}`}>
              <div className="date-number">{date.day}</div>
              <div className="appointments-list">
                {date.appointments.map((appointment, timeIndex) => (
                  <div key={timeIndex} className={`appointment-time ${appointment.type}`}>
                    {appointment.time}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="appointment-cards">
        <div className="appointment dentist-card">
          <div className="card-content">
            <div className="card-title">Dentist</div>
            <div className="card-details">
              <div className="card-time">09:00-11:00</div>
              <div className="card-doctor">Dr. Cameron Williamson</div>
            </div>
          </div>
          <div className="card-icon">🦷</div>
        </div>

        <div className="appointment physio-card">
          <div className="card-content">
            <div className="card-title">Physiotherapy Appointment</div>
            <div className="card-details">
              <div className="card-time">11:00-12:00</div>
              <div className="card-doctor">Dr. Kevin Djones</div>
            </div>
          </div>
          <div className="card-icon">💪</div>
        </div>
      </div>
      
      <div className='upcoming-schedule'>
        <UpcomingSchedule />
      </div>
    </div>
  );
};

export default CalendarView;