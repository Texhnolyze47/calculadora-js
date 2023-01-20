class Calculator{
  
  constructor(displayValue,firstValue,waitingForSecondOperando,operator){
      this.displayValue = displayValue;
      this.firstValue = firstValue;
      this.waitingForSecondOperando = waitingForSecondOperando
      this.operator = operator;
  };

  reset(){
    this.displayValue = '0';
    this.firstValue = null;
    this.waitingForSecondOperando = false;
    this.operator = null;
  }

  

  calculate(firstOperand,secondOperand, operator){
    if(operator === '+'){
      console.log(" El signo es " + operator)
      console.log(" El resultado de la suma es "+  typeof(firstOperand) + typeof(secondOperand))

      return firstOperand + secondOperand;
    } else if (operator === '-'){
      return firstOperand - secondOperand;
    } else if(operator === '*'){
      return firstOperand * secondOperand;
    } else if(operator === '/'){
      return firstOperand / secondOperand;
    }

    return secondOperand;
  }

  inputDigit(digit){
    console.log("Calculadora" + calculator.waitingForSecondOperando)

    if(this.waitingForSecondOperando === true){
      console.log("Falta el operador")
      console.log(digit)
      this.displayValue = digit
      this.waitingForSecondOperando = false;
    } else{
      let displayValue = this.displayValue === '0' ? digit : this.displayValue + digit;

      this.displayValue = displayValue     
    }
    console.log(calculator)
  }

  updateDisplay() {
    const display = document.querySelector('#display');
    console.log(display.value)
    display.value = this.displayValue;
  }

  inputDecimal(dot){
    if(this.waitingForSecondOperando === true){
      this.displayValue = '0.'
      this.waitingForSecondOperando = false;
      return
    }

    if(!this.displayValue.includes(dot)){
      this.displayValue += dot;
    }
  }

  handleOperator(nextOperator){

    const inputValue = parseFloat(this.displayValue)

    if(this.operator && this.waitingForSecondOperando){
      this.operator = nextOperator;
    }

    if(this.firstValue === null && !isNaN(inputValue)){
      this.firstValue = inputValue;
    } else if (this.operator){
      const result = this.calculate(this.firstValue, inputValue, this.operator)
      console.log("El resultado es: " + result)

      this.displayValue = String(result)
      this.firstValue = result;
    }

    this.waitingForSecondOperando = true;
    this.operator = nextOperator
    console.log(calculator)


  }

}

const calculator = new Calculator('0',null,false, null)
calculator.updateDisplay();


const numeros = document.querySelector('.container-botones');

numeros.addEventListener('click', (event) => {
  const key  = event.target;

  if(!key.matches('button')){
    return;
  }

  if(key.classList.contains('signos')){
    calculator.handleOperator(key.textContent)
    calculator.updateDisplay()
    return;
  }

  
  if(key.classList.contains('decimal')){
    calculator.inputDecimal(key.textContent)
    calculator.updateDisplay();
    return;
  }

 
  if(key.classList.contains('borrar')){
    calculator.reset()
    calculator.updateDisplay();
    return;
  }

  calculator.inputDigit(key.textContent);
  calculator.updateDisplay()


});

