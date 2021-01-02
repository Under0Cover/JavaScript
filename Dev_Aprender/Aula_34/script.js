// Funções de Construtor

// Camel Case
function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria) {
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar() {console.log('Fazendo ligações....')}
    }
}

// Pascal Case
function Celular(marcaCelular, tamanhoTela, capacidadeBateria){
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function(){
        console.log('Fazendo ligações...')
    }
}

const celular01 = new Celular('ASUS', 5.5, 6000)
console.log(celular01)