import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import './Navbar.css';


export default function Navbar() {
  const [showRecipeModal, setShowRecipeModal] = useState(false);
  const recipeButtonRef = useRef(null);

  const handleRecipeClick = () => {
    setShowRecipeModal(!showRecipeModal);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        recipeButtonRef.current &&
        !recipeButtonRef.current.contains(event.target)
      ) {
        setShowRecipeModal(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="navigation">
        <Link to="/favoritos" className="nav-button">
          FAVORITOS
        </Link>
        
        <button
          ref={recipeButtonRef}
          onClick={handleRecipeClick}
          className="nav-button"
        >
          RECEITAS
        </button>

        <Link to="/NovaReceita" className="nav-button">
          CRIAR RECEITA
        </Link>
      </nav>

      {showRecipeModal && (
        <div className="recipe-modal" style={{ top: "17%", left: "49%" }}>
          <ul>
            <li>Doce</li>
            <li>Salgado</li>
            <li>Sem glúten</li>
            <li>Sem lactose</li>
            <li>Sem açúcar</li>
          </ul>
        </div>
      )}
    </>
  );
}
