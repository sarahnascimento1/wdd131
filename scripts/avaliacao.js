const total = (Number(localStorage.getItem("totalAvaliacoes")) || 0) + 1;

localStorage.setItem("totalAvaliacoes", total);

document.getElementById("contador").textContent = total;

const anoAtual = new Date().getFullYear();

document.getElementById("anoatual").textContent = anoAtual;

document.getElementById("ultimaModificacao").textContent = document.lastModified;

