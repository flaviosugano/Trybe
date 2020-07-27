let custoProdutoUn = 1;
let valorVendaUn = 3;
let unidadesVendidas = 1000;



if (custoProdutoUn <= 0 || valorVendaUn <= 0) {
  console.log("Um ou mais valores está incorreto!");
} else {
  let lucroTotal = ((valorVendaUn - 1.2*custoProdutoUn)*unidadesVendidas)
  console.log(lucroTotal);
}
