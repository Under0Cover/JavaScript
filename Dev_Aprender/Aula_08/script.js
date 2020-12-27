// Declaração de Funções = Verbo + Substantivo

let corSite = 'azul'
let corSiteDois = 'azul'
let corsiteTres = 'azul'

function resetaCor(){
    corSite = '';
}

console.log(corSite)
resetaCor()
console.log(corSite)

function mudaCor(cor){
    corSiteDois = cor;
}

console.log(corSiteDois)
mudaCor('vermelho')
console.log(corSiteDois)

function mudaCorETonalidade(cor, tonalidade){
    corsiteTres = cor + tonalidade
}

console.log(corsiteTres)
mudaCorETonalidade('verde', ' claro')
console.log(corsiteTres)