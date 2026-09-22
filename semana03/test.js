const nomeCompleto = function (nome, sobrenome) {
    return `${nome} ${sobrenome}`;
};

document.querySelector("#nomeCompleto").textContent =
    nomeCompleto("Antonia", "Francesca");