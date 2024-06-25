// src/components/Menu.tsx
import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <List>
      <ListItem button component={NavLink} to="/nova-venda">
        <ListItemText primary="Nova Venda" />
      </ListItem>
      <ListItem button component={NavLink} to="/cadastro-produto">
        <ListItemText primary="Cadastro de Produto" />
      </ListItem>
    </List>
  );
};

export default Menu;
