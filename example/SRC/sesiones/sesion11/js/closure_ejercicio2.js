document.getElementById("example2").addEventListener("click", () => {
    alert("Presione ctrl+shift+J o abra la consola manualmente");
    
    function makeFunc() { 
        const name="Mozilla"; 
        function displayName(){
            console.log(name);
        }
        return displayName;
    } 
    const myFunc = makeFunc(); 
    myFunc(); 
});