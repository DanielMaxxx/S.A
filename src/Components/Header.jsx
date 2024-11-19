import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="src/assets/logo.png" alt="Logo Sabor Saudável" />
      </div>
      <div className="search-bar">
        <input type="text" placeholder="O que vamos comer hoje?" />
      </div>
      <div className="user-icon">
        <img src="src\assets\logo.png" alt="User Icon" />
      </div>
    </header>
  );
};


export default Header;
