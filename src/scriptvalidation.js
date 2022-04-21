import validator from "./validator.js";

const respuesta = document.getElementById("containerResp");
const numeroTarjeta = document.querySelector("#inputNumero");
const nombreTarjeta = document.querySelector("#inputNombre");
const month = document.querySelector("#month");
const year = document.querySelector("#year");
const cvv = document.querySelector("#cvv");
const formulario = document.querySelector("#formulario");
const esValida = document.querySelector(".esValida");
const mensajeResp = document.querySelector("#mensaje");
const mask = document.querySelector("#mascara");

respuesta.style.visibility = "hidden";

nombreTarjeta.addEventListener("keyup", (e) => {
  let valorNombre = e.target.value;
  nombreTarjeta.value = valorNombre.replace(/[0-9]/g, "");
});

numeroTarjeta.addEventListener("keyup", (e) => {
  let valorInput = e.target.value;
  numeroTarjeta.value = valorInput

    .replace(/\s/g, "")
    // Elimina las letras
    .replace(/\D/g, "");
});

month.addEventListener("keyup", (e) => {
  let valorMes = e.target.value;
  month.value = valorMes

    .replace(/\s/g, "")
    // Elimina las letras
    .replace(/\D/g, "");
});

year.addEventListener("keyup", (e) => {
  let valorYear = e.target.value;
  year.value = valorYear

    .replace(/\s/g, "")
    // Elimina las letras
    .replace(/\D/g, "");
});

cvv.addEventListener("keyup", (e) => {
  let valorCVV = e.target.value;
  cvv.value = valorCVV

    .replace(/\s/g, "")
    // Elimina las letras
    .replace(/\D/g, "");
});

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  let valorTarjeta = numeroTarjeta.value;
  formulario.style.visibility = "hidden";
  // document.getElementById("formulario").style.visibility = "hidden";
  respuesta.style.visibility = "visible";

  if (validator.isValid(valorTarjeta) === true) {
    esValida.textContent = "La tarjeta ingresada es una tarjeta válida";
    mensajeResp.textContent =
      "Felicidades, tu tarjeta fue validada exitosamente!!";
    document.querySelector("#invalid").style.visibility = "hidden";
  } else {
    esValida.textContent = "La tarjeta ingresada es una tarjeta inválida";
    mensajeResp.textContent = "Por favor, ingrese un número de tarjeta válido.";
    document.querySelector("#verified").style.visibility = "hidden";
  }

  mask.textContent = validator.maskify(numeroTarjeta.value);

  //console.log(valorInput);
  //Muestra el true o false
  //numeroTarjeta.textContent = valorInput;
});
