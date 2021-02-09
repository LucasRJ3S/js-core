// switch

//case - caso 
//break - parar
//default - padrão


function calculate(number1, operator, number2) {
  let result = 0;

  switch (operator) {
    case '+':
      result = number1 + number2
      break;
    case '-':
      result = number1 - number2
      break;
    case '*':
      result = number1 * number2
      break;
    case '/':
      result = number1 / number2
      break;
    default:
      console.log("operador não implementado")
      break;
  }
  return result
}

console.log(calculate(3, '*', 4))