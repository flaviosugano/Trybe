/*
- Função 1: Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string.

Exemplo:

  String determinada: "Tryber x aqui!"
  Parâmetro: "Bebeto"
  Retorno: "Tryber Bebeto aqui!"

- Um array com escopo global, que é o escopo do arquivo JS, nesse caso, contendo cinco strings com suas principais skills.


- Função 2: Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string.*/

var skills = ['JavaScript', 'HTML', 'CSS', 'GitHub', 'Pebolim'];

function substitute(str, parameter) {
  const stringToArray = str.split(' ');
  let stringSubstituted = "";

  for (let i = 0; i < stringToArray.length; i += 1) {
    if (stringToArray[i] === 'x') {
      stringToArray[i] = parameter;
    }
    if (i === 0) {
      stringSubstituted += `${stringToArray[i]}`;
    } else {
      stringSubstituted += ` ${stringToArray[i]}`;
    }
  }
  return stringSubstituted;
}

function concatSkills (str, skills) {
  let skillsSorted = skills.sort();
  let text = `${str}
  Minhas habilidades são:`

  for (let i = 0; i < skillsSorted.length; i += 1) {
    text += `
    - ${skillsSorted[i]}`;
  }
  return text;
}

let frase = substitute('Tryber x aqui!', 'Bebeto');

console.log(concatSkills (frase, skills));
