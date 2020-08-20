    
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];


// ex5: Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
function containsA(arrayNames) {
  const countA = name => name.match(/a/gi).length
  const sumA = (acumulator, current) => acumulator + current;
  
  return arrayNames
    .map(countA)
    .reduce(sumA);
  // 
}

assert.deepEqual(containsA(names), 20);