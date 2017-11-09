//Escopo de variáveis e hoisting 

var serie = 'Fringe'

if (true) {
    let serie = 'Game of Thrones'
    console.log(serie)
}

console.log(serie)