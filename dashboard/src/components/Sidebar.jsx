import React from 'react';
import {
  TbLayoutDashboard,
  TbHistory,
  TbCalendarTime,
  TbCalendarPlus,
   TbChartBar,
   TbTools ,
   TbSettings 
} from 'react-icons/tb';
import { IoChatbubbleEllipsesOutline,IoCall } from 'react-icons/io5';


import { sidebarItems } from '../data/mockdata';
import './Sidebar.css';

const iconMap = {
  Dashboard: TbLayoutDashboard,
  History: TbHistory,
  Calendar: TbCalendarTime,
  Appointment: TbCalendarPlus,
  Statistics: TbChartBar,
  Tools:TbTools ,
  Chat: IoChatbubbleEllipsesOutline,
  Support: IoCall,
  setting: TbSettings 
};

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <h3 className="sidebar-title">General</h3>
        <nav className="sidebar-nav">
          {sidebarItems.map((item, index) => {
            const IconComponent = iconMap[item.icon];
            return (
              <div
                key={index}
                className={`nav-item ${item.active ? 'nav-item-active' : ''}`}
              >
                {IconComponent && <IconComponent className="nav-icon" />}
                <span className="nav-label">{item.label}</span>
              </div>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
