
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


function mudarPrato(prato) {

    const imagem = document.getElementById("imagemPrato");

    const titulo = document.getElementById("tituloPrato");
    const texto = document.getElementById("textoPrato");

    const dado1 = document.getElementById("dado1");
    const dado2 = document.getElementById("dado2");
    const dado3 = document.getElementById("dado3");

    const descricao1 = document.getElementById("descricao1");
    const descricao2 = document.getElementById("descricao2");
    const descricao3 = document.getElementById("descricao3");

    const link = document.getElementById("linkPrato");

    const btnKrumkake = document.getElementById("btnKrumkake");
    const btnBrunost = document.getElementById("btnBrunost");
    const btnTorsk = document.getElementById("btnTorsk");

    // Remove a classe ativa dos botões
    btnKrumkake.classList.remove("ativo");
    btnBrunost.classList.remove("ativo");
    btnTorsk.classList.remove("ativo");

    // INFORMAÇÕES DOS PRATOS
    const pratos = {

        // KRUMKAKE
        krumkake: {

            nome: "• Krumkake",

            imagem: "assets/img/Krumkake.png",

            descricao:
                "O Krumkake é um doce tradicional norueguês, conhecido por sua massa fina, crocante e enrolada. Geralmente é recheado com chantilly e servido em ocasiões especiais, principalmente durante o Natal.",

            dado1: "Doce",
            descricao1: "Uma das sobremesas tradicionais da Noruega",

            dado2: "Natal",
            descricao2: "Muito associado às celebrações natalinas",

            dado3: "Crocante",
            descricao3: "Possui massa fina e textura delicada",

            link: "https://en.wikipedia.org/wiki/Krumkake"

        },

        // BRUNOST
        brunost: {

            nome: "• Brunost",

            imagem: "assets/img/Brunost.png",

            descricao:
                "O Brunost é um queijo marrom muito popular na Noruega. Seu sabor adocicado e levemente caramelizado vem do processo de aquecimento do soro do leite. É tradicionalmente cortado em fatias finas e consumido com pão ou waffles.",

            dado1: "Queijo",
            descricao1: "Produzido a partir do soro do leite",

            dado2: "Marrom",
            descricao2: "Sua cor vem do processo de caramelização",

            dado3: "Adocicado",
            descricao3: "Possui sabor semelhante ao caramelo",

            link: "https://en.wikipedia.org/wiki/Brunost"

        },

        // TORSK MED POTETER
        torsk: {

            nome: "• Torsk med poteter",

            imagem: "assets/img/Da Noruega para a mesa_ bacalhau típico inspira torcida pelo Brasil - Prefeitura de Curitiba.png",

            descricao:
                "O Torsk med poteter é um prato tradicional norueguês preparado com bacalhau fresco ou peixe da família do bacalhau, acompanhado de batatas. Muitas vezes recebe molho de manteiga e é servido com legumes, representando a forte tradição pesqueira do país.",

            dado1: "Peixe",
            descricao1: "O bacalhau é um alimento importante na Noruega",

            dado2: "Batatas",
            descricao2: "Um acompanhamento muito comum no prato",

            dado3: "Tradição",
            descricao3: "Representa a forte cultura pesqueira norueguesa",

            link: "https://en.wikipedia.org/wiki/Cod_as_food"

        }

    };

    // Seleciona o prato escolhido
    const selecionado = pratos[prato];

    // Atualiza a imagem e as informações
    imagem.src = selecionado.imagem;
    imagem.alt = selecionado.nome;

    titulo.textContent = selecionado.nome;
    texto.textContent = selecionado.descricao;

    dado1.textContent = selecionado.dado1;
    dado2.textContent = selecionado.dado2;
    dado3.textContent = selecionado.dado3;

    descricao1.textContent = selecionado.descricao1;
    descricao2.textContent = selecionado.descricao2;
    descricao3.textContent = selecionado.descricao3;

    link.href = selecionado.link;

    // Marca o botão selecionado
    if (prato === "krumkake") {
        btnKrumkake.classList.add("ativo");
    }

    else if (prato === "brunost") {
        btnBrunost.classList.add("ativo");
    }

    else if (prato === "torsk") {
        btnTorsk.classList.add("ativo");
    }

}

// Inicia a seção com Krumkake selecionado
mudarPrato("krumkake");

