// Sólo ejecutamos el código cuando esté renderizado todo el documento
$("document").ready(iniciar);

// Lógica del script
function iniciar(){
    // Número aleatorio (entre 1 y 100) y número introducido por teclado
    let numSecreto = Math.floor((Math.random() * 100) + 1);
    let num; 
    // Número de intentos realizado
    let numIntentos = 0;
    let visor = document.getElementById("visor");

    enc = false;
    while (!enc){
       num = prompt("Introduce un número entre 1 y 100");
       numIntentos = numIntentos + 1;
       visor.innerText += ` ${num}`;

       if (num == numSecreto){
           alert("¡Adivinaste el número en "+numIntentos+" intentos!");
           break;
       }else if (num > numSecreto){
           alert("Tienes que decir un número más pequeño");
       }else{
           alert("Tienes que decir un número más grande");
       }
    }
}