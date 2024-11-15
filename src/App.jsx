import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/login'
import Cadastro from './Pages/Cadastro'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        
      </Routes>
    </Router>
  );
}

export default App;