let historicoDados = [];

window.addEventListener('load', () => {
  const dadosSalvos = localStorage.getItem('historicoDados');
  if (dadosSalvos) {
    historicoDados = JSON.parse(dadosSalvos);
  }
});

window.addEventListener('load', selecionarEstado);

function mostrarTela(id) {
  document.getElementById('tela1').style.display = 'none';
  document.getElementById('tela2').style.display = 'none';
  document.getElementById(id).style.display = 'block';
}

