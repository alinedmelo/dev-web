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
    private listaDeCarros: any

    constructor(endereco: string) {
        this.endereco = endereco
    }

    public fornecerEndereco(): string {
        return this.endereco
    }
    public mostrarListaCarros(): any {

    }
}

let concessionaria = new Concessionaria('Av tiradentes')

console.log(concessionaria)