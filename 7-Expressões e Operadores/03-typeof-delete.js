/* 
Operadores unários

typeof
delete

*/

const person = {
  name: 'Lucas',
  age: 32,
}

delete person.age // o delete vai procurar uma propiedade dentro do objeto e deletar ela, desde que essa propiedade exista

console.log(person)

console.log(typeof "lucas") //verifica tipo de dados = string
console.log(typeof 23) //verifica tipo de dados = number