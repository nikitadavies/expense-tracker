import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './LeftNavigation.css';

function LeftNavigation() {
  const navigate = useNavigate();

  const handleLogout = () => {
   
    localStorage.removeItem('userData');
    navigate('/');
  };
  return (
  <div className="navigation">
     <NavLink to="/dashboard">
    <div className={`navigation-item`}>
      <span className="navigation-title">Dashboard</span>
    </div>
  </NavLink>
  <NavLink to="/dashboard/get-expenses">
    <div className={`navigation-item`}>
      <span className="navigation-title">Expenses</span>
    </div>
  </NavLink>
  <NavLink to="/dashboard/receipts">
    <div className={`navigation-item`}>
      <span className="navigation-title">Receipts</span>
    </div>
  </NavLink>
  <NavLink to="/" onClick={handleLogout} style={{marginTop: 'auto', marginBottom: '30%'}}>
    <div>
      <span className="navigation-title">Logout</span>
    </div>
  </NavLink>
</div>
);
}

export default LeftNavigation;
