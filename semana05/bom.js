
const input = document.querySelector('#capfav');
const botao = document.querySelector('button');
const lista = document.querySelector('#list');

let arrayCapitulos = obterListaDeCapitulos() || [];

arrayCapitulos.forEach((capitulo) => {
    exibirLista(capitulo);

});

botao.addEventListener('click', function () {
    if (input.value.trim() !== '') {

        exibirLista(input.value);
        arrayCapitulos.push(input.value);
        // console.log('antes de salvar', arrayCapitulos);
        definirListaDeCapitulos(arrayCapitulos);
        // console.log('depois de salvar', localStorage.getItem('capitulos'));
        input.value = '';
    }

    input.focus();
})


function exibirLista(item) {

    const tituloCapitulo = document.createElement('li');
    const botaoExcluir = document.createElement('button');

    tituloCapitulo.textContent = item;
    botaoExcluir.textContent = '❌';
    tituloCapitulo.append(botaoExcluir);
    lista.append(tituloCapitulo);

    botaoExcluir.addEventListener('click', function () {

        lista.removeChild(tituloCapitulo);
        arrayCapitulos = arrayCapitulos.filter((capitulo) => capitulo !== item);
        definirListaDeCapitulos(arrayCapitulos);
        input.focus();
    });

}

function obterListaDeCapitulos() {
    return JSON.parse(localStorage.getItem('capitulos'));

}

function definirListaDeCapitulos(array) {
    localStorage.setItem('capitulos', JSON.stringify(array));
}

function excluirCapitulo(capitulo) {
    capitulo = capitulo.slice(0, capitulo.length - 1);
    arrayCapitulos = arrayCapitulos.filter((item) => item !== capitulo);
    definirListaDeCapitulos(arrayCapitulos);
}








