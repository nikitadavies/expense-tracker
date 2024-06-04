import React from 'react';
import { useNavigate } from "react-router-dom";
import { Logo } from '../../assets';

function Header() {
  const navigate = useNavigate();
  return (
    <header style={{ display: 'flex', alignItems: 'center' }}>
     <div className="logo">
        <img
          src={Logo}
          style={{
            width: '55px',
            height: "55px",
            background: "#ffff",
            marginTop: '5px'
          }}
          alt="Logo"
        />
      </div>
      <h2 style={{ marginLeft: "10px", color: "#28317a"}} onClick={() => navigate('/instructor')}>MoneyMinder</h2>
    </header>
  );
}

export default Header;
