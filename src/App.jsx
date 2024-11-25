import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Cadastro from './Pages/Cadastro';
import Login from './Pages/Login';
import Ingredientes from './Pages/Ingredientes';
import EnviarReceita from './Pages/EnviarReceita'; // Componente correto
import Perfil from './Pages/Perfil'; 


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Ingredientes" element={<Ingredientes />} />
        <Route path="/EnviarReceita" element={<EnviarReceita />} />
        <Route path="/Perfil" element={<Perfil />} />
        
      </Routes>
    </Router>
  );
}

export default App;
