// Exercício 11 - Montador de Endereços

// Criar um Objeto Endereço, contendo:
// Rua
// Cidade
// CEP
// Função Exibir Endereço

let endereco = {
    rua: 'Principal',
    cidade: 'Uberaba',
    estado: 'MG',
    cep: '38100-000'
}

function exibirEndereco(endereco) {
    for (let chave in endereco) {
        console.log(chave, endereco[chave])
    }
}

exibirEndereco(endereco)