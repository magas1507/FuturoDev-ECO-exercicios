function addTasks() {
	let input = document.getElementById("novaTarefa");
	let textoTarefa = input.value.trim();

	if (textoTarefa !== '') {
		let lista = document.getElementById("listaTarefas");
		let novaTarefaItem = document.createElement("li");

		let checkboxConcluido = document.createElement("input");
		checkboxConcluido.type = "checkbox";
		checkboxConcluido.addEventListener("change", function () {
			if (this.checked) {
				novaTarefaItem.classList.add("completed");
			} else {
				novaTarefaItem.classList.remove("completed");
			}
		});

		let textoTarefaSpan = document.createElement("span");
		textoTarefaSpan.textContent = textoTarefa;

		let botaoRemover = document.createElement("button");
		botaoRemover.textContent = "Remover";
		botaoRemover.addEventListener("click", function () {
			lista.removeChild(novaTarefaItem);
		});

		novaTarefaItem.appendChild(checkboxConcluido);
		novaTarefaItem.appendChild(textoTarefaSpan);
		novaTarefaItem.appendChild(botaoRemover);

		lista.appendChild(novaTarefaItem);

		input.value = '';
	} else {
		alert("Por favor, digite uma tarefa válida!");
	}
}