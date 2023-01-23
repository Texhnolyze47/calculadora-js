export default class CalculatorModel {
    constructor(firstDisplayValue, secondDisplayValue, waitingForSecondOperator,operator){
        this.firstDisplayValue = firstDisplayValue;
        this.secondDisplayValue = secondDisplayValue;
        this.tempExpression = "";
        this.waitingForSecondOperator = waitingForSecondOperator;
        this.operator = operator;
    }
}