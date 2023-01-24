
export default class CalculatorModel {
    constructor(){
        this.firstDisplayValue = "0";
        this.secondDisplayValue = null;
        this.waitingForSecondOperator = false;
        this.operator = null;
        this.tempExpression = "";
    }

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

      backspace(){
        this.firstDisplayValue = this.firstDisplayValue.slice(0,-1);
        if(this.firstDisplayValue.length === 0){
          this.firstDisplayValue = "0";
        }
      }

      reset(){
        this.firstDisplayValue = "0";
        this.secondDisplayValue = null;
        this.waitingForSecondOperator = false;
        this.operator = null;
        this.tempExpression = "";
      }
}
