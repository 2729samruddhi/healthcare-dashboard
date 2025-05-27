import React from 'react';
import { Search, Bell, Plus, Pointer } from 'lucide-react';
import './Header.css';
import appointment from '../assets/appointment.png';
import boy from '../assets/boy.png';
const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="title">Health<span className='sub-title'>care.</span></h1>
        <div className="search-section">
          <Search className="search-icon" />
          <input 
            type="text" 
            placeholder="Search" 
            className="search-input"
          />
        </div>
        
      </div>
      <div className="bell">
        <img src={appointment} alt="Appointment Icon" style={{ width: 25, height: 25, cursor: 'pointer' }} />
        </div>
      
      <div className="header-right">
        
        <div className="profile">
          <div className="avatar-icon">
            <span><img src={boy} alt="boy" style={{height:'30px', width:'30px'}}/></span>
          </div>
        </div>
        <button className="add-button">
          <span className='plus-icon'>+</span>
        </button>
      </div>
    </header>
  );
};

export default Header;