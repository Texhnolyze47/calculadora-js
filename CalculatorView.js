export default class CalculatorView{

    constructor(){
        this.displayValue = document.querySelector("#display");
        this.operationDisplay = document.querySelector("#operation");
        this.btnClear = document.querySelector(".clearAll");
    }

    reset(){
        this.displayValue.value = "0"
        this.operationDisplay.value = ""
    }

    updateDisplay(calculatorModel) {
        this.operationDisplay.innerHTML = calculatorModel.tempExpression;
        this.displayValue.value = calculatorModel.firstDisplayValue
    }
    
}