class Veiculo {
    
    // Parâmetros do abjeto
    protected modelo: string //protected permite uso do atributo para classes filhas (herdeiras)
    private velocidade: number = 0

    //Métodos da classe
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

// Exportando a classe
export default Veiculo