export default class CalculatorService{
    calculate(firstOperand, secondOperand, operator) { 
    
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
        default:
            return firstOperand;
        }
    }
}