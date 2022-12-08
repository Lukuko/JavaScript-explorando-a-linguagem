//Console.log("Trabalhando com variáveis") --- está errado pois possui uma letra maiúscula("C") no lugar da letra minúscula("c").
//Exibe: "Reference Error: Console.log is not defined" junto com a linha onde o erro aconteceu.
console.log("Trabalhando com variáveis")
//JS é case sentitive

//Idade é != de idade, por causa do case sensitive
//Sempre declarar a variável, ajuda ao computador entender que deve reservar um espaço de memória para essa variável
idade2 = 29 //Isso não é uma boa prática
Idade = 30 //Isso está fora do padrão de variáveis

const idade1 = 29 //Isso é uma boa prática

//A tipagem de variável no js é automática, sendo diferenciada pela aspas e os parênteses para indicar se é texto ou não
//Sempre colocar como padrão a primeira letra como minúscula
console.log(idade)
console.log(Idade)