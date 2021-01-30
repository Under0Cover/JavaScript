// Foreach

const numeros = [1, 2, 3, 4, 5]

for (numero of numeros)
	console.log(numero)

// Vai imprimir todos os números

// Outro meio de se fazer isso é o métood forEach

numeros.forEach(function(numero) {
	console.log(numero)
})

// Pode ser aplicado o método arrow function
numeros.forEach((numeros) => console.log(numeros))

// Você também pode utilizar a arrow function para passar o índice
numeros.forEach((index, numero) => console.log(index, numero))