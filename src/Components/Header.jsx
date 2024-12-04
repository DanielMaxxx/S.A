import React from 'react';
import { Link } from 'react-router-dom'; // Importar o Link para navegação interna
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        {/* Envolver o logo com o componente Link */}
        <Link to="/Home"> 
          <img src="src/assets/logo.png" alt="Logo Sabor Saudável" />
        </Link>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="O que vamos comer hoje?" />
      </div>
      <div className="user-icon">
      <Link to="/Perfil">
        <img src="src/assets/logo.png" alt="User Icon" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
