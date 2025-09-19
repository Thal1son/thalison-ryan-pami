let n1 = 2;
let n2 = 5;
//Pascal Case = NomeVariavel (primeira letra sempre maiuscula)
// Camel Case = nomerVariavel( primeira letra da palavra é minuscula e o restante começa com maiuscula)
//Kebab Case = nome-variavel (tnão faz diferenç ao maiusculo ou minusculo, mas tem q separar com -)
// Snake Case = nome_variavel (fds o maiusculo ou minusculo, mas tem queseparar com ' _ ')

function soma(){
    console.log ( 5 + 18 );
}

soma();
//função simples que não recebe parametros 


function SomaComParametros(v1, v2){
    let resultado = v1 + v2; 
    return resultado;
    
}

console.log (SomaComParametros(n1, n2));

