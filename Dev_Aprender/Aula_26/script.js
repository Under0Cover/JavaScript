// Exercício 04

// Radar de Velocidade
const velocidadePermitida = 70
const pontosMaximos = 12
const calculoPontos = 5

function radar(velocidade) {
    if (velocidade <= velocidadePermitida) {
        console.log('Velocidade aceitável!!')}
    else {
        const pontos = Math.floor(((velocidade - velocidadePermitida) / calculoPontos))
        if (pontos >= pontosMaximos) {
            console.log('Carteira Suspensa')
        } else {
            console.log('Pontos: ',pontos)
        }
    }
}

radar(80)