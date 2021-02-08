// 1. Declare uma variável de nome weight

let weight;

// 2. Que tipo de dado é a variável acima?
undefined
console.log(typeof weight)

// 3. Declare uma variável e atribua valores para cada um dos dados:

let name = "Lucas"
let age = 23
let stars = 0.5
let isSubscribed = true

// 4. A variável student abaixo é de que tipo de dado?
  //Object
//4.1 Atribua a ela as mesmas propiedades e valores acima

let student = {
    name:  "Lucas",
    age:  23,
    weight:  80,
    isSubscribed:  true
}

console.log(student)

// 4.2 Mostre no console a seguinte mensagem:

// <name> de idade <age> pesa <weight> kg.

console.log(`${student.name} tem ${student.age} anos e pesa ${student.weight} kg`)


// 5. Declare uma variavel do tipo array, de nome students e atribuaa a ela nenhum valor

let students = []


// 6. Reatribua valor para a variavel acima, colocando dentro dela o objeto student da questão 4.

students = [
 student
]

console.log(students)

// 7. Coloque no console o valor da posição zero do array acima

console.log(students[0])

//8. Crie um novo student e coloque na posição 1 do Arrray studends

const john = {
  name: "John",
  age: 23,
  weight: 74.8,
  isSubscribed: true,
}

students[1] = john
console.log(students)


//Variavel sofrendo hoisting, porque a variavel ta sendo declarada depois, então o js por baixo dos panos está elevando a variavel e deixando ela var x, e onde ela estava fica x = 1. valor fica como undefined - indefinido

console.log(x)
var x = 1

//resultado do console = undefined