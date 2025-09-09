function buscarCEP() {
  const cep = document.getElementById('cep').value.trim();
  const uf = document.getElementById('uf').value.trim();
  const cidade = document.getElementById('cidade').value.trim();
  const logradouro = document.getElementById('logradouro').value.trim();
  const mensagem = document.getElementById('mensagem');
  const resultados = document.getElementById('resultados');

  mensagem.textContent = 'Carregando...';
  resultados.innerHTML = '';

  let url = '';
  if (cep) {
    url = `https://viacep.com.br/ws/${cep}/json/`;
  } else if (uf && cidade && logradouro) {
    url = `https://viacep.com.br/ws/${uf}/${cidade}/${logradouro}/json/`;
  } else {
    mensagem.textContent = 'Informe um CEP ou endereço completo.';
    return;
  }

  fetch(url)
    .then(res => res.json())
    .then(data => {
      mensagem.textContent = '';
      const resultado = Array.isArray(data) ? data : [data];

      if (!resultado || resultado.length === 0 || resultado[0].erro) {
        mensagem.textContent = 'CEP não encontrado.';
        return;
      }

      resultado.forEach(item => {
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
        resultados.appendChild(exibidos);
      });

      if (cep && resultado.length === 1) {
        preencherCampos(resultado[0]);
      }
    })
    .catch(() => {
      mensagem.textContent = 'Erro na requisição.';
    });
}
