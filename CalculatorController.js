import CalculatorModel  from "./CalculatorModel.js";
import CalculatorView from "./CalculatorView.js";
import CalculatorService from "./CalculatorService.js";

export default class CalculatorController{

    constructor(){
    this.calculatorModel = new CalculatorModel();
    this.calculatorView = new CalculatorView();
    this.calculatorService = new CalculatorService();
    }

    handleDecimalButton(dot){
      this.calculatorModel.inputDecimal(dot)
    }

    handleDigitButton(digit){
      this.calculatorModel.inputDigit(digit);
    }

    handleBackspaceButton(){
      this.calculatorModel.backspace()
    }

    handleResetButton(){
      this.calculatorModel.reset()
      this.calculatorView.reset()
    }
    
    handleUpdateDisplay() {
     this.calculatorView.updateDisplay(this.calculatorModel);
  }

  handleOperator(nextOperator) {
    const inputValue = parseFloat(this.calculatorModel.firstDisplayValue);
    const result = this.calculatorService.calculate(this.calculatorModel.secondDisplayValue,inputValue,this.calculatorModel.operator);

     if (nextOperator !== "=") {
      this.calculatorView.operationDisplay.value = `${this.calculatorView.displayValue.value}  ${nextOperator}`
    } else {
      this.calculatorView.displayValue.value = result;
      this.calculatorView.operationDisplay.value += ` ${this.calculatorModel.firstDisplayValue} =`;
    }

    if (nextOperator === "=") {
      this.calculatorModel.firstDisplayValue = result
    } else if ( nextOperator === "√"){
      this.calculatorModel.secondDisplayValue = `√(${this.calculatorModel.firstDisplayValue})`;
      this.calculatorModel.firstDisplayValue = this.calculatorService.calculate(null,inputValue,nextOperator);
      this.calculatorModel.waitingForSecondOperator = false;
    }else if ( this.calculatorModel.secondDisplayValue === null && !isNaN(inputValue)){
      this.calculatorModel.secondDisplayValue = inputValue
    } else {
        this.calculatorModel.firstDisplayValue = `${parseFloat(result.toFixed(7))}`;
        this.calculatorModel.secondDisplayValue = result;
      }

      this.calculatorModel.waitingForSecondOperator = true;
      this.calculatorModel.operator = nextOperator;
    }
  }

