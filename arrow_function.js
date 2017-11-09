var dobraValor = function (numero) {
    return numero * 2
}
console.log(dobraValor(7))



// Refatorando para arrow functions

var dobroValor = numero => numero * 2
// Se há apenas um parâmetro remove-se os parenteses
// Se há apenas um valor simples de retorno, remove-se as chaves e o return


console.log(dobroValor(5))