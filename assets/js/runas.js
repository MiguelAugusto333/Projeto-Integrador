
const alfabetoRunico = {
    a: "ᛅ",
    b: "ᛒ",
    c: "ᚴ",
    d: "ᛏ",
    e: "ᛁ",
    f: "ᚠ",
    g: "ᚴ",
    h: "ᚼ",
    i: "ᛁ",
    j: "ᛁ",
    k: "ᚴ",
    l: "ᛚ",
    m: "ᛘ",
    n: "ᚾ",
    o: "ᚢ",
    p: "ᛒ",
    q: "ᚴ",
    r: "ᚱ",
    s: "ᛋ",
    t: "ᛏ",
    u: "ᚢ",
    v: "ᚢ",
    w: "ᚢ",
    x: "ᚴᛋ",
    y: "ᛁ",
    z: "ᛋ"
};

function traduzirRunas() {

    const nome = document.getElementById("nomeRuna")
        .value.trim().toLowerCase();

    if (nome === "") {
        alert("Digite seu nome primeiro!");
        return;
    }

    const nomeNormalizado = nome.normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

    let resultado = "";

    for (let letra of nomeNormalizado) {

        if (letra === " ") {
            resultado += "   ";
        } else {
            resultado += alfabetoRunico[letra] || "";
        }
    }

    document.getElementById("resultadoRunas")
        .textContent = resultado;

    document.getElementById("nomeOriginal")
        .textContent = nome.toUpperCase();
}

function copiarRunas() {

    const resultado = document.getElementById("resultadoRunas")
        .textContent;

    navigator.clipboard.writeText(resultado)
        .then(() => alert("Runas copiadas!"))
        .catch(() => alert("Não foi possível copiar."));
}
