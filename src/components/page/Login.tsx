// src/components/page/Login.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, CircularProgress, Link } from '@mui/material';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Lista de usuários (em um aplicativo real, isso viria de um backend)
  const [users, setUsers] = useState([
    { username: 'ARI', password: '676600' },
    { username: 'ADRIELE', password: '676600' }
  ]);

  const handleLogin = () => {
    setLoading(true);
    // Simulate an API call
    setTimeout(() => {
      const upperCaseUsername = username.toUpperCase();
      const userExists = users.some(user => user.username === upperCaseUsername && user.password === password);

      if (userExists) {
        navigate('/home'); // Redireciona para a página Home
      } else {
        setErrorMessage('Credenciais inválidas. Por favor, tente novamente.');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Faça login para continuar
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
      <Button
        variant="contained"
        color="primary"
        onClick={handleLogin}
        sx={{ mb: 2 }}
        disabled={loading}
      >
        {loading ? <CircularProgress size={24} /> : 'Login'}
      </Button>
      {errorMessage && (
        <Typography variant="body2" color="error" sx={{ mt: 2 }}>
          {errorMessage}
        </Typography>
      )}
      <Typography variant="body2" sx={{ mt: 2 }}>
        Não tem uma conta?{' '}
        <Link component="button" variant="body2" onClick={() => navigate('/cadastro')}>
          Cadastre-se
        </Link>
      </Typography>
    </Container>
  );
};

export default Login;
