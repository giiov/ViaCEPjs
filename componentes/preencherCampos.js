function preencherCampos(item) {
  document.getElementById('cep').value = item.cep || '';
  document.getElementById('uf').value = item.uf || '';
  document.getElementById('cidade').value = item.localidade || '';
  document.getElementById('logradouro').value = item.logradouro || '';

  adicionarAoHistorico(item); 
}
