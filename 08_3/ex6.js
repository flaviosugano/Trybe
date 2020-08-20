const assert = require('assert');

const alunos = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const notas = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

/* ex6: Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada objeto terá o formato { name: nome do aluno, average: media das notas }. Para isso vamos assumir que a posição 0 de notas refere-se ao aluno na posição 0 de alunos, aqui além de reduce será necessário utilizar também a função map.*/

function studentAverage(arrayStudents, arrayGrades) {
  const sumGrade = ((previousGrade, currentGrade) => previousGrade + currentGrade);
  let average = 0;
  let averageStudentGrades = [];
  
  arrayGrades.forEach(student => {
    average = student.reduce(sumGrade) / student.length;
    averageStudentGrades.push(average);
  });

  const createArray = (studentsList, averageList) => {
    return studentsList.map((student, index) => (
      { name: student, average: averageList[index] }
    ));
  }
  
  return createArray(arrayStudents, averageStudentGrades);

}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepEqual(studentAverage(alunos, notas), expected);