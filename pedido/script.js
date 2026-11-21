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

const selectProduto = document.getElementById('produto');
const inputQuantidade = document.getElementById('quantidade');
const paragrafoTotal = document.getElementById('total');

// ----------------------------------------------------------------------------
// 2. FUNÇÕES
// ----------------------------------------------------------------------------

function atualizarTotal() {
  const preco = Number(selectProduto.value);
  const quantidade = Number(inputQuantidade.value) || 0;
  const total = preco * quantidade;

  paragrafoTotal.textContent =
    'Total: ' + total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// ----------------------------------------------------------------------------
// 3. EVENTOS
// ----------------------------------------------------------------------------

selectProduto.addEventListener('change', atualizarTotal);
inputQuantidade.addEventListener('input', atualizarTotal);

// ----------------------------------------------------------------------------
// 4. INICIALIZAÇÃO
// ----------------------------------------------------------------------------

atualizarTotal();
