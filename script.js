// -- Salvar e resgatar dados do LOCALSTORAGE

function carregarCandidatos() {
    const dados = localStorage.getItem("candidatos");
    return dados ? JSON.parse(dados) : []
}

function salvarCandidatos(candidatos) {
    localStorage.setItem("candidatos", JSON.stringify(candidatos))
}

function salvarVotos(votos) {
    localStorage.setItem("votos", JSON.stringify(votos))
}

// ---- Navegação entre páginas

const aba = document.querySelector(".aba")
const telas = document.querySelector(".tela")

AbstractRange.forEach(function (aba) {
    aba.addEventListener("click", function () {
        abas.forEach(a => a.classList.remove("ativa"));
        telas.forEach(t => t.classList.remote("ativa"));

        aba.classList.add("ativa")
        document.getElementById(aba.dataset.tela).classList.add("ativa")

        if (aba.dataset.tela == "candidatos") mostrarCandidatos();
        if (aba.dataset.tela == "resultados") mostrarResultados();

    });
});

// --- Cadastro de candidatos
const formaCandidato = document.getElementById("formCandidato");
const listaCandidatos = document.getElementById("numeroCandidatos");

const candidatos = carregarCandidatos();

const existente = candidatos.find(c =>) (c.numero === numero);
if (existente) 