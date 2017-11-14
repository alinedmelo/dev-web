import Veiculo from './Veiculo'

class Carro extends Veiculo {
    // Parâmetros do abjeto
    private numeroDePortas: number

    //Construtor da classe = recebe os parâmetros
    constructor(modelo: string, numeroDePortas: number) {
        super()
        this.modelo = modelo
        this.numeroDePortas = numeroDePortas
    }
}

export default Carro