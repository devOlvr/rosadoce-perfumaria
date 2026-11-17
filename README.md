# Rosa Doce · Perfumaria

E-commerce de perfumes feito em Angular.

## Como rodar

```bash
npm install
npm start
```

Depois é só abrir http://localhost:4200

## Telas

- `/` – Página inicial (banner, coleção de perfumes, sobre nós)
- `/carrinho` – Carrinho de compras
- `/login` – Login
- `/cadastro` – Cadastro de usuário

## Organização das pastas

```
src/app
├── models/     interfaces (Produto, ItemCarrinho, Usuario)
├── services/   regras do sistema (produtos, carrinho e login)
├── layout/     cabeçalho e rodapé
├── pages/      uma pasta para cada tela
├── sections/   partes da página inicial
└── shared/     componentes reutilizados (ícone, logo)
```

Cada componente tem três arquivos: `.ts`, `.html` e `.scss`.

## Observações

- O carrinho e os usuários ficam salvos no `localStorage` do navegador, porque o projeto ainda
  não tem back-end.
- O login é apenas para fins acadêmicos: num sistema real, a autenticação seria feita por uma
  API e a senha não ficaria guardada no navegador.
- A finalização da compra é simulada (não há pagamento).
