// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/page/Home';
import GerenciarProdutos from './components/page/GerenciarProdutos';
import Menu from './components/layout/Menu';
import Login from './components/page/Login';
import ThemeProvider from './ThemeProvider';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gerenciar-produtos" element={<GerenciarProdutos />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
