// TIPOS DE FUNÇÕES

// REALIZA UMA TAREFA E NÃO DEVOLVE NADA
function dizerNome(){
    console.log('Oliver')
}

// REALIZA UMA TAREFA E DEVOLVE ALGO
function multiplicarPorDois(valor){
    return valor * 2
}

dizerNome()
console.log(multiplicarPorDois(5))

let resultado = multiplicarPorDois(10)
console.log(resultado)