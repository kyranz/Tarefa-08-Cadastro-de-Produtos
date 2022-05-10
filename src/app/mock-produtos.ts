import { Produto } from "./produto";

let $i = 0;

export const PRODUTOS: Produto[] = [
  { id: ++$i, name: 'carne', preco: 39.99, qtdEstoque: 105, categoria: 'Friboi'},
  { id: ++$i, name: 'arroz', preco: 19.99, qtdEstoque: 213, categoria: 'Camil'},
  { id: ++$i, name: 'banana', preco: 2.99, qtdEstoque: 452, categoria: 'Nanica' },
  { id: ++$i, name: 'maçã', preco: 5.99, qtdEstoque: 489, categoria: 'Verde' },
  { id: ++$i, name: 'pera', preco: 8.99, qtdEstoque: 389, categoria: 'Williams' },
  { id: ++$i, name: 'pão', preco: 14.99, qtdEstoque: 62, categoria: 'Francês' },
  { id: ++$i, name: 'feijão', preco: 4.99, qtdEstoque: 245, categoria: 'Camil' },
  { id: ++$i, name: 'presunto', preco: 42.99, qtdEstoque: 135, categoria: 'Sadia' },
  { id: ++$i, name: 'queijo', preco: 12.50, qtdEstoque: 265, categoria: 'Tirolez' },
  { id: ++$i, name: 'maionese', preco: 8.25, qtdEstoque: 212, categoria: 'Hellman\'s' }
];