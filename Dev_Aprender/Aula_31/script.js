// Exercício 09

// Contador de asteríscos
function exibirAsteriscos(linhas) {
    let padrao = ''
    for (let linha = 1; linha <= linhas; linha++) {
        padrao += '*'
        console.log(padrao)
    }
}

// Outra forma de fazer
//function exibirAsteriscos(linhas) {
//    for (let linha = 1; linha <= linhas; linha++) {
//        let padrao = ''
//        for (let indice = 0; indice <= linha; indice++) {
//            padrao += '*'
//        }
//        console.log(padrao)
//    }
//}

exibirAsteriscos(10)