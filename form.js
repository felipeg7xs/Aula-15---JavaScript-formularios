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