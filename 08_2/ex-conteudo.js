// const products = ['Arroz', 'Feijao', 'Alface', 'Tomate'];

// const prices = [2.99, 3.99, 1.5, 2];

// const updateProducts = (listProducts, listPrices) => {
//   return listProducts.map((product, index) => (
//     { [product]: listPrices[index] }
//   ));
// };

// const listProducts = updateProducts(products, prices);
// console.table(listProducts);
// // => [
// //   { Arroz: 2.99 },
// //   { Feijao: 3.99 },
// //   { Alface: 1.5 },
// //   { Tomate: 2 },
// // ]

/*********************/

const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 }
    ]
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: '59' },
      { name: 'Português', nota: '80' },
      { name: 'Química', nota: '78' },
      { name: 'Biologia', nota: '92' }
    ]
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '76' },
      { name: 'Português', nota: '90' },
      { name: 'Química', nota: '70' },
      { name: 'Biologia', nota: '80' }
    ]
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '91' },
      { name: 'Português', nota: '85' },
      { name: 'Química', nota: '92' },
      { name: 'Biologia', nota: '90' }
    ]
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '70' },
      { name: 'Português', nota: '70' },
      { name: 'Química', nota: '60' },
      { name: 'Biologia', nota: '50' }
    ]
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '80' },
      { name: 'Português', nota: '82' },
      { name: 'Química', nota: '79' },
      { name: 'Biologia', nota: '75' }
    ]
  },
]

// returna o nome e sobrenome dos estudantes do turno da 'Manhã'
// const studentsMorning = (array) => {
//   const listStudentsMorning = array.filter((student) => student.turno === 'Manhã');
//   return listStudentsMorning.map((student) => `${student.nome} ${student.sobrenome}`)
// }

// Solução do conteúdo:
// const allNameStudents = estudantes.filter((estudante) => (estudante.turno === 'Manhã')).map((estudante)=>`${estudante.nome} ${estudante.sobrenome}`);

// Buscar um estudante pelo nome e retornar a situação dele em cada matéria
const findStudent = (firstName, array) => array
  .find((student) => student.nome === firstName)
  .materias.map((materia) => `${materia.name}: ${(materia.nota >= 60) ? 'Aprovado' : 'Reprovado' }`);

console.log(findStudent('Natalia', estudantes));