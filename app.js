import CalculatorController from "./CalculatorController.js";

const keys = document.querySelector(".container-buttons");
const calculator = new CalculatorController();
keys.addEventListener("click", (event) =>{
  const button = event.target;
  const buttonValue = button.innerText;

  if (!button.matches("button")) {
    console.log("Not a button")
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
      calculator.handleOperator(buttonValue);
      break;
    case ".":
      calculator.inputDecimal(buttonValue)
      break;
    case "AC":
      calculator.reset()
    break;
    case "DEL":
      calculator.backspace()
      break;
    default:
      if(Number.isInteger(parseFloat(buttonValue))){
        calculator.inputDigit(buttonValue)
      }
  }
  calculator.updateDisplay();
  
});
