import { Produto } from '../components/types/Produto';
import { Venda } from '../components/types/Venda';

const STORAGE_KEYS = {
  produtos: 'produtos',
  vendas: 'vendas'
};

export const getProdutos = (): Produto[] => {
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.produtos) || '[]');
};

export const saveProdutos = (produtos: Produto[]) => {
  localStorage.setItem(STORAGE_KEYS.produtos, JSON.stringify(produtos));
};

export const getVendas = (): Venda[] => {
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.vendas) || '[]');
};

export const saveVendas = (vendas: Venda[]) => {
  localStorage.setItem(STORAGE_KEYS.vendas, JSON.stringify(vendas));
};
