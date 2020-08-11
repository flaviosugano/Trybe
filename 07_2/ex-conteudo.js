// let obj = {
//   Name: "Flavio"
// }

// console.log(obj);

// const newKey = 'lastName';

// let lastName = 'Sugano';

// obj[newKey] = lastName;

// console.log(obj);

const pessoaEstudante = {
  HTML: 'Só por Deus',
  JavaIscripto: 'Dá p/ o gasto',
  CSS: 'É de comer?',
  Git: 'Todo dia uma surra diferente',
};

let keys = Object.keys(pessoaEstudante);
let values = Object.values(pessoaEstudante);

for (let i = 0; i < keys.length; i += 1) {
  console.log(`${keys[i]}: ${values[i]}`);
}

const países = {
  França: 'Paris',
  Brasil: 'Brasília',
  Espanha: 'Madrid',
  Portugal: 'Lisboa',
};
const pairKeyValue = Object.entries(países);
console.log(pairKeyValue);

for(i in pairKeyValue) {
  console.log('--------');
  console.log('Pais:', pairKeyValue[i][0]);
  console.log('Capital:', pairKeyValue[i][1]);
};
