const firstDisplay = document.querySelector("#display");
const secondDisplay = document.querySelector("#operation");
const btnClear = document.querySelector(".borrar");

class Calculator {
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
        console.log("Esta operacion no esta soportada");
        break;
    }
    return secondOperand;
  }

  inputDigit(digit) {
    console.log("Calculadora" + calculator.waitingForSecondOperando);

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

  updateDisplay() {
    if (this.operator === "=") {
      console.log("El operador es " + this.operator);
      this.tempExpresion += `${this.displayValue}`;
    } else {
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

    if (this.operator && this.waitingForSecondOperando) {
      this.operator = nextOperator;
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

    this.waitingForSecondOperando = true;
    this.operator = nextOperator;
    console.log(calculator);
  }
}

const numeros = document.querySelector(".container-botones");
const calculator = new Calculator("0", null, false, null);

numeros.addEventListener("click", (event) => {
  const button = event.target;
  const buttonValue = button.innerText;

  if (!button.matches("button")) {
    console.log("boton");
    return;
  }

  switch (buttonValue) {
    case "+":
    case "-":
    case "*":
    case "/":
    case "=":
    case "√":
    case "^":
    case "%":
      calculator.handleOperator(buttonValue);
      break;
    case ".":
      calculator.inputDecimal(buttonValue);
      break;
    case "AC":
      console.log("Limpiando cal");
      calculator.reset();
      break;
    case "DEL":
      calculator.backspace();
      break;
    default:
      if (Number.isInteger(parseFloat(buttonValue))) {
        calculator.inputDigit(buttonValue);
      }
  }

  calculator.updateDisplay();
});
