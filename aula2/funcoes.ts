//declarações de variaveis

let nome: string = 'João';
let idade: number = 25;
let estaAtivo: boolean = true;

//arrays
let numeros: number[] = [1, 2, 3, 4, 5];
let nomes: string [] = ['Ana', 'Bruno', 'Carlos'];
let misto: (string | number) [] = ['Ana', 25, 'Carlos', 30];
let misto2: Array<string | number> = ['Ana', 25, 'Carlos', 30];

//TUplas
let pessoa: [string, number] = ['Maria', 30];

//Union Types
let id: number | string = 123;
id = 'ABC123';

//Interfaces - são usadas para redefinir estrutura de objetos
interface Usuario {
    nome: string;
    idade: number;
    email?: string;
}

//utilizar elas ficam assim:
let novo_usuario: Usuario = {
    nome: 'Amanda',
    idade: 18
};

//função que retorna tipos
function saudacao (nome: string): string {
    return `Olá, ${nome}!`;
}

console.log(saudacao('Leandro'));

//Interface para objeto Usuario
interface Usuario {
    nome: string;
    idade: number;
    email?: string;
}

//utilizando a interface usuario fica assim:
function exibirUsuario(usuario: Usuario): void{
    console.log (`Nome: ${usuario.nome}`);
    console.log (`idade: ${usuario.idade}`);
}

exibirUsuario({ nome: 'Marcos', idade: 22});

//exemplo de uma função que retorna arrays e tem parametros opcionais

function listarNomes(nomes: string[]): void{
    nomes.forEach(nome => console.log (nome));
}

listarNomes (['Ana', 'Bruno', 'Carlos']);