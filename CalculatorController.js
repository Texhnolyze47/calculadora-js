import CalculatorModel  from "./CalculatorModel.js";
import CalculatorView from "./CalculatorView.js";
export default class CalculatorController{

    constructor(){
    this.calculatorModel = new CalculatorModel("0", null, false, null);
    this.calculatorView = new CalculatorView(this.calculatorModel);
    }

    inputDecimal(dot){
      if (this.calculatorModel.waitingForSecondOperator === true) {
        this.calculatorModel.firstDisplayValue = "0.";
        this.calculatorModel.waitingForSecondOperator = false;
        return;
      }
  
      if (!this.calculatorModel.firstDisplayValue.includes(dot)) {
        this.calculatorModel.firstDisplayValue += dot;
      }
    }

    inputDigit(digit) {
        console.log("method inputDigit(digit) " + this.calculatorModel.waitingForSecondOperator);
        console.log("Calculator " + this.calculatorModel.operator);
        if (this.calculatorModel.waitingForSecondOperator === true) {
            console.log("Operator is Missing");
            console.log(digit);
            this.calculatorModel.firstDisplayValue = digit;
            this.calculatorModel.waitingForSecondOperator = false;
          } else {
            let displayValue =
            this.calculatorModel.firstDisplayValue === "0" ? digit : this.calculatorModel.firstDisplayValue + digit;
      
            this.calculatorModel.firstDisplayValue = displayValue;
          }
          console.log(this.calculatorModel);
          console.log(this.calculatorView)
      }

      backspace(){
        this.calculatorModel.firstDisplayValue = this.calculatorModel.firstDisplayValue.slice(0,-1);
        if(this.calculatorModel.firstDisplayValue.length === 0){
          this.calculatorModel.firstDisplayValue = "0";
        }
      }

      reset(){
        this.calculatorModel.firstDisplayValue = "0";
        this.calculatorModel.secondDisplayValue = null;
        this.calculatorModel.waitingForSecondOperator = false;
        this.calculatorModel.operator = null;
        this.calculatorModel.tempExpression = "";

        this.calculatorView.firstDisplay.value = "0"
        this.calculatorView.secondDisplay.value = ""
      }

      updateDisplay() {
        console.log("method updateDisplay() ");

        if (this.calculatorModel.operator === "=") {
          console.log("Operator is " + this.calculatorModel.operator);
          this.calculatorModel.tempExpression += `${this.calculatorModel.firstDisplayValue}`;
          console.log("first part ", this.calculatorModel.tempExpression  );

        } else {
          console.log("must be an equal " + this.calculatorModel.operator);
          this.calculatorModel.tempExpression += this.calculatorModel.firstDisplayValue;
          console.log("second part ", this.calculatorModel.tempExpression  );
        }
        console.log("before ", this.calculatorView)

        this.calculatorView.secondDisplay.innerHTML = this.calculatorModel.tempExpression;
        this.calculatorView.firstDisplay.value = this.calculatorModel.firstDisplayValue;
        console.log(this.calculatorModel);
        console.log("after ", this.calculatorView)
    }

    
  handleOperator(nextOperator) {
    console.log(" handleOperator(nextOperator) ")
    const inputValue = parseFloat(this.calculatorModel.firstDisplayValue);
    console.log("Before calculate ", this.calculatorModel)

    const result = this.calculatorModel.calculate(this.calculatorModel.secondDisplayValue, inputValue, this.calculatorModel.operator);

    console.log("Result " + result);
    if (this.calculatorModel.operator && this.calculatorModel.waitingForSecondOperator) {
      this.calculatorModel.operator = nextOperator;
    }
    if (nextOperator !== "=") {
      this.calculatorView.secondDisplay.value = this.calculatorView.firstDisplay.value + " " + nextOperator;
      console.log(this.calculatorView.secondDisplay)
    } else {
      console.log("Result: " + result);
      this.calculatorView.firstDisplay.value = result;
      this.calculatorView.secondDisplay.value += " " + this.calculatorModel.firstDisplayValue + " =";
    }

    if (nextOperator === "√") {
      console.log("Root ");
      const result = this.calculatorModel.calculate(null,inputValue,nextOperator);
      this.calculatorView.secondDisplay.value =  "√" + "(" + this.calculatorModel.firstDisplayValue + ")";
      this.calculatorModel.firstDisplayValue = `${parseFloat(result.toFixed(7))}`;
      this.calculatorModel.secondDisplayValue = result;
      this.calculatorModel.waitingForSecondOperator = false;
      this.calculatorModel.operator = null;
    } else if (this.calculatorModel.secondDisplayValue === null && !isNaN(inputValue)) {
      this.calculatorModel.secondDisplayValue = inputValue;
    } else if (this.calculatorModel.operator) {
      console.log("The result is " + result);
      this.calculatorModel.firstDisplayValue = `${parseFloat(result.toFixed(7))}`;
      this.calculatorModel.secondDisplayValue = result;
    }
    this.calculatorModel.waitingForSecondOperator = true;
    this.calculatorModel.operator = nextOperator;
    console.log(this.calculatorModel);
  }
}
    
    




