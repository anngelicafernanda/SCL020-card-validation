const validator = {
  isValid: function (valorInput) {
    let tarjeta = valorInput;

    let numeroTemporal = tarjeta.split("");

    for (let i = 0; i < numeroTemporal.length; i++) {
      if (i % 2 === 0) {
        let acumulador = numeroTemporal[i] * 2;
        if (acumulador >= 10) {
          let acumulador2 = acumulador - 9;
          numeroTemporal[i] = acumulador2;
        } else {
          numeroTemporal[i] = acumulador;
        }
      }
    }
    let sumatoria = 0;
    for (let i = 0; i < numeroTemporal.length; i++) {
      sumatoria += parseInt(numeroTemporal[i]);
    }
    console.log(sumatoria);

    if (sumatoria % 10 === 0) {
      console.log("tarjeta valida");

      return true;
    } else {
      console.log("tarjeta invalida");
      return false;
    }
  },

  maskify: (valorInput) => {
    let tarjetaArray = valorInput.split("");

    for (let i = 0; i < tarjetaArray.length - 4; i++) {
      tarjetaArray[i] = "#";
    }

    let tarjetaMaskify = tarjetaArray.join("");

    return tarjetaMaskify;
  },
};

export default validator;