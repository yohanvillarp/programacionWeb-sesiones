let gato = "Felix";
localStorage.setItem("NombreGato", gato);

let perro = {
    nombre : "Buddy",
    edad : 2,
    raza : "Golder Retriever"
}

localStorage.setItem("Perro", JSON.stringify(perro));

