"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = require("./Carro");
var Concessionaria_1 = require("./Concessionaria");
var Pessoa_1 = require("./Pessoa");
var carroA = new Carro_1.Carro('Ford GT', 2);
var carroB = new Carro_1.Carro('Renegade', 4);
var carroC = new Carro_1.Carro('Onix', 4);
var carroD = new Carro_1.Carro('Fit', 4);
var listaDeCarros = [carroA, carroB, carroC, carroD];
var concessionaria = new Concessionaria_1.Concessionaria('Av. Paulista', listaDeCarros);
var cliente = new Pessoa_1.Pessoa('Aline', 'Renegade');
console.log(cliente);
concessionaria.mostrarListaCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
