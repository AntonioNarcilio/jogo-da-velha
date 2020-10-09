var posicaoJogada=[]
var tabuleiro=[]
// Variável referente ao jogador
var jogador=0
// Variável referente a maquina
var CPU=1
// Variável referente a vez de quem ira jogar
var quemJoga=jogador
// Variável referente a inicialização do jogo / saber se o jogo esta rodando
var start=true

var icon_x='<img src="/assets/x.svg" style="width: 60%;" >'
var icon_o='<img src="/assets/o.svg" style="width: 60%;" >'

// var quemComeca=jogador
var verificarVencedor=''

const player = (position) => {

	// 🎯 Vez jogador
	// Se o jogo estiver rodando e a vez for do jogador
	if ((start == true)&&(quemJoga == jogador)) {
		
		// 🔖 verificando posições escolhida
		switch (position) {

			case 1:
				// Verifica se a posição pode ser jogada, se esta vazia
				if (posicaoJogada[0][0] == '') {
					posicaoJogada[0][0] = icon_x
					quemJoga=CPU
				}
			break

			case 2:
				// Verifica se a posição pode ser jogada, se esta vazia
				if (posicaoJogada[0][1] == '') {
					posicaoJogada[0][1] = icon_x
					quemJoga=CPU
				}
			break

			case 3:
				// Verifica se a posição pode ser jogada, se esta vazia
				if (posicaoJogada[0][2] == '') {
					posicaoJogada[0][2] = icon_x
					quemJoga=CPU
				}
			break

			case 4:
				// Verifica se a posição pode ser jogada, se esta vazia
				if (posicaoJogada[1][0] == '') {
					posicaoJogada[1][0] = icon_x
					quemJoga=CPU
				}
			break

			case 5:
				// Verifica se a posição pode ser jogada, se esta vazia
				if (posicaoJogada[1][1] == '') {
					posicaoJogada[1][1] = icon_x
					quemJoga=CPU
				}
			break

			case 6:
				// Verifica se a posição pode ser jogada, se esta vazia
				if (posicaoJogada[1][2] == '') {
					posicaoJogada[1][2] = icon_x
					quemJoga=CPU
				}
			break

			case 7:
				// Verifica se a posição pode ser jogada, se esta vazia
				if (posicaoJogada[2][0] == '') {
					posicaoJogada[2][0] = icon_x
					quemJoga=CPU
				}
			break

			case 8:
				// Verifica se a posição pode ser jogada, se esta vazia
				if (posicaoJogada[2][1] == '') {
					posicaoJogada[2][1] = icon_x
					quemJoga=CPU
				}
			break

			default:
				// Verifica se a posição pode ser jogada, se esta vazia
				if (posicaoJogada[2][2] == '') {
					posicaoJogada[2][2] = icon_x
					quemJoga=CPU
				}
			break
		}

			// Apos verificação, chamar a função
			attGameBoard()

			verificarVencedor = checkWinner()
			console.log(verificarVencedor)
			// Verificando se há vencedor
			if (verificarVencedor != '' && verificarVencedor != undefined) {
				
				if (verificarVencedor === icon_x) {
					alert("Parabéns você venceu 🏆")
				}
				else 
				 if (verificarVencedor === icon_o) {
					alert("Infelizmente você perdeu 😞 para a cpu 🥈")
				}
				
				// Parando jogo
				start=false
				// Evitando que a cpu jogue
				quemJoga=null
			}

			// Apos sair do case verifique se quem joga é realmente a cpu
			if (quemJoga == CPU) {
				cpu()
			}

	}

}

// 🔖 Modo very easy
const cpu = () => {
	// Se jogo estiver rolando...
	if (start == true) {
		do {
		// Sorteando valores entre 0 e 2, referente a linha
		var	i = Math.round(Math.random()*2)
		// Sorteando valores entre 0 e 2, referente a coluna
		var	j = Math.round(Math.random()*2)
		} while(posicaoJogada[i][j] != "") // Enquanto diferente de vazio execute
		// Quando sair do loop acima, mostrar o simbolo referente a jogada da cpu 
		posicaoJogada[i][j] = icon_o
	}

	verificarVencedor = checkWinner()
	console.log(verificarVencedor)
	// Verificando se há vencedor
	if (verificarVencedor != '' && verificarVencedor != undefined)  {

		if (verificarVencedor === icon_x) {
			alert("Parabéns você venceu 🏆")
		}
		else 
		 if (verificarVencedor === icon_o) {
			alert("Infelizmente você perdeu 😞 para a cpu 🥈")
		}
		// Parando jogo
		start=false
	}

	// Atualizando o tabuleiro
	attGameBoard()
	// passando jogada para o jogador
	quemJoga=jogador
}


