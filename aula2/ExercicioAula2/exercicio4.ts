// interface Livro
interface Livro {
  titulo: string;
  autor: string;
  anoPublicacao: number;
}

// Criando um objeto do tipo Livro
const livroExemplo: Livro = {
  titulo: 'A Jornada do Código',
  autor: 'Ana Dev',
  anoPublicacao: 2022
};

// Função que exibe as informações do livro
function exibirLivro(livro: Livro): void {
  console.log(` Título: ${livro.titulo}`);
  console.log(` Autor: ${livro.autor}`);
  console.log(` Ano de Publicação: ${livro.anoPublicacao}`);
}

// Chamando a função
exibirLivro(livroExemplo);

