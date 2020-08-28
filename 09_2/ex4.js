const createArray = new Promise((onSuccess, onFail) => {
  const arrNumbers = [];
  for (let i = 0; i < 10; i += 1) {
    arrNumbers.push(Math.floor(Math.random() * 50) + 1);
  }

  const sumArrNumbers = arrNumbers
    .map(number => Math.pow(number, 2))
    .reduce((acc, cur) => acc + cur);

  if (sumArrNumbers < 8000) {
    return onSuccess(sumArrNumbers)
  }
  onFail(sumArrNumbers);
})
.then(number => {
  console.log(`Deu certo! A soma foi dos números ao quadrado é de ${number}`)
  
  const arrEx3 = [2, 3, 5, 10];
  const newArrNumbers = arrEx3.map(element => Math.round((number/element)*10)/10);

  console.log(`Dividindo o número anterior por 2, 3, 5, 10 e retornando num array: ${newArrNumbers}`);

  return Math.round(newArrNumbers.reduce((acc, cur) => acc + cur));
})
.then(arrNumber => console.log(`Soma do array: ${arrNumber}`))
.catch((num) => console.log(`${num} É mais de oito mil! Essa promise deve estar quebrada!`));