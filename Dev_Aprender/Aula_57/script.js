// O instrutor utilizou a página dele como exemplo para essa atividade
// Eu vou recriar as tags html que fizerem sentido para o exercício

// O objetivo é modificar o elemento pelo seletor
// No caso o seletor é um id
document.getElementById('coment').innerText = 'Olá, meu nome é Oliver e estou fazendo o seu curso de JavaScript!'

// No caso o seletor é uma classe
document.getElementsByClassName('python')[0].innerText = "JavaScript"

// Três elementos que você pode tentar modificar o texto
/*
	innerHTML
	value
	innerText
*/

//  Pegando o botão
document.getElementById('submit').click()
