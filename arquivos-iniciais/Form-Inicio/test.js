function calcular(a, b, callback) {
    callback(a + b);
}

function mostrarResultado(resultado) {
    console.log('O resultado é: ' + resultado);
}

calcular(2, 3, mostrarResultado)