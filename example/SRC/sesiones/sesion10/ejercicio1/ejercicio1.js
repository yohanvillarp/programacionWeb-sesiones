/*
Crea un programa que solicite al usuario su nombre, apellido y edad para luego presentar un saludo amigable, mostrando la información ingresada. Por ejemplo: "Buen día, soy Denys Jaramillo y tengo 41 años." El resultado se mostrará en una alerta o en la consola
*/

document.getElementById("enviar").addEventListener("click", ()=>{
    let nombres = document.getElementById("nombres").value;
    let apellidos = document.getElementById("apellidos").value;
    let edad = document.getElementById("edad").value;

    if(nombres!="" && apellidos!="" && edad!=""){
        alert(`Buen día, soy ${nombres} ${apellidos} y tengo ${edad} años`);
    }
    
});