export class Concessionaria {

    private endereco: string
    private listaDeCarros: Array<Carro>

    constructor(endereco: string, listaDeCarros: Array<Carro>) {
        this.endereco = endereco
        this.listaDeCarros = listaDeCarros
    }

    public fornecerEndereco(): string {
        return this.endereco
    }
    public mostrarListaCarros(): Array<Carro> {
        return this.listaDeCarros
    }
}