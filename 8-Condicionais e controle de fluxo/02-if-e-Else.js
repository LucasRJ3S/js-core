// if (se) , else(se não)

let temperature = 36.9
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if (highTemperature) {
  console.log('Febre alta')
} else if (mediumTemperature) {
  console.log('Febre moderada')
} else {
  console.log('Está saudável')
}

//Observações

//se uma condição for igual a outra, ele não vai checar as outrass condições ele para na primeira

//é isso que faz a aplicação ter suas multiplas inteligencias, vaai fazer ela ir para cada lado conforme a necessidade