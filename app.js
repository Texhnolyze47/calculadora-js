import CalculatorController from "./CalculatorController.js";

const keys = document.querySelector(".container-buttons");
const calculator = new CalculatorController();
//Add listener
keys.addEventListener("click", (event) =>{

  const button = event.target;
  const buttonValue = button.innerText;

  // verify if whats is pressed is a button
  if (!button.matches("button")) {
    console.log("Not a button")
    return;
  }
  // determine what action to take based on the value of the button.
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
      calculator.handleDecimalButton(buttonValue)
      break;
    case "AC":
      calculator.handleResetButton()
    break;
    case "DEL":
      calculator.handleBackspaceButton()
      break;
    default:
      if(Number.isInteger(parseFloat(buttonValue))){
        calculator.handleDigitButton(buttonValue)
      }
  }
  calculator.handleUpdateDisplay();
  
});
