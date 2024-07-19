import { Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react';
import RegistrarVendaModal from '../components/modal/RegistrarVendaModal';
import { Produto } from '../components/types/Produto';
import { Venda } from '../components/types/Venda';
import { getVendas } from '../services/storageService'; // Importar função para obter vendas do serviço de armazenamento

const Home: React.FC = () => {
  const [produtos, setProdutos] = React.useState<Produto[]>([]);
  const [vendas, setVendas] = React.useState<Venda[]>([]);
  const [modalOpen, setModalOpen] = React.useState(false);

  React.useEffect(() => {
    // Carregar produtos e vendas ao montar o componente
    const storedProdutos = JSON.parse(localStorage.getItem('produtos') || '[]');
    setProdutos(storedProdutos);

    const storedVendas = getVendas();
    setVendas(storedVendas);
  }, []);

  const handleRegistrarVenda = (novaVenda: Omit<Venda, 'id'>[]) => {
    // Atualizar vendas no estado e persistir
    const atualizadasVendas = [
      ...vendas,
      ...novaVenda.map(venda => ({
        ...venda,
        id: Math.random().toString(36).substr(2, 9) // Geração de ID aleatório
      }))
    ];
    localStorage.setItem('vendas', JSON.stringify(atualizadasVendas));
    setVendas(atualizadasVendas);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Home
      </Typography>
      
      <Button variant="contained" color="primary" sx={{ mb: 2 }} onClick={() => setModalOpen(true)}>
        Registrar Venda
      </Button>

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
            {produtos.map((produto) => (
              <TableRow key={produto.id}>
                <TableCell>{produto.nome}</TableCell>
                <TableCell align="right">{/* Exibir a quantidade vendida deste produto */}</TableCell>
                <TableCell align="right">{/* Calcular e exibir o total vendido deste produto */}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <RegistrarVendaModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        produtos={produtos}
        onRegistrarVenda={handleRegistrarVenda}
      />
    </Container>
  );
};

export default Home;
