class Calculator{
    constructor(displayValue, firstValue, waitingForSecondOperando, operator) {
        this.displayValue = displayValue;
        this.firstValue = firstValue;
        this.waitingForSecondOperando = waitingForSecondOperando;
        this.operator = operator;
        this.tempExpresion = "";
    }

    reset() {
        this.displayValue = "0";
        this.firstValue = null;
        this.waitingForSecondOperando = false;
        this.operator = null;
        this.tempExpresion = "0";
        secondDisplay.value = "";
    }

    backspace() {
        this.displayValue = this.displayValue.slice(0, -1);
        if (this.displayValue.length === 0) {
          this.displayValue = "0";
        }
      }
    
  calculate(firstOperand, secondOperand, operator) {
    if(!operator){
      return secondOperand;
    }

    console.log("En  calculate() " + operator)
    switch (operator) {
      case "+":
        return firstOperand + secondOperand;
      case "-":
        return firstOperand - secondOperand;
      case "*":
        return firstOperand * secondOperand;
      case "/":
        return firstOperand / secondOperand;
      case "√":
        return Math.sqrt(secondOperand);
      case "^":
        return Math.pow(firstOperand, secondOperand);
      case "%":
        return firstOperand % secondOperand;
      case "(":
        return this.evaluateParenthesis(this.tempExpresion);
      default:
        console.log("Esta operacion no esta soportada");
        break;
    }
    return secondOperand;
  }

    
}