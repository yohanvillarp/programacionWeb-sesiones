//Asignando eventos a botones
document.getElementById("solucion1").addEventListener("click", solucion1);

document.getElementById("solucion2").addEventListener("click", solucion2);

let productos = [
    {
        nombre: "Billetera Renzo Costa",
        precio: 250
    },
    {
        nombre: "Whisky Johny Walker etiqueta azul",
        precio: 450
    },
    {
        nombre: "Six Pack de cerveza cusqueña Trigo",
        precio: 45
    },
    {
        nombre: "Set de herramientas para laptops",
        precio: 230
    }
]

function solucion1(){
    //mensaje de apertura de consola
    comun();

    console.log("Productos con precio superior a S/. 220:");
    for(let i = 0; i < productos.length; i++){
        if(productos[i].precio > 220)
            console.log((i+1)+": "+productos[i].nombre);
    }
}
function solucion2(){
    console.log("Promedios de estudiantes");

    for(let i=0; i<alumnos.length; i++){
        console.log("El promedio de "+alumnos[i].nombre+" es de : "+promedy(alumnos[i].notas[0], alumnos[i].notas[1], alumnos[i].notas[2]));
    }
}

function comun(){
    alert("Por favor abra la consola manualmente o presione ctrl + shift + J")
}
function promedy(n1, n2, n3){
    return parseFloat((n1+n2+n3)/3).toFixed(2);
}




let alumnos = [
    {
        nombre: "Fiorella",
        notas: [16,18,19]
    },
    {
        nombre: "Matias",
        notas: [18,9,10]
    },
    {
        nombre: "Julio",
        notas: [18,17,20]
    },
    {
        nombre: "Domitila",
        notas: [14,11,8]
    }
]