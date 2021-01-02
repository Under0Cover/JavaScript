// Clonar Objeto

const celular = {
    marcaCelular: 'ASUS',
    tamanhoTela: {
        vertical: 155,
        horizontal: 75
    },
    ligar: function(){
        console.log('Fazendo ligações...')
    }
}

const novoObjeto = Object.assign({
    bateria: 5500,
    cor: 'Preto'
},celular)
console.log(novoObjeto)

const novoObjeto2 = {...celular}
console.log(celular)
console.log(novoObjeto2)