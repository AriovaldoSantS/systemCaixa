// src/components/Menu.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { List, ListItem, ListItemText } from '@mui/material';

const Menu = () => {
  return (
    <List>
      <ListItem button component={NavLink} to="/nova-venda" activeClassName="active-link">
        <ListItemText primary="Nova Venda" />
      </ListItem>
      <ListItem button component={NavLink} to="/cadastro-produto" activeClassName="active-link">
        <ListItemText primary="Cadastro de Produto" />
      </ListItem>
      <ListItem button component={NavLink} to="/relatorio-dia" activeClassName="active-link">
        <ListItemText primary="Relatório do Dia" />
      </ListItem>
      <ListItem button component={NavLink} to="/relatorio-mes" activeClassName="active-link">
        <ListItemText primary="Relatório do Mês" />
      </ListItem>
      <ListItem button component={NavLink} to="/relatorio-ano" activeClassName="active-link">
        <ListItemText primary="Relatório do Ano" />
      </ListItem>
      <ListItem button component={NavLink} to="/meta" activeClassName="active-link">
        <ListItemText primary="Meta" />
      </ListItem>
      <ListItem button component={NavLink} to="/logout" activeClassName="active-link">
        <ListItemText primary="Sair" />
      </ListItem>
    </List>
  );
};

export default Menu;
