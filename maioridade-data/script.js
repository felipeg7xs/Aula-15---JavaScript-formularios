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

const formCadastro = document.getElementById('formCadastro');
const inputNascimento = document.getElementById('nascimento');
const aviso = document.getElementById('aviso');
const btnFinalizar = document.getElementById('btnFinalizar');

// ----------------------------------------------------------------------------
// 2. FUNÇÕES
// ----------------------------------------------------------------------------

function calcularIdade(dataNascimento) {
  const hoje = new Date();
  let idade = hoje.getFullYear() - dataNascimento.getFullYear();
  const diferencaMes = hoje.getMonth() - dataNascimento.getMonth();

  // Ainda não fez aniversário este ano
  if (diferencaMes < 0 || (diferencaMes === 0 && hoje.getDate() < dataNascimento.getDate())) {
    idade--;
  }

  return idade;
}

function verificarIdade() {
  if (!inputNascimento.value) {
    aviso.textContent = '';
    btnFinalizar.disabled = false;
    return;
  }

  // Cria a data no horário local (evita erro de fuso horário)
  const [ano, mes, dia] = inputNascimento.value.split('-').map(Number);
  const idade = calcularIdade(new Date(ano, mes - 1, dia));

  if (idade < 18) {
    aviso.textContent = 'Apenas para maiores de idade';
    btnFinalizar.disabled = true;
  } else {
    aviso.textContent = '';
    btnFinalizar.disabled = false;
  }
}

function finalizarCadastro(event) {
  event.preventDefault();
  alert('Cadastro finalizado com sucesso!');
}

// ----------------------------------------------------------------------------
// 3. EVENTOS
// ----------------------------------------------------------------------------

inputNascimento.addEventListener('change', verificarIdade);
formCadastro.addEventListener('submit', finalizarCadastro);
