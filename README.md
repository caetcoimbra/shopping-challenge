Diretrizes do desafio
===========================

O objetivo principal desse teste é avaliar a capacidade de escrever código limpo, bem testado e reutilizável.

Tarefa (funcional)
---------------

Para esse desafio, foi consumida a [API REST de produtos](https://mks-frontend-challenge-api.herokuapp.com/api-docs/) da MKS Sistemas para exibir a lista de produtos da loja.

A aplicação contém  apenas uma página/rota e um carrinho.

- <b>Loja</b>: A lista de produtos é buscada de nossa API, exibindo um shimmer/skeleton enquanto estiver em loading.
 
- <b>Carrinho</b>: O carrinho exibe todos os produtos selecionados, juntamente com a opção de aumentar a quantidade de cada produto selecionado ou remover cada um deles do carrinho.

Utilizei Jest e a testing-library para realizar os testes unitários.

Recursos
---------------

UI/UX: [Figma loja](https://www.figma.com/file/Z4z8osDbK1ET7cjNzFRMrK/MKS-Front-end-challenge?node-id=0%3A1) PS: O design system está incluso, incluindo a fonte.

API: [API REST de produtos](https://mks-frontend-challenge-api.herokuapp.com/api-docs/) para exibir a lista de produtos da loja.

Ferramentas utilizadas
---------------

1. TypeScript
2. Next.js
3. Redux toolkit
4. Styled-components
5. Jest
6. Vercel

Deploy
---------------
A aplicação pode ser acessada através deste [link](https://shopping-challenge.vercel.app/). Seu deploy foi realizado utilizando o Vercel.
