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

const campoTelefone = document.getElementById('telefone');

// ----------------------------------------------------------------------------
// 2. FUNÇÕES
// ----------------------------------------------------------------------------

function formatarTelefone() {
  // Mantém apenas números (letras não são aceitas) e limita a 11 dígitos
  const numeros = campoTelefone.value.replace(/\D/g, '').slice(0, 11);

  let formatado = numeros;

  if (numeros.length > 10) {
    formatado = numeros.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
  } else if (numeros.length > 6) {
    formatado = numeros.replace(/^(\d{2})(\d{4})(\d*)$/, '($1) $2-$3');
  } else if (numeros.length > 2) {
    formatado = numeros.replace(/^(\d{2})(\d*)$/, '($1) $2');
  } else if (numeros.length > 0) {
    formatado = numeros.replace(/^(\d*)$/, '($1');
  }

  campoTelefone.value = formatado;
}

// ----------------------------------------------------------------------------
// 3. EVENTOS
// ----------------------------------------------------------------------------

campoTelefone.addEventListener('keyup', formatarTelefone);
campoTelefone.addEventListener('input', formatarTelefone); // cobre colar texto e teclado de celular
