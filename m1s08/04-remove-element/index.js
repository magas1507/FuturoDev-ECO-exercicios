function removerElemento() {
 
  let container = document.getElementById("container");
  
  let segundoParagrafo = container.children[1];
  
  container.removeChild(segundoParagrafo);
}