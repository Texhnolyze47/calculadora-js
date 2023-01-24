
/**
 * CalculatorView class is responsible for managing the view of the calculator
 * it updates the display values of the calculator and resets the calculator
 * @class
 */
export default class CalculatorView{

    /**
     * Creates an instances of CalculatorView
     * @constructor
     */
    constructor(){
        /** Element of the display value of the calculator
         *  @type {HTMLElement} */
        this.displayValue = document.querySelector("#display");
        this.operationDisplay = document.querySelector("#operation");
        this.btnClear = document.querySelector(".clearAll");
    }

    /**
     * Resets teh calculator's display values
     */
    reset(){
        this.displayValue.value = "0"
        this.operationDisplay.value = ""
    }

    /**
     * updates the display values of calculator
     * @param {CalculatorModel} calculatorModel 
     */
    updateDisplay(calculatorModel) {
        if(calculatorModel.operator === "="){
            calculatorModel.tempExpression += `${this.displayValue}`;
        }
        this.operationDisplay.innerHTML = calculatorModel.tempExpression;
        this.displayValue.value = calculatorModel.firstDisplayValue
    }
    
}

