import CalculatorModel  from "./CalculatorModel.js";
import CalculatorView from "./CalculatorView.js";
export default class CalculatorController{

    constructor(){
    this.calculatorModel = new CalculatorModel();
    this.calculatorView = new CalculatorView();
    }

    inputDigit(digit) {
        console.log("calculator " + this.calculatorModel.waitingForSecondOperator);
        if (this.calculatorModel.waitingForSecondOperand === undefined) {
            console.log("Operator is Missing");
            console.log(digit);
            this.calculatorModel.firstDisplayValue = digit;
            this.calculatorModel.waitingForSecondOperator = false;
          } else {
            let displayValue =
            this.calculatorModel.firstDisplayValue === "0" ? digit : this.calculatorModel.firstDisplay + digit;
      
            this.calculatorModel.firstDisplayValue = displayValue;
          }
          console.log(this.calculatorModel);
      }

      updateDisplay() {
        if (this.calculatorModel.operator === "=") {
          console.log("Operator is " + this.calculatorModel.operator);
          this.calculatorModel.tempExpression += `${this.calculatorView.firstDisplay}`;
        } else {
          console.log("debe ser un igual" + this.calculatorModel.operator);
          this.calculatorModel.tempExpression += `${this.calculatorView.firstDisplay}`;
        }
        this.calculatorView.secondDisplay.innerHTML = this.calculatorModel.tempExpression;
        this.calculatorView.firstDisplay.value = this.calculatorModel.firstDisplayValue;
      }
    
      inputDecimal(dot) {
        if (this.waitingForSecondOperando === true) {
          this.displayValue = "0.";
          this.waitingForSecondOperando = false;
          return;
        }
    
        if (!this.displayValue.includes(dot)) {
          this.displayValue += dot;
        }
      }
    
    
}



