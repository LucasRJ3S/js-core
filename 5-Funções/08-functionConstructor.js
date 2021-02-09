/* 

Function() constructor

* expressão new
* criar um novo objeto
* this keyword

*/

//Tipo um molde para criar Objetos

function Person(name) {
  this.name = name
  this.walk = function () {
    return this.name + " está andando"
  }
}

const lucas = new Person('Lucas')
const rafael = new Person('Rafael')

console.log(lucas.walk())
console.log(rafael.walk())

// No JS tem outras funções construtoras, pesquise na documentação