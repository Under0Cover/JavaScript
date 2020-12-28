// OPERADORES


// OPERADORES ARITIMÉTICOS
let salario = 100

console.log(salario)
console.log(salario + salario)
console.log(salario - salario)
console.log(salario * salario)
console.log(salario / salario)
console.log(salario ** salario)


// INCREMENTO E DECREMENTO
let idade = 18
console.log(idade)
console.log(idade++)
console.log(idade)
console.log(++idade)
console.log(idade)
console.log(idade--)
console.log(idade)
console.log(--idade)
console.log(idade)


// OPERADORES DE ATRIBUIÇÃO
let valorTecladoGamer = 100
console.log(valorTecladoGamer)
valorTecladoGamer += valorTecladoGamer
console.log(valorTecladoGamer)
valorTecladoGamer -= valorTecladoGamer
console.log(valorTecladoGamer)


// OPERADORES DE COMPARAÇÃO
// IGUALDADE ESTRITA
console.log(1 === 1)
console.log('1' === 1)
console.log('1' === '1')
// IGUALDADE SOLTA
console.log(1 == 1)
console.log('1' == 1)
console.log('1' == '1')


// OPERADOR TERNÁRIO
// O CLIENTE QUE JUNTAR MAIS DE 100 PONTOS É CLIENTE PREMIUM
let pontos = 101
let tipoCliente = pontos > 100 ? 'Premium' : 'Normal'
console.log(tipoCliente)

// OPERADORES LÓGICOS
// OPERADOR E (&&)
let maiorIdade = true
let carteiraTrabalho = true
let podeAplicar = maiorIdade && carteiraTrabalho
console.log('Pode aplicar: ', podeAplicar)

// OPERADOR OU (||)
maiorIdade = false
carteiraTrabalho = false
podeAplicar = maiorIdade || carteiraTrabalho
console.log('Pode aplicar: ', podeAplicar)

// OPERADOR NOT (!)
let candidatoRecusado = !podeAplicar
console.log('Candidato recusado: ', candidatoRecusado)



// OPERADORES BITWISE