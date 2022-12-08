const titulo = "Condicionais"
console.log(`Trabalhando com ${titulo}`)

const listaDeDestinos = new Array(
    `Salvador`,
    ` São Paulo`,
    ` Rio de Janeiro`,
)

const idadeComprador = 17
const estaAcompanhada = true
const temPassagemComprada = true

console.log(`Destinos Possíveis: ${listaDeDestinos}`)
if (
    idadeComprador >= 18 || estaAcompanhada == true//operador de "Ou"
    ) {//sempre utilizar os operadores com duas casas;exemplo:
    console.log("Boa viagem!")
    listaDeDestinos.splice(1, 1) //removendo item
    
}
else {
    console.log("Solicitação cancelada!")
}
console.log("Embarque: \n")
if(idadeComprador >=18 || estaAcompanhada == true && temPassagemComprada == true){
    console.log("Boa Viagem!")
}
else{
    console.log("Você não pode embarcar, procure ajuda com os funcionários.")
}

console.log(listaDeDestinos)


// console.log(idadeComprador > 18)
// console.log(idadeComprador < 18)
// console.log(idadeComprador <= 18)
// console.log(idadeComprador >= 18)
// console.log(idadeComprador == 18)

//ctrl + k + c = comentar trechos selecionados
// alt + shift + f = formata arquivo para a forma correta