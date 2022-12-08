console.log("Trabalhando com atribuição de variáveis")

const idade = 29
let primeiroNome = "Ricardo"
let sobrenome = "Bugan"

let contador = 0
contador = contador + 1
console.log(contador)
//let pode ser reatríbuida, sendo uma varíavel real
//const é uma variável que n pode ser reatríbuida

//console.log(nome + " " + sobrenome)
//console.log(nome,  sobrenome)
//concatenação mais simples e mais legível
//console.log(`Meu nome é ${nome} ${sobrenome}`) pode se usar ${para referenciar as variáveis}

nome = primeiroNome +  sobrenome //Type error: Assignment to constant variable

console.log(`Meu nome é ${nome}`)


