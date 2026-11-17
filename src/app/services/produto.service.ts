import { Injectable } from '@angular/core';
import { Produto } from '../models/produto';

@Injectable({ providedIn: 'root' })
export class ProdutoService {
  // Como ainda não temos back-end, os produtos ficam fixos aqui
  private produtos: Produto[] = [
    {
      id: 1,
      nome: 'Rosa Imperial',
      tipo: 'Eau de Parfum',
      selo: 'Mais amado',
      descricaoCurta: 'A elegância das rosas em uma essência inesquecível.',
      descricao:
        'A elegância das rosas em uma essência inesquecível. Uma fragrância marcante para quem gosta de florais clássicos.',
      notas: ['Rosas', 'Peônia', 'Musk'],
      preco: 189.9,
      imagem: 'images/rosa-imperial.jpg',
    },
    {
      id: 2,
      nome: 'Doce Encanto',
      tipo: 'Eau de Parfum',
      selo: 'Floral doce',
      descricaoCurta: 'Delicadeza e doçura que envolvem os sentidos.',
      descricao:
        'Delicadeza e doçura que envolvem os sentidos. Perfeito para o dia a dia, leve e agradável.',
      notas: ['Baunilha', 'Jasmim', 'Pêra'],
      preco: 159.9,
      imagem: 'images/doce-encanto.jpg',
    },
    {
      id: 3,
      nome: 'Flor de Amour',
      tipo: 'Eau de Parfum',
      selo: 'Sofisticado',
      descricaoCurta: 'Um bouquet sofisticado para momentos especiais.',
      descricao:
        'Um bouquet sofisticado para momentos especiais. Combina com eventos e ocasiões à noite.',
      notas: ['Flor de laranjeira', 'Rosa', 'Âmbar'],
      preco: 219.9,
      imagem: 'images/flor-de-amour.jpg',
    },
    {
      id: 4,
      nome: 'Essência Rosé',
      tipo: 'Eau de Parfum',
      selo: 'Delicado',
      descricaoCurta: 'Leveza floral com um toque de personalidade.',
      descricao:
        'Leveza floral com um toque de personalidade. Uma opção suave para quem não gosta de perfumes fortes.',
      notas: ['Lichia', 'Rosa', 'Sândalo'],
      preco: 179.9,
      imagem: 'images/essencia-rose.jpg',
    },
    {
      id: 5,
      nome: 'Jardim Secreto',
      tipo: 'Eau de Parfum',
      selo: 'Floral fresco',
      descricaoCurta: 'O frescor de um jardim, o mistério de uma essência.',
      descricao: 'O frescor de um jardim, o mistério de uma essência. Ótimo para dias quentes.',
      notas: ['Bergamota', 'Folhas verdes', 'Musk'],
      preco: 199.9,
      imagem: 'images/jardim-secreto.jpg',
    },
    {
      id: 6,
      nome: 'Lumière Gold',
      tipo: 'Eau de Parfum',
      selo: 'Exclusivo',
      descricaoCurta: 'Uma fragrância luminosa, intensa e envolvente.',
      descricao:
        'Uma fragrância luminosa, intensa e envolvente. O perfume mais marcante da coleção.',
      notas: ['Âmbar', 'Baunilha', 'Sândalo'],
      preco: 249.9,
      imagem: 'images/lumiere-gold.jpg',
    },
  ];

  listarTodos(): Produto[] {
    return this.produtos;
  }
}
