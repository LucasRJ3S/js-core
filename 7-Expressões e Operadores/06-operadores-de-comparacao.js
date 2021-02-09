//Operadores de comparação

//Irá comparar valores e retornar um Boolean como resposta á comparação

let one = 1
let two = 2

// = sinal de atribuição de valor let one (recebe) = 1

// == igual
console.log(one == 1) //true
console.log(one == "1") //true

// != diferente
console.log( one != two) //true
console.log( one != 1) //false
console.log( one != "1") //false

// === estritamente igual - serve para verificar o valor e o tipo
console.log(one === "1") //false
console.log(one === 1) //true

// !== estritamente diferente
console.log(two !== "2") //false
console.log(two !== 2) //true

// > maior
console.log(one > two) //false

// >= maior ou igual que
console.log(one >= 1) //true
console.log(two >= 1) //true

// < menor
console.log(one < two) //true

// <= menor ou igual que

console.log(one <= two)// true
console.log(one <= 1) //true
console.log(one <= 0) //false