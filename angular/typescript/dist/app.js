"use strict";
var Carro = (function () {
    function Carro(modelo, numeroDePortas) {
        this.velocidade = 0;
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
    }
    Carro.prototype.acelerar = function () {
        this.velocidade = this.velocidade + 10;
    };
    Carro.prototype.parar = function () {
        this.velocidade = 0;
    };
    Carro.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    return Carro;
}());
var Concessionaria = (function () {
    function Concessionaria(endereco, listaDeCarros) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostrarListaCarros = function () {
        return this.listaDeCarros;
    };
    return Concessionaria;
}());
var Pessoa = (function () {
    function Pessoa(nome, carroPreferido) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }
    Pessoa.prototype.dizerNome = function () {
        return 'Nome: ' + this.nome;
    };
    Pessoa.prototype.dizerCarroPreferido = function () {
        return this.carroPreferido;
    };
    Pessoa.prototype.comprarCarro = function (carro) {
        this.carro = carro;
    };
    Pessoa.prototype.dizerCarroQueTem = function () {
        this.carro;
    };
    return Pessoa;
}());
var carroA = new Carro('Ford GT', 2);
var carroB = new Carro('Escapade', 4);
var carroC = new Carro('Onix', 4);
var carroD = new Carro('Fit', 4);
var listaDeCarros = [carroA, carroB, carroC, carroD];
var concessionaria = new Concessionaria('Av. Paulista', listaDeCarros);
console.log(concessionaria);
