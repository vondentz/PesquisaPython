// Selecionando os elementos do DOM
const form = document.getElementById("form-pesquisa");
const tabelaResultados = document
  .getElementById("tabela-resultados")
  .getElementsByTagName("tbody")[0];

// Função para adicionar os dados à tabela
function adicionarResultado(nome, idade, cidade, nota) {
  const novaLinha = tabelaResultados.insertRow();

  const celulaNome = novaLinha.insertCell(0);
  const celulaIdade = novaLinha.insertCell(1);
  const celulaCidade = novaLinha.insertCell(2);
  const celulaNota = novaLinha.insertCell(3);

  celulaNome.textContent = nome;
  celulaIdade.textContent = idade;
  celulaCidade.textContent = cidade;
  celulaNota.textContent = nota;
}

// Evento de envio do formulário
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Previne o envio padrão do formulário

  // Pegando os valores do formulário
  const nome = document.getElementById("nome").value;
  const idade = document.getElementById("idade").value;
  const cidade = document.getElementById("cidade").value;
  const nota = document.getElementById("nota").value;

  // Adicionando os dados na tabela
  adicionarResultado(nome, idade, cidade, nota);

  // Limpando o formulário
  form.reset();
});
