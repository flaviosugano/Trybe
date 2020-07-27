let peca = "cavalo";

switch (peca) {
  case 'peao':
    console.log("Peão se movimenta para a casa desocupada imediatamente a sua frente na mesma coluna ou no primeiro movimento opcionalmente por duas casas na mesma coluna desde que ambas as casas estejam desocupadas. Captura ao tomar o lugar ocupada pela peça oponente que está na direção diagonal na fileira imediatamente à sua frente, tomando o lugar da peça. Ele tem um movimento especial chamado En passant.")
    break;
  
  case 'cavalo':
    console.log("O Cavalo pode mover para a casa mais próxima de onde está desde que não seja na mesma coluna, diagonal ou fileiras do Tabuleiro, com o formato característico da letra L, podendo pular peças intervenientes.");
    break;

  case 'bispo':
    console.log("O Bispo movimenta-se em linhas retas nas diagonais do tabuleiro. Devido ele andar somente nas diagonais seu movimento é restrito pela cor das casas, ou seja, alcança somente 32 casas no tabuleiro (claras ou escuras).");
    break;
  
  case 'torre':
    console.log("A Torre move-se em linha reta nas colunas e fileiras do Tabuleiro.");
    break;

  case 'dama':
    console.log("A Dama também chamada de Rainha possui o movimento combinado da Torre e do Bispo, movendo-se em linha reta nas fileiras, colunas e diagonais.");
    break;

  case 'rei':
    console.log("Rei se movimenta, se deslocando uma casa na direção horizontal, vertical ou diagonal. Ele tem um movimento especial chamado roque.");
    break;
}


