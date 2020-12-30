// Exercício 05

// Identificação de Par ou Impar

function identificar(valores) {
    for (let indice = 0; indice <= valores; indice++) {
        if (indice % 2 === 0) {
            console.log(indice, 'Número PAR')
        } else {
            console.log(indice, 'Número IMPAR')
        }
    }
}

identificar(10)