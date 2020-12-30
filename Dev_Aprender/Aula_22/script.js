// LOOPS - LAÇOS DE REPETIÇÃO

// FOR
// FOR SIMPLES
for (let indice = 0; indice < 5; indice++) {
    console.log('Estou aprendendo', indice + 1)
}
// FOR COM IF (PARA IMPRIMI APENAS NÚMEROS IMPARES)
for (let indice = 0; indice <= 5; indice++) {
    if (indice % 2 !== 0) {
        console.log('Apenas índices impares ', indice)
    }
}
// FOR COM IF COM DECREMENTO (PARA IMPRIMIR APENAS NÚMEROS PARES)
for (let indice = 5; indice >= 0; indice--) {
    if (indice % 2 == 0) {
        console.log('Apenas índices pares, com decremento ', indice)
    }
}

// WHILE
// REUTILIZAÇÃO DA VARIÁVEL INDICE DURANTE O PROCESSO DOS DIFERNETES WHILE
let indice = 5

// WHILE SIMPLES COM DECREMENTO
while (indice >= 1) {
    console.log('Usando o WHILE ',indice)
    indice--
}
// INDICE = 0

// WHILE COM IF (PARA IMPRIMIR APENAS NÚMEROS IMPARES)
while (indice <= 5){
    if (indice % 2 !== 0){
        console.log('Apenas índices impares ',indice)
    }
    indice++
}
// INDICE = 6

// WHILE COM IF (PARA IMPRIMIR NÚMEROS IMPARES) COM DECREMENTO
while (indice >= 1) {
    if (indice % 2 == 0) {
        console.log('Apenas índices pares ',indice)
    }
    indice--
}
// INDICE = 0

// DO - WHILE
do {
    console.log('digitando... ', indice + 1)
    indice++
} while (indice < 10)

// FOR - IN
const pessoa = {
    nome: 'Oliver',
    idade: 25
}

for (let chave in pessoa) {
    console.log(chave, pessoa[chave])
}

// FOR - OF