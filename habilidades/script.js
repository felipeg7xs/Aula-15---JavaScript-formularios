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

const inputHabilidade = document.getElementById('habilidade');
const btnAdd = document.getElementById('btnAdd');
const listaTags = document.getElementById('listaTags');

// ----------------------------------------------------------------------------
// 2. FUNÇÕES
// ----------------------------------------------------------------------------

function criarTag(texto) {
  const badge = document.createElement('span');
  badge.className = 'badge';

  const label = document.createElement('span');
  label.textContent = texto;

  const btnRemover = document.createElement('button');
  btnRemover.type = 'button';
  btnRemover.textContent = 'X';
  btnRemover.addEventListener('click', function () {
    badge.remove(); // remove apenas esta tag
  });

  badge.appendChild(label);
  badge.appendChild(btnRemover);

  return badge;
}

function adicionarTag() {
  const texto = inputHabilidade.value.trim();

  if (texto === '') return;

  listaTags.appendChild(criarTag(texto));

  inputHabilidade.value = '';
  inputHabilidade.focus();
}

// ----------------------------------------------------------------------------
// 3. EVENTOS
// ----------------------------------------------------------------------------

btnAdd.addEventListener('click', adicionarTag);

inputHabilidade.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault(); // evita enviar o formulário
    adicionarTag();
  }
});
