const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// ex1. Crie uma função para adicionar o turno da manhã na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
function addTurn(lesson, key, value) {
  lesson[key] = value;
}

// ex2. Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const listObjectKeys = (obj) => {
  for (let i in Object.keys(obj)) {
    console.log(Object.keys(obj)[i]);
  }
}

listObjectKeys(lesson3)

// ex3. Crie uma função para mostrar o tamanho de um objeto.
const objectSize = (obj) => Object.keys(obj).length;

// ex4. Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const listObjectValues = (obj) => {
  for (let i in Object.values(obj)) {
    console.log(Object.values(obj)[i]);
  }
}

// ex5. Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3.
const allLessons = (lesson1, lesson2, lesson3) => Object.assign({}, {lesson1, lesson2, lesson3});

console.log(allLessons(lesson1, lesson2, lesson3));

