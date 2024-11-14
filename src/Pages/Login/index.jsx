import React, { useState } from 'react';
import './style.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você implementaria a lógica para enviar os dados para o backend
    console.log('Email:', email);
    console.log('Senha:', password);
  };

  return (
    <>
    <div className='logo'>
        <img id='Logo' src="/src/assets/logo.png" alt="" />
    </div>

    <div className="login-container">
      <h2>Faça seu Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Seu e-mail:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Senha:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <a href="#">Esqueceu sua senha?</a>
        <button type="submit">Entrar</button>
      </form>
    </div>
    </>
  );
}

export default Login;