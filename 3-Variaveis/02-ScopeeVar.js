//Scope

//Escopo determina a visibilidaaade de alguma variável no JS

// Block statement - Declaração de bloco

// vamos iniciar um bloco abaixo 

/* 
{
  let x = 0
  console.log(x)
} 

*/

// var - o var é global e poderá funcionar fora de um escopo de bloco

// var é global e, também local. global seria tudo que está executando dentro da aplicação js. e o local é oque somente dentro do escopo fechado.

//sem a gente ver, por baixo dos panos o javascript está tentando verificar se existe uma variavel x 

// var x  ; o javascript coloca uma variavel x sem valor e fica como undefined
console.log('> existe x antes do bloco? ', x)

{
  var x = 0   // e aqui ele deixa assim x = 0 e o resultado é undefined, porque a variavel var é global, ele puxa a var desse escopo e joga lá pra cima. o conceito disso se chama Hoisting (Elevação), o js pega a var x e joga lá em cima sem a gente ver e depois vem dentro do escopo e atualiza o valor.
}

console.log('> existe x depois do bloco? ', x) //sim existe 