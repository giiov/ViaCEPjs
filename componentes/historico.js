function adicionarAoHistorico(item) {
  const seExiste = historicoDados.some(h => h.cep === item.cep);
  if (!seExiste) {
    historicoDados.push(item);
    localStorage.setItem('historicoDados', JSON.stringify(historicoDados));
  }
}

function mostrarHistorico() {
  const historico = document.getElementById('historico');
  historico.innerHTML = '<h3>Histórico de Pesquisas:</h3>';

  if (historicoDados.length === 0) {
    historico.innerHTML += '<p>Nenhuma pesquisa registrada ainda.</p>';
    document.getElementById('limparHistoricoBtn').style.display = 'none';
    return;
  }

  historicoDados.forEach(item => {
    const exibidos = document.createElement('div');
    exibidos.className = 'result-box';
    exibidos.innerHTML = `
      <strong>CEP:</strong> ${item.cep}<br>
      <strong>Logradouro:</strong> ${item.logradouro}<br>
      <strong>Bairro:</strong> ${item.bairro}<br>
      <strong>Cidade:</strong> ${item.localidade}<br>
      <strong>UF:</strong> ${item.uf}<br>
      <strong>DDD:</strong> ${item.ddd}
    `;
    exibidos.onclick = () => preencherCampos(item);
    historico.appendChild(exibidos);
  });

  document.getElementById('limparHistoricoBtn').style.display = 'inline-block';
}
