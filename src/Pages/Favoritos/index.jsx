// ./Pages/Favoritos.jsx
import React from "react";
import "./Favoritos.css"; // Estilização separada para Favoritos
import Header from "../../Components/Header";
import Navbar from "../../Components/Navbar";

function Favoritos() {
 return (
    
    <div className="app">
        <div>
    <Header/>
    <Navbar/>
    </div>
      <h1 className="title">Suas receitas favoritas</h1>
      <div className="recipes">
        <RecipeCard
          name="Pizza Portuguesa"
          imageUrl="https://i.pinimg.com/736x/1d/28/c5/1d28c51cfab73dfcd0e3fad6824f4e86.jpg"
        />
        <RecipeCard
          name="Peixe Grelhado"
          imageUrl="https://i.pinimg.com/736x/7f/51/7a/7f517ac0d1b5d1a4f243291a2ca98ca6.jpg"
        />
        <RecipeCard
          name="Lasanha"
          imageUrl="https://i.pinimg.com/736x/00/9a/b9/009ab99f8cb5838605ded510dcd965f6.jpg"
        />
      </div>
    </div>
  );
}

function RecipeCard({ name, imageUrl }) {
  return (
    <div className="recipe-card">
      <img src={imageUrl} alt={name} className="recipe-image" />
      <h3 className="recipe-name">{name}</h3>
      <div className="heart">❤️</div>
    </div>
  );
}

export default Favoritos;
