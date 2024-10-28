/*Desarrolla un programa que solicite la base y la altura de dos triángulos. Luego calculará y comparará el área de ambos triángulos, mostrando también cuál de ellos tiene el área más grande.*/

document.getElementById("calcular").addEventListener("click", ()=>{
    
    let baseA = parseFloat(document.getElementById("base1").value);
    let alturaA = parseFloat(document.getElementById("altura1").value);
    let baseB = parseFloat(document.getElementById("base2").value);
    let alturaB = parseFloat(document.getElementById("altura2").value);

    document.getElementById("area1").value = calcularArea(baseA, alturaA);
    document.getElementById("area2").value = calcularArea(baseB, alturaB);
    
});


function calcularArea(base, altura){
    return base*altura/2;
}