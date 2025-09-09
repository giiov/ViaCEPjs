function limparCampos() {
  document.getElementById('cep').value = '';
  document.getElementById('uf').value = '';
  document.getElementById('cidade').value = '';
  document.getElementById('logradouro').value = '';
  document.getElementById('resultados').innerHTML = '';
  document.getElementById('mensagem').textContent = '';
}

function limparHistorico() {
  historicoDados = [];
  localStorage.removeItem('historicoDados');
  document.getElementById('historico').innerHTML = '';
  document.getElementById('limparHistoricoBtn').style.display = 'none';
}
