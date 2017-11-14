"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = require("./Carro");
var Concessionaria_1 = require("./Concessionaria");
var Pessoa_1 = require("./Pessoa");
var carroA = new Carro_1.default('Ford GT', 2);
var carroB = new Carro_1.default('Renegade', 4);
var carroC = new Carro_1.default('Onix', 4);
var carroD = new Carro_1.default('Fit', 4);
var listaDeCarros = [carroA, carroB, carroC, carroD];
var concessionaria = new Concessionaria_1.default('Av. Paulista', listaDeCarros);
var cliente = new Pessoa_1.default('Aline', 'Renegade');
console.log(cliente);
concessionaria.mostrarListaCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
