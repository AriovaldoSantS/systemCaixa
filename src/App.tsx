// src/App.tsx
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ThemeProvider from './ThemeProvider';
import Menu from './components/layout/Menu';
import GerenciarProdutos from './page/GerenciarProdutos';
import Home from './page/Home';
import Login from './page/Login';

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
