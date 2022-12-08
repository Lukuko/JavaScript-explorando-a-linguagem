const titulo = "Laços de repetição"
console.log(`Trabalhando com ${titulo}`)

const listaDeDestinos = new Array(
    `São Paulo`,
    `Rio de Janeiro`,
    `Salvador`
)

const idadeComprador = 17
const estaAcompanhada = false
let temPassagemComprada = true
const destino = "Salvador"

console.log(`Destinos Possíveis: ${listaDeDestinos}`)
const podeComprar = idadeComprador >= 18 || estaAcompanhada == true

let contador = 0
let destinoExiste = false
for(let i = 0; i < 3 ; i ++){ //++, += ,variável + 1 é a mesma coisa
    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true
    }
    //contador += 1
}
// while (contador < 3) {
    
//     if (listaDeDestinos[contador] == destino) {
//         destinoExiste = true
//         break
//     }
//     contador += 1
// }

