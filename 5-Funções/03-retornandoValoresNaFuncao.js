//function expression ou
//function anonima

//nunca deixe uma variavel sem nome, é muito perigoso deixar uma variavel sem nome pois pode criar problema depois, ao nao declarar com operador especial a variavel, palavra chave sempre na variavel pra não dar problema


let total = 0; 

//parâmetros(parameters) dentro da funçao
const sum = function (number1, number2) {
  let total = number1 + number2
  return total
}


let number1 = 34
let number2 = 25

console.log(`a soma é ${sum(number1, number2)}`) // pegando o total de dentro da funçao porque está com palavra chave let declarando a variavel total, se estiver sem vai dar problemas

console.log(total) //pegando o total de fora da funçao
