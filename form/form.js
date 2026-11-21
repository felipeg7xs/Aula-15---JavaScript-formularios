/*
  Descrição: JavaScript aplicado a Formulários.
  Nome do arquivo: script.js
  Nome do exercício: Aula 15 - JavaScript aplicado a Formulários
  Nome do aluno: Felipe Gabriel de Oliveira
  E-mail do aluno: felipe.oliveira139@aluno.cps.sp.gov.br
  Turma: Código da Turma: WEBI-ISWO28-A
*/
const comentario = document.getElementById("comentario");
const contador = document.getElementById("contador");
const enviar = document.getElementById("enviar");
const textoContador = document.querySelector(".contador");

comentario.addEventListener("input", function() {

    const restantes = 140 - comentario.value.length;

    contador.textContent = restantes;

    // Verifica se chegou ao limite
    if (restantes === 0) {
        textoContador.classList.add("limite");
        enviar.disabled = true;
    } else {
        textoContador.classList.remove("limite");
        enviar.disabled = false;
    }

});