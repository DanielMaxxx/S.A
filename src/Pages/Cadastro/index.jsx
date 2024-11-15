import React from "react";
import "./Cadastro.css"; // Importando o CSS para a estilização

const Cadastro = () => {
  return (
    <div className="logo">
      <img id="LogoCadastro" src="/src/assets/logo.png" alt="Logo Sabor Saúde" />

      <div className="cadastro-card">
        <h2 id="Cadastro">Cadastro</h2>
        <form className="cadastro-form">
          <div className="input-group">
            <label htmlFor="email">Coloque seu e-mail</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Coloque uma senha</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div>
            <p className="login-text">
              <a href="/login">Já possui uma conta? Faça login aqui</a>
            </p>
          </div>

          <button type="submit" className="cadastro-button">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;
