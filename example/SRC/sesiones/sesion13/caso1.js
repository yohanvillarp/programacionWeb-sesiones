/*Identificamos referencias*/
let inputProducto = document.getElementById("idProducto");
let btnAgregar = document.getElementById("btnAgregar");
let ulProductos = document.querySelector(".productos");

/*Creamos la función*/
function obtenerProductos(){
    let textoProducto = inputProducto.value;
    return textoProducto;
}


/*Añadiendo evento a btn*/
btnAgregar.addEventListener("click", () => {
    let textoObtenido = obtenerProductos();
    console.log("textoObtenido ", textoObtenido);
    listaProductos.push(textoObtenido);
    console.table(listaProductos);
    guardarProductos();
    dibujarProductos();
});


/*Creamos la función dibujarProductos*/
let listaProductos = [];
function dibujarProductos(){
    let htmlProductos = "";
    listaProductos.forEach(function(item){
        htmlProductos = htmlProductos + `<li>${item}</li>`
    });
    ulProductos.innerHTML = htmlProductos;
}

/*Guardar productos*/
function guardarProductos(){
    let listaProductosJSON = JSON.stringify(listaProductos);
    localStorage.setItem("listaProductos", listaProductosJSON);
}

/*cargar productos*/
function cargarProductos(){
    arrayRecuperado = localStorage.getItem("listaProductos");
    if(arrayRecuperado!= null)
        listaProductos = JSON.parse(arrayRecuperado);
}

/*cargar pagina*/
if (window.performance.navigation.type == 1) {
    cargarProductos();
    if(listaProductos != null)
        dibujarProductos();
}