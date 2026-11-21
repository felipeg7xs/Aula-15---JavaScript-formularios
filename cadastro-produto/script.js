/*
  Descrição: JavaScript aplicado a Formulários.
  Nome do arquivo: script.js
  Nome do exercício: Aula 15 - JavaScript aplicado a Formulários
  Nome do aluno: Felipe Gabriel de Oliveira
  E-mail do aluno: felipe.oliveira139@aluno.cps.sp.gov.br
  Turma: Código da Turma: WEBI-ISWO28-A
*/

// ----------------------------------------------------------------------------
// 1. ELEMENTOS DO DOM
// ----------------------------------------------------------------------------

const form = document.getElementById('formProduto');
const resultado = document.getElementById('resultado');

// ----------------------------------------------------------------------------
// 2. FUNÇÕES
// ----------------------------------------------------------------------------

function montarProduto() {
  return {
    nome: document.getElementById('nome').value,
    categoria: document.getElementById('categoria').value,
    preco: parseFloat(document.getElementById('preco').value)
  };
}

function gerarJSON(event) {
  event.preventDefault(); // não recarrega a página

  const json = JSON.stringify(montarProduto(), null, 2);

  console.log(json);
  resultado.textContent = json;
}

// ----------------------------------------------------------------------------
// 3. EVENTOS
// ----------------------------------------------------------------------------

form.addEventListener('submit', gerarJSON);
