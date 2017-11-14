// Importanto as Classes
import { Carro } from './Carro'
import { Concessionaria } from './Concessionaria'
import { Pessoa } from './Pessoa'

/* Criar carros pora a lista */
let carroA = new Carro('Ford GT', 2)
let carroB = new Carro('Renegade', 4)
let carroC = new Carro('Onix', 4)
let carroD = new Carro('Fit', 4)

/* Montar a lista de carros */
let listaDeCarros: Array<Carro> = [carroA, carroB, carroC, carroD]

let concessionaria = new Concessionaria('Av. Paulista', listaDeCarros)

/* Comprar o carro com cliente */
let cliente = new Pessoa('Aline', 'Renegade')
console.log(cliente)

concessionaria.mostrarListaCarros().map((carro: Carro) => {

    if(carro['modelo'] == cliente.dizerCarroPreferido()) {
        //compra carro
        cliente.comprarCarro(carro)
    } 
})

console.log(cliente.dizerCarroQueTem())