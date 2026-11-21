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

const selecionarTodos = document.getElementById('selecionarTodos');
const itens = document.querySelectorAll('.item');

// ----------------------------------------------------------------------------
// 2. FUNÇÕES
// ----------------------------------------------------------------------------

function marcarTodos() {
  itens.forEach(function (item) {
    item.checked = selecionarTodos.checked;
  });
}

// EXTRA: se algum item for desmarcado, o principal também é desmarcado
function atualizarPrincipal() {
  const todosMarcados = Array.from(itens).every(function (item) {
    return item.checked;
  });

  selecionarTodos.checked = todosMarcados;
}

// ----------------------------------------------------------------------------
// 3. EVENTOS
// ----------------------------------------------------------------------------

selecionarTodos.addEventListener('change', marcarTodos);

itens.forEach(function (item) {
  item.addEventListener('change', atualizarPrincipal);
});
