import validator from "./validator.js";

const numeroTarjeta = document.querySelector("#inputNumero");
const nombreTarjeta = document.querySelector("#inputNombre");
const esValida = document.querySelector(".esValida");

nombreTarjeta.addEventListener("keyup", (e) => {
  let valorNombre = e.target.value;
  nombreTarjeta.value = valorNombre.replace(/[0-9]/g, "");
});

numeroTarjeta.addEventListener("keyup", (e) => {
  let valorInput = e.target.value;

  numeroTarjeta.value = valorInput
    .replace(/\s/g, "")
    // Eliminar las letras
    .replace(/\D/g, "")
    // Ponemos espacio cada cuatro numeros
    .replace(/([0-9]{4})/g, "$1 ")
    // Elimina el ultimo espaciado
    .trim();
  console.log(valorInput);

  esValida.textContent = validator.isValid(valorInput);
  //Muestra el true o false
  numeroTarjeta.textContent = valorInput;
});
