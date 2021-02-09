//function hoisting

sayMyName();

function sayMyName() {
  console.log('Lucas')
}

// nesse caso o js por baixo dos panos está elevando a função para cima para entender e executar a função.