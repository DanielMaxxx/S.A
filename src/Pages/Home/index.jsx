import React, { useState, useRef, useEffect } from 'react';
import './Home.css';
import { FaUserCircle, FaSearch, FaHeart } from 'react-icons/fa';

function Home() {
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showRecipeModal, setShowRecipeModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const profileIconRef = useRef(null);
  const recipeButtonRef = useRef(null);

  const handleProfileClick = () => {
    setShowProfileModal(!showProfileModal);
  };

  const handleRecipeClick = () => {
    setShowRecipeModal(!showRecipeModal);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileIconRef.current &&
        !profileIconRef.current.contains(event.target)
      ) {
        setShowProfileModal(false);
      }
      if (
        recipeButtonRef.current &&
        !recipeButtonRef.current.contains(event.target)
      ) {
        setShowRecipeModal(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="home">
      {/* Header */}
      <header className="header">
        <div className="search-bar">
           <img id="LogoHome" src="/src/assets/logo.png" alt="Logo Sabor Saúde" />
          <input type="text" placeholder="O que vamos comer hoje?" />
          <button id='Botao'><FaSearch /></button>
          
        </div>
        <div className="profile-icon" onClick={handleProfileClick} ref={profileIconRef}>
          <FaUserCircle />
        </div>
        {showProfileModal && (
          <div className="profile-modal" style={{ top: '50px', right: '20px' }}>
            {isLoggedIn ? (
              <button onClick={() => alert('Editar perfil')}>Editar perfil</button>
            ) : (
              <button onClick={() => alert('Entre na sua conta')}>Entre na sua conta</button>
            )}
          </div>
        )}
      </header>
      

      {/* Navigation */}
      <nav className="navigation">
        <button onClick={() => alert('Favoritos')}>FAVORITOS</button>
        <button ref={recipeButtonRef} onClick={handleRecipeClick}>RECEITAS</button>
        <button onClick={() => alert('Criar Receita')}>CRIAR RECEITA</button>
      </nav>

      {/* Recipe Cards */}
      <div className="recipes">
        <RecipeCard name="Pizza Portuguesa" imageUrl="https://i.pinimg.com/736x/1d/28/c5/1d28c51cfab73dfcd0e3fad6824f4e86.jpg" />
        <RecipeCard name="Peixe Grelhado" imageUrl="https://i.pinimg.com/736x/7f/51/7a/7f517ac0d1b5d1a4f243291a2ca98ca6.jpg" />
        <RecipeCard name="Lasanha" imageUrl="https://i.pinimg.com/736x/00/9a/b9/009ab99f8cb5838605ded510dcd965f6.jpg" />
        <RecipeCard name="Pizza Portuguesa" imageUrl="https://i.pinimg.com/736x/1d/28/c5/1d28c51cfab73dfcd0e3fad6824f4e86.jpg" />
        <RecipeCard name="Peixe Grelhado" imageUrl="https://i.pinimg.com/736x/7f/51/7a/7f517ac0d1b5d1a4f243291a2ca98ca6.jpg" />
        <RecipeCard name="Lasanha" imageUrl="https://i.pinimg.com/736x/00/9a/b9/009ab99f8cb5838605ded510dcd965f6.jpg" />
        <RecipeCard name="Pizza Portuguesa" imageUrl="https://i.pinimg.com/736x/1d/28/c5/1d28c51cfab73dfcd0e3fad6824f4e86.jpg" />
        <RecipeCard name="Peixe Grelhado" imageUrl="https://i.pinimg.com/736x/7f/51/7a/7f517ac0d1b5d1a4f243291a2ca98ca6.jpg" />
        <RecipeCard name="Lasanha" imageUrl="https://i.pinimg.com/736x/00/9a/b9/009ab99f8cb5838605ded510dcd965f6.jpg" />
        <RecipeCard name="Pizza Portuguesa" imageUrl="https://i.pinimg.com/736x/1d/28/c5/1d28c51cfab73dfcd0e3fad6824f4e86.jpg" />
        <RecipeCard name="Peixe Grelhado" imageUrl="https://i.pinimg.com/736x/7f/51/7a/7f517ac0d1b5d1a4f243291a2ca98ca6.jpg" />
        <RecipeCard name="Lasanha" imageUrl="https://i.pinimg.com/736x/00/9a/b9/009ab99f8cb5838605ded510dcd965f6.jpg" />
        <RecipeCard name="Lasanha" imageUrl="https://i.pinimg.com/736x/00/9a/b9/009ab99f8cb5838605ded510dcd965f6.jpg" /> 
        <RecipeCard name="Lasanha" imageUrl="https://i.pinimg.com/736x/00/9a/b9/009ab99f8cb5838605ded510dcd965f6.jpg" />
        <RecipeCard name="Lasanha" imageUrl="https://i.pinimg.com/736x/00/9a/b9/009ab99f8cb5838605ded510dcd965f6.jpg" />
        
      </div>

      {/* Recipe Modal */}
      {showRecipeModal && (
        <div className="recipe-modal" style={{ top: '90px', left: '50%' }}>
          <ul>
            <li>Doce</li>
            <li>Salgado</li>
            <li>Sem glúten</li>
            <li>Sem lactose</li>
            <li>Sem açúcar</li>
          </ul>
        </div>
      )}
    </div>
  );
}

function RecipeCard({ name, imageUrl }) {
  return (
    <div className="recipe-card">
      {/* Aqui usamos a prop imageUrl */}
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <FaHeart className="favorite-icon" />
    </div>
  );
}

export default Home;