// Introdução a Arrays

// Adicionar novos elementos
const numeros = [1,2,3,4]

// Inserindo elementos:
// - no início
numeros.unshift(0)
console.log(numeros)

// - no meio
numeros.splice(1,0,25)
console.log(numeros)

// - no fim
numeros.push(5)
console.log(numeros)

// Encontrar elementos
// Tipos primitivos
console.log(numeros.indexOf(25))
console.log(numeros.indexOf(10))
console.log(numeros.lastIndexOf(4))
console.log(numeros.includes(4))

// Remover elementos
// Dividir elementos
// Dividir arrays
// Combinar arrays