import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Cadastro from './Pages/Cadastro';
import Login from './Pages/Login';
import Ingredientes from './Pages/Ingredientes';
import NovaReceita from './Pages/NovaReceita';
import Perfil from './Pages/Perfil'; // Importando o componente Perfil
import Favoritos from './Pages/Favoritos'; // Importando o componente Favoritos corretamente

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Ingredientes" element={<Ingredientes />} />
        <Route path="/NovaReceita" element={<NovaReceita />} />
        <Route path="/Favoritos" element={<Favoritos />} />
        <Route path="/Perfil" element={<Perfil />} />
      </Routes>
    </Router>
  );
}

export default App;
