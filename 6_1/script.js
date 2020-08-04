window.onload = function () {
  const statesBR = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
  const stateList = document.getElementById('state');
  

  for (let i = 0; i < statesBR.length; i += 1) {
    let opt = document.createElement('option');
    opt.innerHTML = statesBR[i];

    stateList.appendChild(opt);
  }
}

