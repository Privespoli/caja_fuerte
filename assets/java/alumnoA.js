const misNumeros = [27, 556, 1992, 34];

const botonA = document.getElementById("btn-parte-a");
const pantallaCombinacion = document.getElementById("combinacion-display");

botonA.addEventListener("click", function() {
const primerosDos = misNumeros[0] + " - " + misNumeros[1];

pantallaCombinacion.innerText = primerosDos;

console.log("Parte A de la combinación activada: " + primerosDos);
});