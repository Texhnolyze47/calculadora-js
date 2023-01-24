/**
 * CalculatorService class handles the calculation logic and
 * is responsible for managing the mathematical operations
 * @class
 */
export default class CalculatorService{

    /**
     * @param {number} firstOperand - The first operand to use in the calculation
     * @param {*} secondOperand - The second operand to use in the calculation
     * @param {*} operator - The operator to use in the calculation
     * @returns {number} - The result of the calculation
     */
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