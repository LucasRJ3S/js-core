/* Object

  * Objeto
  * Contém Propiedades / Atributos
  * Contém Funcionalidades / Métodos

  {propiedade: "valor"}

  Objetos contém propiedades e temos que extrair elas para criar os objetos, temos que extrair só oque é necessario também para não ter informações desnecessarias
*/

console.log({
  name: "Lucas",
  idade: 23,
  andar: function () {
    console.log("andar")
  },
  falar: function () {
    console.log("Hello")
  }
})

//Exemple

var person =
{
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

console.log(person)
