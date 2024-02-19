function greetingPerHour(hour) {
    if (hour >= 0 && hour < 12) {
      return "Bom dia!";
    } 
    if (hour < 18) {
      return "Boa tarde!";
    } 
    return "Boa noite!";
  }
  
 
  const currentTime = new Date().getHours(); 
  
  console.log(greetingPerHour(currentTime));