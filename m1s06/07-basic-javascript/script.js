function mostrarMensagemBoasVindas() {
  alert("Bem-vindo ao meu site!");
}
mostrarMensagemBoasVindas()

function updateName() {
  let newUserName = prompt("Digite o novo nome de usuário:");
  console.log(newUserName)
  if (newUserName) {
   
      let userNameElement = document.getElementById("userName");
      userNameElement.textContent = "Nome: " + newUserName;
    
  }
}

