const generateRandomArrNumbers = () => {
  const array = [];
  for (let i = 0; i < 10; i += 1) {
    array.push(Math.floor(Math.random() * 50) + 1);
  }
  
  return array;
}

const promessaMilhoVerdeVQV = () => {
  const myPromise = new Promise((resolve, reject) => {
    const arrNumbers = generateRandomArrNumbers();

    const sumArrNumbers = arrNumbers
      .map(number => Math.pow(number, 2))
      .reduce((acc, cur) => acc+cur);

    console.log(`Array gerado:`)
    console.log(arrNumbers)

    if (sumArrNumbers < 8000) {
      resolve(sumArrNumbers)
    }
    reject(sumArrNumbers);
  });

  myPromise
    .then(number => {
      console.log(`Deu certo! A soma dos números ao quadrado é de ${number}`)

      const arrEx3 = [2, 3, 5, 10];
      const newArrNumbers = arrEx3.map(element => Math.round((number / element) * 10) / 10);

      console.log(`Dividindo ${number} por 2, 3, 5, 10 e retornando em um array:`);
      console.log(newArrNumbers)

      return Math.round(newArrNumbers.reduce((acc, cur) => acc + cur));
    })
    .then(sumArrNumber => console.log(`Soma do array: ${sumArrNumber}`))
    .catch((num) => console.log(`A soma dos números ao quadrado deu ${num}. É mais de oito mil! Essa promise deve estar quebrada!`));
};

promessaMilhoVerdeVQV();