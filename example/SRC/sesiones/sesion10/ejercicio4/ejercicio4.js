/*Desarrolla un programa que determine el monto equitativo a pagar por cada uno de los 3 amigos después de salir a comer. El programa solicitará el monto total a pagar y calculará cuánto debe pagar cada amigo para que todos contribuyan por igual. Luego, mostrará el resultado mediante una alerta o en la consola.*/

document.getElementById("calcular").addEventListener("click", () => {
    let parte = document.getElementById("monto").value/3;
    document.getElementById("amigo1").value = parte;
    document.getElementById("amigo2").value = parte;
    document.getElementById("amigo3").value = parte;
});