/* Escribe un programa que solicite al usuario un número y determine si es positivo, negativo o cero, imprimiendo el resultado correspondiente.*/

document.getElementById("enviar").addEventListener("click", ()=>{
    let number = document.getElementById("number").value;
    let tipo;
    if(number == 0)
        tipo = "neutro";
    else if(number > 0)
        tipo = "positivo";
    else if(number < 0 )
        tipo = "negativo";
    
        alert(`El número ${number} es ${tipo}`)
    
});