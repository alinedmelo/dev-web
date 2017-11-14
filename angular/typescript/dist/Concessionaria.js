"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.Concessionaria = Concessionaria;
