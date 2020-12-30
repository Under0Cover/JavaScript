// Exercício 06

// Criar uma função para ler as propriedades de um objeto
// E retornar apenas as strings

// Dados meramente ilustrativos

const filme = {
    titulo: 'Vingadores',
    ano: 2018,
    diretor: 'Robin Smith',
    personagem: 'Thor',
    arrecadacao: 240.560,
    publico: 980.000
}

function propriedades(objeto) {
    for (propriedade in objeto) {
        if (typeof objeto[propriedade] === 'string') {
            console.log(propriedade, objeto[propriedade])
        }
    }
}

propriedades(filme)