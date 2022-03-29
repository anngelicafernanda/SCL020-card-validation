import validator from "./validator.js";

const numeroTarjeta = document.querySelector("#inputNumero");
const esValida = document.querySelector(".esValida");

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

  esValida.textContent = validator.validar(valorInput);
  //Muestra el true o false
  numeroTarjeta.textContent = valorInput;
});
