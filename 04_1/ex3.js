let a = 3;
let b = 3;
let c = 4;

if (a > b) {
  if (a > c) {
    console.log (a);
  }

  else if (a < c) {
    console.log (c);
  }

  else {
    console.log ("As variáveis a e c são as maiores e são iguais");
  }

}

else if (a < b) {
  if (b > c) {
    console.log (b);
  }

  else if (b < c) {
    console.log (c);
  }

  else {
    console.log ("As variáveis b e c são as maiores e são iguais");
  }
}

else {
  if (a > c) {
    console.log ("As variáveis a e b são as maiores e são iguais");
  }

  else if (a < c) {
    console.log (c);
  }

  else console.log ("As três variáveis são iguais!");
}
  