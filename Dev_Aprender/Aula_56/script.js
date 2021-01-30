// Recebendo dados

// Para receber dados dos usuários utilizamos o prompt
// prompt('Olá qual é a sua cor favorita?')

// Vamos armazenar em uma variável e condicionar ela no if-else
let corFavorita = prompt('Olá, qual é a sua cor favorita?')

if (corFavorita = 'Vermelho') {
	alert('Essa é a minha cor favorita também!')
}

// Desafio da aula
// Fazer um prompt para receber a idade de uma pessoa e dizer se ela é ou não maior de idade

let idade = prompt('Qual é a sua idade?')

if (idade < 18)
   prompt('Você é menor de idade!')
else if (idade > 18)
   alert('Você é maior de idade')