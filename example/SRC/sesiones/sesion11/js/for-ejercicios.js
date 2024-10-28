document.getElementById("ejercicio1").addEventListener("click", ejercicio1);
document.getElementById("ejercicio2").addEventListener("click", ejercicio2);
document.getElementById("ejercicio3").addEventListener("click", ejercicio3);


function comun(){
    alert("revisa la consola manualmente o preciona ctrl+shift+J");
}

function ejercicio1(){
    let resultado;
    for(i=1; i<12; i++){
        resultado = i*7;
        if(resultado%2==0)
            console.log("7 * "+i+" = "+resultado);
    }
    comun()
}

function ejercicio2(){
    let num = parseInt(prompt("Ingrese un número"));

    function sumaRecursiva(n){
        if(n==1) return 1;
        else return n + sumaRecursiva(n-1);
    }

    let suma = sumaRecursiva(num);
    console.log("La suma de los números desde 1 hasta "+num+" es: "+suma);

    //avisando a usuario(a mi) que vea la consola :)
    comun()

}

function ejercicio3(){
    let presupuesto = document.getElementById("presupuesto").value;

    //avisando a usuario(a mi) que vea la consola :)
    comun();

    let valores = [50,20,10,100,30,10];
    let oneProduct = false;

    //separador para no generar confusiones
    console.log("Productos obtenidos:");

    for(let i=0; i<valores.length; i++){
        if(presupuesto < valores[i])
            break;
        else{
            presupuesto -= valores[i];
            console.log("Usted obtuvo el producto de "+valores[i]);
            oneProduct = true;
        }   
    }
    

    //0 productos alcanzados
    if(!oneProduct)
        console.log("Vacio como su corazón...");

    console.log("Te quedan: "+presupuesto+" soles");

}