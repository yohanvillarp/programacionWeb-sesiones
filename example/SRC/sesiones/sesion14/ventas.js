import { productos } from "./productos.js";

//declarando variables globales
let productosDisponiblesDiv = document.querySelector("#productosDisponibles");
let productosSeleccionadosDiv = document.querySelector("#productosSeleccionados");
let totalProductosSeleccionadosDiv = document.querySelector("#totalProductosSeleccionados");
let totalAGastar = 0;
let cantidadComprada = [];
let idProductosSeleccionados = [];
const LIMITE_COMPRA = 10;

//funciones

//no dependientes
function iniciarApp() {
  crearVistaProducto();
  definirEventosBotones();
  cargarProductosResumen();
}

function crearVistaProducto() {
  productos.forEach(function (item) {
    let nuevaTarjetaProducto = obtenerTarjetaProducto(
      item.imagen,
      item.nombre,
      item.precio,
      item.descripcion
    );
    productosDisponiblesDiv.appendChild(nuevaTarjetaProducto);
  });
}

function obtenerTarjetaProducto(img, nombre, precio, descripcion) {
  let tarjeta = document.createElement("div");
  tarjeta.classList.add("col-lg-3", "col-md-4", "col-sm-6", "mb-4");
  tarjeta.innerHTML = `
  <div class="card h-100"> 
      <img src="${img}" class="card-img-top" alt="${nombre}" style="object-fit: contain; height: 200px; width: 100%;" />
      <div class="card-body">
        <h5 class="card-title">${nombre}</h5>
        <p class="card-text">${descripcion}</p>
        <p class="card-text">S/ ${precio}</p>
        <button class="btn btn-primary w-100">Agregar</button>
      </div>
    </div>
  `;
  return tarjeta;
}

function definirEventosBotones() {
  let botones = document.getElementsByClassName("btn");
  
  for (let i = 0; i < botones.length; i++)
    botones[i].addEventListener("click", () => agregarProductoAResumen(i));
  
  document.getElementById("deleteAll").addEventListener("click", () => eliminarProductosSeleccionados()); 
  
}

//dependientes de evento agregar 
function guardarProductosLocalmente() {
  localStorage.setItem(
    "idProductosAlmacenados",
    JSON.stringify(idProductosSeleccionados)
  );
}

function obtenerProductoPorId(id) {
  return {
    id: id,
    imagen: productos[id].imagen,
    nombre: productos[id].nombre,
    precio: productos[id].precio,
    descripcion: productos[id].descripcion,
  };
}

function cargarProductosResumen() {
  let recuperado = JSON.parse(localStorage.getItem("idProductosAlmacenados"));
  if (recuperado != null)
    for (let i = 0; i < recuperado.length; i++)
      agregarProductoAResumen(recuperado[i]);
}

function agregarProductoAResumen(index) {
  let limiteAlcanzado = false;
  if (cantidadComprada[index] != undefined) 
    if (cantidadComprada[index] < LIMITE_COMPRA)
      incrementarCantidadProductoSeleccionado(index);
    else{
      alert("Usted solo puede comprar "+LIMITE_COMPRA+" "+productos[index].nombre);
      return ;
    }
    
  else productosSeleccionadosDiv.appendChild(añadirProductoSeleccionado(index));
  
  actualizarTotalAndGuardarProductoLocalmente(index)
  
}

function actualizarTotalAndGuardarProductoLocalmente(index){
  actualizarTotalGastar(index);
  idProductosSeleccionados.push(index);
  guardarProductosLocalmente(index);
}

function incrementarCantidadProductoSeleccionado(index) {
    cantidadComprada[index]++;
    let tarjetaExistente = document.getElementById(`comprar-${index}`);
    tarjetaExistente.querySelector(
      "#nro"
    ).textContent = `cantidad: ${cantidadComprada[index]}`;
  
}

function actualizarTotalGastar(index) {
  totalAGastar += productos[index].precio;
  totalProductosSeleccionadosDiv.innerHTML = crearVistaTotalCompra().getHTML();
}

function añadirProductoSeleccionado(index) {
  cantidadComprada[index] = 1;

  // Crea la tarjeta para el producto en el resumen
  let tarjeta = document.createElement("div");
  tarjeta.classList.add("p-2", "border", "mb-2", "rounded"); 
  tarjeta.id = `comprar-${index}`;

  tarjeta.innerHTML = `
      <h4 class="h6">${productos[index].nombre}</h4>
      <p class="mb-1">S/ ${productos[index].precio}</p>
      <p class="mb-1" id="nro">Cantidad: ${cantidadComprada[index]}</p>
  `;

  return tarjeta;
}

function crearVistaTotalCompra() {
  let total = document.createElement("div");

  total.innerHTML = `
    <p class="total">
      Total: S/${totalAGastar.toFixed(2)}
    </p>
    
  `;
  
  return total;
}

//evento deleteAll
function eliminarProductosSeleccionados() {
  localStorage.setItem(
    "idProductosAlmacenados",
    JSON.stringify([])
  );

  location.reload();
}


iniciarApp();