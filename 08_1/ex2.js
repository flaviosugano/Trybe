// ex2: Retorne o nome do livro de menor nome.

const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// escreva aqui o seu código
function smallerName(arr) {
  let nameBook;
  let smaller = arr[0].name.length;

  arr.forEach(element => {
    if (element.name.length < smaller) {
      smaller = element.name.length;
      nameBook = element.name;
    }
  });

  // for (let i = 1; i < arr.length; i += 1) {
  //   if (arr[i].name.length < smaller) {
  //     smaller = arr[i].name.length;
  //     nameBook = arr[i].name;
  //   }
  // }
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}

console.log(smallerName(books));

// assert.equal(smallerName(books), 'Duna');