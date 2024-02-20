function verifyAge() {
  
    const age = parseInt(prompt("Digite sua idade:"));
  
    if (age >= 18) {
      console.log("Você é maior de idade.");
    } else {
      console.log("Você é menor de idade.");
    }
  }
  
  
  verifyAge();