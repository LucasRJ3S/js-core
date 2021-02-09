//for...in

let person = {
  name: 'Lucas',
  age: 25,
  weight: 88.6
}

//percorrendo o objeto person para ter acesso ao valor de cada propiedade
for (let property in person) {
  console.log(person[property])  
}
