import React, { ReactNode } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import theme from './theme';

interface Props {
  children: ReactNode;
}

const ThemeProvider: React.FC<Props> = ({ children }) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

export default ThemeProvider;
