import React from 'react';
import './css/header.css';

const Header = ({count = 0}) => {
  return (
    <div className="Header__container">
      <h1 className="Header__count">Count {count}</h1>
    </div>
  );
}

export default Header;
