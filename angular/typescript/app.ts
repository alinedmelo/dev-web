class Carro {
    // Parâmetros do abjeto
    private modelo: string
    private numeroDePortas: number
    private velocidade: number = 0

    //Construtor da classe = recebe os parâmetros
    constructor(modelo: string, numeroDePortas: number) {

        this.modelo = modelo
        this.numeroDePortas = numeroDePortas
    }

    //Métodos da classe
    public acelerar (): void {
        this.velocidade = this.velocidade + 10
    }
    public parar(): void {
        this.velocidade = 0
    }
    public velocidadeAtual(): number {
        return this.velocidade
    }

}

class Concessionaria {

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

class Pessoa {

    private nome: string
    private carroPreferido: string 
    private carro: Carro

    constructor(nome: string, carroPreferido: string) {
        this.nome = nome
        this.carroPreferido = carroPreferido
    }

    public dizerNome(): string {
        return 'Nome: ' + this.nome
    }
    public dizerCarroPreferido(): string {
        return this.carroPreferido
    }
    public comprarCarro(carro: Carro): void {
        this.carro = carro
    }
    public dizerCarroQueTem(): Carro {
        return this.carro
    }

}

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