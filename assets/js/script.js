
function mudarEstacao(estacao) {

    const cenario = document.getElementById("cenario");

    const btnVerao = document.getElementById("btnVerao");
    const btnInverno = document.getElementById("btnInverno");

    const titulo = document.getElementById("tituloCenario");
    const texto = document.getElementById("textoCenario");

    // Remove as classes anteriores
    cenario.classList.remove("verao", "inverno");

    btnVerao.classList.remove("ativo");
    btnInverno.classList.remove("ativo");

    // VERÃO
    if (estacao === "verao") {

        cenario.classList.add("verao");
        btnVerao.classList.add("ativo");

        titulo.textContent = "Sol da meia-noite";

        texto.textContent =
            "Acima do Círculo Polar Ártico, entre maio e julho o sol fica visível a noite toda.";

    }

    // INVERNO
    else {

        cenario.classList.add("inverno");
        btnInverno.classList.add("ativo");

        titulo.textContent = "Noite polar";

        texto.textContent =
            "Entre novembro e janeiro, o sol não aparece no extremo norte. É a melhor época para a aurora boreal.";

    }

}
function alterarComida(comida) {
    const texto = document.getElementById("textoCenario");
    const imagem = document.getElementById("cenario");
    const titulo = document.getElementById("tituloCenario");
    const btnKrumkake = document.getElementById("btnKrumkake");
    
}