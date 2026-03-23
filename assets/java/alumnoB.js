const btnParteB = document.getElementById("btn-parte-b");
const status = document.getElementById("status");

//evento al hacer clic
btnParteB.addEventListener("click", function () {

  //cambiar el texto del estado
  status.innerText = "OPERACIÓN EN CURSO";

  //cambiar fondo a gris oscuro
  document.body.style.backgroundColor = "#4d4a4a";

});