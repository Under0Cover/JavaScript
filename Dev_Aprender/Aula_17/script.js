// IF - ELSE

// SAUDAÇÕES BASEADA PELO HORÁRIO DO DIA
// 00h ATÉ 11h59 -> BOM DIA
// 12h ATÉ 18H59 -> BOA TARDE
// CASO CONTRÁRIO -> BOA NOITE

let hora = new Date()

if (hora.getHours() > 0 && hora.getHours() < 12) {
    console.log('Bom dia')
} else if (hora.getHours() > 11 && hora.getHours() < 19) {
    console.log('Boa tarde')
} else {
    console.log('Boa noite')
}