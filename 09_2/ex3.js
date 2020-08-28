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
  console.log(`Deu certo! A soma foi de ${number}`)
  
  const arrEx3 = [2, 3, 5, 10];
  arrEx3.map(element => number/element);

  console.log(arrEx3.map(element => Math.round(number/element)));
})
.catch(number => console.log(`Deu ruim, irmão. A soma deu ${number}`));