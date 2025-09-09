async function selecionarEstado() {
  try {
    const resposta = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
    const estados = await resposta.json();

    estados.sort((a, b) => a.nome.localeCompare(b.nome));

    const uf = document.getElementById('uf');
    uf.innerHTML = '<option value="">Selecione o estado</option>';

    estados.forEach(estado => {
      const opcao = document.createElement('option');
      opcao.value = estado.sigla;
      opcao.textContent = estado.nome;
      uf.appendChild(opcao);
    });
  } catch (erro) {
    console.error('Erro ao carregar estados:', erro);
    document.getElementById('uf').innerHTML = '<option value="">Erro ao carregar estados</option>';
  }
}
