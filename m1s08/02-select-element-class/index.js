window.onload = function () {
  let elements = document.getElementsByClassName("myClass");
  for (let i = 0; i < elements.length; i++) {
    elements[i].textContent = "Novo texto para todos os elementos";
  }
}