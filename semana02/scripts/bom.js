
const input = document.querySelector('#capfav');
const botao = document.querySelector('button');
const lista = document.querySelector('#list');


botao.addEventListener('click', function () {

    if (input.value.trim() !== '') {

        const tituloCapitulo = document.createElement('li');
        const botaoExcluir = document.createElement('button');

        tituloCapitulo.textContent = input.value;
        botaoExcluir.textContent = '❌';
        tituloCapitulo.append(botaoExcluir);
        lista.append(tituloCapitulo);

        botaoExcluir.addEventListener('click', function () {

            lista.removeChild(tituloCapitulo);
            input.focus();

        })

        input.value = '';

    }

    input.focus();

});




