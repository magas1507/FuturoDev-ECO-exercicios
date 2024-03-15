let carrinho = [];
function consultarProduto() {
	let input = document.getElementById("produtoInput");
	let produto = input.value.trim();
	let preco = simularConsultaPreco(produto);
	
	if (preco !== null) {

		document.getElementById('resultado').innerText = 'O valor do produto é: R$ ' + preco.toFixed(2);
	} else {

		document.getElementById('resultado').innerText = 'Produto não encontrado. Por favor, verifique o código ou nome.';
	}
}

function comprarProduto() {

	let input = document.getElementById("produtoInput");
	let produto = input.value.trim();
	
	let preco = simularConsultaPreco(produto);
	
	if (preco !== null) {
			carrinho.push({ nome: produto, preco: preco });
			alert('Produto adicionado ao carrinho: ' + produto);
	} else {
			alert('Produto não encontrado. Não foi possível adicionar ao carrinho.');
	}
	
}

function simularConsultaPreco(produto) {
	
	let precos = {
		"arroz": 10.50,
		"feijão": 8.00,
		"macarrão": 5.75,
		"atum": 19.79,
		"banana": 9.79,
		"peixe": 49.79,
		"carne": 29.79,
		"morangos": 9.79,
		
	};
	
	return precos[produto.toLowerCase()] || null;
}
