function leap(years) {
  switch (true) {
    case (years % 400 === 0):
      console.log("O ano é bissexto.");
      break;
    case (years % 100 === 0):
      console.log("O ano não é bissexto.");
      break;
    case (years % 4 === 0):
      console.log("O ano é bissexto.");
      break;
    default:
      console.log("O ano não é bissexto.");
  }
}

leap(2020);
leap(2021);
leap(1900);
leap(2000);
leap(2024);