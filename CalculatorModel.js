export default class CalculatorModel {
    constructor(firstDisplayValue, secondDisplayValue, waitingForSecondOperator,operator){
        this.firstDisplayValue = firstDisplayValue;
        this.secondDisplayValue = secondDisplayValue;
        this.tempExpression = "";
        this.waitingForSecondOperator = waitingForSecondOperator;
        this.operator = operator;
    }

    calculate(firstOperand, secondOperand, operator) {
        console.log("method calculate()")
        if(!operator){
            return secondOperand;
        }
    
        console.log("Operator " + operator)
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
            return this.evaluateParenthesis(this.tempExpression);
        default:
            console.log("This operations is not supported");
            break;
        }
        console.log("El result is " + secondOperand)
        return secondOperand;
    }

}