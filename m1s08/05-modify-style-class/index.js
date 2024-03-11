var elementos = document.querySelectorAll('.minhaClasse');
    
elementos.forEach(function(elemento) {
    elemento.style.color = 'blue'; 
    elemento.style.fontWeight = 'normal'; 
});


var inputs = document.querySelectorAll('.meuInput');


inputs.forEach(function(input) {
    input.style.border = '2px solid green'; 
    input.style.padding = '5px'; 
});