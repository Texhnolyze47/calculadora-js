class ModelCalculator{
  
  constructor(displayValue,firstValue,waitingForSecondOperando,operator){
      this.displayValue = displayValue;
      this.firstValue = firstValue;
      this.WaitingForSecondOperando = waitingForSecondOperando
      this.operator = operator;
  };


  inputDigit(digit){
    let displayValue = this.displayValue === '0' ? digit : this.displayValue + digit;

    this.displayValue = displayValue 
  }


  updateDisplay() {
    const display = document.querySelector('#display');
    display.value = this.displayValue;
  }

  inputDecimal(dot){
    if(!this.displayValue.includes(dot)){
      this.displayValue += dot;
    }
  }

}


const calculator = new ModelCalculator('0',null,false, null)

calculator.updateDisplay();

const numeros = document.querySelector('.container-botones');

numeros.addEventListener('click', (event) => {
  const key  = event.target;

  if(!key.matches('button')){
    return;
  }

  if(key.classList.contains('signos')){
    console.log('signos', key.textContent)
    return;
  }

  
  if(key.classList.contains('decimal')){
    console.log('decimal', key.textContent)
    calculator.inputDecimal(key.textContent)
    calculator.updateDisplay();
    return;
  }

 
  if(key.classList.contains('borrar')){
    console.log('clear', key.textContent);

    return;
  }

  calculator.inputDigit(key.textContent);
  calculator.updateDisplay()

});

