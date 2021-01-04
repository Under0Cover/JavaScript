// Exercício 13 - Montador de postagem de blog

let postagem = {
    titulo: 'a',
    mensagem: 'b',
    autor: 'Oliver',
    visualizacoes: 10,
    comentarios: [
        autor = 'a',
        mensagem = 'b'
    ],
    estaAoVivo: true
}

console.log(postagem)

postagem.titulo = 'Primeira postagem'
postagem.mensagem = 'Primeira mensagem postada'

console.log(postagem)

postagem.comentarios[0] = 'João de Deus'
postagem.comentarios[1] = 'Acompanhando desde o começo as postagens'
postagem.estaAoVivo = false

console.log(postagem)
console.log(postagem.autor)
console.log(postagem.mensagem)
console.log(postagem.comentarios[1])
console.log(postagem.comentarios[0])