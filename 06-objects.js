
  
  // Objet 1
  const person1 = {
    nome: "Gabriel",
    sobrenome: "Carrillo",
    idade: 29,
    profissao: "Programador"
  };
  
  console.log(person1) 
  
  // Objeto 2
  const person2 = {
    nome: "Maria",
    sobrenome: "Acosta",
    idade: 35,
    profissao: "Bioanalista"
  };
  let person2String = JSON.stringify(person2)
  console.log(person2String);

  // Objeto 3
  const person3 = {
    nome: "Hector",
    sobrenome:"Flores",
    idade: 32,
    profissao: "Lic Ciência da Computação"
  };
  
for (let prop in person3) {
    console.log(`${prop}: ${person3[prop]}`)
}