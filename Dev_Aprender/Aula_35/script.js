// Natureza Dinâmica de Objetos

const mouse = {
    cor: 'preto',
    marca: 'Dazz'
}

mouse.velocidade = 5000
mouse.modelo = 'M280'
mouse.trocaDPI = function(velocidade) {
    mouse.velocidade = velocidade
    console.log('Mudando DPI...')
}
mouse.cabo = 'USB'
mouse.pilha = true
console.log(mouse)
console.log(mouse.velocidade)
mouse.trocaDPI(1500)
console.log(mouse.velocidade)
console.log(mouse)
delete mouse.cor
console.log(mouse)