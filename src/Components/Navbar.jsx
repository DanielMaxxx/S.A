import {useState, useEffect, useRef} from 'react'


export default function Navbar (){

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
        <>
        {/* Navigation */}
      <nav className="navigation">
      <button onClick={() => alert('Favoritos')}>FAVORITOS</button>
      <button ref={recipeButtonRef} onClick={handleRecipeClick}>RECEITAS</button>
      <button onClick={() => alert('Criar Receita')}>CRIAR RECEITA</button>
    </nav>

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
        </>
    )
}