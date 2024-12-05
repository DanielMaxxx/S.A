import React from "react";
import "./perfil.css";
import { useNavigate } from "react-router-dom";


const Perfil = () => {
    const navigate = useNavigate()
  return (
    <div className="perfil-container">
      <header className="perfil-header">
        
        <button onClick={() => navigate('/home')}   className="voltar-button">
          <span className="seta-voltar">←</span>
        </button>
        <div className="logo">
          
        
        <img className="logoo" src="src/assets/logo.png" alt="Logo Sabor Saudável" />
      
        </div>
      </header>
     
      <main className="perfil-main">
        <h2 className="perfilnome">PERFIL</h2>
        <div className="perfil-card">
          <div className="perfil-image">
            <div className="image-placeholder"></div>
            <button className="upload-button">Upload de imagem</button>
          </div>
          <div className="perfil-info">
            <div className="perfil-field">
              <label htmlFor="nome">Nome</label>
              <input id="nome" type="text"  />
            </div>
            <div className="perfil-field">
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                type="email"
                
                
              />
            </div>
            <div className="perfil-field">
              <label htmlFor="descricao">Descrição</label>
              <textarea
                id="descricao"
                placeholder="Adicione uma biografia..."
              ></textarea>
            </div>
          </div>
        </div>
        <button className="salvar-button">SALVAR</button>
      </main>
    </div>
  );
};

export default Perfil;