const attGameBoard = () => {
	// Percorrendo o tabuleiro
	for (var i = 0; i < 3; i++) {
		for (var j = 0; j < 3; j++) {
			// 🔖 Se determinada posicao por igual a X, então atualize o tabuleiro 
			if (posicaoJogada[i][j] == icon_x) {
				// Atualizando o visual no html
				tabuleiro[i][j].innerHTML=icon_x
				// Mudando o curso, para que não seja mais possível selecionar
				tabuleiro[i][j].style.cursor="default"
			}
			// 🔖 Se determinada posicao por igual a O, então atualize o tabuleiro 
			else if (posicaoJogada[i][j] == icon_o) {
				// Atualizando o visual no html
				tabuleiro[i][j].innerHTML=icon_o
				// Mudando o curso, para que não seja mais possível selecionar
				tabuleiro[i][j].style.cursor="default"
			}
			//  🔖 Se não for nem X ou nem O então limpe o tabuleiro
			else {
				// Atualizando o visual no html (resetando)
				tabuleiro[i][j].innerHTML=""
				// Voltando o curso para o qual foi pre estabelecido
				tabuleiro[i][j].style.cursor="pointer"
			}
		}
	}

}


const checkWinner = () => {

	// 🔖 Verificando se a vencedor na horizontal / linhas
	for (var i = 0; i < 3; i++) {
		if ((posicaoJogada[i][0] === posicaoJogada[i][1]) && (posicaoJogada[i][1] === posicaoJogada[i][2])) {
			// retornando o simbolo de quem venceu
			return posicaoJogada[i][0]
		}
	}

	
	// 🔖 Verificando se a vencedor na vertical / colunas
	for (var j = 0; j < 3; j++) {
		if ((posicaoJogada[0][j] === posicaoJogada[1][j]) && (posicaoJogada[1][j] === posicaoJogada[2][j])) {
			// retornando o simbolo de quem venceu
			return posicaoJogada[0][j]
		}
	}

	// 🔖 Verificando se a vencedor na diagonal, superior esquerdo ate inferior direito
	if ((posicaoJogada[0][0] === posicaoJogada[1][1]) && (posicaoJogada[1][1] === posicaoJogada[2][2])) {
			// retornando o simbolo de quem venceu
			return posicaoJogada[0][0]
	}

	// 🔖 Verificando se a vencedor na diagonal, inferior esquerdo ate superior direito
	if ((posicaoJogada[0][2] === posicaoJogada[1][1]) && (posicaoJogada[1][1] === posicaoJogada[2][0])) {
			// retornando o simbolo de quem venceu
			return posicaoJogada[2][2]
	}
}


const boot = () => {
	start=true

	// 🔖 Zerando a matriz do jogo
	posicaoJogada=[
		['','',''],
		['','',''],
		['','','']
	]

	// 🔖 Passando os id declarado no documento index.html que se referem a cada posicao no tabuleiro
	tabuleiro=[
		[document.getElementById("position1"),document.getElementById("position2"),document.getElementById("position3")],
		[document.getElementById("position4"),document.getElementById("position5"),document.getElementById("position6")],
		[document.getElementById("position7"),document.getElementById("position8"),document.getElementById("position9")]
	]
	// Chamando função onde o tabuleiro acabara sendo zerado
	attGameBoard()

	var quemComeca = Math.round(Math.random() * 1)
	

	if (quemComeca == 0) {
			quemJoga=quemComeca
			document.getElementById('quemJoga').innerHTML="Quem começa é 🎉 você 🎊"
	}else {
		quemComeca=CPU
		quemJoga=quemComeca
		document.getElementById('quemJoga').innerHTML="Quem começa é a cpu 🤖"
		cpu()
	}
}
// Chamando a função
window.addEventListener("load", boot)