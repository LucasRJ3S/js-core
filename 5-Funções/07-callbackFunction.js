//callback function - chamar de volta a function
// passando uma function como parametro dentro da função sayMyName
//chame uma função e chame a outra passada no parametro de volta

function sayMyName(car) {
  console.log('antes de ligar o carro (antes de executar a função callback')

  car()

  console.log('depois de ligar o carro (depois de executar a callback)')
}

//a function car() passada dentro do parametro da função sayMyName, abaixo executamos a função sayMyName e dentro dessa funçao, como foi passado o parammetro car que vira uma função, esta sendo chammada de volta para a callback function sayMyName

sayMyName(
  () => {
    console.log('carro ligado (estou em uma callback)')
  }
)