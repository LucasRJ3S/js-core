//const e let são variaveis locais e só funcionam no escopo onde foram criadas, não funcionam no escopo global como o var

/* let y = 1;

{
  let y = 0
  console.log('> existe y ', y) // vai puxar o valor do bloco
} */

/* console.log('> existe y depois do bloco ', y) */ // vai puxar o valor da variavel que está acima do bloco

/* let y = 1;

{
  y = 0 // aqui entramos em outro escopo, mas entramos trazendo do escopo anterior que é o global, como não definimos como variavel, ele vai procurar o y em algum lugar acima, e se tiver que subir varios escopos ele vai. ele nessa situação só precisa atualizar o valor de y que era 1 no escopo global para 0, e no escopo global que está fora vai ser atualizado também.
  console.log('> existe y ', y) // vai procurar o 
}

console.log('> existe y depois do bloco ', y) // vai puxar o valor da variavel que está acima do bloco */


// Constante - foi feita para deixar os valores constantes sem muda-los independente do escopo que tiver

const y = 1;

{
  const y = 0
  console.log('> existe y ', y) 
}

 console.log('> existe y depois do bloco ', y) // vai puxar o valor da variavel que está acima do bloco