


const produtos = [
    {
        id: "fc-1888",
        nome: "Capacitor de Fluxo",
        classificacaomedia: 4.5
    },
    {
        id: "fc-2050",
        nome: "Fios Elétricos",
        classificacaomedia: 4.7
    },
    {
        id: "fs-1987",
        nome: "Circuitos de Tempo",
        classificacaomedia: 3.5
    },
    {
        id: "ac-2000",
        nome: "Reator de Baixa Tensão",
        classificacaomedia: 3.9
    },
    {
        id: "jj-1969",
        nome: "Equalizador de Distorção",
        classificacaomedia: 5.0
    }
];


const anoAtual = new Date().getFullYear();

document.getElementById("anoatual").textContent = anoAtual;

document.getElementById("ultimaModificacao").textContent = document.lastModified;

document.getElementById("data").addEventListener("click", function () {
    this.showPicker();
});

const selectProduto = document.getElementById("produto");

produtos.forEach(function (produto) {
    const opcao = document.createElement("option");
    opcao.value = produto.id;
    opcao.textContent = produto.nome;
    selectProduto.appendChild(opcao);
});

