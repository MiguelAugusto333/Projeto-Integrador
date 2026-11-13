// Lista de jogadores da Noruega
const jogadores = [

    {
        nome: "Erling Haaland",
        numero: 9,
        posicao: "Atacante",
        imagem: "assets/img/haalland.jpeg",
        gols: 12,
        assistencias: 2,
        partidas: 10,
        minutos: 821,
        nota: 7.8
    },

    {
        nome: "Martin Ødegaard",
        numero: 10,
        posicao: "Meio-campista",
        imagem: "assets/img/Martin Ødegaard.png",
        gols: 4,
        assistencias: 6,
        partidas: 9,
        minutos: 765,
        nota: 8.2
    },

    {
        nome: "Alexander Sørloth",
        numero: 7,
        posicao: "Atacante",
        imagem: "assets/img/Alexander.jpg",
        gols: 8,
        assistencias: 1,
        partidas: 10,
        minutos: 690,
        nota: 7.5
    },

    {
        nome: "Antonio Nusa",
        numero: 7,
        posicao: "Atacante",
        imagem: "assets/img/Alexander.jpg",
        gols: 8,
        assistencias: 1,
        partidas: 10,
        minutos: 690,
        nota: 8.6
    },

    {
        nome: "Andreas Schjelderup",
        numero: 7,
        posicao: "Atacante",
        imagem: "assets/img/Alexander.jpg",
        gols: 8,
        assistencias: 1,
        partidas: 10,
        minutos: 690,
        nota: 8.3
    },
    
    {
        nome: "Sander Berge",
        numero: 7,
        posicao: "Atacante",
        imagem: "assets/img/Alexander.jpg",
        gols: 8,
        assistencias: 1,
        partidas: 10,
        minutos: 690,
        nota: 8.6
    },
    {
        nome: "Fredrik Aursnes",
        numero: 7,
        posicao: "Atacante",
        imagem: "assets/img/Alexander.jpg",
        gols: 8,
        assistencias: 1,
        partidas: 10,
        minutos: 690,
        nota: 8.9
    },
    {
        nome: "Julian Ryerson",
        numero: 7,
        posicao: "Atacante",
        imagem: "assets/img/Alexander.jpg",
        gols: 8,
        assistencias: 1,
        partidas: 10,
        minutos: 690,
        nota: 8.8
    },
    {
        nome: "Kristoffer Ajer",
        numero: 7,
        posicao: "Atacante",
        imagem: "assets/img/Alexander.jpg",
        gols: 8,
        assistencias: 1,
        partidas: 10,
        minutos: 690,
        nota: 8.4
    },
    {
        nome: "LEO ØSTIGÅRD",
        numero: 7,
        posicao: "Atacante",
        imagem: "assets/img/Alexander.jpg",
        gols: 8,
        assistencias: 1,
        partidas: 10,
        minutos: 690,
        nota: 8.4
    },
    {
        nome: "ØRJAN NYLAND",
        numero: 7,
        posicao: "Atacante",
        imagem: "assets/img/Alexander.jpg",
        gols: 8,
        assistencias: 1,
        partidas: 10,
        minutos: 690,
        nota: 8.0
    }
]

// Jogador que está aparecendo
let jogadorAtual = 0;


// Função para atualizar o card
function mostrarJogador() {

    const jogador = jogadores[jogadorAtual];

    document.getElementById("playerName").textContent =
        jogador.nome;

    document.getElementById("playerNumber").textContent =
        jogador.numero;

    document.getElementById("playerPosition").textContent =
        jogador.posicao;

    document.getElementById("playerImage").src =
        jogador.imagem;

    document.getElementById("playerGoals").textContent =
        jogador.gols;

    document.getElementById("playerAssists").textContent =
        jogador.assistencias;

    document.getElementById("playerMatches").textContent =
        jogador.partidas;

    document.getElementById("playerMinutes").textContent =
        jogador.minutos;

    document.getElementById("playerRating").textContent =
        jogador.nota;

    document.getElementById("playerCounter").textContent =
        `${jogadorAtual + 1} / ${jogadores.length}`;
}


// Próximo jogador
document.getElementById("nextPlayer").addEventListener("click", () => {

    jogadorAtual++;

    if (jogadorAtual >= jogadores.length) {
        jogadorAtual = 0;
    }

    mostrarJogador();

});


// Jogador anterior
document.getElementById("prevPlayer").addEventListener("click", () => {

    jogadorAtual--;

    if (jogadorAtual < 0) {
        jogadorAtual = jogadores.length - 1;
    }

    mostrarJogador();

});


// Mostrar o primeiro jogador ao abrir a página
mostrarJogador();