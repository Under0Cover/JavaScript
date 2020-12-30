// Exercício 07

// Criar uma função que soma os múltiplos de 3 e 5

function somar(valores) {
    let multiplosTres = 0
    let multiplosCinco = 0
    let descartados = 0
    for (indice = 0; indice <= valores; indice++) {
        if (indice % 3 === 0) {
            multiplosTres += indice
        } else if (indice % 5 === 0) {
            multiplosCinco += indice
        } else {
            descartados += indice
        }
    }
    let soma = multiplosTres + multiplosCinco
    console.log('A soma dos múltiplos de 3 e 5 é: ',soma)
}

somar(15)