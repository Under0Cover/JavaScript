// Exercício 10

// Números primos
function primos(valor) {
    for (let numero = 2; numero <= valor; numero++) {
        let ehPrimo = true

        for (let divisor = 2; divisor < numero; divisor++) {
            if (numero % divisor === 0) {
                ehPrimo = false
                break
            }
        }
        if (ehPrimo) {
            console.log(numero)
        }
    }
}

primos(45)