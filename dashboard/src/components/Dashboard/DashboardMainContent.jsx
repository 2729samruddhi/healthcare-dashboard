import React from 'react';
import AnatomySection from './DashboardOverview/AnatomySection';
import HealthStatusCards from './DashboardOverview/HealthStatusCards';
import CalendarView from './DashboardOverview/CalendarView';
import ActivityFeed from './DashboardOverview/ActivityFeed';
import './DashboardMainContent.css';

const DashboardMainContent = () => {
  return (
    <main className="dashboard-main">
      <div className="dashboard-grid">
        {/* Anatomy Section */}
        <div className="dashboard-anatomy">
          <AnatomySection />
        </div>
        
        {/* Health Status Cards */}
        <div className="dashboard-health-cards">
          <HealthStatusCards />
        </div>
        
        {/* Calendar View */}
        <div className="dashboard-calendar">
          <CalendarView />
        </div>
        
        {/* Activity Feed - Full width across anatomy and health cards */}
        <div className="dashboard-activity">
          <ActivityFeed />
        </div>
      </div>
    </main>
  );
};

export default DashboardMainContent;