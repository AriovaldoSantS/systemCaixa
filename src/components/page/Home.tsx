// src/components/page/Home.tsx
import React, { useState } from 'react';
import { Container, Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Button, Grid } from '@mui/material';
import RegistrarVendaModal from '../modal/RegistrarVendaModal';
import CadastroProdutoModal from '../modal/CadastroProdutoModal';

interface Produto {
  nome: string;
  valorUnitario: number;
}

interface Venda {
  nomeProduto: string;
  quantidade: number;
  desconto: number;
}

const Home = () => {
  const [produtos, setProdutos] = useState<Produto[]>(() => {
    return JSON.parse(localStorage.getItem('produtos') || '[]');
  });

  const [vendas, setVendas] = useState<Venda[]>(() => {
    return JSON.parse(localStorage.getItem('vendas') || '[]');
  });

  const [openRegistrarVenda, setOpenRegistrarVenda] = useState(false);
  const [openCadastroProduto, setOpenCadastroProduto] = useState(false);

  const handleRegistrarVenda = (novaVenda: Venda[]) => {
    const novasVendas = [...vendas, ...novaVenda];
    localStorage.setItem('vendas', JSON.stringify(novasVendas));
    setVendas(novasVendas);
  };

  const handleCadastrarProduto = (novoProduto: Produto) => {
    const produtosAtualizados = [...produtos, novoProduto];
    localStorage.setItem('produtos', JSON.stringify(produtosAtualizados));
    setProdutos(produtosAtualizados);
  };

  const vendasAgrupadas = vendas.reduce<{ [key: string]: { quantidade: number; total: number } }>((acc, venda) => {
    if (!acc[venda.nomeProduto]) {
      acc[venda.nomeProduto] = { quantidade: 0, total: 0 };
    }
    const produto = produtos.find(produto => produto.nome === venda.nomeProduto);
    if (produto) {
      acc[venda.nomeProduto].quantidade += venda.quantidade;
      acc[venda.nomeProduto].total += (venda.quantidade * produto.valorUnitario - venda.desconto);
    }
    return acc;
  }, {});

  const totalVendas = Object.values(vendasAgrupadas).reduce((acc, venda) => acc + venda.total, 0);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Home
      </Typography>
      <Grid container spacing={2} sx={{ marginBottom: 2 }}>
        <Grid item>
          <Button variant="contained" color="primary" onClick={() => setOpenCadastroProduto(true)}>
            Cadastrar Produto
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" onClick={() => setOpenRegistrarVenda(true)}>
            Registrar Venda
          </Button>
        </Grid>
      </Grid>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Produto</TableCell>
              <TableCell align="right">Quantidade</TableCell>
              <TableCell align="right">Total Vendido (R$)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.entries(vendasAgrupadas).map(([nomeProduto, { quantidade, total }]) => (
              <TableRow key={nomeProduto}>
                <TableCell>{nomeProduto}</TableCell>
                <TableCell align="right">{quantidade}</TableCell>
                <TableCell align="right">{total.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography variant="h6" sx={{ marginTop: 2 }}>
        Total do Dia: R$ {totalVendas.toFixed(2)}
      </Typography>
      <RegistrarVendaModal
        open={openRegistrarVenda}
        onClose={() => setOpenRegistrarVenda(false)}
        produtos={produtos}
        onRegistrarVenda={handleRegistrarVenda}
      />
      <CadastroProdutoModal
        open={openCadastroProduto}
        onClose={() => setOpenCadastroProduto(false)}
        onCadastrarProduto={handleCadastrarProduto}
      />
    </Container>
  );
};

export default Home;
