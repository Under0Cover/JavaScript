function verificar() {
	nome = document.getElementById('nome').value
	convidados = ['Amanda', 'Sabrina', 'Rafael', 'Jonas', 'Carol', 'Jhonatan']
	
	if (convidados.includes(nome)) {
		document.getElementById('retorno').innerText = 'Você pode entrar!'
	} else {
		document.getElementById('retorno').innerText = 'Você não pode entrar!!!'
	}
}