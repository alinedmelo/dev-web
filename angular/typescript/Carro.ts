export class Carro {
    // ParÃ¢metros do abjeto
    private modelo: string
    private numeroDePortas: number
    private velocidade: number = 0

    //Construtor da classe = recebe os parÃ¢metros
    constructor(modelo: string, numeroDePortas: number) {

        this.modelo = modelo
        this.numeroDePortas = numeroDePortas
    }

    //MÃ©todos da classe
    public acelerar(): void {
        this.velocidade = this.velocidade + 10
    }
    public parar(): void {
        this.velocidade = 0
    }
    public velocidadeAtual(): number {
        return this.velocidade
    }

}