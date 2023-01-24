
/**
 * CalculatorModel class handles the logic of the calculator and 
 * is responsible for storing the data and performing calculations.
 * @class
 */
export default class CalculatorModel {
    constructor(){
        this.firstDisplayValue = "0";
        this.secondDisplayValue = null;
        this.waitingForSecondOperator = false;
        this.operator = null;
        this.tempExpression = "";
    }
    /**
     * Inputs a digit on the calculator
     * @param {string} digit 
     */
    inputDigit(digit) {
        if (this.waitingForSecondOperator === true) {
            console.log("Operator is Missing");
            console.log(digit);
            this.firstDisplayValue = digit;
            this.waitingForSecondOperator = false;
          } else {
            let displayValue =
            this.firstDisplayValue === "0" ? digit : this.firstDisplayValue + digit;
      
            this.firstDisplayValue = displayValue;
          }
      }

      /**
       * Method that handle the decimal point of the calculator
       * @param {string} dot 
       * @returns 
       */
      inputDecimal(dot){
        if (this.waitingForSecondOperator === true) {
          this.firstDisplayValue = "0.";
          this.waitingForSecondOperator = false;
          return;
        }
    
        if (!this.firstDisplayValue.includes(dot)) {
          this.firstDisplayValue += dot;
        }
      }

      /**
       * Remove the last digit of the current value
       */
      backspace(){
        this.firstDisplayValue = this.firstDisplayValue.slice(0,-1);
        if(this.firstDisplayValue.length === 0){
          this.firstDisplayValue = "0";
        }
      }
      /**
       * Reset the calculator to its initial state
       */
      reset(){
        this.firstDisplayValue = "0";
        this.secondDisplayValue = null;
        this.waitingForSecondOperator = false;
        this.operator = null;
        this.tempExpression = "";
      }
}
