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
      //calculator.inputDigit(buttonValue);
      break;
  
    default:
      if(Number.isInteger(parseFloat(buttonValue))){
        calculator.inputDigit(buttonValue)
      }
  }
  calculator.updateDisplay();
  
})
