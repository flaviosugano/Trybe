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


// Objeto do ex5
const allLessons = (lesson1, lesson2, lesson3) => Object.assign({}, {lesson1, lesson2, lesson3});

// ex6. Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
const quantityOfStudent = (obj) => {
  const allLessonsObject = obj;
  let quantity = 0;

  for (i in Object.values(allLessonsObject)) {
    quantity += Object.values(allLessonsObject)[i]['numeroEstudantes']
  }

  return quantity;
};

