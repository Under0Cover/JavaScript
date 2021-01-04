// Exercício 15 - Faixa de Preços

// Primeira opção
let faixas = [
    {tooltip: 'Até R$ 700', minimo: 0, máximo: 700},
    {tooltip: 'De R$ 700 a R$ 1.000', minimo: 700, máximo: 1000},
    {tooltip: 'R$ 1.000 ou mais', minimo: 1000, máximo: 999999}
]

// Segunda Opção
function faixaPreco(tooltip, minimo, maximo) {
    return {
        tooltip,
        minimo,
        maximo
    }
}

let faixas2 = [
    faixaPreco('Até R$ 700', 0, 700),
    faixaPreco('De R$ 700 a R$ 1.000', 700, 1000),
    faixaPreco('De R$ 1.000 ou mais', 1000, 100000)
]

// Terceia Opção
function faixaDePreco(tooltip, minimo, maximo) {
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo
}

let faixas3 = [
    new faixaDePreco('Até R$ 700', 0, 700),
    new faixaDePreco('De R$ 700 a R$ 1.000', 700, 1000),
    new faixaDePreco('De R$ 1.000 ou mais', 1000, 100000)
]


console.log(faixas)
console.log(faixas2)
console.log(faixas3)