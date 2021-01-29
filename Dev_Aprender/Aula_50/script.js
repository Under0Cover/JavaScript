// Introdução a Arrays

// Adicionar novos elementos
const numeros = [1,2,3,4]
console.log(numeros)

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

// Tipos referência
const marcas = [
    {id: 01, nome: 'a'},
    {id: 02, nome: 'b'},
    {id: 03, nome: 'c'},
    {id: 04, nome: 'd'},
]

const marca = marcas.find(function(marca) {
    return marca.nome === 'a'
})

console.log(marca)

// Remover elementos

const numeros_maiores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Removendo elementos no final
console.log(numeros_maiores)
numeros_maiores.pop()
console.log(numeros_maiores)

// Removendo elementos no início
numeros_maiores.shift()
console.log(numeros_maiores)

// Removendo elementos no meio
numeros_maiores.splice(2,1)
console.log(numeros_maiores)

/* 
	Durante a realização da aula, me surgiu uma dúvida com relação ao splice
	O  splice foi  utilizado para inserir elementos em uma das aulas anteriores
	E agora foi usado para remover.
	Fui pesquisar a respota:
		O uso do splice deve ser bem observado
		Ele deve ser usado com 1 ou indefinidos valores
		splice(1, x, y, z, k, w+1)
		O primeiro paramêtro é o index de onde vai ser começada a ação
		O segundo é a quantidade de valores a serem removidos
			Nesse ponto cabem algumas explicações
			1- No exemplo acima o splice foi utilizado com o segundo número como 0
				Ou seja, nenhum foi removido
			2- Se não informado a quantidade removerá todos os valores a partir do index
		A partir da terceira, serão informados os valores a serem introduzidos
		No exemplo utilizado para inserir elementos, foi porque a quantidade informada foi 0 e foi indicado um terceiro número
		No exemplo da remoção, não foi informado o terceiro número, consequentemente não foi introduzido nenhum número
		A sintaxe fica assim
			array.splice(índiceInicio , quantidadeExcluídos[, item1[,item2[,... itemN]]])
*/

// Dividir elementos
// Dividir arrays
// Combinar arrays