document.getElementById("eleccion1").addEventListener("click", getSeleccion);
document.getElementById("eleccion2").addEventListener("click", getSeleccion);
document.getElementById("eleccion3").addEventListener("click", getSeleccion);


function getSeleccion(e){
    const idButton = e.target.id;

    switch(idButton){
        case "eleccion1":
            alert("Aquí tiene su pescado a la hoja , acompañado de salsa de cocona");
            break;
        case "eleccion2":
            alert("Aquí tiene su tacacho con cecina más su refresco de carambola");
            break;
        case "eleccion3":
            alert("Aquí tiene su caldo de gallina, acompañado de su arroz sin sal.");
            break;
        default:
            alert("Aquí tiene su menú");
    }
}