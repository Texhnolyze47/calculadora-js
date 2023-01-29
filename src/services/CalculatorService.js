/**
 * CalculatorService class handles the calculation logic and
 * is responsible for managing the mathematical operations
 * @class
 */
export default class CalculatorService{

    add(a, b) {
        return a + b;
    }
    
    subtract(a, b) {
        return a - b;
    }
    
    multiply(a, b) {
        return a * b;
    }
    
    divide(a, b) {
        return a / b;
    }
    
    squareRoot(a) {
        return Math.sqrt(a);
    }

    pow(a,b){
        return Math.pow(a,b)
    }

    module(a,b){
        return a % b
    }

    /**
     * @param {number} firstOperand - The first operand to use in the calculation
     * @param {*} secondOperand - The second operand to use in the calculation
     * @param {*} operator - The operator to use in the calculation
     * @returns {number} - The result of the calculation
     */
    calculate(firstOperand, secondOperand, operator) { 
    
        switch (operator) {
        case "+":
            return this.add(firstOperand,secondOperand)
        case "-":
            return this.subtract(firstOperand,secondOperand);
        case "*":
            return this.multiply(firstOperand, secondOperand);
        case "/":
            return this.divide(firstOperand, secondOperand);
        case "√":
            return  this.squareRoot(secondOperand);
        case "^":
            return this.pow(firstOperand,secondOperand);
        case "%":
            return this.module(firstOperand,secondOperand);
        default:
            return firstOperand;
        }
    }
}
