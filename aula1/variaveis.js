// comentario ctrl + ;
//javascript é um alinguagem fracamente tipada
// formas de declaração e documento 

var texto = "ola"; // aspas duplas, contem uma string
let texto2 = 'mundo'; // aspas simples, tambem contem uma string
const texto3 = `!`; // ; é opicional 

//const escopo global , não pode ser alterada
//let escopo de bloco, pode ser alterada
//var escopo global ou de função, pode ser alterada

console.log(texto, texto2, texto3)

// virgula concatena com espaço , enquanto o + deixa tudo junto

texto = 'hello' 
let msg = `${texto} ${texto2} ${texto3}`
//use tambem a crase junto de ${} para concatenar variaveis

console.log(msg)

//texto3 = "teste"
//exemplo acima mostra que é possivel reatribuir um novo valor a uma constante 

let numero = 34
console.log (typeof numero)//typeof mostra o tipo da variavel , fracamente tipado

let obj = { nome: "melissa", idade: 16 }
console.log(obj)
console.log ("nome da pessoa:", obj.nome,
    "| idade do meliante:", obj.idade
)
console.log(typeof obj)
//obj é sempre elemento chave/valor 

let arr = ['melissa', 'p.', 't.', 'santos']
console.log(arr[0], arr[3])
console.log(typeof arr)
