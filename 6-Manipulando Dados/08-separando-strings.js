//Manipulando Strings e Arrays

//Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _

let phrase = "Eu quero viver o Amor!"
let myArray = phrase.split(" ") //separando a string em substrings e retornando como um array
let phraseWithUnderscore = myArray.join("_") //adicionando todos elementos de um array separado por separadores strings especificos
console.log(phraseWithUnderscore.toLocaleLowerCase())