// Crie uma função que receba um número e retorne seu fatorial

let fat = (num, fat = 1) => {
for (let i = 1; i <= num; i += 1)
  fat = fat * i;
  return fat;
}

console.log(fat(3));
