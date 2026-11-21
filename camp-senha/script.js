/*
  Descrição: JavaScript aplicado a Formulários.
  Nome do arquivo: script.js
  Nome do exercício: Aula 15 - JavaScript aplicado a Formulários
  Nome do aluno: Felipe Gabriel de Oliveira
  E-mail do aluno: felipe.oliveira139@aluno.cps.sp.gov.br
  Turma: Código da Turma: WEBI-ISWO28-A
*/
const form = document.getElementById('form');
const senha = document.getElementById('senha');
const confirma = document.getElementById('confirma');
const mensagem = document.getElementById('mensagem');
const botao = document.getElementById('cadastrar');

function limparMensagem() {
  mensagem.textContent = '';
  mensagem.className = '';
}

function exibirMensagem(iguais) {
  mensagem.textContent = iguais
    ? 'As senhas coincidem'
    : 'As senhas são diferentes';
  mensagem.className = iguais ? 'ok' : 'erro';
}

function verificarSenhas() {
  if (confirma.value === '') {
    limparMensagem();
    botao.disabled = true;
    return;
  }

  const iguais = senha.value === confirma.value;
  exibirMensagem(iguais);
  botao.disabled = !iguais;
}

function enviarFormulario(e) {
  e.preventDefault();
  alert('Cadastro realizado!');
}

confirma.addEventListener('input', verificarSenhas);
senha.addEventListener('input', verificarSenhas);
form.addEventListener('submit', enviarFormulario);