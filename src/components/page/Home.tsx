// src/components/page/Home.tsx
import React, { useState } from 'react';
import { Container, Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Grid } from '@mui/material';
import Menu from '../componentes/Menu';

const Home = () => {
  // Exemplo de dados de produtos vendidos (pode ser dinâmico ou vindo de uma fonte de dados)
  const [produtosVendidos] = useState([
    { id: 1, nome: 'Produto A', quantidade: 5, valorUnitario: 10.5 },
    { id: 2, nome: 'Produto B', quantidade: 3, valorUnitario: 7.25 },
    { id: 3, nome: 'Produto C', quantidade: 2, valorUnitario: 15.0 },
  ]);

  // Calcula o valor total do dia baseado nos produtos vendidos
  const calcularValorTotalDia = () => {
    return produtosVendidos.reduce((total, produto) => total + (produto.quantidade * produto.valorUnitario), 0);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Menu />
        </Grid>
        <Grid item xs={9}>
          <Typography variant="h4" sx={{ mb: 4 }}>
            Home - Produtos Vendidos e Valor Total do Dia
          </Typography>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Produtos Vendidos no Dia
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Produto</TableCell>
                  <TableCell align="right">Quantidade</TableCell>
                  <TableCell align="right">Valor Unitário (R$)</TableCell>
                  <TableCell align="right">Valor Total (R$)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {produtosVendidos.map((produto) => (
                  <TableRow key={produto.id}>
                    <TableCell>{produto.nome}</TableCell>
                    <TableCell align="right">{produto.quantidade}</TableCell>
                    <TableCell align="right">{produto.valorUnitario.toFixed(2)}</TableCell>
                    <TableCell align="right">{(produto.quantidade * produto.valorUnitario).toFixed(2)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Typography variant="h6" sx={{ mt: 4 }}>
            Valor Total do Dia: R$ {calcularValorTotalDia().toFixed(2)}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
