// Modelo de um perfume da loja
export interface Produto {
  id: number;
  nome: string;
  tipo: string; // ex: Eau de Parfum
  selo: string; // etiqueta que aparece em cima da foto
  descricaoCurta: string;
  descricao: string;
  notas: string[]; // notas olfativas
  preco: number;
  imagem: string;
}
