// TIPOS PRIMITIVOS

// TIPOS DE REFERÊNCIAS
// STRING - NUMBER - BOOLEAN - UNDEFINED - NULL
let nome = 'Oliver' //STRING LITERAL
let idade = 25 // NUMBER LITERAL
let estaAprovado = true // BOOLEAN
let sobrenome //UNDEFINED
let corSelecionado = null // NULL 


// TIPOS DE VALORES
console.log(typeof nome)
nome = 55
console.log(typeof nome)

console.log(typeof idade)
idade = 25.05
console.log(typeof idade)

console.log(typeof estaAprovado)
estaAprovado = 10
console.log(typeof estaAprovado)

console.log(typeof sobrenome)
sobrenome = "Oliver"
console.log(typeof sobrenome)

console.log(typeof corSelecionado)
corSelecionado = 'Azul'
console.log(typeof corSelecionado)

// TIPOS DE REFERÊNCIAS 
// ARRAY - OBJETOS - FUNCTION

let pessoa = {
    nome: 'Tales',
    sobrenome: 'Oliver',
    idade: 36,
    estaAprovado: true,
    corSelecionado: 'Vermelho'
}

console.log(pessoa)
console.log(typeof pessoa)
console.log(typeof pessoa.nome)
console.log(typeof pessoa.sobrenome)
console.log(typeof pessoa.idade)
console.log(typeof pessoa.estaAprovado)
console.log(typeof pessoa.corSelecionado)
console.log(pessoa.nome + ' ' + pessoa.sobrenome)
