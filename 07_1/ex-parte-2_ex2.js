// Crie uma função que receba uma frase e retorne qual a maior palavra.

// longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'

function longestWord(string) {
  const stringToArray = string.split(' ');
  let longest;
  let longestLength = stringToArray[0].length;
  
  for (let i = 1; i < stringToArray.length; i += 1) {
    if (longestLength < stringToArray[i].length) {
      longestLength = stringToArray[i].length;
      longest = stringToArray[i];
    }
  }
  return `A palavra mais longa da frase é "${longest}"`;
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));