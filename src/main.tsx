// src/main.tsx
import { ThemeProvider } from '@mui/material/styles';
import ReactDOM from 'react-dom';
import App from './App';
import theme from './theme';


ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
