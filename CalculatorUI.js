class CalculatorUI{

    constructor(){
        this.firstDisplay = document.querySelector("#display")
        this.secondDisplay = document.querySelector("#operation")
        this.btnClear = document.querySelector(".clearAll")
        this.calculator = new CalculatorUI();
    }

    inputDigit(digit) {
        console.log("Calculadora" + calculator.waitingForSecondOperando);
    
        if( digit === "("){
          this.paranthesisCount++;
          this.tempExpresion += digit
          this.displayValue += digit
        } else{
          if (this.waitingForSecondOperando === true) {
            console.log("Falta el operador");
            console.log(digit);
            this.displayValue = digit;
            this.waitingForSecondOperando = false;
          } else {
            let displayValue =
              this.displayValue === "0" ? digit : this.displayValue + digit;
      
            this.displayValue = displayValue;
          }
          console.log(calculator);
        }
      }

      updateDisplay() {
        if (this.operator === "=") {
          console.log("El operador es " + this.operator);
          this.tempExpresion += `${this.displayValue}`;
        } else if(this.operator === "("){
          console.log("Es una parentesis")
          this.tempExpresion += `${this.displayValue}`
        } else if(this.operator === ")"){
          this.tempExpresion += `${this.displayValue}`
        }
        else {
          console.log("debe ser un igual" + this.operator);
          this.tempExpresion += this.displayValue;
        }
        secondDisplay.innerHTML = this.tempExpresion;
        firstDisplay.value = this.displayValue;
      }

      
  inputDecimal(dot) {
    if (this.waitingForSecondOperando === true) {
      this.displayValue = "0.";
      this.waitingForSecondOperando = false;
      return;
    }

    if (!this.displayValue.includes(dot)) {
      this.displayValue += dot;
    }
  }

  handleOperator(nextOperator) {
    const inputValue = parseFloat(this.displayValue);
    const result = this.calculate(this.firstValue, inputValue, this.operator);

    console.log("Result " + result);
    if (this.operator && this.waitingForSecondOperando) {
      this.operator = nextOperator;
    }

    if(nextOperator === "="){
      while(this.paranthesisCount > 0){
        this.tempExpresion += ")"
        this.paranthesisCount--;
      }
    }
    
    if (nextOperator !== "=") {
      secondDisplay.value = firstDisplay.value + " " + nextOperator;
    } else {
      console.log("El resultado es: " + result);
      firstDisplay.value = result;
      secondDisplay.value += " " + this.displayValue + " =";
    }

    if (nextOperator === "√") {
      console.log("Es una raiz");
      const result = this.calculate(null, inputValue, nextOperator);
      secondDisplay.value = "√" + "(" + result + ")";
      this.displayValue = `${parseFloat(result.toFixed(7))}`;
      this.firstValue = result;
      this.waitingForSecondOperando = false;
      this.operator = null;
    } else if (this.firstValue === null && !isNaN(inputValue)) {
      this.firstValue = inputValue;
      this.secondValue = parseFloat(this.displayValue);
    } else if (this.operator) {
      console.log("El resultado es: " + result);
      this.displayValue = `${parseFloat(result.toFixed(7))}`;
      this.firstValue = result;
    }
    this.operator = nextOperator;
    this.waitingForSecondOperando = true;
    this.firstValue = result
    console.log(calculator);
  }
    
}