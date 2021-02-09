//Operador Condicional (ternário)

//Dependendo da condição, nós receberemos valores diferentes

// condition ? value1 : value2

//Exemplos

let pao = true
let queijo = false

//se tiver pao ou queijo - o café é top, se não café ruim
const niceBreakfast = pao || queijo ? 'Café top' : 'Café ruim'

//se tiver pão E queijo - o café é top, se não tiver pão e queijo o café ruim
const niceBreakfast2 = pao && queijo ? 'Café top' : 'Café ruim'

console.log(niceBreakfast)
console.log(niceBreakfast2)

let age = 16

//se tiver acima ou =  18 anos pode dirigir
const canDrive = age >= 18 ? 'Pode dirigir' : 'Não pode dirigir'

console.log(canDrive)