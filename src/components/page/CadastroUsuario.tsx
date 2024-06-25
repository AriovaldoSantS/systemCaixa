// src/components/page/CadastroUsuario.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, CircularProgress } from '@mui/material';

const CadastroUsuario = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Lista de usuários (em um aplicativo real, isso viria de um backend)
  const [users, setUsers] = useState([
    { username: 'ARI', password: '676600' },
    { username: 'ADRIELE', password: '676600' }
  ]);

  const handleRegister = () => {
    if (password !== confirmPassword) {
      setErrorMessage('As senhas não coincidem.');
      return;
    }

    const upperCaseUsername = username.toUpperCase();

    const userExists = users.some(user => user.username === upperCaseUsername);
    if (userExists) {
      setErrorMessage('Nome de usuário já existe. Por favor, escolha outro nome.');
      return;
    }

    setLoading(true);
    // Simulate an API call
    setTimeout(() => {
      // Adiciona novo usuário à lista
      setUsers([...users, { username: upperCaseUsername, password }]);
      alert('Cadastro realizado com sucesso!');
      navigate('/login');
      setLoading(false);
    }, 1000);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Cadastro de Usuário
      </Typography>
      <TextField
        label="Usuário"
        variant="outlined"
        fullWidth
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        label="Senha"
        type="password"
        variant="outlined"
        fullWidth
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        label="Confirmar Senha"
        type="password"
        variant="outlined"
        fullWidth
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleRegister}
        sx={{ mb: 2 }}
        disabled={loading}
      >
        {loading ? <CircularProgress size={24} /> : 'Cadastrar'}
      </Button>
      {errorMessage && (
        <Typography variant="body2" color="error" sx={{ mt: 2 }}>
          {errorMessage}
        </Typography>
      )}
    </Container>
  );
};

export default CadastroUsuario;
