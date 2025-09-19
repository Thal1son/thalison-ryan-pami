//declarações de variaveis
var nome = 'João';
var idade = 25;
var estaAtivo = true;
//arrays
var numeros = [1, 2, 3, 4, 5];
var nomes = ['Ana', 'Bruno', 'Carlos'];
var misto = ['Ana', 25, 'Carlos', 30];
var misto2 = ['Ana', 25, 'Carlos', 30];
//TUplas
var pessoa = ['Maria', 30];
//Union Types
var id = 123;
id = 'ABC123';
//utilizar elas ficam assim:
var novo_usuario = {
    nome: 'Amanda',
    idade: 18
};
//função que retorna tipos
function saudacao(nome) {
    return 'Olá, ${nome}!';
}
console.log(saudacao('Leandro'));
//utilizando a interface usuario fica assim:
function exibirUsuario(usuario) {
    console.log('Nome: ${usuario.nome}');
    console.log('idade: ${usuario.idade}');
}
exibirUsuario({ nome: 'Marcos', idade: 22 });
//exemplo de uma função que retorna arrays e tem parametros opcionais
function listarNomes(nomes) {
    nomes.forEach(function (nome) { return console.log(nome); });
}
listarNomes(['Ana', 'Bruno', 'Carlos']);
