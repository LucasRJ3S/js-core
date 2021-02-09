//maneira de ficar capturando erros da aplicação e perceber tipos de falha 

// throw - lance uma mensagem de erro

function sayMyName(name = '') {
  if (name === '') {
    throw new Error('Preenchimento do nome é obrigatório')
  }

  console.log(name)
}

// try... catch - tente executar o codigo, se nao funcionar pegue o erro e mostre o erro
try {
  sayMyName('Lucas')
} catch (e) {
  console.log(e)
}

console.log('após ao try/catch')