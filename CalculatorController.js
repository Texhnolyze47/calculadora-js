import CalculatorModel  from "./CalculatorModel.js";
import CalculatorView from "./CalculatorView.js";
import CalculatorService from "./CalculatorService.js";

/**
 * CalculatorController class handles the actions of the calculator and 
 * is responsible for managing the view and the model.
 * @class
 */
export default class CalculatorController{
    /**
     * Creates an instances of CalculatorController
     * @constructor
     */
    constructor(){
    this.calculatorModel = new CalculatorModel();
    this.calculatorView = new CalculatorView();
    this.calculatorService = new CalculatorService();
    }

    /**
     * handle the decimal button click event
     * @param {string} dot - decimal value
     */
    handleDecimalButton(dot){
      this.calculatorModel.inputDecimal(dot)
    }

    /**
     * Handle the backspace button click event
     * @param {number} digit  - digit value
     */
    handleDigitButton(digit){
      this.calculatorModel.inputDigit(digit);
    }

    /**
     * Handle the backspace button event
     */
    handleBackspaceButton(){
      this.calculatorModel.backspace()
    }

    /**
     * Handle the reset button event
     */
    handleResetButton(){
      this.calculatorModel.reset()
      this.calculatorView.reset()
    }
    
    /**
     * Update the display
     */
    handleUpdateDisplay() {
     this.calculatorView.updateDisplay(this.calculatorModel);
  }
    /**
     * Handle the operator button click event
     * @param {string} nextOperator - the operator that was clicked
     */
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

