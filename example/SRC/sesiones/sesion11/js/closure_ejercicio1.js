document.getElementById("example1").addEventListener("click", () => {
    alert("Presione ctrl+shift+J o abra la consola manualmente");
    
    const baseFuncion = base(); 
    baseFuncion();
});


function base() { 
    let count = 1; 
    //¿el parametro a es necesario?
    function contador(a){ 
        let count1 = 1; 
        count = count + count1; 
        console.log(count); 
    } 
    return contador; 
} 