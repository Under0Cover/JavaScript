// Exercício 14 - Constructor Function

function Postagem(titulo, mensagem, autor) {
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.visualizacoes = 0,
    this.comentarios = [],
    this.estaoAoVivo = false
}

let postagem = new Postagem('Primeira postagem', 'Minha primeira postagem', 'Oliver')
console.log(postagem)
postagem.comentarios[0] = 'Acompanhando desde o começo as postagens!'
postagem.comentarios[1] = 'João de Deus'
postagem.visualizacoes = 1

console.log(postagem)