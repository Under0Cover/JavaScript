// Funções de Fábrica

function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria) {
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar() {console.log('Fazendo ligações....')}
    }
}

const celular01 = criarCelular('Zenfone', 5.5, 5000)
console.log(celular01.ligar())
