// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/page/Login';
import Home from './components/page/Home';
import CadastroProduto from './components/page/CadastroProduto';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Rota para o login */}
        <Route path="/home" element={<Home />} /> {/* Rota para a página inicial */}
        <Route path="/cadastro-produto" element={<CadastroProduto />} /> {/* Rota para cadastro de produto */}
      </Routes>
    </Router>
  );
};

export default App;
