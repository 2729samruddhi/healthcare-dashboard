import React from 'react';
import { activityFeedData } from '../../../data/mockdata';
import './ActivityFeed.css';

const ActivityFeed = () => {
  const maxValue = Math.max(...activityFeedData.map(item => item.value));
  
  return (
    <div className="activity-section">
      <div className="activity-header">
        <h3 className="activity-title">Activity</h3>
        <p className="activity-subtitle">3 appointments on this week</p>
      </div>
      
      <div className="activity-chart">
        <div className="chart-container">
          {activityFeedData.map((item, index) => (
            <div key={index} className="chart-bar-container">
              <div 
                className="chart-bar"
                style={{ 
                  height: `${(item.value / maxValue) * 100}%`,
                  backgroundColor: item.day === 'Wed' ? '#06b6d4' : '#e2e8f0'
                }}
              />
              <div className="chart-day">{item.day}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityFeed;