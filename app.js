const numeros = document.querySelector(".container-botones");
const calculator = new Calculator("0", null, false, null);

numeros.addEventListener("click", (event) => {
  const button = event.target;
  const buttonValue = button.innerText;

  if (!button.matches("button")) {
    console.log("boton");
    return;
  }

  switch (buttonValue) {
    case "+":
    case "-":
    case "*":
    case "/":
    case "=":
    case "√":
    case "^":
    case "%":
    case "(":
      console.log(buttonValue)
      calculator.handleOperator(buttonValue);
      break;
    case ".":
      calculator.inputDecimal(buttonValue);
      break;
    case "AC":
      calculator.reset();
      break;
    case "DEL":
      calculator.backspace();
      break;
    default:
      if (Number.isInteger(parseFloat(buttonValue))) {
        calculator.inputDigit(buttonValue);
      }
  }

  calculator.updateDisplay();
});
