// Exercício 02
// Escreva uma função que dê o maior entre 2 números


// Minha solução
function maior(numero_a, numero_b) {
    if (numero_a > numero_b) {
        console.log('O número ' + numero_a + ' é maior que o ' + numero_b)
    } else if (numero_b > numero_a ) {
        console.log('O número ' + numero_b + ' é maior que o ' + numero_a)
    } else {
        console.log('Os números são iguais')
    }
}

maior(8,1)

// Solução instrutor

let valorMaior = max(5,9)
console.log(valorMaior)

function max(numero1, numero2) {
    if (numero1 > numero2)
        return numero1
    else return numero2
}

// numero1 > numero2 ? numero1 : numero2