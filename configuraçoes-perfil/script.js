/*
  Descrição: JavaScript aplicado a Formulários.
  Nome do arquivo: script.js
  Nome do exercício: Aula 15 - JavaScript aplicado a Formulários
  Nome do aluno: Felipe Gabriel de Oliveira
  E-mail do aluno: felipe.oliveira139@aluno.cps.sp.gov.br
  Turma: Código da Turma: WEBI-ISWO28-A
*/

// ----------------------------------------------------------------------------
// 1. ELEMENTOS DO DOM E CONSTANTES
// ----------------------------------------------------------------------------

const toggleTema = document.getElementById('toggleTema');
const CHAVE_TEMA = 'tema';

// ----------------------------------------------------------------------------
// 2. FUNÇÕES
// ----------------------------------------------------------------------------

function aplicarTema(escuro) {
  document.body.classList.toggle('dark-theme', escuro);
  toggleTema.checked = escuro;
}

function lerTemaSalvo() {
  try {
    return localStorage.getItem(CHAVE_TEMA);
  } catch (erro) {
    return null; // localStorage indisponível
  }
}

function salvarTema(escuro) {
  try {
    localStorage.setItem(CHAVE_TEMA, escuro ? 'dark' : 'light');
  } catch (erro) {
    // ignora
  }
}

// ----------------------------------------------------------------------------
// 3. EVENTOS
// ----------------------------------------------------------------------------

toggleTema.addEventListener('change', function () {
  aplicarTema(toggleTema.checked);
  salvarTema(toggleTema.checked);
});

// ----------------------------------------------------------------------------
// 4. INICIALIZAÇÃO
// ----------------------------------------------------------------------------

aplicarTema(lerTemaSalvo() === 'dark');
