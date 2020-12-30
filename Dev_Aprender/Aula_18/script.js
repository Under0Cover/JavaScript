// SWITCH CASE

let permissao = 'Comum'

switch (permissao) {
    case 'Comum':
        console.log('Usuário Comum')
        break
    case 'Gerente':
        console.log('Usuário Gerente')
        break
    case 'Diretor':
        console.log('Usuário Diretor')
        break
    default:
        console.log('Usuário não identificado!')
}