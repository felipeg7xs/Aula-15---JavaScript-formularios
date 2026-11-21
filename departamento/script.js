/*
  Descrição: JavaScript aplicado a Formulários.
  Nome do arquivo: script.js
  Nome do exercício: Aula 15 - JavaScript aplicado a Formulários
  Nome do aluno: Felipe Gabriel de Oliveira
  E-mail do aluno: felipe.oliveira139@aluno.cps.sp.gov.br
  Turma: Código da Turma: WEBI-ISWO28-A
*/

// ----------------------------------------------------------------------------
// 1. DADOS
// ----------------------------------------------------------------------------

const funcionariosPorDepartamento = {
  TI: ['Allan', 'Beatriz', 'Carlos'],
  RH: ['Daniela', 'Eduardo']
};

// ----------------------------------------------------------------------------
// 2. ELEMENTOS DO DOM
// ----------------------------------------------------------------------------

const selectDepartamento = document.getElementById('departamento');
const selectFuncionario = document.getElementById('funcionario');

// ----------------------------------------------------------------------------
// 3. FUNÇÕES
// ----------------------------------------------------------------------------

function atualizarFuncionarios() {
  const lista = funcionariosPorDepartamento[selectDepartamento.value];

  selectFuncionario.innerHTML = ''; // limpa as opções antigas

  if (!lista) {
    selectFuncionario.innerHTML = '<option value="">Escolha um departamento</option>';
    selectFuncionario.disabled = true;
    return;
  }

  lista.forEach(function (nome) {
    const option = document.createElement('option');
    option.value = nome;
    option.textContent = nome;
    selectFuncionario.appendChild(option);
  });

  selectFuncionario.disabled = false;
}

// ----------------------------------------------------------------------------
// 4. EVENTOS
// ----------------------------------------------------------------------------

selectDepartamento.addEventListener('change', atualizarFuncionarios);
