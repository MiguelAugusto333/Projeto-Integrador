// Lista de jogadores da Noruega
const jogadores = [

    {
        nome: "Erling Haaland",
        numero: 9,
        posicao: "Atacante",
        imagem: "assets/img/halland.png",
        gols: 13,
        assistencias: 1,
        partidas: 13,
        minutos: 1.118,
        nota: 9.4
    },

    {
        nome: "Martin Ødegaard",
        numero: 10,
        posicao: "Meio-campista",
        imagem: "assets/img/Martin Ødegaard（Futbolista profesional noruego）_Baidu Enciclopedia.png",
        gols: 2,
        assistencias: 9,
        partidas: 12,
        minutos: 1.091,
        nota: 8.2
    },

    {
        nome: "Alexander Sørloth",
        numero: 7,
        posicao: "Atacante",
        imagem: "assets/img/Alexander.jpg",
        gols: 0,
        assistencias: 0,
        partidas: 5,
        minutos: 341,
        nota: 7.5
    },

    {
        nome: "Antonio Nusa",
        numero: 20,
        posicao: "Atacante",
        imagem: "assets/img/GOD IS THE GREATEST Its time..🤹🏾_♀️.jpg",
        gols: 3,
        assistencias: 1,
        partidas: 6,
        minutos: 319,
        nota: 8.6
    },

    {
        nome: "Andreas Schjelderup",
        numero: 21,
        posicao: "Atacante",
        imagem: "assets/img/Andreas Schjelderup（Norwegian football player）_Baiduwiki.png",
        gols: 3,
        assistencias: 4,
        partidas: 6,
        minutos: 251,
        nota: 8.3
    },
    
    {
        nome: "Sander Berge",
        numero: 8,
        posicao: "Atacante",
        imagem: "assets/img/Sander Berge（Norwegian professional male footballer）_Baiduwiki.png",
        gols: 0,
        assistencias: 1,
        partidas: 15,
        minutos: 1335,
        nota: 8.6
    },
    {
        nome: "Fredrik Aursnes",
        numero: 14,
        posicao: "Atacante",
        imagem: "assets/img/Fredrik Aursnes（Futbolista noruego nacido en diciembre de 1995.）_Baidu Enciclopedia.jpg",
        gols: 0,
        assistencias: 0,
        partidas: 6,
        minutos: 302,
        nota: 8.9
    },
    {
        nome: "Julian Ryerson",
        numero: 26,
        posicao: "Atacante",
        imagem: "assets/img/Julian Ryerson（Norwegian professional male footballer）_Baiduwiki.png",
        gols: 0,
        assistencias: 2,
        partidas: 4,
        minutos: 226,
        nota: 8.8
    },
    {
        nome: "Kristoffer Ajer",
        numero: 3,
        posicao: "Atacante",
        imagem: "assets/img/Kristoffer Ajer（Futbolista profesional masculino noruego.）_Baidu Enciclopedia.jpg",
        gols: 1,
        assistencias: 0,
        partidas: 5,
        minutos: 480,
        nota: 8.4
    },
    {
        nome: "LEO ØSTIGÅRD",
        numero: 4,
        posicao: "Atacante",
        imagem: "assets/img/Leo Östigard（Futbolista noruego nacido en noviembre de 1999.）_Baidu Enciclopedia.jpg",
        gols: 1,
        assistencias: 0,
        partidas: 5,
        minutos: 144,
        nota: 8.4
    },
    {
        nome: "ØRJAN NYLAND",
        numero: 1,
        posicao: "Atacante",
        imagem: "assets/img/Futmais _ Menino Fut on X_ _Aos 35 anos, Orjan Nyland foi o nome do jogo da Noruega. O goleiro foi reserva do Sevilla nesta temporada, fez apenas SETE JOGOS e está.jpg",
        gols: 0,
        assistencias: 0,
        partidas: 5,
        minutos: 480,
        nota: 8.1
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