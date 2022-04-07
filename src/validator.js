const validator = {
  isValid: function (valorInput) {
    const cardNumberArray = valorInput.split("");
    // console.log("🚀 ~ cardNumberArray", cardNumberArray);
    for (let index = 0; index < cardNumberArray.length; index++) {
      if (index % 2 === 0) {
        if (cardNumberArray[index] * 2 < 10) {
          cardNumberArray[index] = cardNumberArray[index] * 2;
        } else {
          cardNumberArray[index] = cardNumberArray[index] * 2 - 9;
        }
      } else {
        cardNumberArray[index] = cardNumberArray[index] * 1;
      }
    }
    let suma = 0;
    for (let index = 0; index < cardNumberArray.length; index++) {
      suma = suma + cardNumberArray[index];
    }
    let cardValidated = 0;
    if (suma % 10 === 0) {
      cardValidated = true;
    } else {
      cardValidated = false;
    }
    // console.log("🚀 ~ cardNumberArrayDoubleSum", cardNumberArray);
    // console.log("🚀 ~ sum", suma);
    // console.log("🚀 ~ cardValidated", cardValidated);
    return cardValidated;
  },

  maskify: (valorInput) => {
    let tarjetaArray = valorInput.split("");

    for (let index = 0; index < tarjetaArray.length - 4; index++) {
      tarjetaArray[index] = "#";
    }

    let tarjetaMaskify = tarjetaArray.join("");

    return tarjetaMaskify;
  },
};

export default validator;
