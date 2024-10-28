document.getElementById("submit").addEventListener("click", ()=>{
    verificacionEdad();
});

function verificacionEdad(){
    let edad = document.getElementById("edad").value;
    let compania = document.getElementById("compania").value;

    if(edad >= 0){
        if(edad<18 && compania != "adulto")
            alert("Los menores de edad no pueden pasar sin compañia adulta");
        else if(edad<18 && compania == "adulto"){
            alert("Puede ingresar joven , no quiero alborotos!");
        }else{
            beneficios(edad);
        }
    }
    
}

function beneficios(edad){
    if(edad>=18 && edad<=29)
        alert("Puede ingresar");
    else if(edad>=30 && edad<=60)
        alert("Puede ingresar y reclamar su cerveza en el bar al fondo, entrele!");
    else if(edad>60)
        alert("Bienvenido señor, puede comprar cualquier bebida y trago con un descuento del 10%, no sea timido");
}   