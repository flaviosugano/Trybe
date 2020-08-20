    
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];

function containsA() {
  return names.reduce((acc, currentValue) => acc + currentValue.split(''), '').match(/a/gi).length;
}

console.log(containsA(names));
// assert.deepEqual(containsA(names), 20);