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

// Esvaziando um array
let quilos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Modo 01
/*
	No Modo 01, vamos ter que utilizar um let ao invés de const, pois vamos re-atribuir outro valor para ele
*/

/*
	No Modo 01 é re-atribuir mesmo, na tora  e ele não terá mais os outros valores
	Pórem, como ele é um objeto, ele pode fazer referência a outro(S) objeto(S)
	Mas, mesmo re-atribuindo de forma direta, os outros objetos permanecem com os valores 
*/
// Como está o quilos
console.log(quilos)
// Declarando a variável gramas
let gramas = quilos
// Exibindo
console.log(gramas)
// Atribuir o valor vazio
quilos = []
// Exibindo o quilos após esvaziar
console.log(quilos)
// Exibindo gramas após quilos esvaziar
console.log(gramas)

// Vou declarar outra variável para reutilziar o exemplo anterior de referência
let toneladas = gramas
/*
	No Modo 02 é atribuir o length a 0
	O problema é que todo objeto que estiver recebendo a variável que for limpa, também vai receber o 0
*/
// Exibindo a variável gramas
console.log(gramas)
// Exibindo a variável toneladas
console.log(toneladas)
// Atribuir o tamanho a 0
gramas.length = 0
// Exibindo a variável gramas
console.log(gramas)
// Exibindo a variável toneladas
console.log(toneladas)

/* 
	No Modo 03 é utilizar o splice
*/

// Preparando as variáveis
const videos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const livros = videos
console.log(videos)
console.log(livros)

// Utilizar o splice pra começar do índice 0 e ir até o tamanho do array
videos.splice(0, videos.length)
// Agora olhando ambas variáveis
console.log(videos)
console.log(livros)

/*
	No Modo 04 é utilizar o pop, pórem, ele apresenta problemas
	Pra funcionar para esvaziar um array, teremos que utilizar em um while para saber o tamanho do array
	Já que ele retira apenas o último elemento
*/

const anos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(anos)
while (anos.length > 0)
	anos.pop()
	// console.log(anos)
	// Caso você queira ver toda a retirada
console.log(anos)


// Combinar arrays

// Declarando dois arrays
const primeiro = [1, 2, 3]
const segundo = [4, 5, 6]

// Criando um terceiro array e concatenando os dois primeiros
const combinado = primeiro.concat(segundo)
console.log(combinado)

// Dividindo o array com slice
/*
	No uso do slice passamos dois paramêtros
		O primeiro paramêtro é o index de onde começa a divisão
		O segun paramêtro é o index final, pórem ele vai pegar o index final - 1
*/
const dividido = combinado.slice(1, 3)
console.log(dividido)
console.log(combinado)
// Você pode perceber que o array coobinado ainda possui todos os elementos do seu array inicial
/*
	No uso do slice também pode ser passado um único paramêtro
	Se passado um único paramêtro, a divisão do array será desse index passado até o final do array
	Caso não seja passado nenhum paramêtro, ele vai fazer uma cóopia do array original
*/

const  vogais = [{id: 'vogais'}, 'a', 'e', 'i', 'o', 'u']
const consoates = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't' , 'v', 'x', 'z']

console.log(vogais)
const alfabeto = vogais.concat(consoates)
vogais[0].id = 'alfabeto'
// const alfabeto = vogais.concat(consoates)
console.log(vogais)
console.log(alfabeto)

/*
	Fica uma observação
		Como estamos trabalhando com objetos, o slice pega a referência
		E caso alguma coisa seja alterada, como no exemplo acima, onde alteramos o valor do id
		Ele ira modificar também no método slice
*/