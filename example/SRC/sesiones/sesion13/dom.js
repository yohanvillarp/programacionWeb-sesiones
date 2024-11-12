let titulo = document.getElementById('titulo');
console.log(titulo);

titulo.style.color = "red";

let links = document.getElementsByClassName("menu");
console.log("links: ", links);

let arrayLinks = Array.from(links);
console.log("Array links: ", arrayLinks);

arrayLinks.forEach(function(item){
    console.log("li: ", item);
    item.style.color = "blue";
    item.innerHTML = "Opciones";
});

principal.innerHTML = `
<article>
    <h2>Chat GPT anunció capaciades en audio e imagenes</h2>
    <p>
        La empresa de OPEN IA anunció la incorporación de nuevas funcionalidades para su herramienta simbolo que es el denominado chatGPT
    </p>
</article>
`;

let foot = document.getElementsByClassName("foot");

let array = Array.from(foot);

array.forEach(function(item){
    item.innerHTML = `
    <p>
        Todos los derechos reservados
    </p>
    `;
});