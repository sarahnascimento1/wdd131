const anoAtual = new Date().getFullYear();

document.getElementById("anoatual").textContent = anoAtual;

document.getElementById("ultimaModificacao").textContent = document.lastModified;

const hamButton = document.querySelector('#menu');
const navegacao = document.querySelector('.navegacao');

hamButton.addEventListener('click', () => {
    navegacao.classList.toggle('open');
    hamButton.classList.toggle('open');
});


