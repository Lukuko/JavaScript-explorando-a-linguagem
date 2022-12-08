const titulo = "Listas"
console.log(`Trabalhando com ${titulo}`) //interpolação de variáveis em texto

//Listas com todos os destinos que a agência tem
//const salvador = `Salvador`
//const saoPaulo = `São Paulo`
//const rioDeJaneiro = `Rio de Janeiro` 
// isso não é uma boa prática

const listaDeDestinos = new Array( //Semelhante a forma que as listas são feitas no java
    `Salvador`,
    ` São Paulo`,
    ` Rio de Janeiro`,
    ` Curitiba`
)

listaDeDestinos.push(' Aracaju')//Array.push() serve para adicionar itens na listaDeDestinos
//console.log(`Destinos Possíveis: ${salvador} ${saoPaulo} ${rioDeJaneiro}`)
console.log(`Destinos Possíveis: ${listaDeDestinos}`)
console.log(listaDeDestinos)
listaDeDestinos.splice(1, 1)//Array.splica remove o elemento através do index do mesmo, seguindo a orientação de x-index e y- valor da lista
console.log(`Destinos Possíveis: ${listaDeDestinos}`)
console.log(listaDeDestinos)

console.log(`Vôos saindo agora:` + listaDeDestinos[1] + " e " + listaDeDestinos[0])