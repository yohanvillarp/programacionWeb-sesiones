/*Desarrolla un programa que reciba dos cadenas de texto, 'a' y 'b', y devuelva una nueva cadena combinando ambas de la siguiente manera: corta + larga + corta. La cadena más corta estará en el exterior y la más larga en el interior. Por ejemplo, si las cadenas son "bye" y "adios", el resultado sería "byeadiosbye".*/

document.getElementById("enviar").addEventListener("click", () => {
    let a = document.getElementById("cadenaA").value;
    let b = document.getElementById("cadenaB").value;
    let corta, larga;
    if(a.length > b.length){
        corta = b; larga = a;
    }
    else{
        corta = a; larga = b;
    }
        
    document.getElementById("resultado").value = `${corta}${larga}${corta}`;
});