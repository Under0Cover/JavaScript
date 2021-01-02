// Exercício 08

// Média escolar
// 00 - 59:  F
// 60 - 69:  D
// 70 - 79:  C
// 80 - 89:  B
// 90 - 100: A

function mediaNotas(notas) {
    let soma = 0
    for (let nota of notas) {
        soma += nota
    }

    const media = soma / (notas.length)
    
    if (media < 60) {
        return 'F'
    } else if (media < 70) {
        return 'D'
    } else if (media < 80) {
        return 'C'
    } else if (media < 90) {
        return 'B'
    } else {
        return 'A'
    }
}

const alunoA = [70, 70, 80]
const alunoB = [80, 88, 90]
console.log(mediaNotas(alunoA))
console.log(mediaNotas(alunoB))