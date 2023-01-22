export default class CalculatorModel {
    constructor(firstDisplayValue, secondDisplayValue, tempExpression, waitingForSecondOperator,operator){
        this.firstDisplayValue = firstDisplayValue;
        this.secondDisplayValue = secondDisplayValue;
        this.tempExpression = tempExpression;
        this.waitingForSecondOperator = waitingForSecondOperator;
        this.operator = operator;
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
            return this.evaluateParenthesis(this.tempExpression);
        default:
            console.log("This operations is not supported");
            break;
        }
        return secondOperand;
    }

    add(first, second){
        return first + second;
    }
}