const prompt = require("prompt-sync")({sigint: true});	

class Filme{

    titulo;
    ano;
    genero;
    duracao;
    assistido;

    constructor(titulo, ano, genero, duracao, assistido, nota){
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.duracao = duracao;
        this.assistido = assistido;
        this.nota = nota;
    } 
    
    //criando metodo para permitir ao usuario adicionar filmes
    adicionarFilme(){
        let titulo = prompt("Digite o titulo do filme: ");
        let ano = prompt("Digite o ano do filme: ");
        let genero = prompt("Digite o genero do filme: ");
        let duracao = prompt("Digite a duração do filme: ");
        let filme = new Filme(titulo, ano, genero, duracao);
        filmes.push(filme);
    }

    //criando metodo que permite marcar um filme ja adicionado como assistido
    marcarAssistido(){
        let titulo = prompt("Digite o titulo do filme: ");
        for(let i = 0; i < filmes.length; i++){
            if(filmes[i].titulo == titulo){
                filmes[i].assistido = true;
                console.log("Filme marcado como assistido!")
            }
        }
    }

    //criando metodo que permite avaliar um filme
    avaliarFilme(){
        let titulo = prompt("Digite o titulo do filme: ");
        let nota = prompt("Digite a nota do filme: ");
        for(let i = 0; i < filmes.length; i++){
            if(filmes[i].titulo == titulo){
                filmes[i].nota = nota;
                console.log("Filme avaliado com nota " + filmes[i].nota);
            }
        }
    }

    //criando metodo que permite exibir o array de filmes
    exibirFilmes(){
        for(let i = 0; i < filmes.length; i++){
            console.log(filmes[i]);
        }
    }

    //criando metodo que permite encerrar o programa
    encerrarPrograma(){
        console.log("Programa encerrado!");
    }

}

    //criando um array dinamico para filmes
    let filmes = [];

    //criando um objeto para o menu
    let menu = new Filme();

    //criando um objeto para o filme
    let filme = new Filme();

    //criando variavel para receber a opção do usuario
    let opcao;

    //criando um loop para o menu
    do{

        //exibindo o menu
        console.log("Digite 1 para adicionar um filme, 2 para marcar um filme como assistido, 3 para avaliar um filme, 4 para exibir os filmes e 5 para encerrar o programa: ");
        
        //recebendo a opção do usuario
        opcao = prompt("Digite a opção desejada: ");

        //verificando a opção escolhida pelo usuario
        switch(opcao){
            case "1":
                menu.adicionarFilme();
                break;
            case "2":
                menu.marcarAssistido();
                break;
            case "3":
                menu.avaliarFilme();
                break;
            case "4":
                menu.exibirFilmes();
                break;
            case "5":
                menu.encerrarPrograma();
                break;
            default:
                console.log("Opção inválida!");
                break;
        }
    }while(opcao != "5");






//
