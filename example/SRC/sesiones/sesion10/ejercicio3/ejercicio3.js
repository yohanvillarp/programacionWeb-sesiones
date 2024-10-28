/*Crea un programa que reciba un monto a pagar y calcule su precio final, incluyendo un impuesto al valor agregado (IGV) del 18%. El programa mostrará el monto total a pagar después de aplicar el impuesto.*/

document.getElementById("enviar").addEventListener("click", ()=>{
    let monto = document.getElementById("monto").value;
    let total = parseInt(monto) + monto*0.18;
    let inputTotal = document.getElementById("total");
    inputTotal.value = total;
    alert(`El monto total incluyendo impuestos es de ${total}`)
});