let nota = 50;
let conceito = null;

if (nota > 100 || nota < 0) 
  console.log ("Erro, valor de nota inválido!");

else {
  if (nota < 50) 
    conceito = "F";

  if (nota >= 50)
    conceito = "E";

  if (nota >= 60)
    conceito = "D";

  if (nota >= 70)
    conceito = "C";

  if (nota >= 80)
    conceito = "B";
  
  if (nota >= 90)
    conceito = "A";

  console.log(conceito);  
}

