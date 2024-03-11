let newParagraph = document.createElement("p");
    
let texto = document.createTextNode("Este é um novo parágrafo adicionado dinamicamente.");
newParagraph.appendChild(texto);

let container = document.getElementById("container");
container.appendChild(newParagraph)