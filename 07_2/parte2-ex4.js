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

// ex4. Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const listObjectValues = (obj) => {
  for (let i in Object.values(obj)) {
    console.log(Object.values(obj)[i]);
  }
}
