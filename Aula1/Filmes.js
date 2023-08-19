class Filme{

    titulo;
    ano;
    genero;
    duracao;
    assistido;

    constructor(titulo, ano, genero, duracao, assistido){
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.duracao = duracao;
        this.assistido = assistido;
    }

    //implementando o metodo exibir infos
    exibirInfos(){
        console.log(`Titulo: ${this.titulo}, Ano: ${this.ano}, Genero: ${this.genero}, Duração: ${this.duracao}, Assistido: ${this.assistido}`);
    }

    //implementando o metodo marcar como assistido
    marcarAssistido(){
        this.assistido = true;
    }

    //implementando o metodo de avaliar filme
    avaliarFilme(nota){
        console.log(`Filme ${this.titulo} avaliado com nota ${nota}`);
    }
}
    
    let filme1 = new Filme("Vingadores", 2019, "Ação", "2h50", false);
    let filme2 = new Filme("Batman", 2008, "Ação", "2h10", false);
    let filme3 = new Filme("Star Wars", 2005, "Ação", "2h", false);

    //marcando como assistido
    filme1.marcarAssistido();
    filme2.marcarAssistido();
    filme3.marcarAssistido();
    
    //avaliando filmes
    filme1.avaliarFilme(5);
    filme2.avaliarFilme(10);
    filme3.avaliarFilme(10);
    
    //exibindo infos
    filme1.exibirInfos();
    filme2.exibirInfos();
    filme3.exibirInfos();

    
    