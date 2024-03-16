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
		
			mostrarCarrinho();
	} else {
			alert('Produto não encontrado. Não foi possível adicionar ao carrinho.');
	}
	
}
function calcularTotal() {
	let total = 0;
	carrinho.forEach(function(produto) {
			total += produto.preco;
	});
	
	if (total > 0) {
			document.getElementById('valorTotal').textContent = 'Valor Total do Carrinho: R$ ' + total.toFixed(2);
	} else {
			document.getElementById('valorTotal').textContent = 'Carrinho vazio';
	}
}
function mostrarCarrinho() {
	var listaCarrinho = document.getElementById('listaCarrinho');
	listaCarrinho.innerHTML = ''; 
	
	carrinho.forEach(function(produto) {
			var itemLista = document.createElement('li');
			itemLista.textContent = produto.nome + ' - R$ ' + produto.preco.toFixed(2);
			listaCarrinho.appendChild(itemLista);
	});
}

function calcularTotalCarrinho() {
	var total = 0;
	carrinho.forEach(function(produto) {
			total += produto.preco;
	});
	return total;
}

function exibirTotalCarrinho() {
	var valorTotal = calcularTotalCarrinho();
	var valorTotalElement = document.getElementById('valorTotal');
	if (valorTotal > 0) {
			valorTotalElement.textContent = 'Valor Total do Carrinho: R$ ' + valorTotal.toFixed(2);
	} else {
			valorTotalElement.textContent = 'Carrinho vazio.';
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


