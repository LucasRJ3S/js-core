//Manipulando arrays

let techs = ["html", "css", "js"]

// adicionar um item no fim
techs.push("reactjs")

//adicionar no começo
techs.unshift('nodejs')

//remover do fim
techs.pop() //removeu o ultimo elemento do array "reactjs"

//remover do começo
techs.shift() //removeu o primeiro elemento do array "nodejs"

//pegar somente alguns elementos do array
/* console.log(techs.slice(1, 3)) */ //pegando o elemento css e js do array, se quise-se só o elemento css seria slice(1, 2)

//remover 1 ou mais items em qualquer posição do array
/* techs.splice(1, 2) */ //removeu os elementos css e js do array

//encontrar a posição de um elemento no array
let index = techs.indexOf("js") // qual é o index de js no array?
techs.splice(index, 1) //removendo o elemento js do array
console.log(techs)