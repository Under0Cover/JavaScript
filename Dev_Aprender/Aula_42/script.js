// Exercício 12 - Igualdade de Objetos

function endereco(rua, cidade, cep) {
    this.rua = rua
    this.cidade = cidade
    this.cep = cep
}

const endereco_01 = new endereco('a', 'b', 'c')
const endereco_02 = new endereco('a', 'b', 'c')
const endereco_03 = new endereco('a', 'b', 'd')
const endereco_04 = new endereco('a', 'x', 'c')
const endereco_05 = new endereco('a', 'w', 'p') 
const endereco_06 = new endereco('b', 'w', 'v')
const endereco_07 = new endereco('a', 'b', 'v')
const endereco_08 = new endereco('x', 'b', 'v')

function saoIguais(endereco_a, endereco_b) {
    if (endereco_a.rua === endereco_b.rua && endereco_a.cidade === endereco_b.cidade && endereco_a.cep === endereco_b.cep) {
        console.log('Todos os dados são iguais')
    } else if (endereco_a.rua === endereco_b.rua && endereco_a.cidade === endereco_b.cidade) {
        console.log('Rua e Cidade são iguais')
    } else if (endereco_a.rua === endereco_b.rua && endereco_a.cep === endereco_b.cep) {
        console.log('Rua e CEP são iguais')
    } else if (endereco_a.cidade === endereco_b.cidade && endereco_a.cep === endereco_b.cep) {
        console.log('Cidade e CEP são iguais')
    } else if (endereco_a.rua === endereco_b.rua) {
        console.log('Rua iguais')
    } else if (endereco_a.cidade === endereco_b.cidade) {
        console.log('Cidade iguais') 
    } else if (endereco_a.cep === endereco_b.cep) {
        console.log('CEP iguais') 
    } else {
        console.log('Os dados não são iguais')
    }
}

saoIguais(endereco_01, endereco_02)
saoIguais(endereco_02, endereco_03)
saoIguais(endereco_02, endereco_04)
saoIguais(endereco_04, endereco_05)
saoIguais(endereco_05, endereco_06)
saoIguais(endereco_06, endereco_07)
saoIguais(endereco_07, endereco_08)

function temEnderecoMemoriaIguais(endereco_a, endereco_b) {
    if (endereco_a === endereco_b) {
        console.log('Estão alocados no mesmo endereço de memória!')
    } else {
        console.log('Não estão alocados no mesmo endereço de memória!')
    }
}

temEnderecoMemoriaIguais(endereco_01, endereco_02)
const endereco_09 = endereco_01
temEnderecoMemoriaIguais(endereco_01, endereco_09)